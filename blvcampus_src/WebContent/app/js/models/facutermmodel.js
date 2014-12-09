Ext.regModel('facuterm', {		
    	fields: [ 
    	          	{ name: 'term', type: 'facutermopts'}
    			]
});

Ext.regModel('facutermopts', {		
	fields: [ 
	          	{ name: 'text', type: 'string'},
				{ name: 'value', type: 'string'}
			]
});