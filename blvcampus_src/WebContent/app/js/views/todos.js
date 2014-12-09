var todosTpl = new Ext.XTemplate([
					//'<tpl for=".">',
						//'<tpl if="descr">', 
						'<div><span class="name"> {descr} </span></div>'
						//'<tpl>',
					//'</tpl>'
                 ]);




goCampus.views.todolist = new Ext.List({
	id:'todolist',
	ui:'round',
	layout : 'fit',
	useLoadMask:true,
	store: 'todosstore',		
	autoLoad: true,	
	itemTpl: todosTpl,
	onItemDisclosure: function(){		
	}
	
});


goCampus.views.todolistContainer = new Ext.Panel({
	id: 'todolistContainer',
	layout: 'fit',
	//html: 'This Main List Container',
	items: [goCampus.views.todolist],
	dockedItems: [{
	  	layout:'fit',
	  	xtype: 'toolbar',
        title: 'To Do List ',
		cls:'small_title',
		ui:'light'
	  }]            
});

function todosWS(){
	var todolistContainer = goCampus.views.todolistContainer;
	var todolist = goCampus.views.todolist;
	
	
	loadingMask = new Ext.LoadMask(Ext.getBody(), {msg:"Loading..."});
	loadingMask.show();
	Ext.util.JSONP.request({
                              //url: './JsonServlet',
							  url: './jsons/todos.json',
                              /*params: {
                                 format: 'json',
                                 callback: 'callback',
    							 ws: 'T',
    							 emplid: localStorage.getItem('userid')
                             },*/
                              //method: 'GET', 
                              callbackKey: 'callback',
                              callback: function(result) { 
                            	  
    						  if(result){
    							   
    							  	Ext.StoreMgr.clear('todos');							
    							  	todosstore.removeAll();	
    							  	//for(var i=0; i<result.length;i++)
    							    todosstore.add(result);
    							    
    							    todolist.bindStore(todosstore);
    							    
    							    todolist.doComponentLayout();
    							    todolistContainer.doLayout();					
    								
    							    todolist.addListener('itemTap', function(list, index) {
    							    	
    							    		var backBtn = goCampus.backButton; 
    										backBtn.setHandler(function(){
    											backBtn.setHandler(backHome);										
    								        	goCampus.views.viewport.setActiveItem(todolistContainer, { type: 'slide', reverse: true });
    										});
    									
    										
    										
    										var record = list.store.getAt(index);
    					  					var ccDetails = record.get('descr');
    					  					
    					  					var todoItemPanel = goCampus.views.todoItemPanel;
    										var toolbar = Ext.getCmp('todoDetailToolbar');
    										
//    										Ext.StoreMgr.clear('todoitems');							
//    										todoitemstore.removeAll();
//    										todoitemstore.add(record.data.vardata);
//    										alert(record.data.vardata[0]);
    										
    										toolbar.setTitle(ccDetails);									 
    										todoItemPanel.update('');
    										todoItemPanel.update(tododetailTpl.applyTemplate(record));
    										//tododetailTpl.applyTemplate(record.data.vardata);
    										goCampus.views.viewport.setActiveItem(todoItemPanel, { type: 'slide', direction: 'left' });								
    								});
    							    
    							    
    							    
    							   // goCampus.views.todosPanel.update(todosTpl.applyTemplate(result));
    						  }else{
    						  	alert("Error. Server not responding");
    						  }                                                                
                              loadingMask.hide();
                              }
                             
                          });
					goCampus.views.viewport.setActiveItem(todolistContainer, { type: 'slide', direction: 'left' });
}