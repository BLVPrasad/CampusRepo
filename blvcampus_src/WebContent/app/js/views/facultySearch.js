goCampus.views.facSearch =  new Ext.Panel({
    id: 'facSearch',
    //layout : 'fit',
    scroll : 'vertical',
    items: [{
	        title: 'Search',
	        xtype: 'form',
	        id :'form1',
	        name :'form1',
	        scroll : 'vertical',
		     items : [{
			    	xtype : 'fieldset',
					ui: 'round',
					//width: '70%',
					defaults: {
			           //required: true,
			           labelAlign: 'left',
			           labelWidth: '45%'
					},
				    items : [{
				    	xtype: 'textfield',
				        id: 'fname',
				        //name : 'fname',
				        label: 'First Name',
				        useClearIcon: true

					},
			        {
			            xtype: 'textfield',
				        id: 'lname',
				        //name : 'lname',
				        label: 'Last Name',
				        useClearIcon: true

				    },
				    {
			            xtype: 'textfield',
				        id: 'fid',
				        //name :'fid',
				        label: 'Id',
				        useClearIcon: true

				    },
				    {
			            xtype: 'textfield',
				        id: 'campusid',
				        //name : 'campusid',
				        label: 'Campus Id',
				        useClearIcon: true

				    }
				  
				    ]
		     	},
		     	{
					xtype :'button',
			        ui : 'round',
			        text : 'Search',
			        //id: 'fsSearchBtn',
			        //name: 'fsSearchBtn',
			        cls : 'buttonCls',
			        margin: '0% 90%',
			        align :'center',
			        handler : function(){
			        	var fname = Ext.getCmp('fname').getValue();
			        	var lname = Ext.getCmp('lname').getValue();
			        	var fid = Ext.getCmp('fid').getValue();
			        	var cid = Ext.getCmp('campusid').getValue();
			        	
			        	if(fname=='' && lname=='' && fid=='' && cid=='' )
							Ext.Msg.alert("Please enter the Any one field");
			        	else
			        	{
			        	callfacSearchWS(fname, lname, fid, cid);
			        	
			        	}
			        }
			    }]
    }],
    dockedItems: [{
    	xtype: 'toolbar',
    	id: 'facSearchtoolbar',
 		layout:'fit',
 		title: 'Faculty Search',
 		cls:'small_title',
 	    ui:'light'
 	}]
  
});


function callfacSearchWS(fname, lname, fid, cid){
		
	loadingMask = new Ext.LoadMask(Ext.getBody(), {msg:"Loading..."});
	loadingMask.show();
	
	Ext.util.JSONP.request({
            url: './JsonServlet',
            params: {
               callback: 'callback',
 			   ws: 'FSR',
 			   emplid: localStorage.getItem('userid'),
 			   fname : fname,
 			   lname : lname,
 			   fid : fid,
 			   cid : cid
			},
	        method: 'GET', 
            callbackKey: 'callback',
            callback: function(result) {    
		  if(result){
			  //alert(result[0].descr1002);
			  var backBtn = goCampus.backButton; 
				backBtn.setHandler(function(){
					 var facSearch = goCampus.views.facSearch;		
					 backBtn.setHandler(backHome);										
		        	 goCampus.views.viewport.setActiveItem(facSearch, { type: 'slide', reverse: true });
			   });
			  
			  		  
			  
			  if(result[0].descr1002 == "Search result zero rows" || result[0].descr1002 == "No Faculty Found" || result[0].descr1002 == "At least one key field must be entered."){
				  loadingMask.hide();
				 //alert("result[0].descr1002"+result[0].descr1002);
				  var errorPanel = goCampus.views.errorPanel;
				  goCampus.views.viewport.setActiveItem(errorPanel, { type: 'slide', direction: 'left' });
			  }
			/*  else if(result[0].descr1002 == "No Faculty Found"){
				  alert("result[0].descr1002"+result[0].descr1002);
				  loadingMask.hide();
				  var errorPanel = goCampus.views.errorPanel;
				  goCampus.views.viewport.setActiveItem(errorPanel, { type: 'slide', direction: 'left' });
			  }  */
			  else {
				  //alert("else");
				  var facuSearchlist = goCampus.views.facuSearchlist;
				  var facuSearchListContainer = goCampus.views.facuSearchListContainer;					
				  
				  Ext.StoreMgr.clear('facusearchmodel');							
				  facusearchStore.removeAll();	
				  
				  facusearchStore.add(result);
				  
				  facuSearchlist.bindStore(facusearchStore);	
				  
				  Ext.StoreMgr.clear('facusearchtermmodel');							
				  facusearchtermStore.removeAll();	
				  
				  for(var i = 0; i < result.length; i++){
					  facusearchtermStore.add(result[i].data.term);
				  }
				  
				  var matched = [];
		            for (var i = 0; i < facusearchtermStore.getCount(); i++) {
		                if (facusearchtermStore.getAt(i).data.term.match(facusearchtermStore.getAt(0).data.term)) matched.push(facusearchtermStore.getAt(i).data);               
		            }
		            
		            var unique = uniquefn(matched);
		            function uniquefn(matched) {
			            var newArr = [];
			            var origLen = matched.length;
			            var found,x, y;
			            for ( x = 0; x < origLen; x++ ) {
				            found = undefined;
				            for ( y = 0; y < newArr.length; y++ ) {
					            if ( matched[x].value === newArr[y].value ) {
					            	found = true;
					            	break;
					            }
				            }
				            if ( !found) newArr.push( matched[x] );
				            }
			            return newArr;
		            }
		            
		            Ext.StoreMgr.clear('facusearchtermmodel');							
		            facusearchtermStore.removeAll();
		            facusearchtermStore.add(unique);
	
	
				  facuSearchListContainer.add(facuSearchlist);		
				  facuSearchlist.doComponentLayout();
				  facuSearchListContainer.doLayout();
				  
				  var facSearchDetails = goCampus.views.facuSearchListContainer;
				  goCampus.views.viewport.setActiveItem(facSearchDetails, { type: 'slide', direction: 'left' });
		        	
				  
					facuSearchlist.addListener('itemTap', function(list, index) {
							var backBtn = goCampus.backButton; 
							backBtn.setHandler(function(){
								 var facuSearchListContainer = goCampus.views.facuSearchListContainer;		
								 goCampus.views.viewport.setActiveItem(facuSearchListContainer, { type: 'slide', reverse: true });
								 backBtn.setHandler(function(){
									 var facSearch = goCampus.views.facSearch;		
									 backBtn.setHandler(backHome);										
						        	 goCampus.views.viewport.setActiveItem(facSearch, { type: 'slide', reverse: true });
								 });
					        	
							});
						
							var record = list.store.getAt(index);
		  					var name = record.get('name');
							var facuSearchPanel = goCampus.views.facuSearchPanel;
							var toolbar = Ext.getCmp('facul_details');
							toolbar.setTitle(name);
							var searchTerm = Ext.getCmp('facusearchterm').getValue();
							facuSearchPanel.update('');
							
							var matched = [];
				            for (var i = 0; i < record.get('innerData').length; i++) {
				                if (record.get('innerData')[i].sterm == searchTerm) matched.push(record.get('innerData')[i]);               
				            }
				            
							facuSearchPanel.update(facSearchDetailedTpl.applyTemplate(matched));
							goCampus.views.viewport.setActiveItem(facuSearchPanel, { type: 'slide', direction: 'left' });								
					}); 
					Ext.getCmp('facusearchterm').setValue(facusearchtermStore.getAt(0).data.term);
			  }
		  }	 
		  
		  else{
		  	alert("Error. Server not responding");
		  }                                                                
          loadingMask.hide();
          }
	});
}
