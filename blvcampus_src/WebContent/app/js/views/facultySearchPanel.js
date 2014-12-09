
var facSearchDetailedTpl = new Ext.XTemplate([
        '<tpl if="descr1002">',			
       		'<div class="errorMsg">Enter Wrong...{descr1002}</div>',
       	'</tpl>',

       	'<tpl for=".">',
        '<div class="subheader"> {subject} - {catno}{section} ({classno}) </div>',
         		'<tpl if="subject">',			
         			'<div class="cname">',
         			'<div class="datetime">',
             			'<div> <big>{clsdates} </big></div>',
             			'<div class="days">{days}',
             			
         				'</div>',
         				'<div><span class="persinfo"> {time} </span> </div>',
     				'</div>',
         			'<div class="descr">{descr1}</div>',
         				'<div><span class="persinfo"> {desc100} </span> </div>',
         				'<div><span class="persinfo">{room} </span></div>',
       				'</div>',
         		'</tpl>',
 		'</tpl>',
        '<tpl if="length == 0">',			
             	'<div class="errorMsg">Fac. not available for given term</div>',
        '</tpl>'
         		
 ]);
 
 
goCampus.views.facuSearchPanel = new Ext.Panel({
      id: 'facuSearchPanel',           
      layout : 'fit',
      scroll : 'vertical',
	  styleHtmlContent: true,
      dockedItems: [{
			  	layout:'fit',
				id: 'facul_details',
			  	xtype: 'toolbar',		        
				cls:'small_title',
				ui:'light'
			  }] 
});
