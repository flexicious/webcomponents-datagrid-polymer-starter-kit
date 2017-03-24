(function () {

  var template = new flexiciousNmsp.FlexDataGridColumnGroup();
  var gridPropsAndBehaviors = flexiciousNmsp.SettingsParser.getPropertiesAndBehaviors(template);
  var behaviors = gridPropsAndBehaviors.behaviors, properties = gridPropsAndBehaviors.properties;

  Polymer({
    is: 'flxs-webcomponents-data-grid-column-group',
    properties: properties,
    behaviors: [
      behaviors
    ],
    attached: function () {

      this.gridColumnGroup = new flexiciousNmsp.FlexDataGridColumnGroup();

      if (this.parentNode.gridColumnGroup) {
        if (!this.parentNode.gridColumnGroup._tempCols) {
          this.parentNode.gridColumnGroup._tempCols = [];
        }
        this.parentNode.gridColumnGroup._tempCols.push(this.gridColumnGroup);
      } else {
        var lvl = (this.parentNode.grid) ? (this.parentNode.grid.getColumnLevel()) : this.parentNode.gridColumnLevel;
        if (!lvl._tempCols) {
          lvl._tempCols = [];
        }
        lvl._tempCols.push(this.gridColumnGroup);
      }




      this.async(function () {
        for (var key in properties) {
          if (this[key.toLowerCase()]) {
            this.parentNode.grid.applyAttribute(this.gridColumnGroup, properties[key].orig, this[key.toLowerCase()], true);
          }
        }

        this.gridColumnGroup.setGroupedColumns(this.gridColumnLevel._tempCols);

      }, 1);
    },

    attributeChanged: function () {
      this._onChanged();
    },

    _onChanged: function () {
    }
  });
} ());
