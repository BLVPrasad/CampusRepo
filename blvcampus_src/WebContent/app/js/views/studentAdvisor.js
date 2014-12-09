
var advisorTpl = new Ext.XTemplate([
            '<tpl for=".">',
                  '<div class="emplname">My Advisors</div>',
                  '<br>',
                  '<div class="cname">',
	                  '<span class="rostername">{name}</span>',
	                  '<div class="persinfo">{descr1}</div>',
	                  '<div class="persinfo">{descr}</div>',
	                  '<div class="venueinfo"> <a href="callto:{phone}">{phone}</a></div>',
                  '</div>',
            '</tpl>'
     ]);

goCampus.views.studentAdvisor = new Ext.Panel({
      id: 'stdAdvisor',           
      layout : 'fit',
      scroll : 'vertical',
	  styleHtmlContent: true,
      dockedItems: [{
			  	layout:'fit',
				id: 'advisor',
			  	xtype: 'toolbar',
			  	title: 'Advisor',
				cls:'small_title',
				ui:'light'
			  }] 
	  
});


function callAdvisorWS(){
	loadingMask = new Ext.LoadMask(Ext.getBody(), {msg:"Loading..."});
	loadingMask.show();
	Ext.util.JSONP.request({
            //url: './JsonServlet',
            url: './jsons/stdadvisors.json',
            /*params: {
               format: 'json',
               callback: 'callback',
			   ws: 'SA',
			   emplid: localStorage.getItem('userid')
           },*/
            method: 'GET', 
            callbackKey: 'callback',
            callback: function(result) {    
		  if(result){
			  goCampus.views.studentAdvisor.update(advisorTpl.applyTemplate(result));
			  
		  }else{
		  	alert("Error. Server not responding");
		  }                                                                
          loadingMask.hide();
          }
	});
}
