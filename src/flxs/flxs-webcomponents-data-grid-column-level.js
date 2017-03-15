(function () {

  var template = new flexiciousNmsp.FlexDataGridColumnLevel();
  var gridPropsAndBehaviors = flexiciousNmsp.SettingsParser.getPropertiesAndBehaviors(template);
  var behaviors = gridPropsAndBehaviors.behaviors, properties = gridPropsAndBehaviors.properties;

  Polymer({
    is: 'flxs-webcomponents-data-grid-column-level',
    properties: properties,
    behaviors: [
      behaviors
    ],
    attached: function () {

      this.gridColumnLevel = this.parentNode.grid ? this.parentNode.grid.getColumnLevel() : new flexiciousNmsp.FlexDataGridColumnLevel();
      this.async(function () {
        for (var key in properties) {
          if (this[key.toLowerCase()]) {
            this.parentNode.grid.applyAttribute(this.gridColumnLevel, properties[key].orig, this[key.toLowerCase()], true);
          }
        }
        if (this.gridColumnLevel._tempCols.length) {
          this.gridColumnLevel.setColumns(this.gridColumnLevel._tempCols);
        }
      }, 1);

      if (this.parentNode.grid) {

      } else {
        this.parentNode.gridColumnLevel.setNextLevel(this.gridColumnLevel);
      }
    },

    attributeChanged: function () {
      this._onChanged();
    },

    _onChanged: function () {
    }
  });
} ());
