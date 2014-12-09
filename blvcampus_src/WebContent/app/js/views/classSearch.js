
goCampus.views.searchClasses = new Ext.Panel({
    id: 'searchclasses',           
    //layout : 'fit',
    scroll : 'vertical',
    items: [{
	        xtype: 'form',
	        title: 'Search classes',
	        id: 'searchcls',
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
				        id: 'searchinstitute',
				        label: 'Institution',
				        //store : institutestore
				        options: [
				                  {text: 'Peoplesoft University Test', value: 'PSUNV' }
				        	     ]
					},
					{
			            xtype: 'selectfield',
				        id: 'csterm',
				        label: 'Term',
				        store : termstore
				    },
				    {
			            xtype: 'textfield',
			            id: 'clssubject',
			            label: 'Subject',
			            showClear: true,
			            required: true,
			            useClearIcon: true
			        },
				    {
			            xtype: 'selectfield',
				        id: 'searchcareer',
				        label: 'Course Career',
				        options: [
				                  {text: 'Under Graduate', value: 'UGRD' },
	        	                  {text: 'Graduate', value: 'GRD'}
				        	     ]
				    },
				   ]
		     },
			 	
			 	{
					xtype :'button',
			        ui : 'round',
			        //name: 'submit',
			        text : 'Get Classes',
			        cls : 'buttonCls',
			        margin: '0% 70%',
			        align :'center',
			        handler: function() {
			        	
			        	var ins = localStorage.getItem('institute');
			        	var ter = localStorage.getItem('term');
			        	csterm = Ext.getCmp('csterm').getValue();
						subject = Ext.getCmp('clssubject').getValue();
						
						if(subject=='')
							Ext.Msg.alert("Please enter the Subject");
						else
			        	callClassSearchWS(csterm,subject );
			        	
						var backBtn = goCampus.backButton; 
						backBtn.setHandler(function(){
							var  searchClasses = goCampus.views.searchClasses;
							backBtn.setHandler(function (){
								var stdClassesPanel = goCampus.views.stdClassesPanel;
								goCampus.backButton.setHandler(backHome);
								goCampus.views.viewport.setActiveItem(stdClassesPanel, { type: 'slide', reverse: true });
								
							});	
							goCampus.views.viewport.setActiveItem(searchClasses, { type: 'slide', reverse: true });
						});
			        }
			 	}]
    }],
    dockedItems: [{
    	xtype: 'toolbar',
    	id: 'searchclass',
		layout:'fit',
		title: 'Search Classes',
		cls:'small_title',
	    ui:'light'
	}]
});


function callClassSearchWS(csterm,subject ){
	
	loadingMask = new Ext.LoadMask(Ext.getBody(), {msg:"Loading..."});
	loadingMask.show();	
	
	
	Ext.util.JSONP.request({
		 //url: './JsonServlet',
		   url: './jsons/classsearch.json',
	      /* params: {
	    	 format: 'jsonp',
	         callback: 'callback',
		     ws: 'CS',
		     un: localStorage.getItem('operid'),
			 pwd: localStorage.getItem('password'),
			 emplid: localStorage.getItem('userid'),
			 institute : localStorage.getItem('institute'),
			 career : localStorage.getItem('career'),
			 term : csterm,
			 subject : subject
			 
	     },*/
	      callbackKey: 'callback',
	      
		 callback: function(result) {    
			  if(result){
				  	//alert("result"+result);
				  	var classSearchlist = goCampus.views.classSearchlist
				  	var classSearchPanel = goCampus.views.classSearchPanel;
				  	
				  	Ext.StoreMgr.clear('classsearchmodel');							
					classsearchstore.removeAll();							 
					classsearchstore.add(result);
					if(classsearchstore.getCount()==1){
						var errorPanel = goCampus.views.errorPanel;
						goCampus.views.viewport.setActiveItem(errorPanel, { type: 'slide', direction: 'left' });
					}
					else{
				  	var coursematched = [];
				  	var coursetemp = "";
		            for (var i = 0; i < classsearchstore.getCount(); i++) {
		            	if(i == 0){
		            		coursetemp = classsearchstore.getAt(i).data.CRSE_ID_LOVDescr;
		            		coursematched.push(classsearchstore.getAt(i).data);
		            		
		            	}
		                 if (classsearchstore.getAt(i).data.CRSE_ID_LOVDescr == coursetemp) {}
		                 else {
		                	 coursetemp = classsearchstore.getAt(i).data.CRSE_ID_LOVDescr;
		                	 coursematched.push(classsearchstore.getAt(i).data);
		                	 
		                 }
		            }
		            
		            
		            Ext.StoreMgr.clear('classsearchmodel');							
					classsearchstore.removeAll();							 
					classsearchstore.add(coursematched);
					classSearchlist.bindStore(classsearchstore);							
				  	
					classSearchlist.doComponentLayout();
					classSearchPanel.doLayout();	
					
					
		      	    goCampus.views.viewport.setActiveItem(classSearchPanel, { type: 'slide', direction: 'left' });
				  	
					}	
		      	  classSearchlist.addListener('itemTap', function(list, index) {
					  
	      		   		var sublist = [];
					    var record = list.store.getAt(index);
	  					var CRSE_ID_LOVDescr = record.get('CRSE_ID_LOVDescr');
	  					
	  					for (var i = 0; i < result.length ; i++){
	  						//alert(result[i].data.CRSE_ID_LOVDescr +">" + CRSE_ID_LOVDescr);
	  						
	  						if(result[i].data.CRSE_ID_LOVDescr == CRSE_ID_LOVDescr){
	  							sublist.push(result[i].data);
	  							break;
	  						}
	  					}
						var backBtn = goCampus.backButton; 
						backBtn.setHandler(function(){
							var classSearchPanel = goCampus.views.classSearchPanel;
							backBtn.setHandler(function (){
								var searchClasses = goCampus.views.searchClasses;
								goCampus.backButton.setHandler(backHome);
								goCampus.views.viewport.setActiveItem(searchClasses, { type: 'slide', reverse: true });
							});										
				        	goCampus.views.viewport.setActiveItem(classSearchPanel, { type: 'slide', reverse: true });
						});
						
						var csdetailpanel = goCampus.views.classSearchDetailPanel
						var toolbar = Ext.getCmp('cstoolbar');
						toolbar.setTitle(CRSE_ID_LOVDescr);									 
						csdetailpanel.update('');
						csdetailpanel.update(classSearchTpl.applyTemplate(sublist));
			
						//var detailpanel = goCampus.views.classSearchDetailPanel;
						goCampus.views.viewport.setActiveItem(csdetailpanel, { type: 'slide', direction: 'left' });
				
				});	
		  }else{
		  	alert("Error. Server not responding");
		  }                                                                
          loadingMask.hide();
          }
	});
}