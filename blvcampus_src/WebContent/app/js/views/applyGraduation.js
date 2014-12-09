/*var applStatusTpl = new Ext.XTemplate([
						'<tpl for=".">',
							'<div class="subheader">Application Details</div>',
							'<div class="cname">',								
								'<div class="rowDiv"><span class="labelCls">Acadamic Institue </span>&nbsp;&nbsp;<span class="dataCls"> {institute}</span></div>',
								'<div class="rowDiv"><span class="labelCls">Term </span>&nbsp;&nbsp;<span class="dataCls"> {expGradeTerm}</span></div>',
								'<div class="rowDiv"><span class="labelCls">Career </span>&nbsp;&nbsp;<span class="dataCls"> {career}</span></div>',
								'<div class="rowDiv"><span class="labelCls">Program  </span>&nbsp;&nbsp;<span class="dataCls"> {progAction}</span></div>',
								'<div class="rowDiv"><span class="labelCls">Appl.No. </span>&nbsp;&nbsp;<span class="dataCls"> {appNo}</span></div>',
								'<div class="rowDiv"><span class="labelCls">Admn App. dt</span>&nbsp;&nbsp;<span class="dataCls"> {admAppDate}</span></div>',
								'<div class="rowDiv"><span class="labelCls">Effected date </span>&nbsp;&nbsp;<span class="dataCls"> {effectDate}</span></div>',
								'<div class="rowDiv"><span class="labelCls">Acad Progress </span>&nbsp;&nbsp;<span class="dataCls"> {acadProgres}</span></div>',
								'<div class="rowDiv"><span class="labelCls">Progress Status</span>&nbsp;&nbsp;<span class="dataCls"> {progStatus}</span></div>',
								'<div class="rowDiv"><span class="labelCls">Action date </span>&nbsp;&nbsp;<span class="dataCls"> {actionDate}</span></div>',
							'</div>',	
							
							'<div class="subheader">Status</div>',
							'<div class="cname">',
								'<div class="rowDiv"><span class="dataCls1"> {descr50}</span></div>',
								'<div class="rowDiv"><span class="dataCls1"> {descr10}</span></div>',
							'</div>',
						'</tpl>'
               ]);*/


var applyGraduationTpl = new Ext.XTemplate([
       '<tpl for=".">',
             '<div class="appstatemplname">Apply Degree</div>',
             '<br>',
             '<div class="cname">',
                   '<div><span class="appsubtitle">Student Card No. : {stdCarNo}</span> </div>',
                   '<div class="rowDiv"><span class="applicationstatus"> {descr254}</span></div>',
                   //'<div class="rowDiv"><span class="applicationsubhed">{descr3},</span><span class="applicationsubhed">{career}, </span><span class="applicationsubhed">{institute},</span><tpl if="descr50==\'Complete\'"><img src="app/img/PS_CS_STATUS_OPEN_ICN.GIF" align="right"/></tpl><tpl if="descr50==\'InComplete\'"><img src="app/img/PS_CS_STATUS_WAITLIST_ICN.GIF" align="right"/></tpl></div>',
                   //'<div class="rowDiv"><span class="applicationstatusdate">App.Date - {admAppDate}</span></div>',
             '</div>',
            // '<div class="tertiary"> {descr254}</div>',
       '</tpl>'
]);

 
       
goCampus.views.applyGraduation = new Ext.Panel({
      id: 'applygraduate',           
      layout : 'fit',
      scroll : 'vertical',
	  styleHtmlContent: true,
      dockedItems: [{
			  	layout:'fit',
				id: 'app_Graduate',
			  	xtype: 'toolbar',
			  	title: 'Apply Graduation',
				cls:'small_title',
				ui:'light'
			  }] 
	  
});


function callapplyGraduationWS(){
	//alert("hi");
	loadingMask = new Ext.LoadMask(Ext.getBody(), {msg:"Loading..."});
	loadingMask.show();
	Ext.util.JSONP.request({
            //url: './JsonServlet',
            url: './jsons/applygraduation.json',
           /* params: {
               format: 'json',
               callback: 'callback',
			   ws: 'SAG',
			   emplid: localStorage.getItem('userid'),
			   career : 'UGRD'
           },*/
            method: 'GET', 
            callbackKey: 'callback',
            callback: function(result) {    
		  if(result){
			  //alert(result);
			  goCampus.views.applyGraduation.update(applyGraduationTpl.applyTemplate(result));
			  
		  }else{
		  	alert("Error. Server not responding");
		  }                                                                
          loadingMask.hide();
          }
	});
}
