goCampus.views.transcriptPanel = new Ext.Panel({

   scroll: 'both',
   layout: {
   type: 'vbox',
   pack: 'stretch'
   },
   items: [
		   {
		   html:''},
	   {
	   xtype: 'button',
	   text: 'Launch unofficial transcript',
	   handler: function() {
	   if (!this.popup) {
	   this.popup = new Ext.Panel({
					  floating: true,
					  scrollable : true,
		   			  //scroll: 'vertical',
					  modal: true,
					  centered: true,
					  //width: 613,
					  height: '80%',
					  styleHtmlContent: true,
					  html: '<center><embed src="jsons/SF0019.pdf" TYPE="application/x-pdf" width="100%" height="100%"</embed></center>',
					  dockedItems: [{
						  	layout:'fit',
							id: 'Transcript',
						  	xtype: 'toolbar',
						  	title: 'Transcript',
							cls:'small_title',
							ui:'light'
						  }] 
					  });
	   }
	   this.popup.show('pop');
	   }
	 }]
});

/*goCampus.views.transcriptPanel = new Ext.Panel({
      id: 'transcriptReport',           
      layout : 'fit',
      scroll : 'both',
	  styleHtmlContent: true,
	  html : '<embed type="application/pdf" width="100%" height="100%" src="/jsons/SF0019.pdf" />',
      dockedItems: [{
			  	layout:'fit',
				id: 'Transcript',
			  	xtype: 'toolbar',
			  	title: 'Transcript',
				cls:'small_title',
				ui:'light'
			  }] 
	  
});*/


function callTranscriptWS(){
	loadingMask = new Ext.LoadMask(Ext.getBody(), {msg:"Loading..."});
	loadingMask.show();
	Ext.util.JSONP.request({
		 	url: './jsons/degreereport.json',
	        /*params: {
	           format: 'json',
	           callback: 'callback',
			   ws: 'UT',
			   un:  localStorage.getItem('operid'),
			   pwd: localStorage.getItem('password'),
			   emplid: localStorage.getItem('userid'),
			   institute: localStorage.getItem('institute')
	       },*/
	        method: 'GET', 
	        callbackKey: 'callback',
	        callback: function(result) {    
		  if(result){
			 
			  var transcriptPanel = goCampus.views.transcriptPanel;
			  goCampus.views.viewport.setActiveItem(transcriptPanel, { type: 'slide', direction: 'left' });
			  //callTranscriptPanel();
			  
			  //window.open(result[0].encodedpdf, '_blank', 'fullscreen=yes');		  
		  }else{
		  	alert("Error. Server not responding");
		  }                                                                
	      loadingMask.hide();
	      }
	});
}

function callTranscriptPanel(){
	loadingMask = new Ext.LoadMask(Ext.getBody(), {msg:"Loading..."});
	loadingMask.show();
	Ext.Ajax.request({
	    url : './jsons/SF0019.pdf',
	    success: function(result, request) {
	    	var transcriptPanel = goCampus.views.transcriptPanel;
	    	var backBtn = goCampus.backButton; 
			backBtn.setHandler(function(){
				backBtn.setHandler(backHome);
				var stdCoursesPanel = goCampus.views.stdCoursesPanel;
				goCampus.views.viewport.setActiveItem(stdCoursesPanel, { type: 'slide', reverse: true });
			});
			transcriptPanel.update(result.responseText);
			goCampus.views.viewport.setActiveItem(transcriptPanel, { type: 'slide', direction: 'left' });
        },
        failure: function (result, request) {
        	alert("Error. Server not responding");
        }
	});
	loadingMask.hide();
}


