var wms_layers = [];


        var lyr_ESRIStandard_0 = new ol.layer.Tile({
            'title': 'ESRI Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_admdesapangauban_1 = new ol.format.GeoJSON();
var features_admdesapangauban_1 = format_admdesapangauban_1.readFeatures(json_admdesapangauban_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_admdesapangauban_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_admdesapangauban_1.addFeatures(features_admdesapangauban_1);
var lyr_admdesapangauban_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_admdesapangauban_1, 
                style: style_admdesapangauban_1,
                popuplayertitle: "adm desa pangauban",
                interactive: true,
                title: '<img src="styles/legend/admdesapangauban_1.png" /> adm desa pangauban'
            });
var format_admdesasangkanhurip_2 = new ol.format.GeoJSON();
var features_admdesasangkanhurip_2 = format_admdesasangkanhurip_2.readFeatures(json_admdesasangkanhurip_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_admdesasangkanhurip_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_admdesasangkanhurip_2.addFeatures(features_admdesasangkanhurip_2);
var lyr_admdesasangkanhurip_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_admdesasangkanhurip_2, 
                style: style_admdesasangkanhurip_2,
                popuplayertitle: "adm desa sangkanhurip",
                interactive: true,
                title: '<img src="styles/legend/admdesasangkanhurip_2.png" /> adm desa sangkanhurip'
            });
var format_Buffered_3 = new ol.format.GeoJSON();
var features_Buffered_3 = format_Buffered_3.readFeatures(json_Buffered_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_3.addFeatures(features_Buffered_3);
var lyr_Buffered_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffered_3, 
                style: style_Buffered_3,
                popuplayertitle: "Buffered",
                interactive: true,
                title: '<img src="styles/legend/Buffered_3.png" /> Buffered'
            });
var format_Buffered_4 = new ol.format.GeoJSON();
var features_Buffered_4 = format_Buffered_4.readFeatures(json_Buffered_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_4.addFeatures(features_Buffered_4);
var lyr_Buffered_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffered_4, 
                style: style_Buffered_4,
                popuplayertitle: "Buffered",
                interactive: true,
                title: '<img src="styles/legend/Buffered_4.png" /> Buffered'
            });
var format_UTMtitikPerindukanVektor_5 = new ol.format.GeoJSON();
var features_UTMtitikPerindukanVektor_5 = format_UTMtitikPerindukanVektor_5.readFeatures(json_UTMtitikPerindukanVektor_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UTMtitikPerindukanVektor_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UTMtitikPerindukanVektor_5.addFeatures(features_UTMtitikPerindukanVektor_5);
var lyr_UTMtitikPerindukanVektor_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UTMtitikPerindukanVektor_5, 
                style: style_UTMtitikPerindukanVektor_5,
                popuplayertitle: "UTM titik Perindukan Vektor",
                interactive: true,
                title: '<img src="styles/legend/UTMtitikPerindukanVektor_5.png" /> UTM titik Perindukan Vektor'
            });

lyr_ESRIStandard_0.setVisible(true);lyr_admdesapangauban_1.setVisible(true);lyr_admdesasangkanhurip_2.setVisible(true);lyr_Buffered_3.setVisible(true);lyr_Buffered_4.setVisible(true);lyr_UTMtitikPerindukanVektor_5.setVisible(true);
var layersList = [lyr_ESRIStandard_0,lyr_admdesapangauban_1,lyr_admdesasangkanhurip_2,lyr_Buffered_3,lyr_Buffered_4,lyr_UTMtitikPerindukanVektor_5];
lyr_admdesapangauban_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', });
lyr_admdesasangkanhurip_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', });
lyr_Buffered_3.set('fieldAliases', {'Name': 'Name', 'timestamp': 'timestamp', });
lyr_Buffered_4.set('fieldAliases', {'Name': 'Name', 'timestamp': 'timestamp', });
lyr_UTMtitikPerindukanVektor_5.set('fieldAliases', {'Name': 'Name', });
lyr_admdesapangauban_1.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', });
lyr_admdesasangkanhurip_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', });
lyr_Buffered_3.set('fieldImages', {'Name': 'TextEdit', 'timestamp': 'TextEdit', });
lyr_Buffered_4.set('fieldImages', {'Name': 'TextEdit', 'timestamp': 'TextEdit', });
lyr_UTMtitikPerindukanVektor_5.set('fieldImages', {'Name': 'TextEdit', });
lyr_admdesapangauban_1.set('fieldLabels', {'NAMOBJ': 'no label', 'REMARK': 'no label', });
lyr_admdesasangkanhurip_2.set('fieldLabels', {'NAMOBJ': 'no label', 'REMARK': 'no label', });
lyr_Buffered_3.set('fieldLabels', {'Name': 'no label', 'timestamp': 'no label', });
lyr_Buffered_4.set('fieldLabels', {'Name': 'no label', 'timestamp': 'no label', });
lyr_UTMtitikPerindukanVektor_5.set('fieldLabels', {'Name': 'no label', });
lyr_UTMtitikPerindukanVektor_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});