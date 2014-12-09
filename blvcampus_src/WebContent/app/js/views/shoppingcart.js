var shoppingcarttpl = new Ext.XTemplate([
	  '<tpl for=".">',
	  '<div class="subheader"> {clsnbrdescr} - ({clsnbr}) <img src="app/img/add.png" width="16px" height="16px" align="right" onclick="javascript:callClassSearch();"></div>',
			'<tpl for=".">',
			'<div class="cname">',
			'<div><span class="persinfo">{termdes}</span></div>',
			'<div><span class="persinfo">{acadprogdescr}</span></div>',
				'<div class="shoppingcart3"> TBA,<span class="shoppingcart4">STAFF</span></div>',
     			'<div><span class="persinfo">{units} units</span></div>',
			'</div>',
         	'</div>',
	        '</tpl>',
	'</tpl>'
]);


goCampus.views.shoppingcart = new Ext.Panel({
		id: 'shoppingcart',           
		layout : 'card',
		scroll : 'vertical',
		styleHtmlContent: true,
		dockedItems: [{
		    layout:'fit',
			xtype: 'toolbar',
		    title: 'Shopping Cart',
		    cls:'small_title',
		    ui:'light'
		}]
});


goCampus.views.shoppingContainer = new Ext.Panel({
	    id: 'enrolContainer',           
	    layout : 'card',
	    scroll : 'vertical',
		items: [goCampus.views.shoppingcart]		
});


function callShoppingcartWS(){
	loadingMask = new Ext.LoadMask(Ext.getBody(), {msg:"Loading..."});
	loadingMask.show();
	Ext.util.JSONP.request({
            url: './JsonServlet',
            params: {
               //format: 'json',
               callback: 'callback',
			   ws: 'SC',
			   un: localStorage.getItem('oprid'),
			   pwd: localStorage.getItem('password'),
			   emplid: localStorage.getItem('userid'),
			   institute: localStorage.getItem('institute'),
			   term: localStorage.getItem('currTerm'),
			   career: localStorage.getItem('career'),
			   clsnbr: '1017'
			   //clsnbr: localStorage.getItem('clsnbr')
			   //emplid: 'AA0001'
           },
            method: 'GET', 
            callbackKey: 'callback',
            callback: function(result) {    
		  if(result){
			 // alert("result : "+result);
			  goCampus.views.shoppingcart.update(shoppingcarttpl.applyTemplate(result));
			  var shoppingcart = goCampus.views.shoppingContainer;
			  goCampus.views.viewport.setActiveItem(shoppingcart, { type: 'slide', direction: 'left' });
		  }else{
		  	alert("Error. Server not responding");
		  }                                                                
          loadingMask.hide();
          }
	});
}                   
               