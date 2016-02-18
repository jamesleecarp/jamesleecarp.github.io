var baseLayer = new ol.layer.Group({'title': 'Base maps',layers: [
new ol.layer.Tile({
    title: 'OSM DE',
    source: new ol.source.XYZ({
        url: 'http://tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html:'&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    })
})]});
var format_216ContingentCongressionalPlan = new ol.format.GeoJSON();
var features_216ContingentCongressionalPlan = format_216ContingentCongressionalPlan.readFeatures(geojson_216ContingentCongressionalPlan, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_216ContingentCongressionalPlan = new ol.source.Vector();
jsonSource_216ContingentCongressionalPlan.addFeatures(features_216ContingentCongressionalPlan);var lyr_216ContingentCongressionalPlan = new ol.layer.Vector({
                source:jsonSource_216ContingentCongressionalPlan, 
                style: style_216ContingentCongressionalPlan,
                title: "2016 Contingent Congressional Plan"
            });

lyr_216ContingentCongressionalPlan.setVisible(true);
var layersList = [baseLayer,lyr_216ContingentCongressionalPlan];
