/*
This file is part of Ext JS 3.4

Copyright (c) 2011-2013 Sencha Inc

Contact:  http://www.sencha.com/contact

GNU General Public License Usage
This file may be used under the terms of the GNU General Public License version 3.0 as
published by the Free Software Foundation and appearing in the file LICENSE included in the
packaging of this file.

Please review the following information to ensure the GNU General Public License version 3.0
requirements will be met: http://www.gnu.org/copyleft/gpl.html.

If you are unsure which license is appropriate for your use, please contact the sales department
at http://www.sencha.com/contact.

Build date: 2013-04-03 15:07:25
*/
window.addEventListener('load', function() {
Ext.onReady(function(){
    var store = new Ext.data.SimpleStore({
        fields: [
            {name: 'file_name'},
            {name: 'photo'}
        ]
    });

    store.loadData(entries);
    var grid = new Ext.grid.GridPanel({
        store: store,
        columns: [
            {autoSizeColumn : true,header: 'FileName', sortable:true, dataIndex: 'file_name'},
            {autoSizeColumn : true,header: 'Photo', dataIndex: 'photo'}
        ],
        stripeRows: true,        
        title: 'Photos',
        height : 200,
        width : 800,
        viewConfig : {
            listeners : {
                refresh : function (dataview) {
                    Ext.each(dataview.panel.columns, function (column) {
                        if (column.autoSizeColumn === true) {
                            column.autoSize();
                        }
                    })
                }
            }
        },
    });
    grid.render('photos');
});   
},false);
