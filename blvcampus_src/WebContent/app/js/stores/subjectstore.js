var subjectstore = new Ext.data.Store({
    model: 'Subject',
    sorters: 'subno',
    getGroupString : function(record) {
        return record.get('subno')[0];
    },
    data: [
		{subno: '1  ', subtitle: 'Introduction to Economics', period: 'Fall, Spring', imgpath: 'app/img/appr-gray.png'},
		{subno: '2  ', subtitle: 'Macroeconomic Principles', period: 'Spring', imgpath: 'app/img/appr-gray.png'},
		{subno: '3  ', subtitle: 'Microeconomic Principles', period: 'Spring', imgpath: 'app/img/appr-gray.png'},
		{subno: '10 ', subtitle: 'Introduction to International Economics', period: 'Spring', imgpath: 'app/img/appr-clicked.png'},
		{subno: '115', subtitle: 'Economic Statistics', period: 'Fall, Spring', imgpath: 'app/img/appr-clicked.png'},
		{subno: '120', subtitle: 'History of Economic Thought', period: 'Spring', imgpath: 'app/img/appr-clicked.png'},
		{subno: '140', subtitle: 'Macroeconomics', period: 'Fall', imgpath: 'app/img/appr-gray.png'},
		{subno: '142', subtitle: 'Monetary Policy', period: 'Summer', imgpath: 'app/img/appr-gray.png'},
		{subno: '143', subtitle: 'Economic History of the United States Since 1850', period: 'Fall', imgpath: 'app/img/appr-gray.png'},
		{subno: '145', subtitle: 'Economic History of Europe Since 1850', period: 'Spring', imgpath: 'app/img/appr-gray.png'},
		{subno: '150', subtitle: 'Microeconomics', period: 'Fall', imgpath: 'app/img/appr-gray.png'},
		{subno: '198', subtitle: 'Special Topics in Economics', period: 'Spring', imgpath: 'app/img/appr-gray.png'},
		{subno: '203', subtitle: 'Public Economics', period: 'Spring', imgpath: 'app/img/appr-gray.png'},
		{subno: '301', subtitle: 'The World Economy in the Twentieth Century', period: 'Spring', imgpath: 'app/img/appr-gray.png'}
		
        
    ]
});