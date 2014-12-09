
var classSearchTpl = new Ext.XTemplate([
    '<tpl for=".">',
    	//'<tpl if="CRSE_ID_LOVDescr">',
    	//	'<div class="subheader">{subject}- {catNo} - {classNo} - {crsId} &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<input type="checkbox" id="addcb" name="addcb"  value="select" onclick="callAddEnrollWS(\'{classNo}\')"/> Add Class  </div>',
    	'<div class="subheader">{subject}- {catNo} - {classNo} - {crsId} &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<img class="smallicon" src="app/img/add.png" hspace="20" align="right" onclick="javascript:callAddEnrollWS(\'{classNo}\');"></span></div>',
    // '<tpl>',
        '<div class="cname">',                			
       		'<div class="datetime">{mtgdate}<br><br><br>{mtgschd} </div>',
       		'<div><span class="persinfo"> {sessionCode}, </span><span class="persinfo"> {classNo}, </span><span class="persinfo">{sessionDesc} </span> </div>',
         	'<div><span class="persinfo"> {mtgloc}, </span><span class="persinfo"> {mtginstr}, </span><span class="persinfo">{mtgtopic} </span> </div>',                 				
        '</div>',
            '<br>',       
    '</tpl>',
   
    '<tpl if="length == 0">',                 
		'<div class="errorMsg">Class Details are not available</div>',
	'</tpl>'
]);

goCampus.views.classSearchDetailPanel = new Ext.Panel({
  	id: 'searchclassdetailPanel',
  	layout: 'card',
  	scroll : 'vertical',
  	dockedItems: [{
  		id : 'cstoolbar',
  	  	layout:'card',
  	  	xtype: 'toolbar',
  	    title: 'Class',
  		cls:'small_title',
  		ui:'light'
  	}]            
});



function callAddEnrollWS(classNo){
	//if(document.getElementById("addcb").checked==true){
		//alert("class no :=" + classNo);
		loadingMask = new Ext.LoadMask(Ext.getBody(), {msg:"Loading..."});
		loadingMask.show();
		Ext.util.JSONP.request({
	            url: './JsonServlet',
	            params: {
	               //format: 'json',
	               callback: 'callback',
				   ws: 'AE',
				   un:  localStorage.getItem('operid'),
				   pwd: localStorage.getItem('password'),
				   emplid: localStorage.getItem('userid'),
				   institute: localStorage.getItem('institute'),
				   career: localStorage.getItem('career'),
				   term: localStorage.getItem('currterm'),
				   //term : '0675',
				   clsnbr: classNo
	           },
	            method: 'GET', 
	            callbackKey: 'callback',
	            callback: function(result) {    
			  if(result){
				var addEnrolPanel = goCampus.views.addEnrolPanel;
				var csdpanel = goCampus.views.classSearchDetailPanel;
			  	goCampus.views.addEnrolPanel.update(addEnrolTpl.applyTemplate(result));
			  	goCampus.views.viewport.setActiveItem(addEnrolPanel, { type: 'slide', direction: 'left' });
			  	var  backBtn = goCampus.backButton; 
			  	backBtn.setHandler(function (){
					var enrolContainer = goCampus.views.enrolContainer;
					backBtn.setHandler(function (){
						var classSearchPanel = goCampus.views.classSearchPanel
						backBtn.setHandler(function (){
							var searchClasses = goCampus.views.searchClasses;
							backBtn.setHandler(function(){
								var stdClassesPanel = goCampus.views.stdClassesPanel;
								goCampus.views.viewport.setActiveItem(stdClassesPanel, { type: 'slide', reverse: true });
								goCampus.backButton.setHandler(backHome);
							});
							goCampus.views.viewport.setActiveItem(searchClasses, { type: 'slide', reverse: true });
						});
						goCampus.views.viewport.setActiveItem(classSearchPanel, { type: 'slide', reverse: true });
					});
					goCampus.views.viewport.setActiveItem(csdpanel, { type: 'slide', reverse: true });
				});
			  }else{
			  	alert("Error. Server not responding");
			  }                                                                
	          loadingMask.hide();
	          }
		});
	//}	
		
}                   