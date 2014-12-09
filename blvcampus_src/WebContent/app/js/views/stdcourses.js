goCampus.stdCourseList = new Ext.List({
		id:'stdCourseList',
		ui:'round',
		useLoadMask:true,
		store: 'stdcourses',
		itemTpl: '<div class="icon" <tpl if="icon"> style="background-image: url({icon})"</tpl> ></div>'
					+ '<span class="name">{title} <br>'
		 			+ '<span class="tertiary">{desc}</span>'
					+ '</span>',
		listeners:{
		   itemtap: function (record,index) {
			   if(index == 0){	
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
				   callCourseCatalogWS("A");
			   }
			   else if(index == 1){
				   	callAppStatusWS();
																					
			   }
			   else if(index == 2){
				   callDegreeReportWS();
				   
				   
			   }
			   else if(index == 3){
				   	callapplyGraduationWS();
					var applyGraduation = goCampus.views.applyGraduation;
					goCampus.views.viewport.setActiveItem(applyGraduation, { type: 'slide', direction: 'left' });
			   }
			   else if(index == 4){
				    callTranscriptWS();
			   }
			   else if(index == 5){
				    callEnrollAppointmentWS();
					var enrolAppointment = goCampus.views.enrolAppointment;
					goCampus.views.viewport.setActiveItem(enrolAppointment, { type: 'slide', direction: 'left' });
			   }
			   else if(index == 6){
				   	callProgramPlanWS();
					var programPlan = goCampus.views.programPlan ;
					goCampus.views.viewport.setActiveItem(programPlan, { type: 'slide', direction: 'left' });
			   }
			   
			   goCampus.backButton.setHandler(function(){
					var coursesPanel = goCampus.views.stdCoursesPanel;
					goCampus.backButton.setHandler(backHome);										
		        	goCampus.views.viewport.setActiveItem(coursesPanel, { type: 'slide', reverse: true });
				});
		   }   
		}
});


goCampus.views.stdCoursesPanel = new Ext.Panel({
			id: 'stdCoursesPanel',
			layout: 'fit',
			items: [goCampus.stdCourseList],
			dockedItems: [{
			  	layout:'fit',
				id: 'stdactions',
			  	xtype: 'toolbar',
			  	title: 'Courses',
				cls:'small_title',
				ui:'light'
			  }] 
            
        });







