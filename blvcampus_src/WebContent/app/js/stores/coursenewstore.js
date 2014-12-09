var coursenewstore = new Ext.data.Store({
    model: 'Coursesnew',
    sorters: 'id',
    getGroupString : function(record) {
        return record.get('id')[0];
    },
    data: [
        {id: 'ACCT', title: 'Accounting'},
		{id: 'ANATOMY', title: 'Anatomy'},
		{id: 'ANTHRO', title: 'Anthropology'},
		{id: 'ART', title: 'Art'},
		{id: 'ARTHIST', title: 'Art History'},
		{id: 'BIOLOGY', title: 'Biology'},
		{id: 'BUSADM', title: 'Business Administration'},
		{id: 'CHEM', title: 'Chemistry'},
		{id: 'CLAS', title: 'Classics'},
		{id: 'CLASSICS', title: 'Classics'},
		{id: 'CLINICS', title: 'Clinics'},
		{id: 'COMP SCI', title: 'Computer Science'},
		{id: 'DANCE', title: 'Dance'},
		{id: 'DERMATOL', title: 'Dermatology'},
		{id: 'ECON', title: 'Economics'},
		{id: 'EDUC', title: 'Education'},
		{id: 'ENDOCRIN', title: 'Endocrine'},
		{id: 'ENGBIOMD', title: 'Engineering - Biomedical'},
		{id: 'ENGCIVIL', title: 'Engineering - Civil'},
		{id: 'ENGELECT', title: 'Engineering - Electrical'},
		{id: 'ENGLCOMP', title: 'English Composition'},
		{id: 'ENGLLIT', title: 'English Literature'},
		{id: 'ETHS', title: 'Ethnic Studies'}		
        
    ]
});