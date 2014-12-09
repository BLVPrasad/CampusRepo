var gradeRosterPostTpl = new Ext.XTemplate([
       '<tpl for=".">',
             '<div class="appstatemplname">My Applications</div>',
             '<div class="cname">',
                   '<div><span class="appsubtitle">(App.No.{descLong})</span> </div>',
                   '<div class="rowDiv"><span class="applicationstatus"> {descLong}</span></div>',
                   '<div class="rowDiv"><span class="applicationstatusdate">App.Date - {descLong}</span></div>',
             '</div>',
             '<div class="tertiary">This Application is {descLong}</div>',
       '</tpl>'
]);


goCampus.views.gradeRosterPost = new Ext.Panel({
      id: 'gradeRosterPost',           
      layout : 'fit',
      scroll : 'vertical',
      styleHtmlContent: true,
      dockedItems: [{
                        layout:'fit',
                        id: 'gradeRoster_Post',
                        xtype: 'toolbar',
                        title: 'Grade Roster Post',
                        cls:'small_title',
                        ui:'light'
                    }] 
        
});


function callGradeRosterPostWS(){
      loadingMask = new Ext.LoadMask(Ext.getBody(), {msg:"Loading..."});
      loadingMask.show();
      Ext.util.JSONP.request({
            url: './JsonServlet',
            params: {
               format: 'json',
               callback: 'callback',
                     ws: 'GRP',
                     emplid: localStorage.getItem('userid')
           },
            method: 'GET', 
            callbackKey: 'callback',
            callback: function(result) {    
		        if(result){
		                goCampus.views.gradeRosterPost.update(gradeRosterPostTpl.applyTemplate(result));
		                
		        }else{
		              alert("Error. Server not responding");
		        }                                                                
	            loadingMask.hide();
            }
      });
}
