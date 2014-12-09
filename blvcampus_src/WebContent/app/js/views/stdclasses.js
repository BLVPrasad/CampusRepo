goCampus.stdClassesList = new Ext.List({
		id:'stdClassesList',
		ui:'round',
		useLoadMask:true,
		store: 'stdclassesstore',
		itemTpl: '<div class="icon" <tpl if="icon"> style="background-image: url({icon})"</tpl> ></div>'
				+ '<span class="name">{title} <br>'
				+ '<span class="tertiary">{desc}</span>'
				+ '</span>',
		listeners:{
			   itemtap: function (record,index) {
				   if(index == 0){		     
					   callEnrollWS();
   						var enrolContainer = goCampus.views.enrolContainer;
   						goCampus.views.viewport.setActiveItem(enrolContainer, { type: 'slide', direction: 'left' });
				   }
				   else if(index == 1){
						var gradebookContainer = goCampus.views.gradebookContainer;
	   					goCampus.views.gradebook.update('');					
	   					loadingMask = new Ext.LoadMask(Ext.getBody(), {msg:"Loading..."});
	   					loadingMask.show();					
	   					//callGbookWS(termstore.getAt(0).get('value'));
	   					callGbookWS(localStorage.getItem('currTerm'));
	   			
	   					var gradebookPanel = goCampus.views.gradebook;
	   					goCampus.views.viewport.setActiveItem(gradebookContainer, { type: 'slide', direction: 'left' });																	
				   }
				   else if(index == 2){
						callStdEnrollStatusWS();
	   					var studentEnrollStatus = goCampus.views.studentEnrollStatus;
	   					goCampus.views.viewport.setActiveItem(studentEnrollStatus, { type: 'slide', direction: 'left' });
				   }
				  /* else if(index == 3){
					   callShoppingcartWS();
				   }*/
				   else if(index == 3){
					   callAdvisorWS();
					   var studentAdvisor = goCampus.views.studentAdvisor;
	   				   goCampus.views.viewport.setActiveItem(studentAdvisor, { type: 'slide', direction: 'left' });
					   
				   }
				   else if(index == 4){
					   
					   var searchClasses = goCampus.views.searchClasses;
	   				   goCampus.views.viewport.setActiveItem(searchClasses, { type: 'slide', direction: 'left' });
					   
				   }
				   goCampus.backButton.setHandler(function(){
						var classesPanel = goCampus.views.stdClassesPanel;
						goCampus.backButton.setHandler(backHome);										
			        	goCampus.views.viewport.setActiveItem(classesPanel, { type: 'slide', reverse: true });
					});
			   }   
		}
});


goCampus.views.stdClassesPanel = new Ext.Panel({
			id: 'stdClassesPanel',
			layout: 'card',
			//html: 'This Main List Container',
			items: [goCampus.stdClassesList],
			dockedItems: [{
			  	layout:'fit',
				id: 'stdclasses',
			  	xtype: 'toolbar',
			  	title: 'Classes',
				cls:'small_title',
				ui:'light'
			  }] 
            
  });