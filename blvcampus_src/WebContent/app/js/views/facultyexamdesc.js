goCampus.views.facultyexamdesc = new Ext.Panel({
     id: 'facultyexamdesc',           
     layout : 'fit',
     scroll : 'vertical',
     items: [{
	        title: 'Login',
	        xtype: 'form',
		     items : [{
			    	xtype : 'fieldset',
					ui: 'round',
					width: '70%',
					defaults: {
			           labelAlign: 'left',
			           labelWidth: '45%'
					},
				    items : [{
				    	xtype: 'selectfield',
				    	name:'inst',
				        id: 'facinstitute',
				        label: 'Institution',
				        store : institutestore	
					},
			        {
			            xtype: 'selectfield',
			            name:'carr',
				        id: 'faccareer',
				        label: 'Aca. Career',
				        store : careerstore	
				        
				    },
				    {
			            xtype: 'selectfield',
			            name:'ter',
				        id: 'facterm',
				        label: 'Term',
				        store : facultytermstore	
				        
				    }]
		     	},
		     	{
					xtype :'button',
			        ui : 'round',
			        name: 'getexams',
			        text : 'Get Exams',
			        cls : 'buttonCls',
			        margin: '0% 70%',
			        align :'center',
			        handler: function() {
			        	var institute = Ext.getCmp('facinstitute').getValue();
			        	var career = Ext.getCmp('faccareer').getValue();
			        	var term = Ext.getCmp('facterm').getValue();
			        	 
    					var facultyExamContainer = goCampus.views.facultyExamContainer;
                        goCampus.views.facultyexamschedule.update('');                          		                                                                                     
                        facultyexamschdlWS(institute,career,term);
                        goCampus.views.viewport.setActiveItem(facultyExamContainer, { type: 'slide', direction: 'left' });

			        	
 						var backBtn = goCampus.backButton; 
						backBtn.setHandler(function(){
							var  facultyexamdesc = goCampus.views.facultyexamdesc;
							backBtn.setHandler(backHome);										
				        	goCampus.views.viewport.setActiveItem(facultyexamdesc, { type: 'slide', reverse: true });
						});
			        }
			    }]
     }],
     dockedItems: [{
    	xtype: 'toolbar',
    	id: 'facultyexamDetails',
 		layout:'fit',
 		title: 'Exam Schedule',
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

