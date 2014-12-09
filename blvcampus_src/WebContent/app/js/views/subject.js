goCampus.views.Subject = new Ext.Panel({
	id: 'subjectparent',		
	layout : 'card',	
	showSpeakerData: true,
	items: [{
			xtype:'panel',
			id:'subjectListContainer',
			layout:'fit',
			items:[{
				xtype:'list',
				//ui:'round',
				id: 'subjectList',
				store: subjectstore,
				//grouped: true,
				//indexBar: true,
		        itemTpl: '<tpl for="."> <span style="padding:5px;"><img src={imgpath} width="30px" height="30px"/></span><span class="name">{subno} - {subtitle}</span><span class="secondary">{period}</span></tpl>'		        	
			},
			{
				xtype:'button',
				text:'Add to Planner',
				width: '30%',
				dock: 'bottom'
			}]
		}]
});