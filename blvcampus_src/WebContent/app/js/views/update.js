//goCampus.updateList = new Ext.List({
//	id:'updateList',
//	ui:'round',
//	useLoadMask:true,
//	store: updateStore,
//	itemTpl: '{title}',
//	cls : 'paddingCls',
//	onItemDisclosure: function(record){
//	}
//});
//
//
//
//goCampus.views.updatePanel = new Ext.Panel({
//    id: 'updatePanel',           
//    layout : 'fit',
//    scroll : 'vertical',
//    styleHtmlContent: true,
//    items:[  goCampus.updateList ],
//	dockedItems: [{
//        layout:'fit',
//        xtype: 'toolbar',
//        title: 'Edit Page',
//        cls:'small_title',
//        ui:'light'
//	}]    
//});


goCampus.views.addressPanel = new Ext.Panel({
    id: 'addressPanel',           
   // layout : 'fit',
    scroll : 'vertical',
    items: [{
	    /*xtype : 'fieldset',	    
	    //cls : 'paddingCls',
*/	    		title: 'Update',
				xtype: 'form',
				id: 'updateform',
				//scroll: 'vertical',
    			items : [{
    					xtype : 'fieldset',
    					items: [
								{
								    xtype: 'selectfield',
								    name: 'addrtype',
								    label: 'Type',
								    id:'addrtype',
									 listeners: {
								    	change: {
								            fn: function(){
								            	var choice = this.getValue();	 					
												}
										}
										},
								   store: addresstypestore,
								   disabled: true
								},
								{
								   xtype: 'textfield',
								   id: 'address1',
								   label: 'Address',			        
								   useClearIcon: true
								},
								{
								   xtype: 'textfield',
								   id: 'city',
								   label: 'City ',
								   useClearIcon: true
								},{
								   xtype: 'textfield',
								   id: 'state',
								   label: 'State',
								   useClearIcon: true
								},{
								   xtype: 'textfield',
								   id: 'country',
								   label: 'Country',
								   useClearIcon: true
								},{
								   xtype: 'textfield',
								   id: 'postal',
								   label: 'Postal',
								   useClearIcon: true
								}]
    			}]
   }],
   dockedItems: [{
        layout:'fit',
        xtype: 'toolbar',
        title: 'Edit Address',
        cls:'small_title',
        ui:'light',
        items : [
        {xtype: 'spacer'},
        {
        	xtype : 'button',
        	text : ' Save ',
        	ui : 'round',
   	        handler: function() {
   	        	
   	        	var addressList = [];
   	        	var addresstype = Ext.getCmp('addrtype').getValue();
   	        	var address1 = Ext.getCmp('address1').getValue();
   	        	var city = Ext.getCmp('city').getValue();
   	        	var state = Ext.getCmp('state').getValue();
   	        	var country = Ext.getCmp('country').getValue();
   	        	var postal = Ext.getCmp('postal').getValue();
   	        	
   	        	addressList.push(addresstype);
   	        	addressList.push(address1);
   	        	addressList.push(city);
   	        	addressList.push(state);
   	        	addressList.push(country);
   	        	addressList.push(postal);
   	        	
   	        	callUpdateWS("address",addressList);
   	        	
   	        }
       },
       {
	       	xtype : 'button',
	       	text : ' Cancel ',
	       	ui : 'round',
   	        handler: cancelAddressFn
      }]
	}]
});


goCampus.views.phonePanel = new Ext.Panel({
    id: 'phonePanel',           
    layout : 'fit',
    scroll : 'vertical',
    items: [{
	    xtype : 'fieldset',
	    cls : 'paddingCls',
	    items : [{
	             xtype: 'selectfield',
	             name: 'options',
	             label: 'Type',
	             id: 'phonetype',
	 			 listeners: {
	             	change: {
	                     fn: function(){
	                     	var choice = this.getValue();
	                     	
	                     
	 					
	 						}
	 					}
	 			 	},
	             store: phonetypestore,
	             disabled: true
				},
				{
				    xtype: 'numberfield',
				    name: 'case',
				    label: 'Phone',
				    id: 'phone',
				    maxLength: 10,
				    useClearIcon: true
				},
				{
		             xtype: 'selectfield',
		             name: 'options',
		             label: 'Preferred',
		             id:'phonepref',
		 			 listeners: {
		             	change: {
		                     fn: function(){
		                     	var choice = this.getValue();		 						}
		 					}
		 			 	},
		             options: [
		                       {text: "Yes", value: "Y"},
		                       {text: "No", value: "N"},
		                       ]
				}]
   }],
   dockedItems: [{
        layout:'fit',
        xtype: 'toolbar',
        title: 'Edit Phone',
        cls:'small_title',
        ui:'light',
        items : [
        {xtype: 'spacer'},
        {
        	xtype : 'button',
        	text : ' Save ',
        	ui : 'round',
   	        handler: function() {
   	        	
   	        	var phoneList = [];
   	        	var phonetype = Ext.getCmp('phonetype').getValue();
   	        	var phone = Ext.getCmp('phone').getValue();
   	        	var preferred = Ext.getCmp('phonepref').getValue();
   	        	
   	        	phoneList.push(phonetype);
   	        	phoneList.push(phone);
   	        	phoneList.push(preferred);
   	        	   	        	   	        	
   	        	callUpdateWS("phone",phoneList);
   	        	
   	        }
       },
       {
	       	xtype : 'button',
	       	text : ' Cancel ',
	       	ui : 'round',
   	        handler: cancelPhoneFn
      }]
	}]
});

goCampus.views.emailPanel = new Ext.Panel({
    id: 'emailPanel',           
    layout : 'fit',
    scroll : 'vertical',
    items: [{
	    xtype : 'fieldset',
	    cls : 'paddingCls',	    
	    items : [{
	             xtype: 'selectfield',
	             id: 'emailtype',
	             name: 'options',
	             label: 'Type',
	 			 listeners: {
	             	change: {
	                     fn: function(){
	                     	var choice = this.getValue();	 					
	 						}
	 					}
	 			 	},
	             store: emailtypestore,
	             disabled: true
				},
				{
			        xtype: 'emailfield',
			        id: 'emailid',
			        name: 'email',
			        label: 'Email',			        
			        useClearIcon: true
			    },
			    {
			        xtype: 'selectfield',
			        id:'empref',
			        name: 'options',
			        label: 'Preferred',
					 listeners: {
			        	change: {
			                fn: function(){
			                	var choice = this.getValue();		 						}
							}
					 	},
			        options: [
			                  {text: "Yes", value: "Y"},
			                  {text: "No", value: "N"},
			                  ]
				}]
  }],
   dockedItems: [{
        layout:'fit',
        xtype: 'toolbar',
        title: 'Edit E-mail',
        cls:'small_title',
        ui:'light',
        items : [
        {xtype: 'spacer'},
        {
        	xtype : 'button',
        	text : ' Save ',
        	ui : 'round',
   	        handler: function() {
   	        	
   	        	var emailList = [];
   	        	var emailtype = Ext.getCmp('emailtype').getValue();
   	        	var emailid = Ext.getCmp('emailid').getValue();
   	        	var preferred = Ext.getCmp('empref').getValue();
   	        	
   	        	emailList.push(emailtype);
   	        	emailList.push(emailid);
   	        	emailList.push(preferred);
   	        	   	        	
   	        	callUpdateWS("email",emailList);	        	
   	        	   	        	
   	        }
       },
       {
	       	xtype : 'button',
	       	text : ' Cancel ',
	       	ui : 'round',
   	        handler: cancelEmailFn       		
      }]
	}]
});


function callUpdateWS(type,arr){
	loadingMask = new Ext.LoadMask(Ext.getBody(), {
		msg : "Loading..."
	});
	loadingMask.show();
	var pertype = type;
	Ext.util.JSONP.request({

		url : './JsonServlet',
		params : {
			format : 'json',
			callback: 'callback',
			ws: 'UPD',
			emplid: localStorage.getItem('userid'),
			type: type,
			data: arr
		},

		method : 'GET',
		callbackKey : 'callback',
		callback : function(result) {

			if (result) {
				/*goCampus.views.personalinfoPanel.update(personalinfoTpl
						.applyTemplate(result));*/
				
					var backBtn = goCampus.backButton; 
						backBtn.setHandler(backHome);
						setTimeout("showPersInfoPage();",8000);			 						
						setTimeout("callpersonalinfoWS('"+ pertype +"');",8000);
						if(pertype=='phone'){
							setTimeout("Ext.Msg.show({title:'Updated Successfully',msg:'Phone Details are successfully updated',buttons: Ext.Msg.YESNOCANCEL})",5000);
						}else if(pertype=='address'){
							setTimeout("Ext.Msg.show({title:'Updated Successfully',msg:'Address Details are successfully updated',buttons: Ext.Msg.YESNOCANCEL})",5000);
						}else if(pertype=='email'){
							setTimeout("Ext.Msg.show({title:'Updated Successfully',msg:'Email Details are successfully updated',buttons: Ext.Msg.YESNOCANCEL})",5000);
						}
						
			} else {
				alert("Error. Server not responding");

			}
			//setTimeout("loadingMask.hide();",8000);
			
		}
	});
}


function showPersInfoPage(){
	var personalinfoPanel = goCampus.views.personalinfoPanel;
		goCampus.views.viewport.setActiveItem(personalinfoPanel, 
			{ 
				type: 'slide', 
				reverse: true
			});
}

function cancelEmailFn(){
	showPersInfoPage();
	var backBtn = goCampus.backButton; 
		backBtn.setHandler(backHome);	
		getEmailInfo();	
		goCampus.views.persinfosegtoolbar.getComponent('segBtn').setPressed(2);
}

function cancelPhoneFn(){
	showPersInfoPage();
	var backBtn = goCampus.backButton; 
		backBtn.setHandler(backHome);	
		getPhoneInfo();	
		goCampus.views.persinfosegtoolbar.getComponent('segBtn').setPressed(1);
}

function cancelAddressFn(){
	showPersInfoPage();
	var backBtn = goCampus.backButton; 
		backBtn.setHandler(backHome);	
		getAddrInfo();	
		goCampus.views.persinfosegtoolbar.getComponent('segBtn').setPressed(0);
}