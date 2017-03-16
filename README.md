# Polymer App Toolbox - Starter Kit Integrated with flexicious html treegrid Polymer webcomponents wrapper

## Run application
` npm start`

Webcomponents DataGrid wrapper for flexicious DataGrid
Welcome to HTMLTreeGrid DataGrid

The MOST Powerful DataGrid/DataTable/Tree Table component for Web Components based Line Of Business Applications

Print, Word/Excel Export, Server/Client Paging and Filtering, Customizable Filter Controls and Summary Footers, User Settings, Preference Persistence

Smooth scroll, Nested Hierarchical Tree/child grids, Left/Right Locked Columns, Lazy Load/Virtual Scroll

Visit us at:

http://www.htmltreegrid.com/

Instructions

* git checkout https://github.com/flexicious/flxs-webcomponents-data-grid/
* bower install
* Place your licensed copy of html treegrid (v 3.xx) in lib_private 


In your head section:
```

<link rel="import" href="./flxs/flxs-webcomponents-data-grid.html" />
<link rel="import" href="./flxs/flxs-webcomponents-data-grid-column.html" />
```
And then in your body section:
```
        <flxs-webcomponents-data-grid dataProvider="{{ donuts }}" forcePagerRow="true" enablePaging="true" enableExport="true" style="width:800px;height:400px"
          itemClick="[[itemClick]]">
          <flxs-webcomponents-data-grid-column type="checkbox"></flxs-webcomponents-data-grid-column>
          <flxs-webcomponents-data-grid-column dataField="id" headerText="ID" filterComboBoxDataProvider="{{donuts}}"></flxs-webcomponents-data-grid-column>
          <flxs-webcomponents-data-grid-column dataField="type" headerText="Type"></flxs-webcomponents-data-grid-column>
        </flxs-webcomponents-data-grid>
```    
 And then in your script section:
```
<script>
    Polymer({
        is: 'my-view1',
        properties: {
            donuts: {
                type: Array,
                notify: true
            },
            itemClick: {
                type: Function,
                notify: true
            }

        },

        attached: function() {
            this.donuts = [{
                    "id": "5001",
                    "type": "None None None"
                },
                {
                    "id": "5002",
                    "type": "Glazed"
                },
                {
                    "id": "5005",
                    "type": "Sugar"
                },
                {
                    "id": "5007",
                    "type": "Powdered Sugar"
                },
                {
                    "id": "5006",
                    "type": "Chocolate with Sprinkles"
                },
                {
                    "id": "5003",
                    "type": "Chocolate"
                },
                {
                    "id": "5004",
                    "type": "Maple"
                }
            ];

            this.itemClick = function(evt) {
                alert("Clicked On " + evt.item.id)
            }
        },

    });
</script>
    
    
