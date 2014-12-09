Ext.regModel('career', {		
    	fields: [			 
					{ name: 'career', type: 'careeropts'}
				]
});

Ext.regModel('careeropts', {		
	fields: [				 
			 //	{ name: 'currentTerm', type: 'string'},
				//{ name: 'carreer', type: 'string'},
				{ name: 'text', type: 'string'},
				{ name: 'value', type: 'string'}
			]
});