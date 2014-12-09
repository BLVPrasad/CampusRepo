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


var studentEnrollStatusTpl = new Ext.XTemplate([
       '<tpl for=".">',
             '<div class="appstatemplname">My Enrollment Details </div>',
             '<br>',
             '<div class="cname">',
             '<div class="rowDiv"><span class="applicationsubhed"><u>{nameAC}</u></span><span class="applicationstatusdate"> {class_no},</span><span class="applicationsubhed">{subject} </span></div>',
             '<div class="rowDiv"><span class="applicationsubhed"> {course_id},</span><span class="applicationstatusdate">enrol_total:</span><span class="applicationsubhed"> {enrol_total},</span><span class="applicationstatusdate">sessionCode:</span><span class="applicationsubhed">{sessionCode},</span></div>',
               '<div class="rowDiv"><span class="applicationsubhed"> {acad_group},</span></span></div>',
              // '<div class="rowDiv"><span class="applicationsubhed">{emplid},</span><span class="applicationsubhed">{acad_pgm}, </span><span class="applicationsubhed">{institute},</span><span class="applicationsubhed">{term},</span><tpl if="descr50==\'Complete\'"><img src="app/img/PS_CS_STATUS_OPEN_ICN.GIF" align="right"/></tpl><tpl if="descr50==\'InComplete\'"><img src="app/img/PS_CS_STATUS_WAITLIST_ICN.GIF" align="right"/></tpl></div>',
               '<div class="rowDiv"><span class="appsubtitle"> {enrolStatus}</span><span class="applicationsubhed">{descr4}</span></div>',
              // '<div class="rowDiv"><span class="applicationsubhed">{descr3},</span><span class="applicationsubhed">{descr2},</span><span class="applicationsubhed"> {descr1}</span> </div>',
              // '<div class="rowDiv"><span class="applicationsubhed"> {descr5}</span></div>',
              //'<div class="rowDiv"><span class="applicationsubhed"> {status_reason},</span></div>',
             '</div>',
       '</tpl>'
]);


 
       
goCampus.views.studentEnrollStatus = new Ext.Panel({
      id: 'enrolStatus',           
      layout : 'fit',
      scroll : 'vertical',
	  styleHtmlContent: true,
      dockedItems: [{
			  	layout:'fit',
				id: 'enrol_stat',
			  	xtype: 'toolbar',
			  	title: 'Enroll Status',
				cls:'small_title',
				ui:'light'
			  }] 
	  
});


function callStdEnrollStatusWS(){
	loadingMask = new Ext.LoadMask(Ext.getBody(), {msg:"Loading..."});
	loadingMask.show();
	Ext.util.JSONP.request({
            url: './JsonServlet',
            url: './jsons/enrolmentstatus.json',
	          /*  params: {
	               format: 'json',
	               callback: 'callback',
				   ws: 'SES',
				   emplid: localStorage.getItem('userid'),
				   institute : 'PSUNV'
	           },*/
            method: 'GET', 
            callbackKey: 'callback',
            callback: function(result) {    
		  if(result){
			  //alert(result);
			  goCampus.views.studentEnrollStatus.update(studentEnrollStatusTpl.applyTemplate(result));
			  
		  }else{
		  	alert("Error. Server not responding");
		  }                                                                
          loadingMask.hide();
          }
	});
}
