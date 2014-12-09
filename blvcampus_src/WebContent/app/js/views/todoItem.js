var tododetailTpl = new Ext.XTemplate([
						'<tpl for=".">',
							'<tpl if="data.acacareer">',
							'<div class="cname">',	
							'<div class="rowDiv"><span class="labelCls">Aca. Career</span><span class="dataCls"> {data.acacareer}</span></div>',
							'<div class="rowDiv"><span class="labelCls">Stud. Cr.Nbr</span><span class="dataCls"> {data.stdcrno}</span></div>',
							'<div class="rowDiv"><span class="labelCls">Appl. Nbr</span><span class="dataCls"> {data.appno}</span></div>',
//								'<tpl if="data.vardata">',
//									//'<tpl for="vardata">',
//										
//										'<div>{data.vardata.length}</div>',
//										'<div>{data.vardata}</div>',
//										'<div class="rowDiv"><span class="labelCls"> l1 : {data.vardata.fieldvalue}</span><span class="dataCls">{data.vardata.fieldvalue}</span></div>',
//									//'</tpl>',
//								'</tpl>',
							'</div>',
							'</tpl>',
							
							
							'<div class="subheader">Contact</div>',
							'<div class="cname">',								
								'<div class="rowDiv"><span class="labelCls">Aca. Institution</span><span class="dataCls"> {data.descr2}</span></div>',
								'<div class="rowDiv"><span class="labelCls">Adm. Function</span><span class="dataCls"> {data.descr1}</span></div>',
								'<div class="rowDiv"><span class="labelCls">Due Date</span><span class="dataCls"> {data.due_dt}</span></div>',
								'<div class="rowDiv"><span class="labelCls">Contact</span><span class="dataCls"> {data.contact}</span></div>',								
								'<div class="rowDiv"><span class="dataCls1"><a href="mailto:{data.emailid}"> <small>{data.emailid}</small></a></span></div>',
							'</div>',	
							'<div class="subheader">Description</div>',
							'<div class="cname">',
								'<div class="rowDiv"><span class="dataCls1"> {data.desclong}</span></div>',													
							'</div>',
						'</tpl>'
               ]);

//goCampus.views.vardatalist = new Ext.List({
//	id:'vardatalist',    											
//	store: todoitemstore,		
//	autoLoad: true,	
//	itemTpl: tododetailTpl    											
//});

goCampus.views.todoItemPanel = new Ext.Panel({
    id: 'todoItemPanel',           
    layout : 'fit',
    scroll : 'vertical',
	styleHtmlContent: true,
	dockedItems: [{
	  	layout:'fit',
	  	id: 'todoDetailToolbar',
	  	xtype: 'toolbar',
	  	title: 'To do item details',
		cls:'small_title',
		ui:'light'
	}]
	//items:[goCampus.views.vardatalist]
});

