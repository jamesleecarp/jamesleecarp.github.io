var size = 0;
var categories_216ContingentCongressionalPlan = {"01": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.6)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}) , fill: new ol.style.Fill({color: "rgba(137,189,228,0.6)"})
    })],
"02": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.6)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}) , fill: new ol.style.Fill({color: "rgba(224,200,38,0.6)"})
    })],
"03": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.6)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}) , fill: new ol.style.Fill({color: "rgba(23,226,53,0.6)"})
    })],
"04": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.6)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}) , fill: new ol.style.Fill({color: "rgba(233,130,130,0.6)"})
    })],
"05": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.6)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}) , fill: new ol.style.Fill({color: "rgba(119,77,225,0.6)"})
    })],
"06": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.6)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}) , fill: new ol.style.Fill({color: "rgba(177,72,218,0.6)"})
    })],
"07": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.6)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}) , fill: new ol.style.Fill({color: "rgba(222,62,198,0.6)"})
    })],
"08": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.6)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}) , fill: new ol.style.Fill({color: "rgba(214,107,152,0.6)"})
    })],
"09": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.6)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}) , fill: new ol.style.Fill({color: "rgba(114,210,210,0.6)"})
    })],
"10": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.6)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}) , fill: new ol.style.Fill({color: "rgba(55,77,201,0.6)"})
    })],
"11": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.6)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}) , fill: new ol.style.Fill({color: "rgba(168,217,44,0.6)"})
    })],
"12": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.6)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}) , fill: new ol.style.Fill({color: "rgba(240,130,45,0.6)"})
    })],
"13": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.6)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}) , fill: new ol.style.Fill({color: "rgba(130,217,96,0.6)"})
    })],
"": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.6)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}) , fill: new ol.style.Fill({color: "rgba(12,218,129,0.6)"})
    })]};
var styleCache_216ContingentCongressionalPlan={}
var style_216ContingentCongressionalPlan = function(feature, resolution){
    var value = feature.get("District");
    var style = categories_216ContingentCongressionalPlan[value];
    if (feature.get("District")) {
        var labelText = feature.get("District");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_216ContingentCongressionalPlan[key]){
        var text = new ol.style.Text({
              font: '15.6px Calibri,sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: "rgba(0, 0, 0, 255)"
              }),
            });
        styleCache_216ContingentCongressionalPlan[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_216ContingentCongressionalPlan[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};