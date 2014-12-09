
var ccTpl = new Ext.XTemplate([
	  '<tpl for=".">',
	  		'<div ><span class="appstatemplname"><small>{subject} - {subjectDesc} </small> </span></div>',
	  '</tpl>'
]);

goCampus.views.alphabetlist = new Ext.List({
	id:'alphabetlist',
	ui:'round',
	scroll : 'vertical',
	store: alphabetsStore,
	layout : 'card',
	flex:'1',
	itemTpl: '<div >{alphabet}</div>'
});

goCampus.views.coursecataloglist = new Ext.List({
			id:'coursecatlist',
			ui:'round',
			useLoadMask:true,
			scroll : 'vertical',
			layout : 'card',
			store: 'coursecatalogstore',
			grouped: true,
			flex:'5',
			itemTpl: ccTpl,
			onItemDisclosure: function(record){
			}
});


goCampus.views.stdCourseCatalogPanel = new Ext.Panel({
		id: 'stdCourseCatalogPanel',
		layout:{
		    type:'hbox',
		    align : 'stretch'

		},
		items: [goCampus.views.coursecataloglist,goCampus.views.alphabetlist],
		
		dockedItems: [{
		  	layout:'fit',
		  	xtype: 'toolbar',
	        title: 'Courses',
			cls:'small_title',
			ui:'light'
		  }
		]
 });

function callCourseCatalogWS(alpha){ 
	
	goCampus.views.coursecataloglist.update('');
	 loadingMask = new Ext.LoadMask(Ext.getBody(), {msg:"Loading..."});
	 loadingMask.show();
		
		Ext.util.JSONP.request({
        
	         url : './jsons/coursecatalog.json',
	         //url: './JsonServlet',
	        /* params: {
	    	 format: 'jsonp',
	         callback: 'callback',
		     ws: 'CC',
			 emplid: localStorage.getItem('userid'),
			 institute : localStorage.getItem('institute'),
			 alpha : alpha,
			 career : localStorage.getItem('career'),
			 mode : 'D'
	     },*/
	      callbackKey: 'callback',
	      callback: function(result) {    
			  if(result){
				  
				//alert("result[0].searchCount"+result[0].searchCount);
				
				if(result[0].searchCount == 0){
					/*goCampus.backButton.setHandler(function(){
						var sccPanel = goCampus.views.stdCourseCatalogdetailPanel;
						goCampus.backButton.setHandler(backHome);										
			        	goCampus.views.viewport.setActiveItem(sccPanel, { type: 'slide', reverse: true });
					});*/
					 var noResultsPanel = goCampus.views.noResultsPanel;
					  goCampus.views.viewport.setActiveItem(noResultsPanel, { type: 'slide', direction: 'left' });
				}
				else{
				var stdCourseCatalogPanel = goCampus.views.stdCourseCatalogPanel;
		      	var coursecataloglist = goCampus.views.coursecataloglist;
		      	
				Ext.StoreMgr.clear('coursecatalogmodel');							
				coursecatalogstore.removeAll();							 
				coursecatalogstore.add(result);
									
				var subjectmatched = [];
			  	var subjecttemp = "";
			  	
	            for (var i = 0; i < coursecatalogstore.getCount(); i++) {
	            	if(i == 0){
	            		subjecttemp = coursecatalogstore.getAt(i).data.subject;
	            		subjectmatched.push(coursecatalogstore.getAt(i).data);
	            		
	            	}
	                 if (coursecatalogstore.getAt(i).data.subject == subjecttemp) {}
	                 else {
	                	 subjecttemp = coursecatalogstore.getAt(i).data.subject;
	                	 subjectmatched.push(coursecatalogstore.getAt(i).data);
	                	 
	                 }
	            }
	            
	            Ext.StoreMgr.clear('coursecatalogmodel');							
	            coursecatalogstore.removeAll();
	            coursecatalogstore.add(subjectmatched);	
	            //coursecataloglist.refresh();
	            coursecataloglist.bindStore(coursecatalogstore);							
			  	
				//coursecataloglist.doComponentLayout();
				//stdCourseCatalogPanel.doLayout();

				goCampus.views.viewport.setActiveItem(stdCourseCatalogPanel, { type: 'slide', direction: 'left' });
	            
				
	      	   	coursecataloglist.addListener('itemTap', function(list, index) {
	      	   	//alert("coursecatalogstore.getCount()"+coursecatalogstore.getCount());
	      		   		var sublist = [];
					    var record = list.store.getAt(index);
	  					var subject = record.get('subject');
	  					
	  					for (var i = 0; i < result.length ; i++){
	  						
	  						if(result[i].data.subject == subject){
	  							sublist.push(result[i].data);
	  						}
	  						
	  					}
						var backBtn = goCampus.backButton; 
						backBtn.setHandler(function(){
							var backBtn = goCampus.backButton;
							backBtn.setHandler(function (){
								var stdCoursesPanel = goCampus.views.stdCoursesPanel;
								goCampus.backButton.setHandler(backHome);
								goCampus.views.viewport.setActiveItem(stdCoursesPanel, { type: 'slide', reverse: true });
								
							});										
				        	goCampus.views.viewport.setActiveItem(stdCourseCatalogPanel, { type: 'slide', reverse: true });
						});
						
						var sccdetailpanel = goCampus.views.stdCourseCatalogdetailPanel;
						var toolbar = Ext.getCmp('coursedetailtoolbar');
						toolbar.setTitle(subject);									 
						sccdetailpanel.update('');
						sccdetailpanel.update(coursecatalogTpl.applyTemplate(sublist));
			
						var coursedetailedPanel = goCampus.views.stdCourseCatalogdetailPanel;
						goCampus.views.viewport.setActiveItem(coursedetailedPanel, { type: 'slide', direction: 'left' });
				
				});	
	      	   	  /*var backBtn = goCampus.backButton; 
		      	  backBtn.setHandler(function(){
		      		    var backBtn = goCampus.backButton; 
						backBtn.setHandler(function (){
							var stdCoursesPanel = goCampus.views.stdCoursesPanel;
							goCampus.backButton.setHandler(backHome);
							goCampus.views.viewport.setActiveItem(stdCoursesPanel, { type: 'slide', reverse: true });
							
						});										
			        	goCampus.views.viewport.setActiveItem(stdCourseCatalogPanel, { type: 'slide', reverse: true });
				  });*/
			  }
			  }
			  else{
			  	alert("Error. Server not responding");
			  }                                                                
	       loadingMask.hide();
	      }
	  });
		
		var alphabetlist = goCampus.views.alphabetlist;
      	alphabetlist.addListener('itemTap', function(list, index) {
      		var alpha = list.store.getAt(index).get('alphabet');
      		callCourseCatalogWS(alpha);
      	});	
}