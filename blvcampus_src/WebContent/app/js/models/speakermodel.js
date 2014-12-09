Ext.regModel('Speaker', {	
	belongsTo: "Courses",
    fields: [
             'id',
             'first_name',
             'last_name',
             'name',
             'position',
             'affiliation',
             'bio',
             'twitter',
             'url',
             'photo'
             ]
});