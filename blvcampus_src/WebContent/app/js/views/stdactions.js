goCampus.stdActionList = new Ext.List({
			id:'stdActionList',
			ui:'round',
			useLoadMask:true,
			store: 'stdactionsstore',
			itemTpl: '<div class="icon" <tpl if="icon"> style="background-image: url({icon})"</tpl> ></div>'
						+ '<span class="name">{title} <br>'
			 			+ '<span class="tertiary">{desc}</span>'
						+ '</span>',
			listeners:{
			   itemtap: function (record,index) {
				
				if(index == 0){		
					todosWS();
 				}
				else if(index == 1){
					var finduesPanel = goCampus.views.finduesPanel;
					goCampus.views.viewport.setActiveItem(finduesPanel, { type: 'slide', direction: 'left' });									
				}
				else if(index == 2){					
					
					var holdslistContainer = goCampus.views.holdslistContainer;
					var holdslist = goCampus.views.holdslist;
										
					loadingMask = new Ext.LoadMask(Ext.getBody(), {msg:"Loading..."});
					loadingMask.show();
					
					Ext.util.JSONP.request({
						
						  url: './jsons/holds.json',
                        /*  params: {
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
				}
				//goCampus.backButton.show();
				goCampus.backButton.setHandler(function(){
					var actionsPanel = goCampus.views.stdActionsPanel;
					goCampus.backButton.setHandler(backHome);										
		        	goCampus.views.viewport.setActiveItem(actionsPanel, { type: 'slide', reverse: true });
				});
			}
		}
});

goCampus.views.stdActionsPanel = new Ext.Panel({
			id: 'stdActionsPanel',
			layout: 'fit',
			items: [goCampus.stdActionList],
			dockedItems: [{
			  	layout:'fit',
				id: 'stdactions',
			  	xtype: 'toolbar',
			  	title: 'Actions',
				cls:'small_title',
				ui:'light'
			  }] 
});