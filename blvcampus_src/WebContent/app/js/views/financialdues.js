var finduesTpl = new Ext.XTemplate([
				'<tpl><h5 style="padding-left:10px">Account Summary</h5></tpl>',
                 '<tpl for=".">',				 
					 '<tpl if="descr254">',
					 	'<div class="cname">', 
	                          '<div>{descr254}</div>',
							  '<div style="padding-left:20px;font-weight:normal">Due: {currdue}</div>',
							  '<div style="padding-left:20px;font-weight:normal">Past Due: {pastdue}</div>',
							  '<div style="color:rgb(85,142,213)">** You have a past balance of {currdue} **</div>',
						'</div>',	
						'<tpl>',				
						'<div class="subfootergrey">Currency used in US Dollars</div>',
						'</tpl>',
						'<div class="subheader">',
								'<div class="cell4">', 
								  '<div class="cell3">',  
								    '<div class="cell2">',  
								      '<div class="cell1">',  
								        '<div class="cell2a">',  
								          '<div class="cell3a">',  
								            '<div class="cell4a">',  
								              'Amount',							
								            '</div>', 
								            'Term',
								          '</div>', 
								          'Due Date',
								        '</div>', 
										'Charge',							        
								      '</div>', 							
								    '</div>', 
								  '</div>', 
								'</div>',						
						'</div>',						                                    
	                 '</tpl>',			
					
					 '<tpl if="descr1">',
					 	'<div class="subheadernobg">',
					 		'<div class="cell4">', 
							  '<div class="cell3">',  
							    '<div class="cell2">',  
							      '<div class="cell1">',  
							        '<div class="cell2a">',  
							          '<div class="cell3a">',  
							            '<div class="cell4a">',  
							              '{amount}',							
							            '</div>', 
							            '{descr1}',
							          '</div>', 
							          '{duedt}',
							        '</div>',
									'{descr}', 							        
							      '</div>', 							
							    '</div>', 
							  '</div>', 
							'</div>',    
					   '</div>',                       
					 '</tpl>',
					 '<tpl if="totaldue">',
					 	'<div class="subheadernobg">',
					 		'<div class="cell4">', 
							  '<div class="cell3">',  
							    '<div class="cell2">',  
							      '<div class="cell1">',  
							        '<div class="cell2a">',  
							          '<div class="cell3a">',  
							            '<div class="cell4a">',  
							              '<b>{totaldue}</b>',							
							            '</div>', 
							            '',
							          '</div>', 
							          '',
							        '</div>',
									'<b>Total Due</b>', 							        
							      '</div>', 							
							    '</div>', 
							  '</div>', 
							'</div>',    
					   	'</div>',
	                 '</tpl>',
				'</tpl>'
				
               ]);


goCampus.views.finduesPanel = new Ext.Panel({
    id: 'finduesPanel',           
    layout : 'fit',
    scroll : 'vertical',
        styleHtmlContent: true,
        listeners:{
                  activate : function()
                  {         
                        goCampus.views.finduesPanel.update('');
                        loadingMask = new Ext.LoadMask(Ext.getBody(), {msg:"Loading..."});
                        loadingMask.show();
                        callFinaidWS();
                  },        
              scope:this
          },
          
    dockedItems: [{
            layout:'fit',
            xtype: 'toolbar',
      title: 'Student Financial : Payment Dues',
            cls:'small_title',
            ui:'light'
        }]
});


function callFinaidWS(){
      Ext.util.JSONP.request({
                                    
                              //url: './JsonServlet',
                              url: './jsons/financialdues.json',
                              /*params: {
                                 format: 'json',
                                 callback: 'callback',
                                           ws: 'F',
                                           emplid: localStorage.getItem('userid'),
                                           institute: localStorage.getItem('institute')
                             },*/
                             
                              method: 'GET', 
                              callbackKey: 'callback',
                              callback: function(result) {    
                                      if(result){
                                                
                                            goCampus.views.finduesPanel.update(finduesTpl.applyTemplate(result));
                                          
                                      }else{
                                          alert("Error. Server not responding");
                                          
                                      }                                                                
                              loadingMask.hide();
                              }
                          });
}
