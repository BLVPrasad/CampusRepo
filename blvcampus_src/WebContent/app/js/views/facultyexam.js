var facexamscdlTpl = new Ext.XTemplate([
                '<tpl for=".">',
                '<div class="subheader"> {subject} - {catno} - {section} ({class_no})</div>',       
                 		'<tpl if="subject">',			
                 			'<div class="cname">',
                 			'<div class="datetime">',
	                 			'<div>{sdate} To {edate} <br> <big>{mstarttime} - {mendtime}</big></div>',
	                 			'<div><big><u>Exam Date</u></big></div>',
	                 			'<div><big>{exam_date} </big></div>',
             				'</div>',
                 			'<div class="descr">{descr}</div>',
                 				'<div><span class="persinfo"> {ssrcomponent} </span> </div>',
                 				'<div><span class="persinfo">{fac_id} </span></div>',
                 					
                 				'</div>',
                 		'</tpl>',
         		'</tpl>',
         		'<tpl if="length == 0">',			
				 '<div class="errorMsg">Faculty Exam Schedule is not available</div>',
				 '</tpl>'
               ]);

goCampus.views.facultyexamschedule = new Ext.Panel({
	id: 'facultyexamschedule',           
	layout : 'fit',
	scroll : 'vertical',
	styleHtmlContent: true,
	dockedItems: [{
	    layout:'fit',
	    id: 'facultyexamDetails',
		xtype: 'toolbar',
		title: 'Exam Schedule',
		cls:'small_title',
	    ui:'light'
	}]
});

//var initTermOptValue;

goCampus.views.facultyExamContainer = new Ext.Panel({
    id: 'facultyExamContainer',           
    layout : 'card',
    scroll : 'vertical',
	items: [goCampus.views.facultyexamschedule]
    /*dockedItems: [{
	  	layout:'fit',
	  	xtype: 'toolbar',
	  	dock: 'bottom',
	  	items: [{
	  		xtype: 'selectfield',
	  		//name: 'options',
	  		id:'facexamterm',	 
	  		store : facultytermstore,
			//value:initTermOptValue,
			listeners: {
          	change: {
                  fn: function(){
	                  	var term = this.getValue();
	                  	goCampus.views.facultyexamschedule.update('');
                            var matched = [];
                            for (i = 0; i < facultyresstore.getCount(); i++) {
                                if (facultyresstore.getAt(i).data.term.match(term)) matched.push(facultyresstore.getAt(i).data);
                            }
                            	goCampus.views.facultyexamschedule.update(facexamscdlTpl.applyTemplate(matched));
					}
				}
			}
			
      }]
	  }]*/
});



function facultyexamschdlWS(institute,career,term){
	loadingMask = new Ext.LoadMask(Ext.getBody(), {msg:"Loading..."});
	loadingMask.show();
	Ext.util.JSONP.request({
            url: './JsonServlet',
            params: {
               //format: 'json',
               callback: 'callback',
			   ws: 'FE',
			   emplid: localStorage.getItem('userid'),
			   institute: institute,
			   career: career,
			   term: term
           },
            method: 'GET', 
            callbackKey: 'callback',
            callback: function(result) {    
		  if(result){
		
			  
			Ext.StoreMgr.clear('facultyresult');							
		  	facultyresstore.removeAll();
		  	facultyresstore.add(result);  
		  	
		  	var matched = [];
            for (i = 0; i < facultyresstore.getCount(); i++) {
                if (facultyresstore.getAt(i).data.term.match(facultyresstore.getAt(0).data.term)) matched.push(facultyresstore.getAt(i).data);
            }
		  	
		  	goCampus.views.facultyexamschedule.update(facexamscdlTpl.applyTemplate(matched));
		  	
		  	/*
		  	Ext.StoreMgr.clear('facultyterm');							
		  	facultytermstore.removeAll();
		  	facultytermstore.add(result); 
		  	
		  	 var termmatched = [];
		  	 var termtemp;
             for (i = 0; i < facultytermstore.getCount(); i++) {
                 if (facultytermstore.getAt(i).data.value.match(termtemp)) {}
                 else {
                	 termmatched.push(facultytermstore.getAt(i).data);
                	 termtemp = facultytermstore.getAt(i).data.value;
                 }
             }
             Ext.StoreMgr.clear('facultyterm');							
 		     facultytermstore.removeAll();
 		  	 facultytermstore.add(termmatched);
             
 		  	 Ext.getCmp('facexamterm').setValue(facultyresstore.getAt(0).data.term);*/
		  }else{
		  	alert("Error. Server not responding");
		  }                                                                
          loadingMask.hide();
          }
	});
}                   
               