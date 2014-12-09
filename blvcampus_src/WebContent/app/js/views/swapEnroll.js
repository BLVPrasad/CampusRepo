var swapEnrolTpl = new Ext.XTemplate([
    '<tpl for=".">',
    '<div class="subheader"> <font color="red">Swap this Class </font></div>', 
    '<div class="subheader"> {subject} - {catno} - {section} ({classno})</div>',       
     		'<tpl if="desc">',			
     			'<div class="cname">',
     			'<div class="datetime">',
         			'<div>{sdate} To {edate} <br> <big>{mstarttime} - {mendtime}</big></div>',
         			'<div class="days">',
     				'<span class="paddingCls2" <tpl if="sun==\'Y\'">style="color:#FFFFFF;font-weight:bold;background-color:rgb(79,98,40)"</tpl>>S</span>',
     				'<span class="paddingCls2" <tpl if="mon==\'Y\'">style="color:#FFFFFF;font-weight:bold;background-color:rgb(79,98,40)"</tpl>>M</span>',
     				'<span class="paddingCls2" <tpl if="tue==\'Y\'">style="color:#FFFFFF;font-weight:bold;background-color:rgb(79,98,40)"</tpl>>T</span>',
     				'<span class="paddingCls2" <tpl if="wed==\'Y\'">style="color:#FFFFFF;font-weight:bold;background-color:rgb(79,98,40)"</tpl>>W</span>',
     				'<span class="paddingCls2" <tpl if="thurs==\'Y\'">style="color:#FFFFFF;font-weight:bold;background-color:rgb(79,98,40)"</tpl>>Th</span>',
     				'<span class="paddingCls2" <tpl if="fri==\'Y\'">style="color:#FFFFFF;font-weight:bold;background-color:rgb(79,98,40)"</tpl>>F</span>',
     				'<span class="paddingCls2" <tpl if="sat==\'Y\'">style="color:#FFFFFF;font-weight:bold;background-color:rgb(79,98,40)"</tpl>>Sa</span></div>',
 				'</div>',
     			'<div class="descr">{desc}</div>',
     				'<div><span class="persinfo">{facuname}</span></div>',
     				'<br>',
     				'<tpl if="bldgdescr">',
     					'<div><span class="venueinfo">{bldgdescr} ({room}) </span></div>',
     				'</tpl>',
    				
     				'</div>',
     		'</tpl>',
    '<br><div class="subheader"><font color="red"> With this Class </font> </div>', 		
	'</tpl>',
	'<tpl if="length == 0">',			
	'<div class="errorMsg">Class Schedule is not available</div>',
	'</tpl>'
]);



goCampus.views.htmlPanel = new Ext.Panel({
	id: 'htmlPanel',           
	//layout : 'fit',
	//scroll : 'vertical',
	styleHtmlContent: true,
	//html : '<input type="radio", value="Shopping cart">Shopping Cart<br><input type="radio", value="Class number">Class Number'
	html : '<img src="app/img/shopping-cart.png" width="55px" height="55px" align="right" onclick="javascript:callClassSearch();"><span class="descr">Shopping Cart</span><br><br>'
			+ '<input type="text" align="right"><span class="descr"> Class Number</span><br><br>'
});

goCampus.views.swapPanel = new Ext.Panel({
	id : 'swappnl',
    //layout : 'fit', 
    //layout: { type: 'vbox', flex : '1' },
    //cardAnimation : 'slide',
    items: [{
        title: 'swap',
        xtype: 'form',
        //id: 'loginForm',
        scroll: 'vertical',
        items: [{
		    xtype : 'fieldset',
		    ui: 'round',
		    width: '70%',
		    defaults: {
                required: true,
                labelAlign: 'left',
                labelWidth: '45%'
            },
		    items : [{
	            xtype: 'textfield',
	            id: 'swapcls',
	            label: 'Class Number',
	            showClear: true,
	            required: true,
	            useClearIcon: true
	        },
	        ]},
		    {
		      	xtype :'button',
	            ui : 'round',
		        name: 'submit',
		        text : 'Swap',
		        cls : 'buttonCls',
		        margin: '0% 90%',
		        align :'center',
		        handler: function() {
		        	 var classno = Ext.getCmp('swapcls').getValue();
		        	 callSwapEnrollDetail(classno);
	            }
		    }]
      }]
});



goCampus.views.swapEnrolPanel = new Ext.Panel({
	id: 'swapEnrolPanel',           
	//layout : 'fit',
	//layout: { type: 'vbox', flex : '3' },
	//scroll : 'vertical',
	styleHtmlContent: true
	
});


goCampus.views.mainPanel = new Ext.Panel({
	id: 'mainPanel',           
	//layout : 'fit',
	scroll : 'vertical',
	styleHtmlContent: true,
	items: [goCampus.views.swapEnrolPanel,goCampus.views.swapPanel ],
	layout: { type: 'vbox', flex : '2' },
	dockedItems: [{
	    //layout:'fit',
	    xtype : 'toolbar',
	    id: 'swapenroltoolbar',
		title : 'Swapping classes',
		cls:'small_title',
	    ui:'light'
	}]
});



function callSwapEnrollWS(clsno){
	//alert("clsno "+clsno);
	loadingMask = new Ext.LoadMask(Ext.getBody(), {msg:"Loading..."});
	loadingMask.show();
	Ext.util.JSONP.request({
            url: './JsonServlet',
            params: {
               //format: 'json',
               callback: 'callback',
			   ws: 'EL',
			   emplid: localStorage.getItem('userid'),
			   //term: localStorage.getItem('currTerm'),
			   term: '0680',
			   career: localStorage.getItem('career'),
			   institute: localStorage.getItem('institute')
			   //emplid: 'AA0001'
           },
            method: 'GET', 
            callbackKey: 'callback',
            callback: function(result) {    
		  if(result){
			var selresult = [];
			for (var i = 0; i < result.length ; i++){
				if(result[i].classno == clsno){
					selresult = result[i];
				}
			}
		  var swapEnrolPanel =  goCampus.views.swapEnrolPanel;
		  
		  var mainPanel = goCampus.views.mainPanel;
		  goCampus.views.swapEnrolPanel.update(swapEnrolTpl.applyTemplate(selresult));
		  
		  
	   	  goCampus.views.viewport.setActiveItem(mainPanel, { type: 'slide', direction: 'left' });
		  }else{
		  	alert("Error. Server not responding");
		  }                                                                
          loadingMask.hide();
          }
	});
	var  backBtn = goCampus.backButton; 
  	backBtn.setHandler(function (){
		var enrolContainer = goCampus.views.enrolContainer;
		backBtn.setHandler(function (){
			var stdClassesPanel = goCampus.views.stdClassesPanel;
			backBtn.setHandler(backHome);
			goCampus.views.viewport.setActiveItem(stdClassesPanel, { type: 'slide', reverse: true });
		});
		goCampus.views.viewport.setActiveItem(enrolContainer, { type: 'slide', reverse: true });
	});
	
}


              