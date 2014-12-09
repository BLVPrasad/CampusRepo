function callEmpPhotWS1(emplid){
	goCampus.views.empPhoto.update('');
    goCampus.backButton.setHandler(function(){                              
          var facultyAdvisee = goCampus.views.facultyAdvisee;
          goCampus.views.viewport.setActiveItem(facultyAdvisee, 
                { 
                      type: 'slide', 
                      direction: 'right'
                });
          var backBtn = goCampus.backButton; 
          backBtn.setHandler(backHome);
    }); 
    var  empPhotoContainer = goCampus.views.empPhotoContainer;
    goCampus.views.viewport.setActiveItem(empPhotoContainer, { type: 'slide', direction: 'left' });

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
	    	  	goCampus.views.empPhoto.update(''); 
	            goCampus.views.empPhoto.update(empPhotoTpl
	                            .applyTemplate(result));
	          
	      }else{
	          alert("Error. Server not responding");
	      }                                                                
	    }
	});
}


var adviseeTpl = new Ext.XTemplate([
'<div class="emplname">My Advisees</div>',
	   '<br>',
       '<tpl for=".">',             
             '<div class="subheadernobg">',
             	   '<span class="photo_r" style="background-image: url(app/img/icon_photo01.png)" onclick="callEmpPhotWS1(\'{emplid}\')"></span>',
                   '<div class="classenlistfcolor">{name52} ({emplid})</div>',
                   '<div class="classenlisttofcolor">{descr4}</div>',
             '</div>',
       '</tpl>'
]);


goCampus.views.facultyAdvisee = new Ext.Panel({
      id: 'facAdvisee',           
      layout : 'fit',
      scroll : 'vertical',
        styleHtmlContent: true,
        dockedItems: [{
                        layout:'fit',
                        id: 'advisee',
                        xtype: 'toolbar',
                        title: 'Faculty Advisee',
                        cls:'small_title',
                        ui:'light'
                    }] 
});


function callMyadviseeWS(){
      loadingMask = new Ext.LoadMask(Ext.getBody(), {msg:"Loading..."});
      loadingMask.show();
      Ext.util.JSONP.request({
            url: './JsonServlet',
            params: {
               format: 'json',
               callback: 'callback',
                     ws: 'MA',
                     emplid: localStorage.getItem('userid'),
                     //emplid: 'AA0002',
                     institute : 'PSUNV'    
           },
            method: 'GET', 
            callbackKey: 'callback',
            callback: function(result) {    
              if(result){
                    goCampus.views.facultyAdvisee.update(adviseeTpl.applyTemplate(result));
                    
              }else{
                  alert("Error. Server not responding");
              }                                                                
          loadingMask.hide();
          }
      });
}
