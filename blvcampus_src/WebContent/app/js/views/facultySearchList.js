goCampus.views.facuSearchlist = new Ext.List({
			id:'facusearchlist',
			ui:'round',
			useLoadMask:true,
			store: 'facusearchStore',		
			autoLoad: true,	
			itemTpl: '<tpl><div>'
						+ '<span class="name">{name}'			 			
						+ '</span></div></tpl>',
					/*	+'<tpl if="descr1002==Search result zero rows">'
		             	+'<div class="errorMsg">No data</div>'
		             	+'</tpl></tpl>',	*/
						
						
			onItemDisclosure: function(record){
			}
});


goCampus.views.facuSearchListContainer = new Ext.Panel({
    id: 'facusearchlistContainer',           
    //layout : 'fit',
    scroll : 'vertical',
	//items: [goCampus.views.facuSearchlist]
    dockedItems: [{
		  	layout:'fit',
		  	xtype: 'toolbar',
	        title: 'Faculties',
			cls:'small_title',
			ui:'light'
		  },
		  {
		  	layout:'fit',
		  	xtype: 'toolbar',
		  	dock: 'bottom',
		  	items: [{
		  		xtype: 'selectfield',
		  		name: 'facusearch',
		  		id:'facusearchterm',			 	
    		 	store : facusearchtermStore
		 }]
      }]
});






