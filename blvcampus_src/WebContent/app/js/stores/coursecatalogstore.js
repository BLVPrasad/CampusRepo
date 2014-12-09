var coursecatalogstore = new Ext.data.Store({
    model: 'coursecatalogmodel',
    sorters: 'subject',
    getGroupString : function(record) {
        return record.get('subject')[0];
    }
});