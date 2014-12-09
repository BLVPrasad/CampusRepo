goCampus.views.facultydesc = new Ext.Panel({
     id: 'facultydesc',           
     // layout : 'fit',
     scroll : 'vertical',
     items: [{
	        title: 'facdesc',
	        xtype: 'form',
	        //name : 'xf',
		     items : [{
			    	xtype : 'fieldset',
					ui: 'round',
					width: '70%',
					defaults: {
			           //required: true,
			           labelAlign: 'left',
			           labelWidth: '45%'
					},
				    items : [{
				    	xtype: 'selectfield',
				    	name:'inst',
				        id: 'institution',
				        label: 'Institution',
				        store : institutestore	
					},
			        {
			            xtype: 'selectfield',
			            name:'carr',
				        id: 'academic_career',
				        label: 'Aca. Career',
				        store : careerstore	
				        
				    },
				    {
			            xtype: 'selectfield',
			            name:'ter',
				        id: 'term',
				        label: 'Term',
				        store : facultytermstore	
				        
				    }]
		     	},
		     	{
					xtype :'button',
			        ui : 'round',
			        name: 'getclasses',
			        text : 'Get Classes',
			        cls : 'buttonCls',
			        margin: '0% 70%',
			        align :'center',
			        handler: function() {
			        	var institute = Ext.getCmp('institution').getValue();
			        	var career = Ext.getCmp('academic_career').getValue();
			        	var term = Ext.getCmp('term').getValue();
			        	 
			        	var facultyContainer = goCampus.views.facultyContainer;
 						goCampus.views.facultyschedule.update('');		                                    											
 						facultyschdlWS(institute,career,term);
 						goCampus.views.viewport.setActiveItem(facultyContainer, { type: 'slide', direction: 'left' });
			        	
 						var backBtn = goCampus.backButton; 
						backBtn.setHandler(function(){
							var  facultydesc = goCampus.views.facultydesc;
							backBtn.setHandler(backHome);										
				        	goCampus.views.viewport.setActiveItem(facultydesc, { type: 'slide', reverse: true });
						});
			        }
			    }]
     }],
     dockedItems: [{
    	xtype: 'toolbar',
    	id: 'facultyexamDetails',
 		layout:'fit',
 		title: 'Class Schedule',
 		cls:'small_title',
 	    ui:'light'
 	}]
});


function getFacDescrWS(){
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
        	//alert("data.results"+data.institute);
      	 //alert("hello  !  "+ data[0].institute[0]);
		  if(result){
			    //alert("data.length"+data[0].institute.length);
			    			  
			  	Ext.StoreMgr.clear('institute');							
				institutestore.removeAll();							 
				institutestore.add(result[0].institute);
//				alert("institute count :" +institutestore.getCount());
				
				//alert(institutestore.getCount());
				/*var instmatched = [];
			  	var insttemp;
			  	for (var i = 0; i < institutestore.getCount(); i++) {
			  		//alert(institutestore.getAt(i));
	                 if (institutestore.getAt(i).data.value.match(insttemp)) {}
	                 else {
	                	 instmatched.push(institutestore.getAt(i).data);
	                	 insttemp = institutestore.getAt(i).data.value;
	                 }
	             }	  	
			  	
			  	Ext.StoreMgr.clear('institute');							
				institutestore.removeAll();							 
				institutestore.add(instmatched);*/
				
				Ext.StoreMgr.clear('career');							
				careerstore.removeAll();							 
				careerstore.add(result[0].career);
				
				//alert(careerstore.getCount());
				/*var careermatched = [];
			  	var careertemp;
			  	for (var i = 0; i < careerstore.getCount(); i++) {
			  		
	                 if (careerstore.getAt(i).data.value.match(careertemp)) {}
	                 else {
	                	 careermatched.push(careerstore.getAt(i).data);
	                	 careertemp = careerstore.getAt(i).data.value;
	                 }
	             }
			  	
			  	Ext.StoreMgr.clear('career');							
				careerstore.removeAll();							 
				careerstore.add(careermatched);*/
				
			  	Ext.StoreMgr.clear('facuterm');							
			  	facultytermstore.removeAll();							 
			  	facultytermstore.add(result[0].term);
				
				/*var termmatched = [];			  	
			  	for (var i = 0; i < termstore.getCount(); i++) {
			  		termmatched.push(termstore.getAt(i).data);	                 
	             }
			  	alert("termmatched " + termmatched.length);
				uniqueTerms = unique(termmatched,true);
				alert("uniqueTerms " + uniqueTerms.length);
			  	Ext.StoreMgr.clear('facultyterm');							
				termstore.removeAll();							 
				termstore.add(uniqueTerms);*/
			  	/*for(var i=0;i<result[0].institute.length;i++){
			    	//alert("institute :  "+ data[0].currentTerm[i].text);
			    	//institutestore.add(data[0].institute[i]);
			    	careerstore.add(result[0].carreer[i]);
			    	termstore.add(result[0].currentTerm[i]);
			    }*/
				
			
		  }else{
		  	alert("Error. Server not responding");
			
		  }                                                                
		  loadingMask.hide();
        }
    });
}

