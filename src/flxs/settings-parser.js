(function (w) {



  /**
   * These are defined here as a quick reference to all properties available.
   * @type {Object}
   */
  flexiciousNmsp.StyleDefaults.defaults = {
    dataProvider: [],
    /**
     * The root of all images. The Pager Control uses this, the grid expand collapse icons (see below) uses this,
     * So does the Search Clear icon as well as the sort icon.
     */
    imagesRoot: flexiciousNmsp.Constants.IMAGE_PATH,
    /**
     * Usually the toolbar root is the same as the images root, but for some custom themes, we have their own icons.
     */
    toolbarImagesRoot: flexiciousNmsp.Constants.IMAGE_PATH,
    /**
     *  The color of the line to draw when the user is moving or resizing the column
     */
    columnMoveResizeSeparatorColor: 0x000000,
    columnMoveAlpha: 0.8,
    backgroundColor: [0xFFFFFF, 0xFFFFFF],
    alternatingItemColors: [0xEFF3FA, 0xFFFFFF],
    alternatingTextColors: [0x000000, 0x000000],

    dragAlpha: 0.8,
    dragRowBorderStyle: "solid",
    editItemColors: [0xF5F9FC, 0xC5CED6],
    editTextColor: 0x000000,

    errorBackgroundColor: 0xFCDCDF,
    errorBorderColor: 0xF23E2C,

    verticalGridLineColor: 0x696969,
    verticalGridLines: true,
    verticalGridLineThickness: 1,


    horizontalGridLineColor: 0x696969,
    horizontalGridLines: true,
    horizontalGridLineThickness: 1,

    textDisabledColor: 0xAFAFAF,


    columnGroupVerticalGridLineColor: 0x666666,
    columnGroupVerticalGridLines: true,
    columnGroupVerticalGridLineThickness: 1,

    columnGroupHorizontalGridLineColor: 0x666666,
    columnGroupHorizontalGridLines: true,
    columnGroupHorizontalGridLineThickness: 1,
    columnGroupDrawTopBorder: false,



    headerVerticalGridLineColor: 0x666666,
    headerVerticalGridLines: true,
    headerVerticalGridLineThickness: 1,

    headerHorizontalGridLineColor: 0x666666,
    headerHorizontalGridLines: true,
    headerHorizontalGridLineThickness: 1,
    headerDrawTopBorder: false,
    headerSortSeparatorRight: 24,

    filterVerticalGridLineColor: 0x666666,
    filterVerticalGridLines: true,
    filterVerticalGridLineThickness: 1,

    filterHorizontalGridLineColor: 0x666666,
    filterHorizontalGridLines: true,
    filterHorizontalGridLineThickness: 1,
    filterDrawTopBorder: false,

    footerVerticalGridLineColor: 0x666666,
    footerVerticalGridLines: true,
    footerVerticalGridLineThickness: 1,

    footerHorizontalGridLineColor: 0x666666,
    footerHorizontalGridLines: false,
    footerHorizontalGridLineThickness: 1,
    footerDrawTopBorder: false,

    pagerVerticalGridLineColor: 0x666666,
    pagerVerticalGridLines: true,
    pagerVerticalGridLineThickness: 1,

    pagerHorizontalGridLineColor: 0x666666,
    pagerHorizontalGridLines: true,
    pagerHorizontalGridLineThickness: 1,


    rendererVerticalGridLineColor: 0x666666,
    rendererVerticalGridLines: true,
    rendererVerticalGridLineThickness: 1,

    rendererHorizontalGridLineColor: 0x666666,
    rendererHorizontalGridLines: true,
    rendererHorizontalGridLineThickness: 1,
    rendererDrawTopBorder: false,

    rollOverColor: 0xCEDBEF,

    headerRollOverColors: [0xCEDBEF, 0xCEDBEF],
    headerColors: [0xE6E6E6, 0xFFFFFF],

    columnGroupRollOverColors: [0xCEDBEF, 0xCEDBEF],
    columnGroupColors: [0xE6E6E6, 0xFFFFFF],

    footerRollOverColors: [0xCEDBEF, 0xCEDBEF],
    footerColors: [0xBFBFBF, 0xBFBFBF],

    fixedColumnFillColors: [0xBFBFBF, 0xBFBFBF],

    filterRollOverColors: [0xCEDBEF, 0xCEDBEF],
    filterColors: [0xCFCFCF, 0xCFCFCF],

    activeCellColor: 0xB7DBFF,

    pagerRollOverColors: [0xE6E6E6, 0xFFFFFF],
    pagerColors: [0xE6E6E6, 0xFFFFFF],

    rendererRollOverColors: [0xFFFFFF, 0xFFFFFF],
    rendererColors: [0xFFFFFF, 0xFFFFFF],

    lockedSeperatorColor: 0x6f6f6f,
    lockedSeperatorThickness: 2,

    dropIndicatorColor: 0x000000,
    dropIndicatorThickness: 2,

    textSelectedColor: 0x000000,
    textRollOverColor: 0x000000,
    selectionDisabledColor: null,
    selectionDisabledTextColor: 0xDDDDDD,

    disclosureClosedIcon: "/expand.png",
    disclosureOpenIcon: "/collapse.png",
    sortArrowSkin: "/sortArrow.png",

    paddingBottom: 2,
    paddingLeft: 2,
    paddingRight: 2,
    paddingTop: 2,

    columnGroupPaddingBottom: 2,
    columnGroupPaddingLeft: 2,
    columnGroupPaddingRight: 2,
    columnGroupPaddingTop: 2,

    headerPaddingBottom: 2,
    headerPaddingLeft: 2,
    headerPaddingRight: 2,
    headerPaddingTop: 2,

    filterPaddingBottom: 2,
    filterPaddingLeft: 2,
    filterPaddingRight: 2,
    filterPaddingTop: 2,

    footerPaddingBottom: 2,
    footerPaddingLeft: 2,
    footerPaddingRight: 2,
    footerPaddingTop: 2,

    pagerPaddingBottom: 0,
    pagerPaddingLeft: 0,
    pagerPaddingRight: 0,
    pagerPaddingTop: 0,
    pagerRowHeight: 28,
    rendererPaddingBottom: 2,
    rendererPaddingLeft: 2,
    rendererPaddingRight: 2,
    rendererPaddingTop: 2,

    borderSides: "left,right,top,bottom",
    borderThickness: 1,
    borderColor: 0x666666,

    headerStyleName: "dataGridStyles",
    footerStyleName: "dataGridStyles",
    pagerStyleName: "",
    columnGroupStyleName: "columnGroupStyle",
    columnGroupClosedIcon: "/expand.png",
    columnGroupOpenIcon: "/collapse.png",

    multiColumnSortNumberStyleName: "multiColumnSortNumberStyle",
    multiColumnSortNumberHeight: 15,
    multiColumnSortNumberWidth: 15,
    selectionColor: 0x7FCEFF,
    selectionDuration: 250,
    headerSortSeparatorColor: 0xCCCCCC,

    checkIconClass: '/checkGreen.png',
    crossIconClass: '/notAvailable.png'
  };

  var properties = Object.keys(flexiciousNmsp.StyleDefaults.defaults);

  /**
   * @constructor
   */
  function SettingsParser() { }

  SettingsParser.getPropertiesAndBehaviors = function (template) {

    var behaviors = {}, properties = {};

    var targetEvents = flexiciousNmsp[template.typeName].ALL_EVENTS;
    if (!targetEvents) {
      flexiciousNmsp[template.typeName].ALL_EVENTS = [];
      for (var prop in flexiciousNmsp[template.typeName]) {
        if (prop.indexOf("EVENT_") == 0) {
          flexiciousNmsp[template.typeName].ALL_EVENTS.push(flexiciousNmsp[template.typeName][prop]);
          var key=flexiciousNmsp[template.typeName][prop];
          properties[key.toLowerCase()] = {
            observer: '_onChanged',
            orig: key
          }
        }
      }
      targetEvents = flexiciousNmsp[template.typeName].ALL_EVENTS;
    }





    var templateGrid = template;
    for (var key in templateGrid) {
      if (typeof templateGrid[key] === "function") {
        var thisKey = key;
        if (key == "addEventListener") {
          thisKey = "flxsAddEventListener"
        } else if (key == "removeEventListener") {
          thisKey = "flxsRemoveEventListener"
        }
        if (key.indexOf("set") == 0) {
          properties[key.substring(3).toLowerCase()] = {
            observer: '_onChanged',
            orig: key.substring(3)
          }
        } else {

          behaviors[thisKey] = function () {
            return this.grid[key].apply(this.grid, arguments);
          };
        }
      } else {

        if (key.indexOf("_") == 0) {

        } else {
          properties[key.toLowerCase()] = {
            observer: '_onChanged',
            orig: key
          }
        }
      }
    }
    return { behaviors: behaviors, properties: properties, targetEvents: targetEvents };
  };
  flexiciousNmsp.SettingsParser = SettingsParser;
} (window));
