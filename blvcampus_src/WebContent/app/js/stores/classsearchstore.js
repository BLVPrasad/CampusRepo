var classsearchstore = new Ext.data.Store({
    model: 'classsearchmodel',
    sorters: 'CRSE_ID_LOVDescr',
    getGroupString : function(record) {
        return record.get('CRSE_ID_LOVDescr')[0];
    }
});