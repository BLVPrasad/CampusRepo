goCampus.logoBar = new Ext.Toolbar({
            dock: 'top',			
            width  : '100%',
            cls : 'logo'
        });



goCampus.views.login = new Ext.Panel({
			id : 'login',
		    layout : 'fit',  
		    //cardAnimation : 'slide',
		    items: [{
		        title: 'Login',
		        xtype: 'form',
		        //id: 'loginForm',
		        scroll: 'vertical',
		        items: [ goCampus.logoBar, {
				    xtype : 'fieldset',
				    ui: 'round',
				    width: '70%',
				    defaults: {
		                required: true,
		                labelAlign: 'left',
		                labelWidth: '45%'
		            },
				    items : [{
			            xtype: 'textfield',
			            id: 'user',
			            label: 'User Id',
			            showClear: true,
			            required: true,
			            useClearIcon: true
			        },
			        {
			            xtype: 'passwordfield',
				        id: 'password',
				        label: 'Password',
				        useClearIcon: false
				    }]},
				    {
				      	xtype :'button',
			            ui : 'round',
				        name: 'submit',
				        text : 'Login',
				        cls : 'buttonCls',
				        margin: '0% 90%',
				        align :'center',
				        handler: function() {
							
				        	 var userid = Ext.getCmp('user').getValue();
							 var password = Ext.getCmp('password').getValue();
							
				        	 var logoffBtn = goCampus.backButton;
				        	 
							 //alert('User Name ' + Ext.getCmp('user').getValue());
							 if (userid != '' && password != ''){
							 	 localStorage.setItem('operid', userid);
								 callUAWS(userid,password);
								 
							 }else{
							 	Ext.Msg.alert("Please enter the User Name and Password");
							 }
							 
							 
				        	 
			            }
				    }]
		      }]
		});
		
function callUAWS(username,password){
	
	loadingMask = new Ext.LoadMask(Ext.getBody(), {msg:"Loading..."});
	loadingMask.show();
	
      Ext.util.JSONP.request({
                                    
                              url: './jsons/UA.json',
                              /*params: {
                                 format: 'json',
                                 callback: 'callback',
                                           ws: 'UA',
                                           un: username,
										   pwd: password
                             },   */                          
                              method: 'GET', 
                             // callbackKey: 'callback',
                              callback: function(result) {    
                                      if(result){
                                    	  if(result != null || result != 'undefined' || result != ' '){
                                    		  Ext.StoreMgr.clear('user');							
                  							  userstore.removeAll();							 
                  							  userstore.add(result);
                  							  if(userstore.getAt(0)){
                  								  var empid = userstore.getAt(0).get('emplid');
                  								  var pwd = userstore.getAt(0).get('password');
                  								 
                  								  localStorage.setItem('userid', empid);  
                  								  localStorage.setItem('password', pwd);
	      											
	                                          	  if(username == empid && password == pwd){
	                                          		//alert("userid <" + username + ">" + "Password <" + password + ">");
	                                          		callUserRoleWS(username);
	                                          	  }else{
	                    								Ext.Msg.show({
	                    					        	     title:'Login Error',
	                    					        	     msg: 'You are not authorized to access this App. Please check your login credentials',
	                    					        	     buttons: Ext.Msg.YESNOCANCEL,
	                    					        	     //fn: processResult,
	                    					        	     animateTarget: 'elId'
	                    					        	     //icon: Ext.window.MessageBox.QUESTION
	                    					        	});
	                                          	  }
                  							  }else{
                  								Ext.Msg.show({
                  					        	     title:'Login Error',
                  					        	     msg: 'You are not authorized to access this App. Please check your login credentials',
                  					        	     buttons: Ext.Msg.YESNOCANCEL,
                  					        	     //fn: processResult,
                  					        	     animateTarget: 'elId'
                  					        	     //icon: Ext.window.MessageBox.QUESTION
                  					        	});
                                        	  }
    										  
                                    	  }
                                      }else{
                                    	  Ext.Msg.alert("Error. Server not responding");
                                      }                                                                
                              loadingMask.hide();
                              }
                          });
}		

function callUserRoleWS(username){
	loadingMask = new Ext.LoadMask(Ext.getBody(), {msg:"Loading..."});
	loadingMask.show();
	 Ext.util.JSONP.request({
                                    
                              url: './jsons/UR.json',
                              /*params: {
                                 format: 'json',
                                 callback: 'callback',
                                           ws: 'UR',
                                           oprid: username
                             },    */                         
                              method: 'GET', 
                             // callbackKey: 'callback',
                              callback: function(result) {    
                                      if(result){
                                    	  if(result != null || result != 'undefined' || result != ' '){
                                    		  //alert("<" + result + ">");
                                    		  Ext.StoreMgr.clear('userrole');							
                  							  userrolestore.removeAll();							 
                  							  userrolestore.add(result);
                  							  if(userrolestore.getAt(0)){
                  								  var role = userrolestore.getAt(0).get('role');                  								 
	                                          	  if(role != null){
	                                          		  
	                                          		  if(role == "Hexaware"){
	                                          			var mainListContainerPanel = goCampus.mainListContainer;
	                                          			var studenList = goCampus.mainList;
	                                          			
	                                          			studenList.addListener('itemTap',function(list, index){
	                                          				var record = list.store.getAt(index);
	                                          				if(record.get('id') == 1){	                                          					                       
	                                          		            callpersonalinfoWS('address');
		                                                        var  personalinfoPanel = goCampus.views.personalinfoPanel;		                                                        
		                                                        goCampus.views.viewport.setActiveItem(personalinfoPanel, { type: 'slide', direction: 'left' });
		                                    				}else if(record.get('id') == 2){
		                                    					var stdCoursesPanel = goCampus.views.stdCoursesPanel;
		                                    					goCampus.views.viewport.setActiveItem(stdCoursesPanel, { type: 'slide', direction: 'left' });
		                                    					/*callEnrollWS();
		                                    					var enrolContainer = goCampus.views.enrolContainer;
		                                    					goCampus.views.viewport.setActiveItem(enrolContainer, { type: 'slide', direction: 'left' });*/
		                                    				}else if(record.get('id') == 3){
		                                    					var stdClassesPanel = goCampus.views.stdClassesPanel;
		                                    					goCampus.views.viewport.setActiveItem(stdClassesPanel, { type: 'slide', direction: 'left' });
		                                    				}else if(record.get('id') == 4){					
		                                    					studentexamschdlWS();
		                                    					var studentExamContainer = goCampus.views.studentExamContainer;
		                                    					goCampus.views.viewport.setActiveItem(studentExamContainer, { type: 'slide', direction: 'left' });
		                                    					
		                                    				}else if(record.get('id') == 5){	
		                                    					var stdActionsPanel = goCampus.views.stdActionsPanel;
		                                    					goCampus.views.viewport.setActiveItem(stdActionsPanel, { type: 'slide', direction: 'left' });
		                                    					
		                                    					/*var gradebookContainer = goCampus.views.gradebookContainer;
		                                    					goCampus.views.gradebook.update('');					
		                                    					loadingMask = new Ext.LoadMask(Ext.getBody(), {msg:"Loading..."});
		                                    					loadingMask.show();					
		                                    					//callGbookWS(termstore.getAt(0).get('value'));
		                                    					callGbookWS(localStorage.getItem('currTerm'));
		                                    			
		                                    					var gradebookPanel = goCampus.views.gradebook;
		                                    					goCampus.views.viewport.setActiveItem(gradebookContainer, { type: 'slide', direction: 'left' });									*/
		                                    					
		                                    				}else if(record.get('id') == 6){					
		                                    					var mapPanel = goCampus.views.mapPanel;
		                                                        goCampus.views.viewport.setActiveItem(mapPanel, { type: 'slide', direction: 'left' });									
		                                    				}else if(record.get('id') == 7){	
		                                    										
		                                    					var holdslistContainer = goCampus.views.holdslistContainer;
		                                    					var holdslist = goCampus.views.holdslist;
		                                    										
		                                    					loadingMask = new Ext.LoadMask(Ext.getBody(), {msg:"Loading..."});
		                                    					loadingMask.show();
		                                    					
		                                    					Ext.util.JSONP.request({
		                                    						
		                                                              //url: './JsonServlet',
		                                                              url: './jsons/holds.json',
		                                                              /*params: {
		                                                                 format: 'json',
		                                                                 callback: 'callback',
		                                    							 ws: 'SI',
		                                    							 emplid: localStorage.getItem('userid')
		                                                             },*/
		                                                              //method: 'POST', 
		                                                              callbackKey: 'callback',
		                                                              callback: function(result) {    
		                                    						  if(result){
		                                    						  	
		                                    							Ext.StoreMgr.clear('holds');							
		                                    							holdsstore.removeAll();							 
		                                    						  	holdsstore.add(result);
		                                    							holdslist.bindStore(holdsstore);							
		                                    						  	
		                                    							holdslist.doComponentLayout();
		                                    							holdslistContainer.doLayout();					
		                                    							
		                                    							holdslist.addListener('itemTap', function(list, index) {
		                                    									var backBtn = goCampus.backButton; 
		                                    									backBtn.setHandler(function(){
		                                    										backBtn.setHandler(backHome);										
		                                    							        	goCampus.views.viewport.setActiveItem(holdslistContainer, { type: 'slide', reverse: true });
		                                    									});
		                                    								
		                                    									var record = list.store.getAt(index);
		                                    				  					var ccDetails = record.get('desc1');
		                                    									var holdsPanel = goCampus.views.holds;
		                                    									var toolbar = Ext.getCmp('holdsDetails');
		                                    									toolbar.setTitle(ccDetails);									 
		                                    									holdsPanel.update('');
		                                    									holdsPanel.update(siTpl.applyTemplate(record));
		                                    									goCampus.views.viewport.setActiveItem(holdsPanel, { type: 'slide', direction: 'left' });								
		                                    							});
		                                    						  }else{
		                                    						  	alert("Error. Server not responding");
		                                    						  }                                                                
		                                                               loadingMask.hide();
		                                                              }
		                                                          });								
		                                    					goCampus.views.viewport.setActiveItem(holdslistContainer, { type: 'slide', direction: 'left' });
		                                    				}else if(record.get('id') == 8){
		                                    					var finduesPanel = goCampus.views.finduesPanel;
		                                    					goCampus.views.viewport.setActiveItem(finduesPanel, { type: 'slide', direction: 'left' });									
		                                    				}else if(record.get('id') == 9){
		                                    					callAppStatusWS();
		                                    					var applStatus = goCampus.views.applStatus;
		                                    					goCampus.views.viewport.setActiveItem(applStatus, { type: 'slide', direction: 'left' });									
		                                    				}else if(record.get('id') == 10){
		                                    					callAdvisorWS();
		                                    					var studentAdvisor = goCampus.views.studentAdvisor;
		                                    					goCampus.views.viewport.setActiveItem(studentAdvisor, { type: 'slide', direction: 'left' });									
		                                    				}else if(record.get('id') == 11){
		                                    					var mapPanel = goCampus.views.mapPanel;
		                                                        goCampus.views.viewport.setActiveItem(mapPanel, { type: 'slide', direction: 'left' });									
		                                    				}
		                                    				goCampus.backButton.show();
	                                          				
	                                          				});	                                          			
		      	         					        	 getTermsWS();
	                                          		  }else if(role == "CS - Instructor"){
	                                          			var mainListContainerPanel = goCampus.mainListContainer;
	                                          			var facultyList = goCampus.facultyList;
	                                          			facultyList.addListener('itemTap',function(list, index){
	                                          				var record = list.store.getAt(index);
		                                          			if(record.get('id') == 1){	
		                                          				callpersonalinfoWS('address');
		                                                        var  personalinfoPanel = goCampus.views.personalinfoPanel;
		                                                        goCampus.views.viewport.setActiveItem(personalinfoPanel, { type: 'slide', direction: 'left' });
		                                    				}else if(record.get('id') == 2){
		                                    					/*var facultyContainer = goCampus.views.facultyContainer;
	                                    						goCampus.views.facultyschedule.update('');		                                    											
	                                    						facultyschdlWS();
	                                    						goCampus.views.viewport.setActiveItem(facultyContainer, { type: 'slide', direction: 'left' });*/
		                                    					getFacDescrWS();
                                                                var facultydesc = goCampus.views.facultydesc;
                                                                goCampus.views.viewport.setActiveItem(facultydesc, { type: 'slide', direction: 'left' });
		                                    				}else if(record.get('id') == 3){
		                                    					/*var facultyExamContainer = goCampus.views.facultyExamContainer;
		                                                        goCampus.views.facultyexamschedule.update('');                          		                                                                                     
		                                                        facultyexamschdlWS();
		                                                        goCampus.views.viewport.setActiveItem(facultyExamContainer, { type: 'slide', direction: 'left' });*/
		                                    					getFacExamDescrWS();
                                                                var facultyexamdesc = goCampus.views.facultyexamdesc;
                                                                goCampus.views.viewport.setActiveItem(facultyexamdesc, { type: 'slide', direction: 'left' });
		                                    				}else if(record.get('id')== 4){
		                                    					var facSearch = goCampus.views.facSearch;
		                                    					goCampus.views.viewport.setActiveItem(facSearch, { type: 'slide', direction: 'left' });
		                                    				}else if(record.get('id')== 5){
		                                    					callMyadviseeWS();
		                                    					var facultyAdvisee = goCampus.views.facultyAdvisee;
		                                    					goCampus.views.viewport.setActiveItem(facultyAdvisee, { type: 'slide', direction: 'left' });
		                                    				}else if(record.get('id') == 6){					
		                                    					todosWS();					
		                                    				}else if(record.get('id') == 7){					
		                                    					var mapPanel = goCampus.views.mapPanel;
		                                                        goCampus.views.viewport.setActiveItem(mapPanel, { type: 'slide', direction: 'left' });					
		                                    				}
		                                    				goCampus.backButton.show();
	                                          			});
	                                          			mainListContainerPanel.add(facultyList);
		      	         								 goCampus.views.viewport.setActiveItem(mainListContainerPanel, { type: 'slide', direction: 'left' });
		      	         					        	
		      	         								mainListContainerPanel.doComponentLayout();
		      	         					        	 goCampus.navigationBar.setVisible(true);
		      	         					        	 goCampus.navigationBar.doComponentLayout();
		      	         					        	 //goCampus.bottomToolbar.setVisible(true);
		      	         					        	 
		      	         					        	mainListContainerPanel.doComponentLayout();
		      	         						         //goCampus.bottomToolbar.setActiveItem(mainListContainerPanel);
		      	         						         goCampus.views.viewport.doComponentLayout();
		      	         					        	 goCampus.views.viewport.setActiveItem(mainListContainerPanel, {} ); 
	                                          		  }	                                          		
	                                          	  }
                  							  }else{
                  								//Ext.Msg.alert("You are not authorized \n to access this App");
                  								Ext.Msg.show({
                  					        	     title:'Login Error',
                  					        	     msg: 'You are not authorized to access this App. Please check your login credentials',
                  					        	     buttons: Ext.Msg.YESNOCANCEL,
                  					        	     //fn: processResult,
                  					        	     animateTarget: 'elId'
                  					        	     //icon: Ext.window.MessageBox.QUESTION
                  					        	});
                                        	  }    										  
                                    	  }
                                      }else{
                                    	  Ext.Msg.alert("Error. Server not responding");                                          
                                      }                                                          
                                      loadingMask.hide();
                              }
                          });
}		