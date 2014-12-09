goCampus.views.studentexamdesc = new Ext.Panel({
     id: 'studentexamdesc',           
     //layout : 'fit',
     scroll : 'vertical',
     items: [{
	        xtype: 'form',
	        title: 'Login',
	        id: 'stdexamForm',
	        scroll: 'vertical',
		     items : [{
			    	xtype : 'fieldset',
					ui: 'round',
					//width: '70%',
					defaults: {
			           labelAlign: 'left',
			           labelWidth: '45%'
					},
				    items : [{
				    	xtype: 'selectfield',
				        id: 'stdinstitute',
				        label: 'Institution',
				        store : institutestore	
					},
			        {
			            xtype: 'selectfield',
				        id: 'stdccareer',
				        label: 'Acad. Career',
				        store : careerstore	
				        
				    },
				    {
			            xtype: 'selectfield',
				        id: 'stdterm',
				        label: 'Term',
				        store : facultytermstore	
				        
				    }]
		     	},
		     	{
					xtype :'button',
			        ui : 'round',
			        name: 'submit',
			        text : 'Get Classes',
			        cls : 'buttonCls',
			        margin: '0% 70%',
			        align :'center',
			        handler: function() {
			        	var institute = Ext.getCmp('stdinstitute').getValue();
			        	var career = Ext.getCmp('stdcareer').getValue();
			        	var term = Ext.getCmp('stdterm').getValue();
			        	 
    					var studentExamContainer = goCampus.views.studentExamContainer;
                        goCampus.views.studentexamschedule.update('');                          		                                                                                     
                        studentexamschdlWS(institute,career,term);
                        goCampus.views.viewport.setActiveItem(studentExamContainer, { type: 'slide', direction: 'left' });

			        	
 						var backBtn = goCampus.backButton; 
						backBtn.setHandler(function(){
							var  studentexamdesc = goCampus.views.studentexamdesc;
							backBtn.setHandler(backHome);										
				        	goCampus.views.viewport.setActiveItem(studentexamdesc, { type: 'slide', reverse: true });
						});
			        }
			    }]
     }],
     dockedItems: [{
    	xtype: 'toolbar',
    	id: 'facultyexamDetails',
 		layout:'fit',
 		title: 'Faculty Exam Details',
 		cls:'small_title',
 	    ui:'light'
 	}]
});


function getFacExamDescrWS(){
	loadingMask = new Ext.LoadMask(Ext.getBody(), {msg:"Loading..."});
	loadingMask.show();
	Ext.util.JSONP.request({
		
        url: './JsonServlet',
        params: {
        	format: 'json',
        	callback: 'callback',
			ws: 'FD',
			emplid: localStorage.getItem('userid')			 	 
        },
       
        method: 'GET', 
        callbackKey: 'callback',
        callback: function(result) {  
		  if(result){
			  	Ext.StoreMgr.clear('institute');							
				institutestore.removeAll();							 
				institutestore.add(result[0].institute);
				
				Ext.StoreMgr.clear('career');							
				careerstore.removeAll();							 
				careerstore.add(result[0].career);
				
				Ext.StoreMgr.clear('facuterm');							
			  	facultytermstore.removeAll();							 
			  	facultytermstore.add(result[0].term);
				
		  }else{
		  	alert("Error. Server not responding");
			
		  }                                                                
		  loadingMask.hide();
        }
    });
}

