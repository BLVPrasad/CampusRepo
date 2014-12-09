Ext.regStore('personstore',{				
	            model  : 'Contact',
	            sorters: 'lastName',
	
	            getGroupString : function(record) {
 	                return record.get('lastName')[0];
 	            },
 	
	            data: [
	                {firstName:'Ramanan',  lastName: 'R V ',   title : 'President',   id : '2636',  image : 'app/img/2636.png', contact1 :'04447451270',contact2 :'04447451270'},   
	                {firstName:'Moorthi',  lastName: 'Chokkanathan',   title : 'Executive Vice President',   id : '1882',  image : 'app/img/1882.png', contact1 :'98403 23402',contact2 :'04447451270'},
	                {firstName:'Ganapathy',lastName: 'Sankar V',   title : 'Project Director',   id : '15807',  image : 'app/img/15807.png', contact1 :'9840153600',contact2 :'9840153600'},
	                {firstName:'Sridharan',lastName: 'S',   title : 'Associate Vice President',   id : '2655',  image : 'app/img/2655.png', contact1 :'9884485134',contact2 :'04447451270'},
	                {firstName: 'Manohar', lastName: 'Raj D',   	 title : 'Technical Architect',   id : '5721', image : 'app/img/5721.png',contact1 :'04447451986',contact2 :'9840704702'},
	                {firstName: 'Nanda',   lastName: 'kumar G',    title : 'System Analyst',   id : '18420', image : 'app/img/18420.png', contact1 :'04447451318',contact2 :'04447451318'},
	                {firstName: 'Prasad',  lastName: 'B L V',   title : 'Software Engineer',   id : '19119', image : 'app/img/19119.png',contact1 :'04447451314',contact2 :'9962585839'},
 	                {firstName: 'Abhi',    lastName: 'Rami R',  	 title : 'Associate Software Engineer', id : '19480', image : 'app/img/19480.png', contact1 :'04447451986',contact2 :'04447451986'}
 	            ]
 	      });