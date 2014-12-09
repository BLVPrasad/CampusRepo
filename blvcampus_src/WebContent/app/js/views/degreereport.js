/*goCampus.views.degreeReportPanel = new Ext.Panel({

   scroll: 'vertical',
   layout: {
   type: 'vbox',
   pack: 'stretch'
   },
   items: [
		   {
		   html:''},
	   {
	   xtype: 'button',
	   text: 'Launch Degree report',
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
					  html: '<center><embed src="jsons/SF0019.html"  "</embed></center>',
					  dockedItems: [{
									dock: 'top',
									xtype: 'toolbar',
									title: 'Degree Report'
								}]
					  });
	   }
	   this.popup.show('pop');
	   }
	 }]
});

*/


goCampus.views.degreeReportPanel = new Ext.Panel({
    scroll : 'both',
	dockedItems: [{
    	xtype: 'toolbar',
    	id: 'degreereporttoolbar',
		layout:'fit',
		title: 'Degree Report',
		cls:'small_title',
	    ui:'light'
	}]
});


function callDegreeReportWS(){
	loadingMask = new Ext.LoadMask(Ext.getBody(), {msg:"Loading..."});
	loadingMask.show();
	Ext.util.JSONP.request({
		 url: './jsons/degreereport.json',
          /*  params: {
               format: 'json',
               callback: 'callback',
			   ws: 'DR',
			   un:  localStorage.getItem('operid'),
			   pwd: localStorage.getItem('password'),
			   emplid: localStorage.getItem('userid'),
			   institute: localStorage.getItem('institute'),
			   transType: 'ADV'
			   
           },*/
            method: 'GET', 
            callbackKey: 'callback',
            callback: function(result) {    
		  if(result){
			  //callDRPanel();
			  
			  window.open(result[0].decodedHtml, '_blank', 'fullscreen=yes');
		  }else{
		  	alert("Error. Server not responding");
		  }                                                                
          loadingMask.hide();
          }
	});
}

function callDRPanel(){
	loadingMask = new Ext.LoadMask(Ext.getBody(), {msg:"Loading..."});
	loadingMask.show();
	Ext.Ajax.request({
	    url : './jsons/SF0019.html',
	    success: function(result, request) {
	    	var drPanel = goCampus.views.degreeReportPanel;
	    	var backBtn = goCampus.backButton; 
			backBtn.setHandler(function(){
				backBtn.setHandler(backHome);
				var stdCoursesPanel = goCampus.views.stdCoursesPanel;
				goCampus.views.viewport.setActiveItem(stdCoursesPanel, { type: 'slide', reverse: true });
			});
	    	drPanel.update(result.responseText);
			goCampus.views.viewport.setActiveItem(drPanel, { type: 'slide', direction: 'left' });
        },
        failure: function (result, request) {
        	alert("Error. Server not responding");
        }
	});
	loadingMask.hide();
}


