(function () {

  var template = new flexiciousNmsp.FlexDataGridColumn();
  var gridPropsAndBehaviors = flexiciousNmsp.SettingsParser.getPropertiesAndBehaviors(template);
  var behaviors = gridPropsAndBehaviors.behaviors, properties = gridPropsAndBehaviors.properties;

  Polymer({
    is: 'flxs-webcomponents-data-grid-column',
    properties: properties,
    behaviors: [
      behaviors
    ],
    attached: function () {

      this.gridColumn = this.getAttribute("type") == "checkbox" ? new flexiciousNmsp.FlexDataGridCheckBoxColumn() : new flexiciousNmsp.FlexDataGridColumn();

      if (this.parentNode.gridColumnGroup) {
        if (!this.parentNode.gridColumnGroup._tempCols) {
          this.parentNode.gridColumnGroup._tempCols = [];
        }
        this.parentNode.gridColumnGroup._tempCols.push(this.gridColumn);
      } else {
        var lvl = (this.parentNode.grid) ? (this.parentNode.grid.getColumnLevel()) : this.parentNode.gridColumnLevel;
        if (!lvl._tempCols) {
          lvl._tempCols = [];
        }
        lvl._tempCols.push(this.gridColumn);
      }


      this.async(function () {
        for (var key in properties) {
          if (this[key.toLowerCase()]) {
            this.parentNode.grid.applyAttribute(this.gridColumn, properties[key].orig, this[key.toLowerCase()], true);
          }
        }
      }, 1);
    },

    attributeChanged: function () {
      this._onChanged();
    },

    _onChanged: function () {
    }
  });
} ());
