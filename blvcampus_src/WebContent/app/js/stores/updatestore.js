var updateStore = new Ext.data.Store({
    model: 'updatepersinfo',
    getGroupString : function(record) {
        return record.get('title')[0];
    },
    data: [
        {title : 'Address'},
        //{title : 'Names'},
        {title : 'Phone'},
        //{title : 'National Id'},
        {title : 'Email Address'},
    ]
});