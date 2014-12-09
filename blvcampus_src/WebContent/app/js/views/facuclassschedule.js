var facscdlTpl = new Ext.XTemplate([
                '<tpl for=".">',
                '<div class="subheader"> {subject} - {catno}{section} ({classno}) <img class="smallicon" src="app/img/graderoster_01.png"  hspace="20" align="right" onclick="callGradeRoster(\'{classno}\')"><img class="smallicon" src="app/img/classroster_01.png" align="right" onclick="callClassRoster(\'{classno}\')"></img></div>',
                //'<div class="subheader"> {subject} - {catno} - {section} ({classno}) </div>',       
                 		'<tpl if="subject">',			
                 			'<div class="cname">',
                 			'<div class="datetime">',
	                 			'<div>{sdate} To {edate} <br> <big>{mstarttime} - {mendtime}</big></div>',
	                 			'<div class="days">',
	             				'<span class="paddingCls2" <tpl if="sun==\'Y\'">style="color:#FFFFFF;font-weight:bold;background-color:rgb(79,98,40)"</tpl>>S</span>',
	             				'<span class="paddingCls2" <tpl if="mon==\'Y\'">style="color:#FFFFFF;font-weight:bold;background-color:rgb(79,98,40)"</tpl>>M</span>',
	             				'<span class="paddingCls2" <tpl if="tue==\'Y\'">style="color:#FFFFFF;font-weight:bold;background-color:rgb(79,98,40)"</tpl>>T</span>',
	             				'<span class="paddingCls2" <tpl if="wed==\'Y\'">style="color:#FFFFFF;font-weight:bold;background-color:rgb(79,98,40)"</tpl>>W</span>',
	             				'<span class="paddingCls2" <tpl if="thurs==\'Y\'">style="color:#FFFFFF;font-weight:bold;background-color:rgb(79,98,40)"</tpl>>Th</span>',
	             				'<span class="paddingCls2" <tpl if="fri==\'Y\'">style="color:#FFFFFF;font-weight:bold;background-color:rgb(79,98,40)"</tpl>>F</span>',
	             				'<span class="paddingCls2" <tpl if="sat==\'Y\'">style="color:#FFFFFF;font-weight:bold;background-color:rgb(79,98,40)"</tpl>>Sa</span></div>',
             				'</div>',
                 			'<div class="descr">{descr1}</div>',
                 				'<div><span class="persinfo"> {ssrcomponent} </span> </div>',
                 				'<div><span class="persinfo">{facilityid} </span></div>',
                 					
                 				'</div>',
                 		'</tpl>',
         		'</tpl>',
         		'<tpl if="length == 0">',			
				 '<div class="errorMsg">Faculty Class Schedule is not available</div>',
				 '</tpl>'
               ]);

goCampus.views.facultyschedule = new Ext.Panel({
	id: 'facultyschedule',           
	layout : 'fit',
	scroll : 'vertical',
	styleHtmlContent: true,
	dockedItems: [{
	    layout:'fit',
	    id: 'facultyDetails',
		xtype: 'toolbar',
		title: 'Class Schedule',
		cls:'small_title',
	    ui:'light'
	}]
});


goCampus.views.facultyContainer = new Ext.Panel({
    id: 'facultyContainer',           
    layout : 'card',
    scroll : 'vertical',
	items: [goCampus.views.facultyschedule]
    /*dockedItems: [{
	  	layout:'fit',
	  	xtype: 'toolbar',
	  	dock: 'bottom',
	  	items: [{
	  		xtype: 'selectfield',
	  		//name: 'options',
	  		id:'facterm',
			listeners: {
          	change: {
                  fn: function(){
	                  	var term = this.getValue();
	                  	
	                  	goCampus.views.facultyschedule.update('');
	                  		                  	
                            var matched = [];
                            for (i = 0; i < facultyresstore.getCount(); i++) {
                                if (facultyresstore.getAt(i).data.term.match(term)) matched.push(facultyresstore.getAt(i).data);                                                       
                            }                      
	                  		goCampus.views.facultyschedule.update(facscdlTpl.applyTemplate(matched));	                  	
					}
				}
			},
			store : facultytermstore
      }]
	  }]*/
});

function facultyschdlWS(institute,career,term){
	loadingMask = new Ext.LoadMask(Ext.getBody(), {msg:"Loading..."});
	loadingMask.show();
	Ext.util.JSONP.request({
            url: './JsonServlet',
            params: {
               //format: 'json',
               callback: 'callback',
			   ws: 'FS',
			   emplid: localStorage.getItem('userid'),
			   institute: institute,
			   career: career,
			   term: term
			   //term : term
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
		  	goCampus.views.facultyschedule.update(facscdlTpl.applyTemplate(matched));
		  	
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
 		  	Ext.getCmp('facterm').setValue(facultyresstore.getAt(0).data.term);*/
		  }else{
		  	alert("Error. Server not responding");
		  }                                                                
          loadingMask.hide();
          }
	});
}                   
               