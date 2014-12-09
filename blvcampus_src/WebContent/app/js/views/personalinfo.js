var addrinfoTpl = new Ext.XTemplate([
                                      '<tpl for=".">',                        
                                           '<tpl if="lname">',
                                           		'<span class="photo_r" style="background-image: url(app/img/icon_photo01.png)" onclick="getPhoto()"></span>',
                                             	'<div class="emplname">{lname} {fname}</div>', 
                                             	'<br>',
                                             	'<tpl if="homeaddress1">',
	                                                     '<div class="subheader">Home </div>',
	                                                     '<div class="cname">',
	                                                     '<div class="persinfoRow"><span class="persinfo"> {homeaddress1}</span></div>',
	                                                     '<div class="persinfoRow"><span class="persinfo"> {homeaddress2}</span></div>',
	                                                     '<div class="persinfoRow"><span class="persinfo"> {homeaddress3}</span></div>',
	                                                     ' </div>',
                                                '</tpl>', 
                                                '<tpl if="mailaddress1">',
	                                                    '<div class="subheader">Mailing <input class="updateBtnCls" style="float:right" value="Update" type="button" onclick="editAddr(\'MAIL\')"></div>',
	                                                    '<div class="cname">',
	                                                    '<div class="persinfoRow"><span class="persinfo"> {mailaddress1}</span></div>',
	                                                    '<div class="persinfoRow"><span class="persinfo"> {mailaddress2}</span></div>',
	                                                    '<div class="persinfoRow"><span class="persinfo"> {mailaddress3}</span></div>',
	                                                    ' </div>',
	                                            '</tpl>',
	                                            '<tpl if="billAddress1">',
	                                                    '<div class="subheader">Billing <input class="updateBtnCls" style="float:right" value="Update" type="button" onclick="editAddr(\'BILL\')"></div>',
	                                                    '<div class="cname">',
	                                                    '<div class="persinfoRow"><span class="persinfo"> {billAddress1}</span></div>',
	                                                    '<div class="persinfoRow"><span class="persinfo"> {billAddress2}</span></div>',
	                                                    '<div class="persinfoRow"><span class="persinfo"> {billAddress3}</span></div>',
	                                                    ' </div>',
	                                            '</tpl>', 
	                                            '<tpl if="busnAddress1">',
	                                                    '<div class="subheader">Business <input class="updateBtnCls" style="float:right" value="Update" type="button" onclick="editAddr(\'BUSN\')"></div>',
	                                                    '<div class="cname">',
	                                                    '<div class="persinfoRow"><span class="persinfo"> {busnAddress1}</span></div>',
	                                                    '<div class="persinfoRow"><span class="persinfo"> {busnAddress2}</span></div>',
	                                                    '<div class="persinfoRow"><span class="persinfo"> {busnAddress3}</span></div>',
	                                                    ' </div>',
	                                            '</tpl>', 
	                                            '<tpl if="campusAddress1">',
	                                                    '<div class="subheader">Campus </div>',
	                                                    '<div class="cname">',
	                                                    '<div class="persinfoRow"><span class="persinfo"> {campusAddress1}</span></div>',
	                                                    '<div class="persinfoRow"><span class="persinfo"> {campusAddress2}</span></div>',
	                                                    '<div class="persinfoRow"><span class="persinfo"> {campusAddress3}</span></div>',
	                                                    ' </div>',
	                                            '</tpl>', 
	                                            '<tpl if="checkAddress1">',
	                                                    '<div class="subheader">Check <input class="updateBtnCls" style="float:right" value="Update" type="button" onclick="editAddr(\'CHK\')"></div>',
	                                                    '<div class="cname">',
	                                                    '<div class="persinfoRow"><span class="persinfo"> {checkAddress1}</span></div>',
	                                                    '<div class="persinfoRow"><span class="persinfo"> {checkAddress2}</span></div>',
	                                                    '<div class="persinfoRow"><span class="persinfo"> {checkAddress3}</span></div>',
	                                                    ' </div>',
	                                            '</tpl>', 
	                                            '<tpl if="dormAddress1">',
	                                                    '<div class="subheader">Dormitory <input class="updateBtnCls" style="float:right" value="Update" type="button" onclick="editAddr(\'DORM\')"></div>',
	                                                    '<div class="cname">',
	                                                    '<div class="persinfoRow"><span class="persinfo"> {dormAddress1}</span></div>',
	                                                    '<div class="persinfoRow"><span class="persinfo"> {dormAddress2}</span></div>',
	                                                    '<div class="persinfoRow"><span class="persinfo"> {dormAddress3}</span></div>',
	                                                    ' </div>',
	                                             '</tpl>', 
	                                             '<tpl if="legelAddress1">',
	                                                    '<div class="subheader">Legal <input class="updateBtnCls" style="float:right" value="Update" type="button" onclick="editAddr(\'LEGL\')"></div>',
	                                                    '<div class="cname">',
	                                                    '<div class="persinfoRow"><span class="persinfo"> {legelAddress1}</span></div>',
	                                                    '<div class="persinfoRow"><span class="persinfo"> {legelAddress2}</span></div>',
	                                                    '<div class="persinfoRow"><span class="persinfo"> {legelAddress3}</span></div>',
	                                                    ' </div>',
	                                             '</tpl>', 
	                                             '<tpl if="otherAddress1">',
	                                                    '<div class="subheader">Other <input class="updateBtnCls" style="float:right" value="Update" type="button" onclick="editAddr(\'OTH\')"></div>',
	                                                    '<div class="cname">',
	                                                    '<div class="persinfoRow"><span class="persinfo"> {otherAddress1}</span></div>',
	                                                    '<div class="persinfoRow"><span class="persinfo"> {otherAddress2}</span></div>',
	                                                    '<div class="persinfoRow"><span class="persinfo"> {otherAddress3}</span></div>',
	                                                    '</div>',
	                                             '</tpl>', 
	                                             '<tpl if="otherAddress21">',
	                                                    '<div class="subheader">Other2 <input class="updateBtnCls" style="float:right" value="Update" type="button" onclick="editAddr(\'OTH2\')"></div>',
	                                                    '<div class="cname">',
	                                                    '<div class="persinfoRow"><span class="persinfo"> {otherAddress21}</span></div>',
	                                                    '<div class="persinfoRow"><span class="persinfo"> {otherAddress21}</span></div>',
	                                                    '<div class="persinfoRow"><span class="persinfo"> {otherAddress21}</span></div>',
	                                                    ' </div>',
	                                             '</tpl>', 
	                                             '<tpl if="permAddress1">',
	                                                    '<div class="subheader">Permanent <input class="updateBtnCls" style="float:right" value="Update" type="button" onclick="editAddr(\'PERM\')"></div>',
	                                                    '<div class="cname">',
	                                                    '<div class="persinfoRow"><span class="persinfo"> {permAddress1}</span></div>',
	                                                    '<div class="persinfoRow"><span class="persinfo"> {permAddress2}</span></div>',
	                                                    '<div class="persinfoRow"><span class="persinfo"> {permAddress3}</span></div>',
	                                                    ' </div>',
	                                             '</tpl>', 
	                                             '<tpl if="prefAddress1">',
	                                                    '<div class="subheader">Preferred <input class="updateBtnCls" style="float:right" value="Update" type="button" onclick="editAddr(\'PREF\')"></div>',
	                                                    '<div class="cname">',
	                                                    '<div class="persinfoRow"><span class="persinfo"> {prefAddress1}</span></div>',
	                                                    '<div class="persinfoRow"><span class="persinfo"> {prefAddress2}</span></div>',
	                                                    '<div class="persinfoRow"><span class="persinfo"> {prefAddress3}</span></div>',
	                                                    '</div>',
	                                             '</tpl>', 
	                                             '<tpl if="veteranAddress1">',
	                                                    '<div class="subheader">Veteran <input class="updateBtnCls" style="float:right" value="Update" type="button" onclick="editAddr(\'VTRN\')"></div>',
	                                                    '<div class="cname">',
	                                                    '<div class="persinfoRow"><span class="persinfo"> {veteranAddress1}</span></div>',
	                                                    '<div class="persinfoRow"><span class="persinfo"> {veteranAddress2}</span></div>',
	                                                    '<div class="persinfoRow"><span class="persinfo"> {veteranAddress3}</span></div>',
	                                                    ' </div>',
	                                             '</tpl>', 
                                           '</tpl>',
                                       '</tp1'
                             ]);

var phoneinfoTpl = new Ext.XTemplate([
                                         '<tpl for=".">',                        
                                              '<tpl if="lname">',
                                                	'<div class="emplname">{lname} {fname}</div>', 
                                                	'<tpl if="busiphone">',
	                                                     '<div class="subheader">Business <input class="updateBtnCls" style="float:right" value="Update" type="button" onclick="editPhone(\'BUSN\')"></div>',
	                                                     '<div class="cname">',
	                                                     '<div class="persinfoRow"><span class="persinfo"> {busiphone}</span></div>',
	                                                     ' </div>',
                                                    '</tpl>', 
                                                    '<tpl if="campphone">',
	                                                    '<div class="subheader">Campus</div>',
	                                                    '<div class="cname">',
	                                                    '<div class="persinfoRow"><span class="persinfo"> {campphone}</span></div>',
	                                                    ' </div>',
	                                                '</tpl>',
	                                                '<tpl if="cellphn">',
	                                                    '<div class="subheader">Cell <input class="updateBtnCls" style="float:right" value="Update" type="button" onclick="editPhone(\'CELL\')"></div>',
	                                                    '<div class="cname">',
	                                                    '<div class="persinfoRow"><span class="persinfo"> {cellphn}</span></div>',
	                                                    ' </div>',
                                                    '</tpl>',
                                                    '<tpl if="dormphn">',
                                                    '<div class="subheader">Dormitory <input class="updateBtnCls" style="float:right" value="Update" type="button" onclick="editPhone(\'DORM\')"></div>',
                                                    '<div class="cname">',
                                                    '<div class="persinfoRow"><span class="persinfo"> {dormphn}</span></div>',
                                                    ' </div>',
	                                               '</tpl>', 
	                                               '<tpl if="fax">',
	                                                   '<div class="subheader">Fax <input class="updateBtnCls" style="float:right" value="Update" type="button" onclick="editPhone(\'FAX\')"></div>',
	                                                   '<div class="cname">',
	                                                   '<div class="persinfoRow"><span class="persinfo"> {fax}</span></div>',
	                                                   ' </div>',
	                                               '</tpl>',
	                                               '<tpl if="homephone">',
	                                                   '<div class="subheader">Home <input class="updateBtnCls" style="float:right" value="Update" type="button" onclick="editPhone(\'HOME\')"></div>',
	                                                   '<div class="cname">',
	                                                   '<div class="persinfoRow"><span class="persinfo"> {homephone}</span></div>',
	                                                   ' </div>',
	                                               '</tpl>',
	                                               '<tpl if="mainphn">',
	                                               '<div class="subheader">Main <input class="updateBtnCls" style="float:right" value="Update" type="button" onclick="editPhone(\'MAIN\')"></div>',
	                                               '<div class="cname">',
	                                               '<div class="persinfoRow"><span class="persinfo"> {mainphn}</span></div>',
	                                               ' </div>',
		                                          '</tpl>', 
		                                          '<tpl if="otherphn">',
		                                              '<div class="subheader">Other <input class="updateBtnCls" style="float:right" value="Update" type="button" onclick="editPhone(\'OTR\')"></div>',
		                                              '<div class="cname">',
		                                              '<div class="persinfoRow"><span class="persinfo"> {otherphn}</span></div>',
		                                              ' </div>',
		                                          '</tpl>',
		                                          '<tpl if="pager1">',
		                                              '<div class="subheader">Pager1 <input class="updateBtnCls" style="float:right" value="Update" type="button" onclick="editPhone(\'PRGR1\')"></div>',
		                                              '<div class="cname">',
		                                              '<div class="persinfoRow"><span class="persinfo"> {pager1}</span></div>',
		                                              ' </div>',
		                                          '</tpl>',
		                                          '<tpl if="pager2">',
		                                          '<div class="subheader">Pager2 <input class="updateBtnCls" style="float:right" value="Update" type="button" onclick="editPhone(\'PGR2\')"></div>',
		                                          '<div class="cname">',
		                                          '<div class="persinfoRow"><span class="persinfo"> {pager2}</span></div>',
		                                          ' </div>',
			                                     '</tpl>', 
			                                     '<tpl if="telex">',
			                                         '<div class="subheader">Telex <input class="updateBtnCls" style="float:right" value="Update" type="button" onclick="editPhone(\'TELX\')"></div>',
			                                         '<div class="cname">',
			                                         '<div class="persinfoRow"><span class="persinfo"> {telex}</span></div>',
			                                         ' </div>',
			                                     '</tpl>',
			                                     '<tpl if="workphn">',
			                                         '<div class="subheader">Work <input class="updateBtnCls" style="float:right" value="Update" type="button" onclick="editPhone(\'WORK\')"></div>',
			                                         '<div class="cname">',
			                                         '<div class="persinfoRow"><span class="persinfo"> {workphn}</span></div>',
			                                         ' </div>',
			                                     '</tpl>',
			                                   
                                              '</tpl>',
                                          '</tp1'
                                ]);

var emailinfoTpl = new Ext.XTemplate([
                                      '<tpl for=".">',                        
                                           '<tpl if="lname">',
                                             	'<div class="emplname">{lname} {fname}</div>', 
                                             	'<tpl if="bbemail">',
	                                                     '<div class="subheader">Blackberry <input class="updateBtnCls" style="float:right" value="Update" type="button" onclick="editEmail(\'BB\')"></div>',
	                                                     '<div class="cname">',
	                                                     '<div class="persinfoRow"><span class="persinfo"><a href="mailto:{emailid}"> {bbemail}</a></span></div>',
	                                                     ' </div>',
                                                '</tpl>', 
                                                '<tpl if="bsnemail">',
	                                                    '<div class="subheader">Business <input class="updateBtnCls" style="float:right" value="Update" type="button" onclick="editEmail(\'BUS\')"></div>',
	                                                    '<div class="cname">',
	                                                    '<div class="persinfoRow"><span class="persinfo"><a href="mailto:{emailid}"> {bsnemail}</a></span></div>',
	                                                    ' </div>',
                                                '</tpl>',
                                                '<tpl if="homeemail">',
	                                                    '<div class="subheader">Home <input class="updateBtnCls" style="float:right" value="Update" type="button" onclick="editEmail(\'HOME\')"></div>',
	                                                    '<div class="cname">',
	                                                    '<div class="persinfoRow"><span class="persinfo"><a href="mailto:{emailid}"> {homeemail}</a></span></div>',
	                                                    ' </div>',
                                                '</tpl>',
	                                            '<tpl if="otheremail">',
		                                                '<div class="subheader">Other <input class="updateBtnCls" style="float:right" value="Update" type="button" onclick="editEmail(\'OTH\')"></div>',
		                                                '<div class="cname">',
		                                                '<div class="persinfoRow"><span class="persinfo"><a href="mailto:{emailid}"> {otheremail}</a></span></div>',
		                                                 ' </div>',
                                                '</tpl>',
                                                
                                                '<tpl if="workemail">',
                                            			'<div class="subheader">Work <input class="updateBtnCls" style="float:right" value="Update" type="button" onclick="editEmail(\'WORK\')"></div>',
		                                            	'<div class="cname">',
		                                            	'<div class="persinfoRow"><span class="persinfo"><a href="mailto:{dormemail}"> {workemail}</a></span></div>',
		                                            	'</div>',
		                                        '</tpl>',
	                                                 
	                                            '<tpl if="campemail">',
	                                                	'<div class="subheader">Campus </div>',
	                                                	'<div class="cname">',
	                                                	'<div class="persinfoRow"><span class="persinfo"><a href="mailto:{campemail}"> {campemail}</a></span></div>',
	                                                	' </div>',
                                                '</tpl>',
                                             
                                                '<tpl if="dormemail">',
	                                                	'<div class="subheader">Dormitory <input class="updateBtnCls" style="float:right" value="Update" type="button" onclick="editEmail(\'DORM\')"></div>',
	                                                	'<div class="cname">',
	                                                	'<div class="persinfoRow"><span class="persinfo"><a href="mailto:{dormemail}"> {dormemail}</a></span></div>',
	                                                	'</div>',
                                                '</tpl>',
                                           '</tpl>',
                                       '</tp1'
                             ]);

var segbtn = new Ext.SegmentedButton({
    layout: {
       type : 'hbox',
       pack : 'center',
       align: 'stretchmax'
   },
   width: '100%',
   defaults: {flex:1},
   id: 'segBtn',
   allowMultiple: false,
   //activeItem: 0,
   items: [
       {
          text: 'Address',
           //width:'100%',
           //labelWidth : '100%',
          id: 'addressItem',
           modal: true,
           
           handler: getAddrInfo
           
       },
       {
           text   : 'Phone',
           //width:'100%',
           //labelWidth :'100%',
           modal: true,
           handler: getPhoneInfo
       },
       {
           text   : 'Email',
           //width:'100%',
           //labelWidth :'100%',
           modal: true,
           handler: getEmailInfo
       }
   ]
});

goCampus.views.persinfosegtoolbar = new Ext.Toolbar({
	layout: { pack: 'center' },
	 cls:'small_title',	 
	 ui:'light',
	 align: 'stretchmax',
	 style: 'width: 100%',
	 items:[segbtn]
});

goCampus.views.personalinfoPanel = new Ext.Panel({
    id: 'personalinfoPanel',           
    layout : 'fit',
    scroll : 'vertical',
    styleHtmlContent: true,       
    dockedItems: [{
        layout:'fit',
        xtype: 'toolbar',
        title: 'My Page',
        cls:'small_title',
        ui:'light'
       
	},goCampus.views.persinfosegtoolbar]
});


function callpersonalinfoWS(type){
	
  loadingMask = new Ext.LoadMask(Ext.getBody(), {
        msg : "Loading..."
  });
  loadingMask.show();
  Ext.Ajax.request({

        //url : './JsonServlet',
	  	url: './jsons/personaldetail.json',
	  	/*params : {
              //format : 'json',
              callback: 'callback',
              ws: 'PD',
              emplid: localStorage.getItem('userid')
        },*/
        method : 'GET',
        success: function ( result, request ) {
                            
              var onlyjson = result.responseText.substring(10,result.responseText.length-3);
              var jsonData = Ext.util.JSON.decode(onlyjson);
            
              Ext.StoreMgr.clear('persinfo');                                         
              persinfostore.removeAll();
              persinfostore.add(jsonData);             
              /*goCampus.views.personalinfoPanel.update(personalinfoTpl
                          .applyTemplate(jsonData));*/
              if(type=='address'){            	  
            	  goCampus.views.persinfosegtoolbar.getComponent('segBtn').setPressed(0);
            	  getAddrInfo();
              }else if(type=='phone'){
            	  getPhoneInfo();
              }else if(type=='email'){
            	  getEmailInfo();
              }             
        
              loadingMask.hide();
       },
       failure: function ( result, request ) {
              alert("Error. Server not responding");
       }

  });
}

function getAddrInfo(){
	var dataArr = [];
	for (i = 0; i < persinfostore.getCount(); i++) {
        
		dataArr.push(persinfostore.getAt(i).data);
       	 
    }	
	//goCampus.views.persinfosegtoolbar.getComponent('segBtn').setPressed(0);
	goCampus.views.personalinfoPanel.update(addrinfoTpl
			.applyTemplate(dataArr));
}

function getPhoneInfo(){
	var dataArr = [];
	for (i = 0; i < persinfostore.getCount(); i++) {
        
		dataArr.push(persinfostore.getAt(i).data);
       	 
    }
	//goCampus.views.persinfosegtoolbar.getComponent('segBtn').setPressed(1);
	goCampus.views.personalinfoPanel.update(phoneinfoTpl
			.applyTemplate(dataArr));
}

function getEmailInfo(){
	var dataArr = [];
	for (i = 0; i < persinfostore.getCount(); i++) {
        
		dataArr.push(persinfostore.getAt(i).data);
       	 
    }
	//goCampus.views.persinfosegtoolbar.getComponent('segBtn').setPressed(2);
	goCampus.views.personalinfoPanel.update(emailinfoTpl
			.applyTemplate(dataArr));
}

function editAddr(addrType){	
	Ext.getCmp('addrtype').setValue(addrType);
	//Ext.getCmp('addrType').setText("Home");
	var addressPanel = goCampus.views.addressPanel;
	goCampus.views.viewport.setActiveItem(addressPanel, { type: 'slide', direction: 'left' });
}

function editPhone(phoneType){	
	Ext.getCmp('phonetype').setValue(phoneType);
	//Ext.getCmp('addrType').setText("Home");
	var phonePanel = goCampus.views.phonePanel;
	goCampus.views.viewport.setActiveItem(phonePanel, { type: 'slide', direction: 'left' });
}

function editEmail(emailType){	
	Ext.getCmp('emailtype').setValue(emailType);
	var emailPanel = goCampus.views.emailPanel;
	goCampus.views.viewport.setActiveItem(emailPanel, { type: 'slide', direction: 'left' });
}

function getPhoto(){
	//alert("emplid"+emplid);
	goCampus.backButton.setHandler(function(){					
		var  personalinfoPanel = goCampus.views.personalinfoPanel;		                                                        
        goCampus.views.viewport.setActiveItem(personalinfoPanel, { type: 'slide', reverse: true });
		var backBtn = goCampus.backButton; 
		backBtn.setHandler(backHome);
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
			   emplid: localStorage.getItem('userid')
			   
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