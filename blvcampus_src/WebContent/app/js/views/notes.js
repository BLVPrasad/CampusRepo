goCampus.views.notesListToolbar = new Ext.Toolbar({
		    id: 'notesListToolbar',
		    title: 'My Notes',
		    layout: 'hbox',
			cls: 'small_title'
});


goCampus.views.notesList = new Ext.List({
		    id: 'notesList',
		    store: 'NotesStore',		    
			itemTpl: '<span class="name">{title} <br>'
			 			+ '<span class="tertiary">{narrative}</span>'
						+ '</span>',
		    onItemDisclosure: function (record) {
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
	        	var selectedNote = record;
	        	var noteEditor = goCampus.views.noteEditor;
	        	noteEditor.load(selectedNote);
	        	goCampus.views.notespanel.setActiveItem('noteEditor', { type: 'slide', direction: 'left' });
	        	},
			    listeners: {
			        'render': function (thisComponent) {
			            thisComponent.getStore().load();						
			        }
		    			
		    }
});


goCampus.views.notesListContainer = new Ext.Panel({
		    id: 'notesListContainer',
			fullscreen : 'true',
		    layout: 'fit',
		    //html: 'This is the notes list container',
		    dockedItems: [goCampus.views.notesListToolbar],
		    items: [goCampus.views.notesList]
});





goCampus.views.noteEditorTopToolbar = new Ext.Toolbar({
		    title: 'Edit Note',
			cls: 'small_title'
		});

goCampus.views.noteEditorBottomToolbar = new Ext.Toolbar({
		    dock: 'bottom',
		    items: [
		        { xtype: 'spacer' },
		        {
		            iconCls: 'trash',
		            iconMask: true,
		            handler: function () {
	                // TODO: Delete current note.
					
						var newBtn = goCampus.newToDoButton;
						newBtn.setText('New');
						newBtn.setHandler(newNote);
						var backBtn = goCampus.backButton;
						backBtn.setHandler(backHome);
							
					
		            	var noteEditor = goCampus.views.noteEditor;
		            	var currentNote = noteEditor.getRecord();
 	 	                var notesList = goCampus.views.notesList;
 	 	                var notesStore = notesList.getStore();
 	 	 
 	 	                if (notesStore.findRecord('id', currentNote.data.id)) {
 	 	                    notesStore.remove(currentNote);
 	 	                }
 	 	 
 	 	                notesStore.sync();
 	 	 
 	 	                notesList.refresh();
 	 	                goCampus.views.notespanel.setActiveItem('notesListContainer', { type: 'slide', direction: 'right' });
		            	
		            }
		        }
		    ]
});

goCampus.views.noteEditor = new Ext.form.FormPanel({
    id: 'noteEditor',
	    items: [
	        {
	            xtype: 'textfield',
	            name: 'title',
	            label: 'Title',
	            required: true
	        },
	        {
            xtype: 'textareafield',
	            name: 'narrative',
	            label: 'Narrative'
	        }
	    ],
	    dockedItems: [
	            goCampus.views.noteEditorTopToolbar,
	            goCampus.views.noteEditorBottomToolbar
	        ]
});


goCampus.views.notespanel = new Ext.Panel({
	id : 'notespanel',
	fullscreen: true,
	layout: 'card',
	cardAnimation: 'slide',
	items: [goCampus.views.notesListContainer,goCampus.views.noteEditor]

});
