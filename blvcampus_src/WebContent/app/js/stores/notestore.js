Ext.regStore('NotesStore',{
		    model: 'Note',
		    sorters: [{
		        property: 'date',
		        direction: 'DESC'
		    }],
		    proxy: {
		        type: 'localstorage',
		        id: 'gocampus-localstore'
		    },
		    data: [
	        { id: 1, date: new Date(), title: 'Test Note', narrative: 'This is simply a test note' }
	    ]
});