var coursecatalogTpl = new Ext.XTemplate([
    '<tpl for=".">',
  /*  '<tpl if="searchCount">',			
	'<div class="errorMsg">Course not available</div>',
	'</tpl>',*/
    '<div class="subheader"> {subject} - {catNo} </div>',
     		'<tpl if="subject">',			
     			'<div class="cname">',
	     			    '<div class="descr">{course_title}</div>',
	     				'<div><span class="persinfo"> {course_id} </span> </div>',
	     				'<div><span class="tertiary">{course_type} </span></div>',
	     			'</div>',
     		'</tpl>',
	'</tpl>',
	'<tpl if="length == 0">',			
		'<div class="errorMsg">Course not available</div>',
	 '</tpl>'
   ]);

goCampus.views.stdCourseCatalogdetailPanel = new Ext.Panel({
	id: 'stdCourseCatalogdetailPanel',
	layout: 'fit',
	scroll : 'vertical',
	dockedItems: [{
		id : 'coursedetailtoolbar',
	  	layout:'card',
	  	xtype: 'toolbar',
	    title: 'Courses',
		cls:'small_title',
		ui:'light'
	}]            
});








