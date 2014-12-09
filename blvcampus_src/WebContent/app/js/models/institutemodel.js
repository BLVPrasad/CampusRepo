Ext.regModel('institute', {		
    	fields: [				 
				 //	{ name: 'currentTerm', type: 'string'},
					//{ name: 'carreer', type: 'string'},
					{ name: 'institute', type: 'instoptions'}
				]
});

Ext.regModel('instoptions', {		
	fields: [				 
			 //	{ name: 'currentTerm', type: 'string'},
				//{ name: 'carreer', type: 'string'},
				{ name: 'text', type: 'string'},
				{ name: 'value', type: 'string'}
			]
});