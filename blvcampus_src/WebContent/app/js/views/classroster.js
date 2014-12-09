var classrostTpl = new Ext.XTemplate([
     '<tpl for=".">',
     '<tpl if="roster.length == 0">',			
 		'<div class="errorMsg">Fac. class roster is not available</div>',
 	 '</tpl>',
     
	 '<tpl if="roster.length != 0">',	
     
     
	        '<tpl if="subject1_1">',
	        	'<div class="emplname">{subject1_1} - {catno1_1} - {section0_1} ( {classno2} ) </div>',
	        '</tpl>',                
	        '<tpl if="descr254">',
	              '<div class="subtitle">{descr254} </div>',
	        '</tpl>',
	
	        '<div>',
	            /*'<tpl if="emplid_1">',
	            	'<span class="emplname">{emplid_1} </span>',
	            '</tpl>',*/
	            '<tpl if="totalenrol">',
	            	 '<div class="enrolcount">Enrolled - {totalenrol} </div>',
	            '</tpl>',
	        '</div>',
	        '<br>',
	        '<br>',
	        //'<div class="classroastertap">',   
	        '<tpl for="roster">',
	            '<div class="subheadernobg">',
	            		   '<span class="photo_r" style="background-image: url(app/img/icon_photo01.png)" onclick="callEmpPhotWS(\'{emplid}\')"></span>',
		                   '<tpl if="fname">',
		                      	'<span class="classenlistfcolor">{fname}, </span>',
		                   '</tpl>',
		                   '<tpl if="lname">',
		                      	'<span class="classenlistfcolor">{lname}</span>',
		                   '</tpl>',
		                   '<tpl if="emplid">',
		                   		'<span class="classenlistfcolor">({emplid})</span>',
		                   '</tpl>',
		                   '<div style="padding:5px">',
		                   '<tpl if="level">',
		                   	  '<span class="tertiary">{level}, </span>',
		                   '</tpl>',
		                   '<tpl if="grading">',
		                      '<span class="tertiary">{grading},  </span>',
		                   '</tpl>',
		                   '<tpl if="unit">',
		                   	  '<span class="tertiary"><b>{unit}</b><small>.00 units</small>  </span>',
		                   '</tpl>',
		                   '</div>',
		                   '<tpl if="desclong">',
		                     	'<div> <span style="padding:5px">{desclong}</span></div>',
		                   '</tpl>',
	            '</div>',
	        '</tpl>', 
	        //'</div>',
    '</tpl>',
    '</tpl>',
    
    '<tpl if="length == 0">',			
    	'<div class="errorMsg">Fac. class roster is not available</div>',
	'</tpl>'
]);




goCampus.views.classRoster = new Ext.Panel({
    id: 'classRoaster',
    //layout: 'fit',
    scroll: 'vertical',
    styleHtmlContent: true,
    //cls : 'paddingCls',
    dockedItems: [{
        layout: 'fit',
        xtype: 'toolbar',
        title: 'Class Roster',
        cls: 'small_title',
        ui: 'light'
    }]
});

goCampus.views.classRosterContainer = new Ext.Panel({
    id: 'classroasterContainerContainer',
    layout: 'card',
    //scroll: 'vertical',
    items: [goCampus.views.classRoster]
});



function callClassRoster(classno){
	goCampus.backButton.setHandler(function(){					
		var facultyContainer = goCampus.views.facultyContainer;
		goCampus.views.viewport.setActiveItem(facultyContainer, 
			{ 
				type: 'slide', 
				direction: 'right'
			});
		var backBtn = goCampus.backButton; 
		backBtn.setHandler(function(){                              
            var facultydesc = goCampus.views.facultydesc;
            goCampus.views.viewport.setActiveItem(facultydesc, 
                  { 
                        type: 'slide', 
                        direction: 'right'
                  });
            var backBtn = goCampus.backButton; 
            backBtn.setHandler(backHome);                
      });
	});       	
	var  classRosterContainer = goCampus.views.classRosterContainer;
	goCampus.views.viewport.setActiveItem(classRosterContainer, { type: 'slide', direction : 'left' });
	//localStorage.setItem('classno', classno);
	var classNbr = classno;
	loadingMask = new Ext.LoadMask(Ext.getBody(), {msg:"Loading..."});
	loadingMask.show();
	Ext.util.JSONP.request({
            url: './JsonServlet',
            params: {
               //format: 'json',
               callback: 'callback',
			   ws: 'CR',
			   emplid: localStorage.getItem('userid'),
			   institute: localStorage.getItem('institute'),
			   term: localStorage.getItem('term'),
			   classNbr : classno
			   
           },
            method: 'GET', 
            callbackKey: 'callback',
            callback: function(result) {    
		  if(result){			
			  goCampus.views.classRoster.update(''); 
			  goCampus.views.classRoster.update(classrostTpl
						.applyTemplate(result));
			
		  }else{
		  	alert("Error. Server not responding");
		  }                                                                
          loadingMask.hide();
          }
	});
}




