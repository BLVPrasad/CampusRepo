var App = new Ext.Application({  
	name : 'goCampus',  
	useLoadMask : true, 
	tabletStartupScreen: 'app/img/gocampus_launch.png',
    phoneStartupScreen: 'app/img/gocampus_launch.png',
    icon: 'app/img/gocampus_icon1.png',
    glossOnIcon: true, 
	launch : function () { 
		
		goCampus.header = new Ext.Toolbar({
            ui : 'none',
            cls: 'header',
            dock: 'top',
            height: '70px'
            //title: '<img src="app/img/gocampus_launch1.png" width="250px" height="80px" />'	
        });
		
		goCampus.ourlogoBar = new Ext.Toolbar({
		    dock: 'bottom',			
		    width  : '100%',
		    //cls : 'logo'
		    cls: 'small_title',
		    title:'<span><p>&nbsp;&nbsp;Powered by Hexaware<img src="app/img/hexlogo.png" height="20px" style="display:inline;position:absolute;padding:1px;margin:5px"></p></span>'
		});
		
		goCampus.backButton = new Ext.Button({
            text: 'Back',
            ui: 'back',
            handler: backHome,
			hidden: true,
			scope: this
			
        });
		
		
		goCampus.newToDoButton = new Ext.Button({
            id: 'newNoteButton',
		    text: 'New',
		    ui: 'action',
			hidden: true,
			scope: this
			
        });
		
		goCampus.spacer = [
			{
				xtype:'spacer'
			}
		];		
		
		
		goCampus.navigationBar = new Ext.Toolbar({
            ui: 'dark',
            dock: 'top',			
            title: 'goCampus',  
			hidden: 'true',          
            items: [ goCampus.backButton, {xtype:'spacer'}, goCampus.newToDoButton ]
        });
		
		goCampus.headerPanel = new Ext.Panel({
        	items: [goCampus.header],
        	dock:'top',
			border: '0px'
        });
		
		
		goCampus.mainList = new Ext.List({
			id:'mainList',
			ui:'round',
			useLoadMask:true,
			store: 'mainListStore',
			itemTpl: '<div class="icon" <tpl if="icon"> style="background-image: url({icon})"</tpl> ></div>'
						+ '<span class="name">{title} <br>'
			 			+ '<span class="tertiary">{desc}</span>'
						+ '</span>',
			onItemDisclosure: function(record){
//				if(record.get('id') == 1){
//	      
//                    var  personalinfoPanel = goCampus.views.personalinfoPanel;
//                    goCampus.views.viewport.setActiveItem(personalinfoPanel, { type: 'slide', direction: 'left' });
//
//				}else if(record.get('id') == 2){
//					callEnrollWS();
//					var enrolContainer = goCampus.views.enrolContainer;
//					goCampus.views.viewport.setActiveItem(enrolContainer, { type: 'slide', direction: 'left' });
//				}else if(record.get('id') == 3){
//					var newBtn = goCampus.newToDoButton;
//					newBtn.show();
//					newBtn.setHandler(newNote);
//					var notesPanel = goCampus.views.notespanel;
//					goCampus.views.viewport.setActiveItem(notesPanel, { type: 'slide', direction: 'left' });									
//					
//				}else if(record.get('id') == 4){					
//					var coursesnewPanel = goCampus.views.Coursesnew;
//					goCampus.views.viewport.setActiveItem(coursesnewPanel, { type: 'slide', direction: 'left' });									
//					
//				}else if(record.get('id') == 5){	
//				
//					var gradebookContainer = goCampus.views.gradebookContainer;
//					goCampus.views.gradebook.update('');					
//					loadingMask = new Ext.LoadMask(Ext.getBody(), {msg:"Loading..."});
//					loadingMask.show();					
//					callGbookWS('0290');
//			
//					var gradebookPanel = goCampus.views.gradebook;
//					goCampus.views.viewport.setActiveItem(gradebookContainer, { type: 'slide', direction: 'left' });									
//					
//				}else if(record.get('id') == 6){					
//					todosWS();
//					
//				}else if(record.get('id') == 7){	
//										
//					var holdslistContainer = goCampus.views.holdslistContainer;
//					var holdslist = goCampus.views.holdslist;
//										
//					loadingMask = new Ext.LoadMask(Ext.getBody(), {msg:"Loading..."});
//					loadingMask.show();
//					
//					Ext.util.JSONP.request({
//						
//                          url: './JsonServlet',
//                          params: {
//                             format: 'json',
//                             callback: 'callback',
//							 ws: 'SI',
//							 emplid: localStorage.getItem('userid')
//                         },
//                          //method: 'POST', 
//                          callbackKey: 'callback',
//                          callback: function(result) {    
//						  if(result){
//						  	
//							Ext.StoreMgr.clear('holds');							
//							holdsstore.removeAll();							 
//						  	holdsstore.add(result);
//							holdslist.bindStore(holdsstore);							
//						  	
//							holdslist.doComponentLayout();
//							holdslistContainer.doLayout();					
//							
//							holdslist.addListener('itemTap', function(list, index) {
//									var backBtn = goCampus.backButton; 
//									backBtn.setHandler(function(){
//										backBtn.setHandler(backHome);										
//							        	goCampus.views.viewport.setActiveItem(holdslistContainer, { type: 'slide', reverse: true });
//									});
//								
//									var record = list.store.getAt(index);
//				  					var ccDetails = record.get('desc1');
//									var holdsPanel = goCampus.views.holds;
//									var toolbar = Ext.getCmp('holdsDetails');
//									toolbar.setTitle(ccDetails);									 
//									holdsPanel.update('');
//									holdsPanel.update(siTpl.applyTemplate(record));
//									goCampus.views.viewport.setActiveItem(holdsPanel, { type: 'slide', direction: 'left' });								
//							});
//						  }else{
//						  	alert("Error. Server not responding");
//						  }                                                                
//                           loadingMask.hide();
//                          }
//                      });								
//					goCampus.views.viewport.setActiveItem(holdslistContainer, { type: 'slide', direction: 'left' });
//				}else if(record.get('id') == 8){
//					var finduesPanel = goCampus.views.finduesPanel;
//					goCampus.views.viewport.setActiveItem(finduesPanel, { type: 'slide', direction: 'left' });									
//				}
//				goCampus.backButton.show();
			}
		});
		
		goCampus.mainListContainer = new Ext.Panel({
			id: 'mainListContainer',
			layout: 'fit'
			//html: 'This Main List Container',
			//items: [goCampus.mainList]
			
            
        });		
		
		
		goCampus.facultyList = new Ext.List({
			id:'facultyList',
			ui:'round',
			useLoadMask:true,
			store: 'facultyStore',
			itemTpl: '<div class="icon" <tpl if="icon"> style="background-image: url({icon})"</tpl> ></div>'
						+ '<span class="name">{title} <br>'
			 			+ '<span class="tertiary">{desc}</span>'
						+ '</span>',
			onItemDisclosure: function(record){
//				if(record.get('id') == 1){			      
//                    var  personalinfoPanel = goCampus.views.personalinfoPanel;
//                    goCampus.views.viewport.setActiveItem(personalinfoPanel, { type: 'slide', direction: 'left' });
//				}else if(record.get('id') == 2){
//					callEnrollWS();
//					var enrolContainer = goCampus.views.enrolContainer;
//					goCampus.views.viewport.setActiveItem(enrolContainer, { type: 'slide', direction: 'left' });
//				}else if(record.get('id') == 6){					
//					todosWS();					
//				}
//				goCampus.backButton.show();
			}
		});
		
//		goCampus.facultyListContainer = new Ext.Panel({
//			id: 'facultyListContainer',
//			layout: 'fit',
//			//html: 'This Main List Container',
//			items: [goCampus.facultyList]
//			
//            
//        });		
		
		goCampus.views.viewport = new Ext.Panel({  
		    fullscreen : true,  
		    layout : 'card',  
		    cardAnimation : 'slide',
		    items: [				
				goCampus.views.login
			],
			dockedItems: [goCampus.headerPanel,goCampus.navigationBar,goCampus.ourlogoBar] 
		});		
		
		
	}
	
	
});

function onBackTap(){
	var mainListContainer = goCampus.mainListContainer;
	if (goCampus.views.viewport.getActiveItem() === mainListContainer) {
		    mainListContainer.onBackTap();
	}else{
		goCampus.views.viewport.setActiveItem(goCampus.mainListContainer, { type: 'slide', reverse: true });	
		goCampus.backButton.hide();
		goCampus.newToDoButton.hide();
	}				      
}

function newNote(){
	var saveBtn = goCampus.newToDoButton;
		saveBtn.setText('Save');
		saveBtn.setHandler(saveNote);
		var backBtn = goCampus.backButton;
		backBtn.setHandler(function(){
						var newBtn = goCampus.newToDoButton;
						newBtn.setText('New');
						newBtn.setHandler(newNote);
						backBtn.setHandler(backHome);
						var notesListContainer = Ext.getCmp('notesListContainer');
					    //var noteEditor = goCampus.views.noteEditor;											
	              		goCampus.views.notespanel.setActiveItem(notesListContainer, {    			      
	                		type: 'slide',              			
	                        reverse: true		  
	                     });
					},this);
			var now = new Date();
            var noteId = now.getTime();
            var note = Ext.ModelMgr.create(
                { id: noteId, date: now, title: '', narrative: '' },
                'Note'
            );
        goCampus.views.noteEditor.load(note);
        goCampus.views.notespanel.setActiveItem('noteEditor', {type: 'slide', direction: 'left'});
}



function saveNote() {		 
    	var noteEditor = Ext.getCmp('noteEditor');						                
        var currentNote = noteEditor.getRecord();
        
        noteEditor.updateRecord(currentNote);

        var errors = currentNote.validate();
        if (!errors.isValid()) {
            Ext.Msg.alert('Wait!', errors.getByField('title')[0].message, Ext.emptyFn);
            return;
        }

        var notesList = goCampus.views.notesList;
        var notesStore = notesList.getStore();

        if (notesStore.findRecord('id', currentNote.data.id) === null) {
            notesStore.add(currentNote);
        }

        notesStore.sync();
        notesStore.sort([{ property: 'date', direction: 'DESC'}]);

        notesList.refresh();

		var newBtn = goCampus.newToDoButton;
		newBtn.setText('New');
		newBtn.setHandler(newNote);
		
		var backBtn = goCampus.backButton;
		backBtn.setHandler(backHome);
		
        goCampus.views.notespanel.setActiveItem('notesListContainer', { type: 'slide', direction: 'right' });

}

function backHome() {
		var mainListContainer = goCampus.mainListContainer;
		if (goCampus.views.viewport.getActiveItem() === mainListContainer) {
			    mainListContainer.onBackTap();	
		}else{
			goCampus.views.viewport.setActiveItem(goCampus.mainListContainer, { type: 'slide', reverse: true });	
			goCampus.backButton.hide();
			goCampus.newToDoButton.hide();
		}
}

var termoptions="";
function getTermsWS(){
	loadingMask = new Ext.LoadMask(Ext.getBody(), {msg:"Loading..."});
	loadingMask.show();	
	Ext.util.JSONP.request({
		
        url: './jsons/terms.json',
       /* params: {
           format: 'json',
           callback: 'callback',
			 ws: 'TRM',
			 emplid: localStorage.getItem('userid')			 	 
       },*/
       
        method: 'GET', 
        callbackKey: 'callback',
        callback: function(result) {  
      	 // alert("Result <" + result + ">");
		  if(result){
			  	Ext.StoreMgr.clear('terms');							
				termstore.removeAll();							 
				termstore.add(result);   
				Ext.StoreMgr.clear('params');							
				paramsstore.removeAll();							 
				paramsstore.add(result);
				
				var currTerm = paramsstore.getAt(paramsstore.getCount()-1).get('currentTerm');
				var career = paramsstore.getAt(paramsstore.getCount()-1).get('career');
				var institute = paramsstore.getAt(paramsstore.getCount()-1).get('institute');
				//alert(paramsstore.getCount());
				//alert("currTerm : " + currTerm);
				//alert("career : " + career);
				//alert("institute : " + institute);
				if(currTerm!="" || career!="" || institute!=""){
					localStorage.setItem('currTerm', currTerm);
					localStorage.setItem('career', career);
					localStorage.setItem('institute', institute);
					
					var mainListContainerPanel = goCampus.mainListContainer;
          			var studenList = goCampus.mainList;
          			
          				 mainListContainerPanel.add(studenList);
						 goCampus.views.viewport.setActiveItem(mainListContainerPanel, { type: 'slide', direction: 'left' });
			        	
			        	 mainListContainerPanel.doComponentLayout();
			        	 goCampus.navigationBar.setVisible(true);
			        	 goCampus.navigationBar.doComponentLayout();
			        	 //goCampus.bottomToolbar.setVisible(true);
			        	 
			        	 mainListContainerPanel.doComponentLayout();
				         //goCampus.bottomToolbar.setActiveItem(mainListContainerPanel);
				         goCampus.views.viewport.doComponentLayout();
			        	 goCampus.views.viewport.setActiveItem(mainListContainerPanel, {} );
					
				}else{
					Ext.Msg.show({
			        	     title:'Login Error',
			        	     msg: 'Current Term, Academic Career and Institution are not defined in the system',
			        	     buttons: Ext.Msg.YESNOCANCEL,
			        	     //fn: processResult,
			        	     animateTarget: 'elId'
			        	     //icon: Ext.window.MessageBox.QUESTION
			        	});
					
				}
				
				/*alert(termstore.getCount());
				
				termstore.each(function(rec){
					termoptions.push({
				        value: rec.get('value'),
				        text: rec.get('text')
				    });
					termoptions = termoptions + "{" + "text:" + rec.get('text') + ", value:" + rec.get('value') + "},";
				});
				termoptions = termoptions.substring(0, termoptions.length-1);
				alert(termoptions);*/
			
		  }else{
		  	alert("Error. Server not responding");
		  	
			
		  }                                                                
		  loadingMask.hide();
        }
    });	
}

