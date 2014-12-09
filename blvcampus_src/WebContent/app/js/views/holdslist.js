goCampus.views.holdslist = new Ext.List({
			id:'holdslist',
			ui:'round',
			useLoadMask:true,
			store: 'holdsstore',		
			autoLoad: true,	
			itemTpl: '<div>'
						+ '<span class="name">{desc1}'			 			
						+ '</span></div>',
			onItemDisclosure: function(record){
				}
});


goCampus.views.holdslistContainer = new Ext.Panel({
			id: 'holdslistContainer',
			layout: 'fit',
			//html: 'This Main List Container',
			items: [goCampus.views.holdslist],
			dockedItems: [{
			  	layout:'fit',
			  	xtype: 'toolbar',
		        title: 'Holds',
				cls:'small_title',
				ui:'light'
			  }]            
        });