var graderostTpl = new Ext.XTemplate([
      '<tpl for=".">',
      '<tpl if="noRosterType==0">',			
      		'<div class="errorMsg">Fac. grade roster is not available</div>',
      '</tpl>',
   
	 //'<tpl if="noRosterType!=0">',			
			'<tpl if="descr254">',
			  	'<div class="emplname">{subject2} - {section2} - {catno2} ( {classno2} ) </div>',
			'</tpl>',                
			'<tpl if="descr254">',
			      '<div class="subtitle">{descr254} </div>',
			'</tpl>',
  		    	
  		    '<br>',
            '<br>',
           /* '<tpl if="gradingStatus">',
                 '<span class="classsubtitle">{gradingStatus}-</span>',
            '</tpl>',
            '<tpl if="gradeRosterType">',
                 '<span class="classsubtitle">{gradeRosterType}, </span>',
            '</tpl>',*/
            '<div>',
            '<tpl for="roster">',
	            '<div class="classroastertap">',
			        '<tpl if="gradeInput_1">',                      
						'<div class="grade">{gradeInput_1}</div>',
					'</tpl>',
					'<tpl if="gradeInput_1==\'\'">',                      
						'<div class="grade">-</div>',
					'</tpl>',
			        '<tpl if="lastName">',
			                '<span class="classenlistfcolor">{lastName} </span>',
			        '</tpl>',
		            '<tpl if="firstName">',
		            		'<span class="classenlistfcolor">{firstName} </span>',
		            '</tpl>',
		            '<tpl if="emplid">',
		        			'<span class="classenlistfcolor">({emplid}), </span>',
		        	'</tpl>',
		            		//'<span class="tertiary">Fresh man, </span>',
		            '<tpl if="GBenrol">',
		                    '<span class="tertiary">{GBenrol} </span>',
		            '</tpl>', 
		            '<div><span class="classenlisttofcolor">{Descr100}</span></div>', 
		        '</div>',
	        '</tpl>',
            '</div>',
      '</tpl>'
     // '</tpl>'
      
     /* '<tpl if="length == 0">',			
       	 		'<div class="errorMsg">Fac. grade roster is not available</div>',
      '</tpl>',*/       
]);


//var graderostTpl = new Ext.XTemplate([
//
//]);

goCampus.views.gradeRoster = new Ext.Panel({
    id: 'gradeRoaster',
    layout: 'fit',
    scroll: 'vertical',
    styleHtmlContent: true,
    //cls : 'paddingCls',
    dockedItems: [{
        layout: 'fit',
        xtype: 'toolbar',
        title: 'Grade Roster',
        cls: 'small_title',
        ui: 'light'
    }]
});

goCampus.views.gradeRosterContainer = new Ext.Panel({
    id: 'graderoasterContainerContainer',
    layout: 'card',
    scroll: 'vertical',
    items: [goCampus.views.gradeRoster],
    dockedItems: [{
      layout:'fit',
      xtype: 'toolbar',
      dock: 'bottom',
      items: [{
            xtype: 'selectfield',
            name: 'options',
            id:'grterm',
            options: [
                    {text: "MidTerm", value: "MID"},
                    {text: "FinalTerm", value: "FIN"}
                    ],
            listeners: {
            change: {
              fn: function(){
                        var grterm = this.getValue();
                        displayGradeRoster(grterm);
                        //alert(term);
                        }
                     }
                         }
             }]
                  }]
      
        });


function callGradeRoster(classno){
      var term = Ext.getCmp('term').getValue();
      //alert("grterm :"+grterm);
      var  gradeRosterContainer = goCampus.views.gradeRosterContainer;
      goCampus.views.viewport.setActiveItem(gradeRosterContainer, { type: 'slide', direction : 'left' });
      goCampus.backButton.setHandler(function(){                              
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
      loadingMask = new Ext.LoadMask(Ext.getBody(), {msg:"Loading..."});
      loadingMask.show();
      Ext.util.JSONP.request({
            //url: '../../Scripts/JsonFiles/GradeRoaster.json',
    	  	url: './JsonServlet',
            params: {
               //format: 'json',
               callback: 'callback',
                     ws: 'GR',
                     emplid: localStorage.getItem('userid'),
                     institute: localStorage.getItem('institute'),
                     term : term,
                     classNbr : classno
                     //term : term
           },
            method: 'GET', 
            callbackKey: 'callback',
            callback: function(result) {    
              if(result){    
                    Ext.StoreMgr.clear('graderoastermodel');                                           
                    graderoasterstore.removeAll();
                    graderoasterstore.add(result);
//                           
//                    Ext.getCmp('grterm').setValue(graderoasterstore.getAt(0).data.gradeRosterType);
//                    goCampus.views.gradeRoster.update(''); 
//                    alert("graderoasterstore.getCount "+graderoasterstore.getCount());
                    
                    if(graderoasterstore.getAt(0) == undefined)
                    {
                    	goCampus.views.gradeRoster.update(graderostTpl);
                    }
                    else
                    displayGradeRoster(graderoasterstore.getAt(0).data.gradeRosterType);
                   
              }else{
                  alert("Error. Server not responding");
              }                                                                
          loadingMask.hide();
          }
      });
}       

function displayGradeRoster(term) {
        //alert("Term " + term);
        var matched = [];
        for (var i = 0; i < graderoasterstore.getCount(); i++) {
        //alert("Actual Value " + graderoasterstore.getAt(i).data.roster);
       // alert("Boolean " + graderoasterstore.getAt(i).data.gradeRosterType.match(term));
            if (graderoasterstore.getAt(i).data.gradeRosterType.match(term)){
                   // alert("Inside if");
                    matched.push(graderoasterstore.getAt(i).data);      
            }
        };

        goCampus.views.gradeRoster.update(graderostTpl.applyTemplate(matched));

}
