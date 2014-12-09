/*var stdexamscdlTpl = new Ext.XTemplate([
	    '<tpl for=".">',
	    '<div class="subheader"> Engllit - 120 - 2A({class_no})</div>',       
	            '<tpl>',               
	                  '<div class="cname">',
	                  '<div class="datetimestu">',
	                  '<div ><big><u>{exam_date}</u></big></div>',
	                        '<div><big>{mstarttime} - {mstarttime}</big></div>',
	                        '</div>',
	                        '<div class="stuexams">Anglo–Saxon Lit(Lecture),<span class="stuexamssmall">{examType}</span></div>',
	                        '<div class="stuexamssmalla">TBA</div>',
	                  '</div>',
	            '</tpl>',
	      '</tpl>',
	      '<tpl if="length == 0">',                 
	             '<div class="errorMsg">Faculty Exam Schedule is not available</div>',
	      '</tpl>'
]);*/

var stdexamscdlTpl = new Ext.XTemplate([
    '<tpl for=".">',
    '<div class="subheader">  ENGLIT - 490 - 1({class_no})</div>',       
     		'<tpl if="emplid">',			
     			'<div class="cname">',
     			'<div class="datetime">',
         			
         			'<div><big><u>Exam Date</u></big></div>',
         			'<div><big>{exam_date} </big></div>',
         			'<div><big> 09:00A.M - 12:00P.M</big></div>',
 				'</div>',
     			'<div class="descr">{descr}</div>',
     				'<div><span class="persinfo"> {ssrcomponent} </span> </div>',
     				'<div><span class="persinfo">{examType} </span></div>',
     					
     				'</div>',
     		'</tpl>',
	'</tpl>',
	'<tpl if="length == 0">',                 
		'<div class="errorMsg">Faculty Exam Schedule is not available</div>',
	'</tpl>'
]);

goCampus.views.studentexamschedule = new Ext.Panel({
	id: 'studentexamschedule',           
	layout : 'fit',
	scroll : 'vertical',
	styleHtmlContent: true,
	dockedItems: [{
	    layout:'fit',
	    id: 'studentexamDetails',
		xtype : 'toolbar',
		title : 'Student Exam Details',
		cls:'small_title',
	    ui:'light'
	}]
});



goCampus.views.studentExamContainer = new Ext.Panel({
    id: 'studentExamContainer',           
    layout : 'card',
    scroll : 'vertical',
	items: [goCampus.views.studentexamschedule]

});



function studentexamschdlWS(institute,career,term){
	loadingMask = new Ext.LoadMask(Ext.getBody(), {msg:"Loading..."});
	loadingMask.show();
	Ext.util.JSONP.request({
            //url: './JsonServlet',
            url: './jsons/stdexamschd.json',
            /*params: {
               //format: 'json',
               callback: 'callback',
			   ws: 'SE',
			   emplid: localStorage.getItem('userid'),
			   institute: localStorage.getItem('institute'),
			   career: localStorage.getItem('career'),
			   //term: localStorage.getItem('currterm')
			   term : '0670'
           },*/
            method: 'GET', 
            callbackKey: 'callback',
            callback: function(result) {    
		  if(result){
		  	goCampus.views.studentexamschedule.update(stdexamscdlTpl.applyTemplate(result));
		  }else{
		  	alert("Error. Server not responding");
		  }                                                                
          loadingMask.hide();
          }
	});
}                   
               