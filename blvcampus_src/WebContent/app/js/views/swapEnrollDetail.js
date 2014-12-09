var swapEnrolDetTpl = new Ext.XTemplate([
        '<tpl for=".">',
        //'<div class="subheader"> {subject} - {catno} - {section} ({class_no})</div>',       
         		'<tpl if="msgId">',			

         		//'<div class="descr">{msgId}</div>',
         				'<div class="errorMsg"> {msgId} <br>',
         				'{msgDescr} </div>',

         		'</tpl>',
 		'</tpl>',
 		'<tpl if="length == 0">',                 
 			'<div class="errorMsg">Details are not available</div>',
 		'</tpl>'
]);

goCampus.views.swapEnrolDetailPanel = new Ext.Panel({
	id: 'swapEnrolDetPanel',           
	//layout : 'fit',
	scroll : 'vertical',
	styleHtmlContent: true,
	dockedItems: [{
	    layout:'fit',
	    xtype : 'toolbar',
	    id: 'swapenroldettoolbar',
		title : 'SWAP Enrolment Details',
		cls:'small_title',
	    ui:'light'
	}]
});

function callSwapEnrollDetail(clsno){
	loadingMask = new Ext.LoadMask(Ext.getBody(), {msg:"Loading..."});
	loadingMask.show();
	Ext.util.JSONP.request({
            url: './JsonServlet',
            params: {
               //format: 'json',
               callback: 'callback',
			   ws: 'SWAP',
			   un: localStorage.getItem('operid'),
			   pwd: localStorage.getItem('password'),
			   emplid: localStorage.getItem('userid'),
			   institute: localStorage.getItem('institute'),
			   career: localStorage.getItem('career'),
			   //term: localStorage.getItem('currterm'),
			   term : '0680',
			   clsnbr: clsno
           },
            method: 'GET', 
            callbackKey: 'callback',
            callback: function(result) {    
		  if(result){
			var swapEnrolDetailPanel = goCampus.views.swapEnrolDetailPanel;
		  	goCampus.views.swapEnrolDetailPanel.update(swapEnrolDetTpl.applyTemplate(result));
		  	goCampus.views.viewport.setActiveItem(swapEnrolDetailPanel, { type: 'slide', direction: 'left' });
		  	var  backBtn = goCampus.backButton; 
		  	backBtn.setHandler(function (){
				var mainPanel = goCampus.views.mainPanel;
				backBtn.setHandler(function (){
					var enrolContainer = goCampus.views.enrolContainer;
					backBtn.setHandler(function (){
						var stdClassesPanel = goCampus.views.stdClassesPanel;
						backBtn.setHandler(backHome);
						goCampus.views.viewport.setActiveItem(stdClassesPanel, { type: 'slide', reverse: true });
					});
					goCampus.views.viewport.setActiveItem(enrolContainer, { type: 'slide', reverse: true });
				});
				goCampus.views.viewport.setActiveItem(mainPanel, { type: 'slide', reverse: true });
			});
		  }else{
		  	alert("Error. Server not responding");
		  }                                                                
          loadingMask.hide();
          }
	});
}                   
               