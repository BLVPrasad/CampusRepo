var speakerStore = new Ext.data.Store({
    model: 'Speaker',
    
    getGroupString: function(r){
        return r.get('last_name')[0];
    },
    proxy: {
         type: 'memory',
         id: 'speaker'
         
         
 }
});