goCampus.Structure = [{
    text: '<div style="display:inline;"><img src="app/img/whoiswho.png" width="40px" height="40px" style="display:inline;"/> Who is who? </div>',
    card: goCampus.searchPanel,
	source: 'js/student/whoiswho.js',
	leaf: true,
	desc: 'Find your friends and faculties'
},
{
    text: '<img src=app/img/newandevents.png width="40px" height="40px" style="display:inline;" /> New & Events',
    source: 'app/js/student/whoiswho.js',
    card: goCampus.searchPanel,
    leaf:true
},
{
    text: '<img src=app/img/gradebook.png width="40px" height="40px" style="display:inline;" /> Grade Book',
    card: goCampus.searchPanel,
    source: 'app/js/student/whoiswho.js',
    leaf: true
},
{
    text: '<img src=app/img/courses.png width="40px" height="40px" style="display:inline;" /> Course',
	card: goCampus.searchPanel,
    source: 'app/js/student/whoiswho.js',
    leaf: true
}
];

Ext.regModel('campus', {
    fields: [
        {name: 'text',        type: 'string'},
        {name: 'source',      type: 'string'},
        {name: 'preventHide', type: 'boolean'},
        {name: 'cardSwitchAnimation'},
        {name: 'card'}
    ]
});

goCampus.StructureStore = new Ext.data.TreeStore({
    model: 'campus',
    root: {
        items: goCampus.Structure
    },
    proxy: {
        type: 'ajax',
        reader: {
            type: 'tree',
            root: 'items'
        }
    }
});