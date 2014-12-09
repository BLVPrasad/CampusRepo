var gradeTpl = new Ext.XTemplate([
                 '<tpl for=".">',
				 	'<tpl if="name">', 
						'<div class="emplname">{name}</div>',
					'</tpl>',
					'<tpl if="emplid">',
						'<span class="persinfo">{emplid}, </span>',
					'</tpl>',
					'<tpl if="term">',
					 	'<span class="persinfo">{term}, </span>',
					'</tpl>',
					'<tpl if="career">',
					 	'<span class="persinfo">{career}</span><br>',
					'</tpl>',
					'<tpl if="className">',					
                      '<div class="cname">',
                      '<tpl if="grade">',                      
					  '<div class="grade">{grade}</div>',
					  '</tpl>',
					  '<tpl if="grade==\'\'">',                      
					  '<div class="grade">-</div>',
					  '</tpl>',
					  '<div class="descr">{className}</div>',
					  
                      '<span class="tertiary">{desc},  </span>',
					  '<span class="subdata_g"><b>{unit}</b> <small>units</small>,  </span>',
					 
					  '</div>',
					'</tpl>',	
					'<tpl if="classTblView==\'\'">',
						'<div class="errorMsg">Grades not available</div>',
					'</tpl>',
                 '</tpl>',
                 '<tpl if="length == 0">',			
				 '<div class="errorMsg">Grades not available</div>',
				 '</tpl>'
               ]);
       
goCampus.views.gradebook = new Ext.Panel({
      id: 'gradeparent',           
      layout : 'fit',
      scroll : 'vertical',
	  styleHtmlContent: true,
      //cls : 'paddingCls',
	  dockedItems: [{
	  	layout:'fit',
	  	xtype: 'toolbar',
        title: 'Grades',
		cls:'small_title',
		ui:'light'
	  }]
});


goCampus.views.gradebookContainer = new Ext.Panel({
      id: 'gradeContainer',           
      layout : 'card',
      scroll : 'vertical',
	  items: [goCampus.views.gradebook],
      //cls : 'paddingCls',
	  dockedItems: [{
	  	layout:'fit',
	  	xtype: 'toolbar',
        dock: 'bottom',
        items: [{
            xtype: 'selectfield',
            name: 'options',
            id:'termopt',
			listeners: {
            	change: {
                    fn: function(){
                    	var term = this.getValue();
                    	
                    	goCampus.views.gradebook.update('');
    					
    					loadingMask = new Ext.LoadMask(Ext.getBody(), {msg:"Loading..."});
    					loadingMask.show();
						callGbookWS(term);
						}
				}
			},
            //options: termoptions
			store:termstore
                /*{text: '1997 Fall',  value: '0290'},
                {text: '1998 Spring', value: '0310'},
                {text: '1998 Fall', value: '0330'},
                {text: '1999 Spring', value: '0350'},
                {text: '1999 Fall', value: '0370'},
                {text: '2000 Fall', value: '0410'},
				{text: '2001 Spring', value: '0430'},
				{text: '2011 Fall', value: '0670'}*/
                
            
        }]
	  }]
});


function callGbookWS(term){
	//alert(termoptions);
	//Ext.getCmp('termopt').setOptions(termoptions);
	Ext.util.JSONP.request({
    						
                              //url: './JsonServlet',
                              url: './jsons/grades.json',
                              /*params: {
                                 format: 'json',
                                 callback: 'callback',
    							 ws: 'G',
    							 emplid: localStorage.getItem('userid'),
    							 career: localStorage.getItem('career'),
    							 institute: localStorage.getItem('institute'),
    							 term : term	 
                             },*/
                             
                              method: 'GET', 
                              callbackKey: 'callback',
                              callback: function(result) {  
                            	 // alert("Result <" + result + ">");
    						  if(result){
    							  
    						  	goCampus.views.gradebook.update(gradeTpl.applyTemplate(result));
    							
    						  }else{
    						  	alert("Error. Server not responding");
    							
    						  }                                                                
                              loadingMask.hide();
                              }
                          });

}