//goCampus.views.Financialaid = new Ext.Panel({
//	id: 'financialaidparent',		
//	layout : 'card',	
//	showSpeakerData: true,
//	items: [{
//			xtype:'panel',
//			id:'financialaidListContainer',
//			layout:'fit',
//			items:[{
//				xtype:'list',
//				//ui:'round',
//				id: 'financialaidList',
//				store: financialaidstore,
//				grouped: true,
//				indexBar: true,
//		        itemTpl: '<tpl for="."> <span class="name">{id} - {name}<br><span class="secondary">Academic Institution: {institution} - Aid Year: {aidyear}</span></span></tpl>'		        	
//			}]
//		}]
//});


var siTpl = new Ext.XTemplate([
						'<tpl for=".">',
							'<div class="posnegind">',
							'<tpl if="data.possi==\'Y\'"><img src="app/img/red-star01.png"/> - Positive</tpl>',
							'<tpl if="data.possi==\'N\'"><img src="app/img/stop.png"/> - Negative</tpl>',
							'</div><br>',
							'<div class="subheader">Reason & Contact</div>',
							'<div class="cname">',								
								'<div class="rowDiv"><span class="labelCls">Description</span><span class="dataCls"> {data.desc}</span></div>',
								'<div class="rowDiv"><span class="labelCls">Start Term</span><span class="dataCls"> {data.desc2}</span></div>',
								'<div class="rowDiv"><span class="labelCls">Start Date</span><span class="dataCls"> {data.siactdt}</span></div>',
								'<div class="rowDiv"><span class="labelCls">Reason</span><span class="dataCls"> {data.desc1}</span></div>',
								'<div class="rowDiv"><span class="labelCls">Department</span><span class="dataCls"> {data.desc3}</span></div>',
								'<div class="rowDiv"><span class="labelCls">Contact</span><span class="dataCls"> {data.contact}</span></div>',
								'<div class="rowDiv"><span class="dataCls1"><a href="mailto:{data.emailid}"> <small>{data.emailid}</small></a></span></div>',
							'</div>',	
							'<div class="subheader">Instructions</div>',
							'<div class="cname">',
								'<div class="rowDiv"><span class="dataCls1"> {data.desclong}</span></div>',													
							'</div>',
						'</tpl>'
               ]);
       
       
goCampus.views.holds = new Ext.Panel({
      id: 'siparent',           
      layout : 'fit',
      scroll : 'vertical',
	  styleHtmlContent: true,
      dockedItems: [{
			  	layout:'fit',
				id: 'holdsDetails',
			  	xtype: 'toolbar',		        
				cls:'small_title',
				ui:'light'
			  }] 
	  
});
