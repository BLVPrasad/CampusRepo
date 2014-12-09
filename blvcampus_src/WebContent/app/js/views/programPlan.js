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


var programPlanTpl = new Ext.XTemplate([
       '<tpl for=".">',
       
       '<li>{descr4}',
             '<ul>',
                   '<li>{descr1}',
                         '<ul>',
                               '<li class="start">{acad_prog}',
                                     '<ul>',
                                           '<li class="end">{acad_plan}',
                                                 '<ul>',
                                                       '<li class="start">Major</li>',
                                                       '<li class="start">Major</li>',
                                                       '<li class="start">Minor</li>',
                                                 '</ul>',
                                           '</li>',
                                     ' </ul>',
                               '</li>',
                         '</ul>',
                   ' </li>',
             ' </ul>',
        ' </li>',
 '</ul>',

            // '<div class="tertiary"> {descr254}</div>',
       '</tpl>'
]);

 
       
goCampus.views.programPlan = new Ext.Panel({
      id: 'programPlan',           
      layout : 'fit',
      scroll : 'vertical',
	  styleHtmlContent: true,
      dockedItems: [{
			  	layout:'fit',
				id: 'prg_plan',
			  	xtype: 'toolbar',
			  	title: 'Program Plan',
				cls:'small_title',
				ui:'light'
			  }] 
	  
});


function callProgramPlanWS(){
	loadingMask = new Ext.LoadMask(Ext.getBody(), {msg:"Loading..."});
	loadingMask.show();
	Ext.util.JSONP.request({
            //url: './JsonServlet',
            url: './jsons/programplan.json',
           /* params: {
               format: 'json',
               callback: 'callback',
			   ws: 'SPP',
			   emplid: localStorage.getItem('userid'),
			   institute : localStorage.getItem('institute')
           },*/
            method: 'GET', 
            callbackKey: 'callback',
            callback: function(result) {    
		  if(result){
			  //alert(result);
			  goCampus.views.programPlan.update(programPlanTpl.applyTemplate(result));
			  
		  }else{
		  	alert("Error. Server not responding");
		  }                                                                
          loadingMask.hide();
          }
	});
}
