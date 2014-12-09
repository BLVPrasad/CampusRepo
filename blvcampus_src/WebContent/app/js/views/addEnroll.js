var addEnrolTpl = new Ext.XTemplate([
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

goCampus.views.addEnrolPanel = new Ext.Panel({
	id: 'addEnrolPanel',           
	layout : 'fit',
	scroll : 'vertical',
	styleHtmlContent: true,
	dockedItems: [{
	    layout:'fit',
	    xtype : 'toolbar',
	    id: 'addenroltoolbar',
		title : 'Add Enrolment Details',
		cls:'small_title',
	    ui:'light'
	}]
});


function callClassSearch(){
	var searchClasses = goCampus.views.searchClasses;
	goCampus.views.viewport.setActiveItem(searchClasses, { type: 'slide', direction: 'left' });
}




               