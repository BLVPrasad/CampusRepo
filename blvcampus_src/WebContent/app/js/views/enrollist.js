var enrolTpl = new Ext.XTemplate([
                '<tpl for=".">',
                '<div class="subheader"> {subject} - {catno} - {section} ({classno})<span><img class="smallicon" src="app/img/equal.png" hspace="20" align="right" onclick="callSwapEnrollWS(\'{classno}\')"></span><span><img class="smallicon" src="app/img/drop.png" hspace="20" align="right" onclick="callDropEnrollWS(\'{classno}\')" ></span><span></span></div>',       
                 		'<tpl if="desc">',			
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
                 			'<div class="descr">{desc}</div>',
                 				//'<div><span class="labelCls">Section </span><span class="dataCls">{section}  </span></div>',
                 				//'<div><span class="labelCls">Class Nbr </span><span class="dataCls"> {classno}  </span></div>',
                 				//'<div><span class="labelCls">Status </span><span class="dataCls"> {status} </span> </div>',                 			  	
                 				'<div><span class="persinfo">{facuname}</span></div>',
                 				'<br>',
                 				'<tpl if="bldgdescr">',
                 					'<div><span class="venueinfo">{bldgdescr} ({room}) </span></div>',
                 				'</tpl>',
                 				
                 				'</div>',
                 		'</tpl>',
         		'</tpl>',
         		'<tpl if="length == 0">',			
				 '<div class="errorMsg">Class Schedule is not available</div>',
				 '</tpl>'
               ]);


goCampus.views.enrol = new Ext.Panel({
		id: 'enrolparent',           
		layout : 'fit',
		scroll : 'vertical',
		styleHtmlContent: true,
		dockedItems: [{
		    layout:'fit',
			xtype: 'toolbar',
		    title: 'Student Enrollment Details',
		    cls:'small_title',
		    ui:'light'
		    /*items: [{
		    	html : '<span></span>'
		    },
		    {
		    	//dock :'left',
		    	html : '<span><img src="app/img/search.png" width="16px" height="16px" align="left" onclick="javascript:callClassSearch();"></span>'
		    }
		    ]*/
		}]
});


goCampus.views.enrolContainer = new Ext.Panel({
	    id: 'enrolContainer',           
	    layout : 'fit',
	    scroll : 'vertical',
		items: [goCampus.views.enrol]		
});


function callEnrollWS(){
	loadingMask = new Ext.LoadMask(Ext.getBody(), {msg:"Loading..."});
	loadingMask.show();
	Ext.util.JSONP.request({
            //url: './JsonServlet',
            url: './jsons/enrollist.json',
            /*params: {
               //format: 'json',
               callback: 'callback',
			   ws: 'EL',
			   emplid: localStorage.getItem('userid'),
			   term: localStorage.getItem('currTerm'),
			   career: localStorage.getItem('career'),
			   institute: localStorage.getItem('institute')
			   //emplid: 'AA0001'
           },*/
            method: 'GET', 
            callbackKey: 'callback',
            callback: function(result) {    
		  if(result){
		  	goCampus.views.enrol.update(enrolTpl.applyTemplate(result));
		  }else{
		  	alert("Error. Server not responding");
		  }                                                                
          loadingMask.hide();
          }
	});
}    

