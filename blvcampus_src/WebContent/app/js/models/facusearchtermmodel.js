Ext.regModel('facusearchtermmodel', {
	fields: [ 
	          	{ name: 'term', type: 'facusearchtermopts'}
			]
});

Ext.regModel('facusearchtermopts', {	
	fields: [  
				{ name: 'text', type: 'string'},
				{ name: 'value', type: 'string'}
			]
}); 