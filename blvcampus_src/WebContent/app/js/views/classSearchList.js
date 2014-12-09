
/*var classsearchTpl = new Ext.XTemplate([
    '<tpl for=".">',
    	'<tpl if="CRSE_ID_LOVDescr">',
        	'<div class="subheader">{subject}- {catNo} - {CRSE_ID_LOVDescr} <input class="updateBtnCls"  value="select class" type="button" onclick="callselectWS()" ></div>',
        '<tpl>',
                       		
        '<div class="cname">',                			
       		'<div class="datetime">{mtgdate},{mtgschd}</div>',
         	'<div><span class="persinfo"> {sessionCode}, </span><span class="persinfo"> {classNo}, </span><span class="persinfo">{sessionDesc} </span> </div>',
         	'<div><span class="persinfo"> {mtgloc}, </span><span class="persinfo"> {mtginstr}, </span><span class="persinfo">{} </span> </div>',                 				
        '</div>',
            '<br>',       
    '</tpl>',
]);
*/

goCampus.views.classSearchlist = new Ext.List({
			id:'classSearchlist',
			ui:'round',
			useLoadMask:true,
			dock : 'top',
			store: classsearchstore,
			itemTpl: '<div>'
				+ '<span>{CRSE_ID_LOVDescr}'			 			
				+ '</span></div>',
			onItemDisclosure: function(record){
			}
			
});

goCampus.views.classSearchPanel = new Ext.Panel({
    id: 'classSearchPanel',           
    layout : 'card',
    scroll : 'vertical',
	items: [goCampus.views.classSearchlist ],
    dockedItems: [{
	  	layout:'fit',
	  	xtype: 'toolbar',
	    title: 'Class Search',
		cls:'small_title',
		ui:'light'
	}]
});


/*goCampus.views.searchclssdetailPanel = new Ext.Panel({
  	id: 'searchclssdetailPanel',
  	layout: 'card',
  	scroll : 'vertical',
  	dockedItems: [{
  		id : 'cstoolbar',
  	  	layout:'card',
  	  	xtype: 'toolbar',
  	    title: 'Courses',
  		cls:'small_title',
  		ui:'light'
  	}]            
});
*/


