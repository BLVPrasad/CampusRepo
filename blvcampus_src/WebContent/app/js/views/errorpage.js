/*var errorTpl = new Ext.XTemplate([
                 '<tpl for=".">',
				 	'<tpl if="name">', 
						'<div class="emplname">{name}</div>',
					'</tpl>',
				
					'<tpl if="classTblView==\'\'">',
						'<div class="errorMsg">Grades not available</div>',
					'</tpl>',
                 '</tpl>',
                 '<tpl if="length == 0">',			
				 '<div class="errorMsg">Grades not available</div>',
				 '</tpl>'
               ]);*/


       
goCampus.views.errorPanel = new Ext.Panel({
      id: 'errorpanel',           
      //layout : 'card',
      scroll : 'vertical',
	  styleHtmlContent: true,
      html : '<div class="errorMsg"> Enter wrong input </div>',
	  dockedItems: [{
	  	layout:'fit',
	  	xtype: 'toolbar',
        title: 'Faculties',
		cls:'small_title',
		ui:'light'
	  }]
});


