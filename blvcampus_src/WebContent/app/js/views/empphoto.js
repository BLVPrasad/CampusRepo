
var empPhotoTpl = new Ext.XTemplate([
	   	'<tpl for=".">',
			    '<tpl if="name">',
		        '<center><span class="tertiary"> {name}</span></center>',
		    	'</tpl>', 	
	           '<div>',
	             '<tpl if="desc100 == \'No record found \'">',
	         		'<div class="errorMsg">Photo not available </div>',
	         	'</tpl>',
	         	'<tpl if="desc100 == \'Success\'">',
	             '<center><span class="classenlisttofcolor"><img src="data:image/png;base64, {photo} "/></span></center>',
	         	 '</tpl>', 	
	           '</div>',
	     '</tpl>',   
	        
	    '<tpl if="length == 0">',			
		 	'<div class="errorMsg">Photo not available </div>',
		'</tpl>',
]);


goCampus.views.empPhoto = new Ext.Panel({
    id: 'empPhoto',
    layout: 'fit',
    scroll: 'vertical',
    styleHtmlContent: true,
    dockedItems: [{
        layout: 'fit',
        xtype: 'toolbar',
        title: ' Photo',
        cls: 'small_title',
        ui: 'light'
    }]
});

goCampus.views.empPhotoContainer = new Ext.Panel({
    id: 'empPhotoContainer',
    layout: 'card',
    scroll: 'vertical',
    items: [goCampus.views.empPhoto]
});




function callEmpPhotWS(emplid){
	//alert("emplid"+emplid);
	goCampus.views.empPhoto.update('');
	goCampus.backButton.setHandler(function(){					
		var classRosterContainer = goCampus.views.classRosterContainer;
		goCampus.views.viewport.setActiveItem(classRosterContainer, 
			{ 
				type: 'slide', 
				direction: 'right'
			});
		var backBtn = goCampus.backButton; 
		backBtn.setHandler(function(){                              
            
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
	});       	
	var  empPhotoContainer = goCampus.views.empPhotoContainer;
	goCampus.views.viewport.setActiveItem(empPhotoContainer, { type: 'slide', direction: 'left' });
	
	//loadingMask = new Ext.LoadMask(Ext.getBody(), {msg:"Loading..."});
	//loadingMask.show();
	Ext.util.JSONP.request({
            url: './JsonServlet',
            params: {
               callback: 'callback',
			   ws: 'EP',
			   emplid: emplid
			   
           },
            method: 'GET', 
            callbackKey: 'callback',
            callback: function(result) {    
		  if(result){	
			  
			  //alert("result"+result.empPhoto);
			  goCampus.views.empPhoto.update(''); 
			  goCampus.views.empPhoto.update(empPhotoTpl
						.applyTemplate(result));
			
		  }else{
		  	alert("Error. Server not responding");
		  }                                                                
          //loadingMask.hide();
          }
	});
}
