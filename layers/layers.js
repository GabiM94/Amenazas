var wms_layers = [];


        var lyr_OpenTopoMap_0 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/Elevation/World_Hillshade/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Ecuador_1 = new ol.format.GeoJSON();
var features_Ecuador_1 = format_Ecuador_1.readFeatures(json_Ecuador_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ecuador_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ecuador_1.addFeatures(features_Ecuador_1);
var lyr_Ecuador_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ecuador_1, 
                style: style_Ecuador_1,
                popuplayertitle: 'Ecuador',
                interactive: false,
                title: '<img src="styles/legend/Ecuador_1.png" /> Ecuador'
            });
var format_Provincias_2 = new ol.format.GeoJSON();
var features_Provincias_2 = format_Provincias_2.readFeatures(json_Provincias_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Provincias_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Provincias_2.addFeatures(features_Provincias_2);
var lyr_Provincias_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Provincias_2, 
                style: style_Provincias_2,
                popuplayertitle: 'Provincias',
                interactive: false,
                title: '<img src="styles/legend/Provincias_2.png" /> Provincias'
            });
var format_Cantones_3 = new ol.format.GeoJSON();
var features_Cantones_3 = format_Cantones_3.readFeatures(json_Cantones_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cantones_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cantones_3.addFeatures(features_Cantones_3);
var lyr_Cantones_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cantones_3, 
                style: style_Cantones_3,
                popuplayertitle: 'Cantones',
                interactive: false,
                title: '<img src="styles/legend/Cantones_3.png" /> Cantones'
            });
var format_Parroquias_4 = new ol.format.GeoJSON();
var features_Parroquias_4 = format_Parroquias_4.readFeatures(json_Parroquias_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parroquias_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parroquias_4.addFeatures(features_Parroquias_4);
var lyr_Parroquias_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parroquias_4, 
                style: style_Parroquias_4,
                popuplayertitle: 'Parroquias',
                interactive: false,
                title: '<img src="styles/legend/Parroquias_4.png" /> Parroquias'
            });
var format_ReservasJocotoco_5 = new ol.format.GeoJSON();
var features_ReservasJocotoco_5 = format_ReservasJocotoco_5.readFeatures(json_ReservasJocotoco_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReservasJocotoco_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReservasJocotoco_5.addFeatures(features_ReservasJocotoco_5);
var lyr_ReservasJocotoco_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReservasJocotoco_5, 
                style: style_ReservasJocotoco_5,
                popuplayertitle: 'Reservas Jocotoco',
                interactive: false,
                title: '<img src="styles/legend/ReservasJocotoco_5.png" /> Reservas Jocotoco'
            });
var format_Ruta1CSAvionCaidotracks_6 = new ol.format.GeoJSON();
var features_Ruta1CSAvionCaidotracks_6 = format_Ruta1CSAvionCaidotracks_6.readFeatures(json_Ruta1CSAvionCaidotracks_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta1CSAvionCaidotracks_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta1CSAvionCaidotracks_6.addFeatures(features_Ruta1CSAvionCaidotracks_6);
var lyr_Ruta1CSAvionCaidotracks_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta1CSAvionCaidotracks_6, 
                style: style_Ruta1CSAvionCaidotracks_6,
                popuplayertitle: 'Ruta 1 CS - Avion Caido — tracks',
                interactive: false,
                title: '<img src="styles/legend/Ruta1CSAvionCaidotracks_6.png" /> Ruta 1 CS - Avion Caido — tracks'
            });
var format_Ruta2CruzdelSoldadoValladolidtracks_7 = new ol.format.GeoJSON();
var features_Ruta2CruzdelSoldadoValladolidtracks_7 = format_Ruta2CruzdelSoldadoValladolidtracks_7.readFeatures(json_Ruta2CruzdelSoldadoValladolidtracks_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta2CruzdelSoldadoValladolidtracks_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta2CruzdelSoldadoValladolidtracks_7.addFeatures(features_Ruta2CruzdelSoldadoValladolidtracks_7);
var lyr_Ruta2CruzdelSoldadoValladolidtracks_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta2CruzdelSoldadoValladolidtracks_7, 
                style: style_Ruta2CruzdelSoldadoValladolidtracks_7,
                popuplayertitle: 'Ruta 2 Cruz del Soldado - Valladolid — tracks',
                interactive: false,
                title: '<img src="styles/legend/Ruta2CruzdelSoldadoValladolidtracks_7.png" /> Ruta 2 Cruz del Soldado - Valladolid — tracks'
            });
var format_Ruta3CSCarrizalQuebradaHondatracks_8 = new ol.format.GeoJSON();
var features_Ruta3CSCarrizalQuebradaHondatracks_8 = format_Ruta3CSCarrizalQuebradaHondatracks_8.readFeatures(json_Ruta3CSCarrizalQuebradaHondatracks_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta3CSCarrizalQuebradaHondatracks_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta3CSCarrizalQuebradaHondatracks_8.addFeatures(features_Ruta3CSCarrizalQuebradaHondatracks_8);
var lyr_Ruta3CSCarrizalQuebradaHondatracks_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta3CSCarrizalQuebradaHondatracks_8, 
                style: style_Ruta3CSCarrizalQuebradaHondatracks_8,
                popuplayertitle: 'Ruta 3 CS - Carrizal - Quebrada Honda — tracks',
                interactive: false,
                title: '<img src="styles/legend/Ruta3CSCarrizalQuebradaHondatracks_8.png" /> Ruta 3 CS - Carrizal - Quebrada Honda — tracks'
            });
var format_Ruta4CSVQHNumbalaLibioJimeneztracks_9 = new ol.format.GeoJSON();
var features_Ruta4CSVQHNumbalaLibioJimeneztracks_9 = format_Ruta4CSVQHNumbalaLibioJimeneztracks_9.readFeatures(json_Ruta4CSVQHNumbalaLibioJimeneztracks_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta4CSVQHNumbalaLibioJimeneztracks_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta4CSVQHNumbalaLibioJimeneztracks_9.addFeatures(features_Ruta4CSVQHNumbalaLibioJimeneztracks_9);
var lyr_Ruta4CSVQHNumbalaLibioJimeneztracks_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta4CSVQHNumbalaLibioJimeneztracks_9, 
                style: style_Ruta4CSVQHNumbalaLibioJimeneztracks_9,
                popuplayertitle: 'Ruta 4 CS - V - QH - Numbala - Libio Jimenez — tracks',
                interactive: false,
                title: '<img src="styles/legend/Ruta4CSVQHNumbalaLibioJimeneztracks_9.png" /> Ruta 4 CS - V - QH - Numbala - Libio Jimenez — tracks'
            });
var format_Ruta5ValladolidQuebradadelosmolinostracks_10 = new ol.format.GeoJSON();
var features_Ruta5ValladolidQuebradadelosmolinostracks_10 = format_Ruta5ValladolidQuebradadelosmolinostracks_10.readFeatures(json_Ruta5ValladolidQuebradadelosmolinostracks_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta5ValladolidQuebradadelosmolinostracks_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta5ValladolidQuebradadelosmolinostracks_10.addFeatures(features_Ruta5ValladolidQuebradadelosmolinostracks_10);
var lyr_Ruta5ValladolidQuebradadelosmolinostracks_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta5ValladolidQuebradadelosmolinostracks_10, 
                style: style_Ruta5ValladolidQuebradadelosmolinostracks_10,
                popuplayertitle: 'Ruta 5 Valladolid - Quebrada de los molinos — tracks',
                interactive: false,
                title: '<img src="styles/legend/Ruta5ValladolidQuebradadelosmolinostracks_10.png" /> Ruta 5 Valladolid - Quebrada de los molinos — tracks'
            });
var format_Ruta6TapalaRegionaltracks_11 = new ol.format.GeoJSON();
var features_Ruta6TapalaRegionaltracks_11 = format_Ruta6TapalaRegionaltracks_11.readFeatures(json_Ruta6TapalaRegionaltracks_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta6TapalaRegionaltracks_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta6TapalaRegionaltracks_11.addFeatures(features_Ruta6TapalaRegionaltracks_11);
var lyr_Ruta6TapalaRegionaltracks_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta6TapalaRegionaltracks_11, 
                style: style_Ruta6TapalaRegionaltracks_11,
                popuplayertitle: 'Ruta 6 Tapala - Regional — tracks',
                interactive: false,
                title: '<img src="styles/legend/Ruta6TapalaRegionaltracks_11.png" /> Ruta 6 Tapala - Regional — tracks'
            });
var format_Ruta7YanganaCerroToledoNumbalaPalmerastracks_12 = new ol.format.GeoJSON();
var features_Ruta7YanganaCerroToledoNumbalaPalmerastracks_12 = format_Ruta7YanganaCerroToledoNumbalaPalmerastracks_12.readFeatures(json_Ruta7YanganaCerroToledoNumbalaPalmerastracks_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta7YanganaCerroToledoNumbalaPalmerastracks_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta7YanganaCerroToledoNumbalaPalmerastracks_12.addFeatures(features_Ruta7YanganaCerroToledoNumbalaPalmerastracks_12);
var lyr_Ruta7YanganaCerroToledoNumbalaPalmerastracks_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta7YanganaCerroToledoNumbalaPalmerastracks_12, 
                style: style_Ruta7YanganaCerroToledoNumbalaPalmerastracks_12,
                popuplayertitle: 'Ruta 7 Yangana-Cerro Toledo-Numbala-Palmeras — tracks',
                interactive: false,
                title: '<img src="styles/legend/Ruta7YanganaCerroToledoNumbalaPalmerastracks_12.png" /> Ruta 7 Yangana-Cerro Toledo-Numbala-Palmeras — tracks'
            });
var format_Ruta8SenderoPihaQuebradahondatracks_13 = new ol.format.GeoJSON();
var features_Ruta8SenderoPihaQuebradahondatracks_13 = format_Ruta8SenderoPihaQuebradahondatracks_13.readFeatures(json_Ruta8SenderoPihaQuebradahondatracks_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta8SenderoPihaQuebradahondatracks_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta8SenderoPihaQuebradahondatracks_13.addFeatures(features_Ruta8SenderoPihaQuebradahondatracks_13);
var lyr_Ruta8SenderoPihaQuebradahondatracks_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta8SenderoPihaQuebradahondatracks_13, 
                style: style_Ruta8SenderoPihaQuebradahondatracks_13,
                popuplayertitle: 'Ruta 8 Sendero Piha - Quebrada honda — tracks',
                interactive: false,
                title: '<img src="styles/legend/Ruta8SenderoPihaQuebradahondatracks_13.png" /> Ruta 8 Sendero Piha - Quebrada honda — tracks'
            });
var format_Ruta9BustamanteQuebradadeNanchimatracks_14 = new ol.format.GeoJSON();
var features_Ruta9BustamanteQuebradadeNanchimatracks_14 = format_Ruta9BustamanteQuebradadeNanchimatracks_14.readFeatures(json_Ruta9BustamanteQuebradadeNanchimatracks_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta9BustamanteQuebradadeNanchimatracks_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta9BustamanteQuebradadeNanchimatracks_14.addFeatures(features_Ruta9BustamanteQuebradadeNanchimatracks_14);
var lyr_Ruta9BustamanteQuebradadeNanchimatracks_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta9BustamanteQuebradadeNanchimatracks_14, 
                style: style_Ruta9BustamanteQuebradadeNanchimatracks_14,
                popuplayertitle: 'Ruta 9  Bustamante - Quebrada de Nanchima — tracks',
                interactive: false,
                title: '<img src="styles/legend/Ruta9BustamanteQuebradadeNanchimatracks_14.png" /> Ruta 9  Bustamante - Quebrada de Nanchima — tracks'
            });
var format_1_12_2025Ruta7predioveloztracks_15 = new ol.format.GeoJSON();
var features_1_12_2025Ruta7predioveloztracks_15 = format_1_12_2025Ruta7predioveloztracks_15.readFeatures(json_1_12_2025Ruta7predioveloztracks_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1_12_2025Ruta7predioveloztracks_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1_12_2025Ruta7predioveloztracks_15.addFeatures(features_1_12_2025Ruta7predioveloztracks_15);
var lyr_1_12_2025Ruta7predioveloztracks_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1_12_2025Ruta7predioveloztracks_15, 
                style: style_1_12_2025Ruta7predioveloztracks_15,
                popuplayertitle: '1_12_2025 Ruta 7 predio veloz — tracks',
                interactive: false,
                title: '<img src="styles/legend/1_12_2025Ruta7predioveloztracks_15.png" /> 1_12_2025 Ruta 7 predio veloz — tracks'
            });
var format_2_12_2025Ruta6rutadelosotracks_16 = new ol.format.GeoJSON();
var features_2_12_2025Ruta6rutadelosotracks_16 = format_2_12_2025Ruta6rutadelosotracks_16.readFeatures(json_2_12_2025Ruta6rutadelosotracks_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2_12_2025Ruta6rutadelosotracks_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2_12_2025Ruta6rutadelosotracks_16.addFeatures(features_2_12_2025Ruta6rutadelosotracks_16);
var lyr_2_12_2025Ruta6rutadelosotracks_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2_12_2025Ruta6rutadelosotracks_16, 
                style: style_2_12_2025Ruta6rutadelosotracks_16,
                popuplayertitle: '2_12_2025 Ruta 6 ruta del oso — tracks',
                interactive: false,
                title: '<img src="styles/legend/2_12_2025Ruta6rutadelosotracks_16.png" /> 2_12_2025 Ruta 6 ruta del oso — tracks'
            });
var format_18_11_2025Ruta5FRENTESANTAROSAtracks_17 = new ol.format.GeoJSON();
var features_18_11_2025Ruta5FRENTESANTAROSAtracks_17 = format_18_11_2025Ruta5FRENTESANTAROSAtracks_17.readFeatures(json_18_11_2025Ruta5FRENTESANTAROSAtracks_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_18_11_2025Ruta5FRENTESANTAROSAtracks_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_18_11_2025Ruta5FRENTESANTAROSAtracks_17.addFeatures(features_18_11_2025Ruta5FRENTESANTAROSAtracks_17);
var lyr_18_11_2025Ruta5FRENTESANTAROSAtracks_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_18_11_2025Ruta5FRENTESANTAROSAtracks_17, 
                style: style_18_11_2025Ruta5FRENTESANTAROSAtracks_17,
                popuplayertitle: '18_11_2025 Ruta 5 FRENTE SANTA ROSA — tracks',
                interactive: false,
                title: '<img src="styles/legend/18_11_2025Ruta5FRENTESANTAROSAtracks_17.png" /> 18_11_2025 Ruta 5 FRENTE SANTA ROSA — tracks'
            });
var format_19_11_2025Ruta1rutamanakintracks_18 = new ol.format.GeoJSON();
var features_19_11_2025Ruta1rutamanakintracks_18 = format_19_11_2025Ruta1rutamanakintracks_18.readFeatures(json_19_11_2025Ruta1rutamanakintracks_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_19_11_2025Ruta1rutamanakintracks_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_19_11_2025Ruta1rutamanakintracks_18.addFeatures(features_19_11_2025Ruta1rutamanakintracks_18);
var lyr_19_11_2025Ruta1rutamanakintracks_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_19_11_2025Ruta1rutamanakintracks_18, 
                style: style_19_11_2025Ruta1rutamanakintracks_18,
                popuplayertitle: '19_11_2025 Ruta 1 ruta manakin — tracks',
                interactive: false,
                title: '<img src="styles/legend/19_11_2025Ruta1rutamanakintracks_18.png" /> 19_11_2025 Ruta 1 ruta manakin — tracks'
            });
var format_24_11_2025Ruta3rutalascascadastracks_19 = new ol.format.GeoJSON();
var features_24_11_2025Ruta3rutalascascadastracks_19 = format_24_11_2025Ruta3rutalascascadastracks_19.readFeatures(json_24_11_2025Ruta3rutalascascadastracks_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_24_11_2025Ruta3rutalascascadastracks_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_24_11_2025Ruta3rutalascascadastracks_19.addFeatures(features_24_11_2025Ruta3rutalascascadastracks_19);
var lyr_24_11_2025Ruta3rutalascascadastracks_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_24_11_2025Ruta3rutalascascadastracks_19, 
                style: style_24_11_2025Ruta3rutalascascadastracks_19,
                popuplayertitle: '24_11_2025 Ruta 3 ruta las cascadas — tracks',
                interactive: false,
                title: '<img src="styles/legend/24_11_2025Ruta3rutalascascadastracks_19.png" /> 24_11_2025 Ruta 3 ruta las cascadas — tracks'
            });
var format_3_12_2025rutasantarosaMindogardentracks_20 = new ol.format.GeoJSON();
var features_3_12_2025rutasantarosaMindogardentracks_20 = format_3_12_2025rutasantarosaMindogardentracks_20.readFeatures(json_3_12_2025rutasantarosaMindogardentracks_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3_12_2025rutasantarosaMindogardentracks_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3_12_2025rutasantarosaMindogardentracks_20.addFeatures(features_3_12_2025rutasantarosaMindogardentracks_20);
var lyr_3_12_2025rutasantarosaMindogardentracks_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3_12_2025rutasantarosaMindogardentracks_20, 
                style: style_3_12_2025rutasantarosaMindogardentracks_20,
                popuplayertitle: '3_12_2025 ruta santa rosa, Mindo garden — tracks',
                interactive: false,
                title: '<img src="styles/legend/3_12_2025rutasantarosaMindogardentracks_20.png" /> 3_12_2025 ruta santa rosa, Mindo garden — tracks'
            });
var format_Ruta1riosunucowaypoints_21 = new ol.format.GeoJSON();
var features_Ruta1riosunucowaypoints_21 = format_Ruta1riosunucowaypoints_21.readFeatures(json_Ruta1riosunucowaypoints_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta1riosunucowaypoints_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta1riosunucowaypoints_21.addFeatures(features_Ruta1riosunucowaypoints_21);
var lyr_Ruta1riosunucowaypoints_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta1riosunucowaypoints_21, 
                style: style_Ruta1riosunucowaypoints_21,
                popuplayertitle: 'Ruta 1 rio sunuco  — waypoints',
                interactive: false,
                title: '<img src="styles/legend/Ruta1riosunucowaypoints_21.png" /> Ruta 1 rio sunuco  — waypoints'
            });
var format_Ruta2rioQuijoswaypoints_22 = new ol.format.GeoJSON();
var features_Ruta2rioQuijoswaypoints_22 = format_Ruta2rioQuijoswaypoints_22.readFeatures(json_Ruta2rioQuijoswaypoints_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta2rioQuijoswaypoints_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta2rioQuijoswaypoints_22.addFeatures(features_Ruta2rioQuijoswaypoints_22);
var lyr_Ruta2rioQuijoswaypoints_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta2rioQuijoswaypoints_22, 
                style: style_Ruta2rioQuijoswaypoints_22,
                popuplayertitle: 'Ruta 2 rio Quijos  — waypoints',
                interactive: false,
                title: '<img src="styles/legend/Ruta2rioQuijoswaypoints_22.png" /> Ruta 2 rio Quijos  — waypoints'
            });
var format_Ruta4cascadaalParamorioSunucowaypoints_23 = new ol.format.GeoJSON();
var features_Ruta4cascadaalParamorioSunucowaypoints_23 = format_Ruta4cascadaalParamorioSunucowaypoints_23.readFeatures(json_Ruta4cascadaalParamorioSunucowaypoints_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta4cascadaalParamorioSunucowaypoints_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta4cascadaalParamorioSunucowaypoints_23.addFeatures(features_Ruta4cascadaalParamorioSunucowaypoints_23);
var lyr_Ruta4cascadaalParamorioSunucowaypoints_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta4cascadaalParamorioSunucowaypoints_23, 
                style: style_Ruta4cascadaalParamorioSunucowaypoints_23,
                popuplayertitle: 'Ruta 4 cascada al Paramo rio Sunuco  — waypoints',
                interactive: false,
                title: '<img src="styles/legend/Ruta4cascadaalParamorioSunucowaypoints_23.png" /> Ruta 4 cascada al Paramo rio Sunuco  — waypoints'
            });
var format_Ruta6alpuntoDlimiteconseorTapia2waypoints_24 = new ol.format.GeoJSON();
var features_Ruta6alpuntoDlimiteconseorTapia2waypoints_24 = format_Ruta6alpuntoDlimiteconseorTapia2waypoints_24.readFeatures(json_Ruta6alpuntoDlimiteconseorTapia2waypoints_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta6alpuntoDlimiteconseorTapia2waypoints_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta6alpuntoDlimiteconseorTapia2waypoints_24.addFeatures(features_Ruta6alpuntoDlimiteconseorTapia2waypoints_24);
var lyr_Ruta6alpuntoDlimiteconseorTapia2waypoints_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta6alpuntoDlimiteconseorTapia2waypoints_24, 
                style: style_Ruta6alpuntoDlimiteconseorTapia2waypoints_24,
                popuplayertitle: 'Ruta 6 al punto D limite con señor Tapia  (2) — waypoints',
                interactive: false,
                title: '<img src="styles/legend/Ruta6alpuntoDlimiteconseorTapia2waypoints_24.png" /> Ruta 6 al punto D limite con señor Tapia  (2) — waypoints'
            });
var format_RUTA11SANANTONIOtracks_25 = new ol.format.GeoJSON();
var features_RUTA11SANANTONIOtracks_25 = format_RUTA11SANANTONIOtracks_25.readFeatures(json_RUTA11SANANTONIOtracks_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUTA11SANANTONIOtracks_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUTA11SANANTONIOtracks_25.addFeatures(features_RUTA11SANANTONIOtracks_25);
var lyr_RUTA11SANANTONIOtracks_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUTA11SANANTONIOtracks_25, 
                style: style_RUTA11SANANTONIOtracks_25,
                popuplayertitle: 'RUTA 11 SAN ANTONIO — tracks',
                interactive: false,
                title: '<img src="styles/legend/RUTA11SANANTONIOtracks_25.png" /> RUTA 11 SAN ANTONIO — tracks'
            });
var format_RUTA11SANANTONIOTrack002_26 = new ol.format.GeoJSON();
var features_RUTA11SANANTONIOTrack002_26 = format_RUTA11SANANTONIOTrack002_26.readFeatures(json_RUTA11SANANTONIOTrack002_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUTA11SANANTONIOTrack002_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUTA11SANANTONIOTrack002_26.addFeatures(features_RUTA11SANANTONIOTrack002_26);
var lyr_RUTA11SANANTONIOTrack002_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUTA11SANANTONIOTrack002_26, 
                style: style_RUTA11SANANTONIOTrack002_26,
                popuplayertitle: 'RUTA 11 SAN ANTONIO — Track 002',
                interactive: false,
                title: 'RUTA 11 SAN ANTONIO — Track 002'
            });
var format_Track_RUT1LASABANETtracks_27 = new ol.format.GeoJSON();
var features_Track_RUT1LASABANETtracks_27 = format_Track_RUT1LASABANETtracks_27.readFeatures(json_Track_RUT1LASABANETtracks_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Track_RUT1LASABANETtracks_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Track_RUT1LASABANETtracks_27.addFeatures(features_Track_RUT1LASABANETtracks_27);
var lyr_Track_RUT1LASABANETtracks_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Track_RUT1LASABANETtracks_27, 
                style: style_Track_RUT1LASABANETtracks_27,
                popuplayertitle: 'Track_RUTÁ  1 LA SABANETÁ — tracks',
                interactive: false,
                title: '<img src="styles/legend/Track_RUT1LASABANETtracks_27.png" /> Track_RUTÁ  1 LA SABANETÁ — tracks'
            });
var format_Track_RUTA2BUSTMNTEtracks_28 = new ol.format.GeoJSON();
var features_Track_RUTA2BUSTMNTEtracks_28 = format_Track_RUTA2BUSTMNTEtracks_28.readFeatures(json_Track_RUTA2BUSTMNTEtracks_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Track_RUTA2BUSTMNTEtracks_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Track_RUTA2BUSTMNTEtracks_28.addFeatures(features_Track_RUTA2BUSTMNTEtracks_28);
var lyr_Track_RUTA2BUSTMNTEtracks_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Track_RUTA2BUSTMNTEtracks_28, 
                style: style_Track_RUTA2BUSTMNTEtracks_28,
                popuplayertitle: 'Track_RUTA 2 BUSTÁMÁNTE — tracks',
                interactive: false,
                title: '<img src="styles/legend/Track_RUTA2BUSTMNTEtracks_28.png" /> Track_RUTA 2 BUSTÁMÁNTE — tracks'
            });
var format_Track_RUTA3LOSCEIBITOStracks_29 = new ol.format.GeoJSON();
var features_Track_RUTA3LOSCEIBITOStracks_29 = format_Track_RUTA3LOSCEIBITOStracks_29.readFeatures(json_Track_RUTA3LOSCEIBITOStracks_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Track_RUTA3LOSCEIBITOStracks_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Track_RUTA3LOSCEIBITOStracks_29.addFeatures(features_Track_RUTA3LOSCEIBITOStracks_29);
var lyr_Track_RUTA3LOSCEIBITOStracks_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Track_RUTA3LOSCEIBITOStracks_29, 
                style: style_Track_RUTA3LOSCEIBITOStracks_29,
                popuplayertitle: 'Track_RUTA 3 LOS CEIBITOS — tracks',
                interactive: false,
                title: '<img src="styles/legend/Track_RUTA3LOSCEIBITOStracks_29.png" /> Track_RUTA 3 LOS CEIBITOS — tracks'
            });
var format_Track_RUTA4LOSBALSAMOStracks_30 = new ol.format.GeoJSON();
var features_Track_RUTA4LOSBALSAMOStracks_30 = format_Track_RUTA4LOSBALSAMOStracks_30.readFeatures(json_Track_RUTA4LOSBALSAMOStracks_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Track_RUTA4LOSBALSAMOStracks_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Track_RUTA4LOSBALSAMOStracks_30.addFeatures(features_Track_RUTA4LOSBALSAMOStracks_30);
var lyr_Track_RUTA4LOSBALSAMOStracks_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Track_RUTA4LOSBALSAMOStracks_30, 
                style: style_Track_RUTA4LOSBALSAMOStracks_30,
                popuplayertitle: 'Track_RUTA 4 LOS BALSAMOS — tracks',
                interactive: false,
                title: '<img src="styles/legend/Track_RUTA4LOSBALSAMOStracks_30.png" /> Track_RUTA 4 LOS BALSAMOS — tracks'
            });
var format_Track_RUTA5LASVARAStracks_31 = new ol.format.GeoJSON();
var features_Track_RUTA5LASVARAStracks_31 = format_Track_RUTA5LASVARAStracks_31.readFeatures(json_Track_RUTA5LASVARAStracks_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Track_RUTA5LASVARAStracks_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Track_RUTA5LASVARAStracks_31.addFeatures(features_Track_RUTA5LASVARAStracks_31);
var lyr_Track_RUTA5LASVARAStracks_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Track_RUTA5LASVARAStracks_31, 
                style: style_Track_RUTA5LASVARAStracks_31,
                popuplayertitle: 'Track_RUTA 5 LAS VARAS — tracks',
                interactive: false,
                title: '<img src="styles/legend/Track_RUTA5LASVARAStracks_31.png" /> Track_RUTA 5 LAS VARAS — tracks'
            });
var format_Track_RUTA6LAMANGATtracks_32 = new ol.format.GeoJSON();
var features_Track_RUTA6LAMANGATtracks_32 = format_Track_RUTA6LAMANGATtracks_32.readFeatures(json_Track_RUTA6LAMANGATtracks_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Track_RUTA6LAMANGATtracks_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Track_RUTA6LAMANGATtracks_32.addFeatures(features_Track_RUTA6LAMANGATtracks_32);
var lyr_Track_RUTA6LAMANGATtracks_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Track_RUTA6LAMANGATtracks_32, 
                style: style_Track_RUTA6LAMANGATtracks_32,
                popuplayertitle: 'Track_RUTA 6 LA MANGA T. — tracks',
                interactive: false,
                title: '<img src="styles/legend/Track_RUTA6LAMANGATtracks_32.png" /> Track_RUTA 6 LA MANGA T. — tracks'
            });
var format_Track_RUTA7LASTRANCAStracks_33 = new ol.format.GeoJSON();
var features_Track_RUTA7LASTRANCAStracks_33 = format_Track_RUTA7LASTRANCAStracks_33.readFeatures(json_Track_RUTA7LASTRANCAStracks_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Track_RUTA7LASTRANCAStracks_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Track_RUTA7LASTRANCAStracks_33.addFeatures(features_Track_RUTA7LASTRANCAStracks_33);
var lyr_Track_RUTA7LASTRANCAStracks_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Track_RUTA7LASTRANCAStracks_33, 
                style: style_Track_RUTA7LASTRANCAStracks_33,
                popuplayertitle: 'Track_RUTA 7 LAS TRANCAS — tracks',
                interactive: false,
                title: '<img src="styles/legend/Track_RUTA7LASTRANCAStracks_33.png" /> Track_RUTA 7 LAS TRANCAS — tracks'
            });
var format_Track_RUTA8LAPALMAtracks_34 = new ol.format.GeoJSON();
var features_Track_RUTA8LAPALMAtracks_34 = format_Track_RUTA8LAPALMAtracks_34.readFeatures(json_Track_RUTA8LAPALMAtracks_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Track_RUTA8LAPALMAtracks_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Track_RUTA8LAPALMAtracks_34.addFeatures(features_Track_RUTA8LAPALMAtracks_34);
var lyr_Track_RUTA8LAPALMAtracks_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Track_RUTA8LAPALMAtracks_34, 
                style: style_Track_RUTA8LAPALMAtracks_34,
                popuplayertitle: 'Track_RUTA 8 LA PALMA — tracks',
                interactive: false,
                title: '<img src="styles/legend/Track_RUTA8LAPALMAtracks_34.png" /> Track_RUTA 8 LA PALMA — tracks'
            });
var format_Track_RUTA9SANFRANCISCOtracks_35 = new ol.format.GeoJSON();
var features_Track_RUTA9SANFRANCISCOtracks_35 = format_Track_RUTA9SANFRANCISCOtracks_35.readFeatures(json_Track_RUTA9SANFRANCISCOtracks_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Track_RUTA9SANFRANCISCOtracks_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Track_RUTA9SANFRANCISCOtracks_35.addFeatures(features_Track_RUTA9SANFRANCISCOtracks_35);
var lyr_Track_RUTA9SANFRANCISCOtracks_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Track_RUTA9SANFRANCISCOtracks_35, 
                style: style_Track_RUTA9SANFRANCISCOtracks_35,
                popuplayertitle: 'Track_RUTA 9 SAN FRANCISCO — tracks',
                interactive: false,
                title: '<img src="styles/legend/Track_RUTA9SANFRANCISCOtracks_35.png" /> Track_RUTA 9 SAN FRANCISCO — tracks'
            });
var format_Track_RUTA10ELBUStracks_36 = new ol.format.GeoJSON();
var features_Track_RUTA10ELBUStracks_36 = format_Track_RUTA10ELBUStracks_36.readFeatures(json_Track_RUTA10ELBUStracks_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Track_RUTA10ELBUStracks_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Track_RUTA10ELBUStracks_36.addFeatures(features_Track_RUTA10ELBUStracks_36);
var lyr_Track_RUTA10ELBUStracks_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Track_RUTA10ELBUStracks_36, 
                style: style_Track_RUTA10ELBUStracks_36,
                popuplayertitle: 'Track_RUTA 10 EL BUS — tracks',
                interactive: false,
                title: '<img src="styles/legend/Track_RUTA10ELBUStracks_36.png" /> Track_RUTA 10 EL BUS — tracks'
            });
var format_Track_RUTA12ZOILACORtracks_37 = new ol.format.GeoJSON();
var features_Track_RUTA12ZOILACORtracks_37 = format_Track_RUTA12ZOILACORtracks_37.readFeatures(json_Track_RUTA12ZOILACORtracks_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Track_RUTA12ZOILACORtracks_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Track_RUTA12ZOILACORtracks_37.addFeatures(features_Track_RUTA12ZOILACORtracks_37);
var lyr_Track_RUTA12ZOILACORtracks_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Track_RUTA12ZOILACORtracks_37, 
                style: style_Track_RUTA12ZOILACORtracks_37,
                popuplayertitle: 'Track_RUTA 12 ZOILA COR — tracks',
                interactive: false,
                title: '<img src="styles/legend/Track_RUTA12ZOILACORtracks_37.png" /> Track_RUTA 12 ZOILA COR — tracks'
            });
var format_Track_RUTA13RIOMATIAStracks_38 = new ol.format.GeoJSON();
var features_Track_RUTA13RIOMATIAStracks_38 = format_Track_RUTA13RIOMATIAStracks_38.readFeatures(json_Track_RUTA13RIOMATIAStracks_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Track_RUTA13RIOMATIAStracks_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Track_RUTA13RIOMATIAStracks_38.addFeatures(features_Track_RUTA13RIOMATIAStracks_38);
var lyr_Track_RUTA13RIOMATIAStracks_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Track_RUTA13RIOMATIAStracks_38, 
                style: style_Track_RUTA13RIOMATIAStracks_38,
                popuplayertitle: 'Track_RUTA 13 RIO MATIAS — tracks',
                interactive: false,
                title: '<img src="styles/legend/Track_RUTA13RIOMATIAStracks_38.png" /> Track_RUTA 13 RIO MATIAS — tracks'
            });
var format_Track_RUTA14PUENTELASBALSAStracks_39 = new ol.format.GeoJSON();
var features_Track_RUTA14PUENTELASBALSAStracks_39 = format_Track_RUTA14PUENTELASBALSAStracks_39.readFeatures(json_Track_RUTA14PUENTELASBALSAStracks_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Track_RUTA14PUENTELASBALSAStracks_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Track_RUTA14PUENTELASBALSAStracks_39.addFeatures(features_Track_RUTA14PUENTELASBALSAStracks_39);
var lyr_Track_RUTA14PUENTELASBALSAStracks_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Track_RUTA14PUENTELASBALSAStracks_39, 
                style: style_Track_RUTA14PUENTELASBALSAStracks_39,
                popuplayertitle: 'Track_RUTA 14 PUENTE LAS BALSAS — tracks',
                interactive: false,
                title: '<img src="styles/legend/Track_RUTA14PUENTELASBALSAStracks_39.png" /> Track_RUTA 14 PUENTE LAS BALSAS — tracks'
            });
var format_RUTA2LADERAESTEOESTEYFILOtracks_40 = new ol.format.GeoJSON();
var features_RUTA2LADERAESTEOESTEYFILOtracks_40 = format_RUTA2LADERAESTEOESTEYFILOtracks_40.readFeatures(json_RUTA2LADERAESTEOESTEYFILOtracks_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUTA2LADERAESTEOESTEYFILOtracks_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUTA2LADERAESTEOESTEYFILOtracks_40.addFeatures(features_RUTA2LADERAESTEOESTEYFILOtracks_40);
var lyr_RUTA2LADERAESTEOESTEYFILOtracks_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUTA2LADERAESTEOESTEYFILOtracks_40, 
                style: style_RUTA2LADERAESTEOESTEYFILOtracks_40,
                popuplayertitle: 'RUTA 2 LADERA ESTE, OESTE Y FILO — tracks',
                interactive: false,
                title: '<img src="styles/legend/RUTA2LADERAESTEOESTEYFILOtracks_40.png" /> RUTA 2 LADERA ESTE, OESTE Y FILO — tracks'
            });
var format_Ruta4laderaesteylibanocopalingatracks_41 = new ol.format.GeoJSON();
var features_Ruta4laderaesteylibanocopalingatracks_41 = format_Ruta4laderaesteylibanocopalingatracks_41.readFeatures(json_Ruta4laderaesteylibanocopalingatracks_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta4laderaesteylibanocopalingatracks_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta4laderaesteylibanocopalingatracks_41.addFeatures(features_Ruta4laderaesteylibanocopalingatracks_41);
var lyr_Ruta4laderaesteylibanocopalingatracks_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta4laderaesteylibanocopalingatracks_41, 
                style: style_Ruta4laderaesteylibanocopalingatracks_41,
                popuplayertitle: 'Ruta 4 ladera este y libano copalinga — tracks',
                interactive: false,
                title: '<img src="styles/legend/Ruta4laderaesteylibanocopalingatracks_41.png" /> Ruta 4 ladera este y libano copalinga — tracks'
            });
var format_Ruta5laderaOestecopalingatracks_42 = new ol.format.GeoJSON();
var features_Ruta5laderaOestecopalingatracks_42 = format_Ruta5laderaOestecopalingatracks_42.readFeatures(json_Ruta5laderaOestecopalingatracks_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta5laderaOestecopalingatracks_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta5laderaOestecopalingatracks_42.addFeatures(features_Ruta5laderaOestecopalingatracks_42);
var lyr_Ruta5laderaOestecopalingatracks_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta5laderaOestecopalingatracks_42, 
                style: style_Ruta5laderaOestecopalingatracks_42,
                popuplayertitle: 'Ruta 5 ladera Oeste copalinga — tracks',
                interactive: false,
                title: '<img src="styles/legend/Ruta5laderaOestecopalingatracks_42.png" /> Ruta 5 ladera Oeste copalinga — tracks'
            });
var format_RUTA3RIOBOMBUSCAROTracks_43 = new ol.format.GeoJSON();
var features_RUTA3RIOBOMBUSCAROTracks_43 = format_RUTA3RIOBOMBUSCAROTracks_43.readFeatures(json_RUTA3RIOBOMBUSCAROTracks_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUTA3RIOBOMBUSCAROTracks_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUTA3RIOBOMBUSCAROTracks_43.addFeatures(features_RUTA3RIOBOMBUSCAROTracks_43);
var lyr_RUTA3RIOBOMBUSCAROTracks_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUTA3RIOBOMBUSCAROTracks_43, 
                style: style_RUTA3RIOBOMBUSCAROTracks_43,
                popuplayertitle: 'RUTA.3 RIO BOMBUSCARO — Tracks',
                interactive: false,
                title: 'RUTA.3 RIO BOMBUSCARO — Tracks'
            });
var format_Track_ruta06copalinga16175330tracks_44 = new ol.format.GeoJSON();
var features_Track_ruta06copalinga16175330tracks_44 = format_Track_ruta06copalinga16175330tracks_44.readFeatures(json_Track_ruta06copalinga16175330tracks_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Track_ruta06copalinga16175330tracks_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Track_ruta06copalinga16175330tracks_44.addFeatures(features_Track_ruta06copalinga16175330tracks_44);
var lyr_Track_ruta06copalinga16175330tracks_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Track_ruta06copalinga16175330tracks_44, 
                style: style_Track_ruta06copalinga16175330tracks_44,
                popuplayertitle: 'Track_ruta 06 copalinga-16 175330 — tracks',
                interactive: false,
                title: '<img src="styles/legend/Track_ruta06copalinga16175330tracks_44.png" /> Track_ruta 06 copalinga-16 175330 — tracks'
            });
var format_Ruta1FincaEspinozapartebajatracks_45 = new ol.format.GeoJSON();
var features_Ruta1FincaEspinozapartebajatracks_45 = format_Ruta1FincaEspinozapartebajatracks_45.readFeatures(json_Ruta1FincaEspinozapartebajatracks_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta1FincaEspinozapartebajatracks_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta1FincaEspinozapartebajatracks_45.addFeatures(features_Ruta1FincaEspinozapartebajatracks_45);
var lyr_Ruta1FincaEspinozapartebajatracks_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta1FincaEspinozapartebajatracks_45, 
                style: style_Ruta1FincaEspinozapartebajatracks_45,
                popuplayertitle: 'Ruta 1 Finca Espinoza parte baja — tracks',
                interactive: false,
                title: '<img src="styles/legend/Ruta1FincaEspinozapartebajatracks_45.png" /> Ruta 1 Finca Espinoza parte baja — tracks'
            });
var format_Ruta2SectorPiedraChispatracks_46 = new ol.format.GeoJSON();
var features_Ruta2SectorPiedraChispatracks_46 = format_Ruta2SectorPiedraChispatracks_46.readFeatures(json_Ruta2SectorPiedraChispatracks_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta2SectorPiedraChispatracks_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta2SectorPiedraChispatracks_46.addFeatures(features_Ruta2SectorPiedraChispatracks_46);
var lyr_Ruta2SectorPiedraChispatracks_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta2SectorPiedraChispatracks_46, 
                style: style_Ruta2SectorPiedraChispatracks_46,
                popuplayertitle: 'Ruta 2 Sector Piedra Chispa — tracks',
                interactive: false,
                title: '<img src="styles/legend/Ruta2SectorPiedraChispatracks_46.png" /> Ruta 2 Sector Piedra Chispa — tracks'
            });
var format_Ruta3Sectorjaulaguacamayostracks_47 = new ol.format.GeoJSON();
var features_Ruta3Sectorjaulaguacamayostracks_47 = format_Ruta3Sectorjaulaguacamayostracks_47.readFeatures(json_Ruta3Sectorjaulaguacamayostracks_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta3Sectorjaulaguacamayostracks_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta3Sectorjaulaguacamayostracks_47.addFeatures(features_Ruta3Sectorjaulaguacamayostracks_47);
var lyr_Ruta3Sectorjaulaguacamayostracks_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta3Sectorjaulaguacamayostracks_47, 
                style: style_Ruta3Sectorjaulaguacamayostracks_47,
                popuplayertitle: 'Ruta 3 Sector jaula guacamayos — tracks',
                interactive: false,
                title: '<img src="styles/legend/Ruta3Sectorjaulaguacamayostracks_47.png" /> Ruta 3 Sector jaula guacamayos — tracks'
            });
var format_Ruta4Partealtaltimapropiedadtracks_48 = new ol.format.GeoJSON();
var features_Ruta4Partealtaltimapropiedadtracks_48 = format_Ruta4Partealtaltimapropiedadtracks_48.readFeatures(json_Ruta4Partealtaltimapropiedadtracks_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta4Partealtaltimapropiedadtracks_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta4Partealtaltimapropiedadtracks_48.addFeatures(features_Ruta4Partealtaltimapropiedadtracks_48);
var lyr_Ruta4Partealtaltimapropiedadtracks_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta4Partealtaltimapropiedadtracks_48, 
                style: style_Ruta4Partealtaltimapropiedadtracks_48,
                popuplayertitle: 'Ruta 4 Parte alta última propiedad — tracks',
                interactive: false,
                title: '<img src="styles/legend/Ruta4Partealtaltimapropiedadtracks_48.png" /> Ruta 4 Parte alta última propiedad — tracks'
            });
var format_Ruta1Primerapropiedadtracks_49 = new ol.format.GeoJSON();
var features_Ruta1Primerapropiedadtracks_49 = format_Ruta1Primerapropiedadtracks_49.readFeatures(json_Ruta1Primerapropiedadtracks_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta1Primerapropiedadtracks_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta1Primerapropiedadtracks_49.addFeatures(features_Ruta1Primerapropiedadtracks_49);
var lyr_Ruta1Primerapropiedadtracks_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta1Primerapropiedadtracks_49, 
                style: style_Ruta1Primerapropiedadtracks_49,
                popuplayertitle: 'Ruta 1 Primera propiedad — tracks',
                interactive: false,
                title: '<img src="styles/legend/Ruta1Primerapropiedadtracks_49.png" /> Ruta 1 Primera propiedad — tracks'
            });
var format_Ruta1Riopichanrucopichinchatracks_50 = new ol.format.GeoJSON();
var features_Ruta1Riopichanrucopichinchatracks_50 = format_Ruta1Riopichanrucopichinchatracks_50.readFeatures(json_Ruta1Riopichanrucopichinchatracks_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta1Riopichanrucopichinchatracks_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta1Riopichanrucopichinchatracks_50.addFeatures(features_Ruta1Riopichanrucopichinchatracks_50);
var lyr_Ruta1Riopichanrucopichinchatracks_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta1Riopichanrucopichinchatracks_50, 
                style: style_Ruta1Riopichanrucopichinchatracks_50,
                popuplayertitle: 'Ruta 1 Rio pichan + ruco pichincha — tracks',
                interactive: false,
                title: '<img src="styles/legend/Ruta1Riopichanrucopichinchatracks_50.png" /> Ruta 1 Rio pichan + ruco pichincha — tracks'
            });
var format_Ruta2CochalomaPadreencantadoCascada_tracks_51 = new ol.format.GeoJSON();
var features_Ruta2CochalomaPadreencantadoCascada_tracks_51 = format_Ruta2CochalomaPadreencantadoCascada_tracks_51.readFeatures(json_Ruta2CochalomaPadreencantadoCascada_tracks_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta2CochalomaPadreencantadoCascada_tracks_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta2CochalomaPadreencantadoCascada_tracks_51.addFeatures(features_Ruta2CochalomaPadreencantadoCascada_tracks_51);
var lyr_Ruta2CochalomaPadreencantadoCascada_tracks_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta2CochalomaPadreencantadoCascada_tracks_51, 
                style: style_Ruta2CochalomaPadreencantadoCascada_tracks_51,
                popuplayertitle: 'Ruta 2 Cochaloma + Padre encantado + Cascada _ — tracks',
                interactive: false,
                title: '<img src="styles/legend/Ruta2CochalomaPadreencantadoCascada_tracks_51.png" /> Ruta 2 Cochaloma + Padre encantado + Cascada _ — tracks'
            });
var format_Ruta3LacasetaTunelesCascada_tracks_52 = new ol.format.GeoJSON();
var features_Ruta3LacasetaTunelesCascada_tracks_52 = format_Ruta3LacasetaTunelesCascada_tracks_52.readFeatures(json_Ruta3LacasetaTunelesCascada_tracks_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta3LacasetaTunelesCascada_tracks_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta3LacasetaTunelesCascada_tracks_52.addFeatures(features_Ruta3LacasetaTunelesCascada_tracks_52);
var lyr_Ruta3LacasetaTunelesCascada_tracks_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta3LacasetaTunelesCascada_tracks_52, 
                style: style_Ruta3LacasetaTunelesCascada_tracks_52,
                popuplayertitle: 'Ruta 3 La caseta + Tuneles +  Cascada_ — tracks',
                interactive: false,
                title: '<img src="styles/legend/Ruta3LacasetaTunelesCascada_tracks_52.png" /> Ruta 3 La caseta + Tuneles +  Cascada_ — tracks'
            });
var format_Ruta4SenderoosoBromeliasMaskedtrongontracks_53 = new ol.format.GeoJSON();
var features_Ruta4SenderoosoBromeliasMaskedtrongontracks_53 = format_Ruta4SenderoosoBromeliasMaskedtrongontracks_53.readFeatures(json_Ruta4SenderoosoBromeliasMaskedtrongontracks_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta4SenderoosoBromeliasMaskedtrongontracks_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta4SenderoosoBromeliasMaskedtrongontracks_53.addFeatures(features_Ruta4SenderoosoBromeliasMaskedtrongontracks_53);
var lyr_Ruta4SenderoosoBromeliasMaskedtrongontracks_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta4SenderoosoBromeliasMaskedtrongontracks_53, 
                style: style_Ruta4SenderoosoBromeliasMaskedtrongontracks_53,
                popuplayertitle: 'Ruta 4 Sendero oso + Bromelias + Masked trongon — tracks',
                interactive: false,
                title: '<img src="styles/legend/Ruta4SenderoosoBromeliasMaskedtrongontracks_53.png" /> Ruta 4 Sendero oso + Bromelias + Masked trongon — tracks'
            });
var format_Ruta5PolylepisCaminodeherradurasTablawasitracks_54 = new ol.format.GeoJSON();
var features_Ruta5PolylepisCaminodeherradurasTablawasitracks_54 = format_Ruta5PolylepisCaminodeherradurasTablawasitracks_54.readFeatures(json_Ruta5PolylepisCaminodeherradurasTablawasitracks_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta5PolylepisCaminodeherradurasTablawasitracks_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta5PolylepisCaminodeherradurasTablawasitracks_54.addFeatures(features_Ruta5PolylepisCaminodeherradurasTablawasitracks_54);
var lyr_Ruta5PolylepisCaminodeherradurasTablawasitracks_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta5PolylepisCaminodeherradurasTablawasitracks_54, 
                style: style_Ruta5PolylepisCaminodeherradurasTablawasitracks_54,
                popuplayertitle: 'Ruta 5 Polylepis + Camino de herraduras + Tabla wasi — tracks',
                interactive: false,
                title: '<img src="styles/legend/Ruta5PolylepisCaminodeherradurasTablawasitracks_54.png" /> Ruta 5 Polylepis + Camino de herraduras + Tabla wasi — tracks'
            });
var format_Ruta6AndeanLadispensaCerroyanahurco_tracks_55 = new ol.format.GeoJSON();
var features_Ruta6AndeanLadispensaCerroyanahurco_tracks_55 = format_Ruta6AndeanLadispensaCerroyanahurco_tracks_55.readFeatures(json_Ruta6AndeanLadispensaCerroyanahurco_tracks_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta6AndeanLadispensaCerroyanahurco_tracks_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta6AndeanLadispensaCerroyanahurco_tracks_55.addFeatures(features_Ruta6AndeanLadispensaCerroyanahurco_tracks_55);
var lyr_Ruta6AndeanLadispensaCerroyanahurco_tracks_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta6AndeanLadispensaCerroyanahurco_tracks_55, 
                style: style_Ruta6AndeanLadispensaCerroyanahurco_tracks_55,
                popuplayertitle: 'Ruta 6 Andean + La dispensa + Cerro yanahurco_ — tracks',
                interactive: false,
                title: '<img src="styles/legend/Ruta6AndeanLadispensaCerroyanahurco_tracks_55.png" /> Ruta 6 Andean + La dispensa + Cerro yanahurco_ — tracks'
            });
var format_Ruta7Lacampia_tracks_56 = new ol.format.GeoJSON();
var features_Ruta7Lacampia_tracks_56 = format_Ruta7Lacampia_tracks_56.readFeatures(json_Ruta7Lacampia_tracks_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta7Lacampia_tracks_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta7Lacampia_tracks_56.addFeatures(features_Ruta7Lacampia_tracks_56);
var lyr_Ruta7Lacampia_tracks_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta7Lacampia_tracks_56, 
                style: style_Ruta7Lacampia_tracks_56,
                popuplayertitle: 'Ruta 7 La campiña_ — tracks',
                interactive: false,
                title: '<img src="styles/legend/Ruta7Lacampia_tracks_56.png" /> Ruta 7 La campiña_ — tracks'
            });
var format_Ruta1Shamatocabeceraderiojondachiwaypoints_57 = new ol.format.GeoJSON();
var features_Ruta1Shamatocabeceraderiojondachiwaypoints_57 = format_Ruta1Shamatocabeceraderiojondachiwaypoints_57.readFeatures(json_Ruta1Shamatocabeceraderiojondachiwaypoints_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta1Shamatocabeceraderiojondachiwaypoints_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta1Shamatocabeceraderiojondachiwaypoints_57.addFeatures(features_Ruta1Shamatocabeceraderiojondachiwaypoints_57);
var lyr_Ruta1Shamatocabeceraderiojondachiwaypoints_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta1Shamatocabeceraderiojondachiwaypoints_57, 
                style: style_Ruta1Shamatocabeceraderiojondachiwaypoints_57,
                popuplayertitle: 'Ruta 1 Shamato, cabecera de rio jondachi — waypoints',
                interactive: false,
                title: '<img src="styles/legend/Ruta1Shamatocabeceraderiojondachiwaypoints_57.png" /> Ruta 1 Shamato, cabecera de rio jondachi — waypoints'
            });
var format_Ruta3pungarayacuminasGenovevaprediosmaximoAlvaradoyJoseYumbowaypoints_58 = new ol.format.GeoJSON();
var features_Ruta3pungarayacuminasGenovevaprediosmaximoAlvaradoyJoseYumbowaypoints_58 = format_Ruta3pungarayacuminasGenovevaprediosmaximoAlvaradoyJoseYumbowaypoints_58.readFeatures(json_Ruta3pungarayacuminasGenovevaprediosmaximoAlvaradoyJoseYumbowaypoints_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta3pungarayacuminasGenovevaprediosmaximoAlvaradoyJoseYumbowaypoints_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta3pungarayacuminasGenovevaprediosmaximoAlvaradoyJoseYumbowaypoints_58.addFeatures(features_Ruta3pungarayacuminasGenovevaprediosmaximoAlvaradoyJoseYumbowaypoints_58);
var lyr_Ruta3pungarayacuminasGenovevaprediosmaximoAlvaradoyJoseYumbowaypoints_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta3pungarayacuminasGenovevaprediosmaximoAlvaradoyJoseYumbowaypoints_58, 
                style: style_Ruta3pungarayacuminasGenovevaprediosmaximoAlvaradoyJoseYumbowaypoints_58,
                popuplayertitle: 'Ruta 3 pungarayacu minas Genoveva predios maximo Alvarado y Jose Yumbo — waypoints',
                interactive: false,
                title: '<img src="styles/legend/Ruta3pungarayacuminasGenovevaprediosmaximoAlvaradoyJoseYumbowaypoints_58.png" /> Ruta 3 pungarayacu minas Genoveva predios maximo Alvarado y Jose Yumbo — waypoints'
            });
var format_Ruta4pungayacuvalenciaRojasNormaHuatatocaCochayacuwaypoints_59 = new ol.format.GeoJSON();
var features_Ruta4pungayacuvalenciaRojasNormaHuatatocaCochayacuwaypoints_59 = format_Ruta4pungayacuvalenciaRojasNormaHuatatocaCochayacuwaypoints_59.readFeatures(json_Ruta4pungayacuvalenciaRojasNormaHuatatocaCochayacuwaypoints_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta4pungayacuvalenciaRojasNormaHuatatocaCochayacuwaypoints_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta4pungayacuvalenciaRojasNormaHuatatocaCochayacuwaypoints_59.addFeatures(features_Ruta4pungayacuvalenciaRojasNormaHuatatocaCochayacuwaypoints_59);
var lyr_Ruta4pungayacuvalenciaRojasNormaHuatatocaCochayacuwaypoints_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta4pungayacuvalenciaRojasNormaHuatatocaCochayacuwaypoints_59, 
                style: style_Ruta4pungayacuvalenciaRojasNormaHuatatocaCochayacuwaypoints_59,
                popuplayertitle: 'Ruta 4 pungayacu,valencia, Rojas,Norma Huatatoca Cochayacu — waypoints',
                interactive: false,
                title: '<img src="styles/legend/Ruta4pungayacuvalenciaRojasNormaHuatatocaCochayacuwaypoints_59.png" /> Ruta 4 pungayacu,valencia, Rojas,Norma Huatatoca Cochayacu — waypoints'
            });
var format_Ruta5RosapeafielyLuisNegretewaypoints_60 = new ol.format.GeoJSON();
var features_Ruta5RosapeafielyLuisNegretewaypoints_60 = format_Ruta5RosapeafielyLuisNegretewaypoints_60.readFeatures(json_Ruta5RosapeafielyLuisNegretewaypoints_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta5RosapeafielyLuisNegretewaypoints_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta5RosapeafielyLuisNegretewaypoints_60.addFeatures(features_Ruta5RosapeafielyLuisNegretewaypoints_60);
var lyr_Ruta5RosapeafielyLuisNegretewaypoints_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta5RosapeafielyLuisNegretewaypoints_60, 
                style: style_Ruta5RosapeafielyLuisNegretewaypoints_60,
                popuplayertitle: 'Ruta 5 Rosa peñafiel y Luis Negrete  — waypoints',
                interactive: false,
                title: '<img src="styles/legend/Ruta5RosapeafielyLuisNegretewaypoints_60.png" /> Ruta 5 Rosa peñafiel y Luis Negrete  — waypoints'
            });
var format_Ruta6santosJumboCamposGracielaVasquezwaypoints_61 = new ol.format.GeoJSON();
var features_Ruta6santosJumboCamposGracielaVasquezwaypoints_61 = format_Ruta6santosJumboCamposGracielaVasquezwaypoints_61.readFeatures(json_Ruta6santosJumboCamposGracielaVasquezwaypoints_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta6santosJumboCamposGracielaVasquezwaypoints_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta6santosJumboCamposGracielaVasquezwaypoints_61.addFeatures(features_Ruta6santosJumboCamposGracielaVasquezwaypoints_61);
var lyr_Ruta6santosJumboCamposGracielaVasquezwaypoints_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta6santosJumboCamposGracielaVasquezwaypoints_61, 
                style: style_Ruta6santosJumboCamposGracielaVasquezwaypoints_61,
                popuplayertitle: 'Ruta 6 santos,Jumbo,Campos,Graciela Vasquez — waypoints',
                interactive: false,
                title: '<img src="styles/legend/Ruta6santosJumboCamposGracielaVasquezwaypoints_61.png" /> Ruta 6 santos,Jumbo,Campos,Graciela Vasquez — waypoints'
            });
var format_Ruta7cocodriloslimitesconPNsumacoPredioFelipaJimawaypoints_62 = new ol.format.GeoJSON();
var features_Ruta7cocodriloslimitesconPNsumacoPredioFelipaJimawaypoints_62 = format_Ruta7cocodriloslimitesconPNsumacoPredioFelipaJimawaypoints_62.readFeatures(json_Ruta7cocodriloslimitesconPNsumacoPredioFelipaJimawaypoints_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta7cocodriloslimitesconPNsumacoPredioFelipaJimawaypoints_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta7cocodriloslimitesconPNsumacoPredioFelipaJimawaypoints_62.addFeatures(features_Ruta7cocodriloslimitesconPNsumacoPredioFelipaJimawaypoints_62);
var lyr_Ruta7cocodriloslimitesconPNsumacoPredioFelipaJimawaypoints_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta7cocodriloslimitesconPNsumacoPredioFelipaJimawaypoints_62, 
                style: style_Ruta7cocodriloslimitesconPNsumacoPredioFelipaJimawaypoints_62,
                popuplayertitle: 'Ruta 7 cocodrilos ,limites  con PN sumaco Predio Felipa Jima — waypoints',
                interactive: false,
                title: '<img src="styles/legend/Ruta7cocodriloslimitesconPNsumacoPredioFelipaJimawaypoints_62.png" /> Ruta 7 cocodrilos ,limites  con PN sumaco Predio Felipa Jima — waypoints'
            });
var format_Ruta8LlaucanabajaHollinchicowaypoints_63 = new ol.format.GeoJSON();
var features_Ruta8LlaucanabajaHollinchicowaypoints_63 = format_Ruta8LlaucanabajaHollinchicowaypoints_63.readFeatures(json_Ruta8LlaucanabajaHollinchicowaypoints_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta8LlaucanabajaHollinchicowaypoints_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta8LlaucanabajaHollinchicowaypoints_63.addFeatures(features_Ruta8LlaucanabajaHollinchicowaypoints_63);
var lyr_Ruta8LlaucanabajaHollinchicowaypoints_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta8LlaucanabajaHollinchicowaypoints_63, 
                style: style_Ruta8LlaucanabajaHollinchicowaypoints_63,
                popuplayertitle: 'Ruta 8 Llaucana baja, Hollin chico — waypoints',
                interactive: false,
                title: '<img src="styles/legend/Ruta8LlaucanabajaHollinchicowaypoints_63.png" /> Ruta 8 Llaucana baja, Hollin chico — waypoints'
            });
var format_Ruta9PungarayacuHollinChicowaypoints_64 = new ol.format.GeoJSON();
var features_Ruta9PungarayacuHollinChicowaypoints_64 = format_Ruta9PungarayacuHollinChicowaypoints_64.readFeatures(json_Ruta9PungarayacuHollinChicowaypoints_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta9PungarayacuHollinChicowaypoints_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta9PungarayacuHollinChicowaypoints_64.addFeatures(features_Ruta9PungarayacuHollinChicowaypoints_64);
var lyr_Ruta9PungarayacuHollinChicowaypoints_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta9PungarayacuHollinChicowaypoints_64, 
                style: style_Ruta9PungarayacuHollinChicowaypoints_64,
                popuplayertitle: 'Ruta 9 Pungarayacu,Hollin Chico  — waypoints',
                interactive: false,
                title: '<img src="styles/legend/Ruta9PungarayacuHollinChicowaypoints_64.png" /> Ruta 9 Pungarayacu,Hollin Chico  — waypoints'
            });
var format_Ruta10chaquianLimitesconPNAPredioLopezwaypoints_65 = new ol.format.GeoJSON();
var features_Ruta10chaquianLimitesconPNAPredioLopezwaypoints_65 = format_Ruta10chaquianLimitesconPNAPredioLopezwaypoints_65.readFeatures(json_Ruta10chaquianLimitesconPNAPredioLopezwaypoints_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta10chaquianLimitesconPNAPredioLopezwaypoints_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta10chaquianLimitesconPNAPredioLopezwaypoints_65.addFeatures(features_Ruta10chaquianLimitesconPNAPredioLopezwaypoints_65);
var lyr_Ruta10chaquianLimitesconPNAPredioLopezwaypoints_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta10chaquianLimitesconPNAPredioLopezwaypoints_65, 
                style: style_Ruta10chaquianLimitesconPNAPredioLopezwaypoints_65,
                popuplayertitle: 'Ruta 10 chaquiñan Limites con PNA ,Predio Lopez — waypoints',
                interactive: false,
                title: '<img src="styles/legend/Ruta10chaquianLimitesconPNAPredioLopezwaypoints_65.png" /> Ruta 10 chaquiñan Limites con PNA ,Predio Lopez — waypoints'
            });
var format_Ruta11AsnayacuPredioFernadoChavezwaypoints_66 = new ol.format.GeoJSON();
var features_Ruta11AsnayacuPredioFernadoChavezwaypoints_66 = format_Ruta11AsnayacuPredioFernadoChavezwaypoints_66.readFeatures(json_Ruta11AsnayacuPredioFernadoChavezwaypoints_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta11AsnayacuPredioFernadoChavezwaypoints_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta11AsnayacuPredioFernadoChavezwaypoints_66.addFeatures(features_Ruta11AsnayacuPredioFernadoChavezwaypoints_66);
var lyr_Ruta11AsnayacuPredioFernadoChavezwaypoints_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta11AsnayacuPredioFernadoChavezwaypoints_66, 
                style: style_Ruta11AsnayacuPredioFernadoChavezwaypoints_66,
                popuplayertitle: 'Ruta 11 Asnayacu-Predio Fernado Chavez  — waypoints',
                interactive: false,
                title: '<img src="styles/legend/Ruta11AsnayacuPredioFernadoChavezwaypoints_66.png" /> Ruta 11 Asnayacu-Predio Fernado Chavez  — waypoints'
            });
var format_Ruta12CocodriloPrediosHeydiQuispelemaySandovalwaypoints_67 = new ol.format.GeoJSON();
var features_Ruta12CocodriloPrediosHeydiQuispelemaySandovalwaypoints_67 = format_Ruta12CocodriloPrediosHeydiQuispelemaySandovalwaypoints_67.readFeatures(json_Ruta12CocodriloPrediosHeydiQuispelemaySandovalwaypoints_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta12CocodriloPrediosHeydiQuispelemaySandovalwaypoints_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta12CocodriloPrediosHeydiQuispelemaySandovalwaypoints_67.addFeatures(features_Ruta12CocodriloPrediosHeydiQuispelemaySandovalwaypoints_67);
var lyr_Ruta12CocodriloPrediosHeydiQuispelemaySandovalwaypoints_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta12CocodriloPrediosHeydiQuispelemaySandovalwaypoints_67, 
                style: style_Ruta12CocodriloPrediosHeydiQuispelemaySandovalwaypoints_67,
                popuplayertitle: 'Ruta 12 Cocodrilo,Predios Heydi Quispelema y Sandoval  — waypoints',
                interactive: false,
                title: '<img src="styles/legend/Ruta12CocodriloPrediosHeydiQuispelemaySandovalwaypoints_67.png" /> Ruta 12 Cocodrilo,Predios Heydi Quispelema y Sandoval  — waypoints'
            });
var format_Ruta13LadolorosapredioJaimeValdezwaypoints_68 = new ol.format.GeoJSON();
var features_Ruta13LadolorosapredioJaimeValdezwaypoints_68 = format_Ruta13LadolorosapredioJaimeValdezwaypoints_68.readFeatures(json_Ruta13LadolorosapredioJaimeValdezwaypoints_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta13LadolorosapredioJaimeValdezwaypoints_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta13LadolorosapredioJaimeValdezwaypoints_68.addFeatures(features_Ruta13LadolorosapredioJaimeValdezwaypoints_68);
var lyr_Ruta13LadolorosapredioJaimeValdezwaypoints_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta13LadolorosapredioJaimeValdezwaypoints_68, 
                style: style_Ruta13LadolorosapredioJaimeValdezwaypoints_68,
                popuplayertitle: 'Ruta 13 La dolorosa predio Jaime Valdez  — waypoints',
                interactive: false,
                title: '<img src="styles/legend/Ruta13LadolorosapredioJaimeValdezwaypoints_68.png" /> Ruta 13 La dolorosa predio Jaime Valdez  — waypoints'
            });
var format_Ruta14senderovirmillontanagerHollinchicowaypoints_69 = new ol.format.GeoJSON();
var features_Ruta14senderovirmillontanagerHollinchicowaypoints_69 = format_Ruta14senderovirmillontanagerHollinchicowaypoints_69.readFeatures(json_Ruta14senderovirmillontanagerHollinchicowaypoints_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta14senderovirmillontanagerHollinchicowaypoints_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta14senderovirmillontanagerHollinchicowaypoints_69.addFeatures(features_Ruta14senderovirmillontanagerHollinchicowaypoints_69);
var lyr_Ruta14senderovirmillontanagerHollinchicowaypoints_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta14senderovirmillontanagerHollinchicowaypoints_69, 
                style: style_Ruta14senderovirmillontanagerHollinchicowaypoints_69,
                popuplayertitle: 'Ruta 14 sendero virmillon tanager -Hollin chico — waypoints',
                interactive: false,
                title: '<img src="styles/legend/Ruta14senderovirmillontanagerHollinchicowaypoints_69.png" /> Ruta 14 sendero virmillon tanager -Hollin chico — waypoints'
            });
var format_Ruta1LineaOCPwaypoints_70 = new ol.format.GeoJSON();
var features_Ruta1LineaOCPwaypoints_70 = format_Ruta1LineaOCPwaypoints_70.readFeatures(json_Ruta1LineaOCPwaypoints_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta1LineaOCPwaypoints_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta1LineaOCPwaypoints_70.addFeatures(features_Ruta1LineaOCPwaypoints_70);
var lyr_Ruta1LineaOCPwaypoints_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta1LineaOCPwaypoints_70, 
                style: style_Ruta1LineaOCPwaypoints_70,
                popuplayertitle: 'Ruta 1 Linea OCP — waypoints',
                interactive: false,
                title: '<img src="styles/legend/Ruta1LineaOCPwaypoints_70.png" /> Ruta 1 Linea OCP — waypoints'
            });
var format_Ruta2LimitesconGustavoyalRioQuijoswaypoints_71 = new ol.format.GeoJSON();
var features_Ruta2LimitesconGustavoyalRioQuijoswaypoints_71 = format_Ruta2LimitesconGustavoyalRioQuijoswaypoints_71.readFeatures(json_Ruta2LimitesconGustavoyalRioQuijoswaypoints_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta2LimitesconGustavoyalRioQuijoswaypoints_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta2LimitesconGustavoyalRioQuijoswaypoints_71.addFeatures(features_Ruta2LimitesconGustavoyalRioQuijoswaypoints_71);
var lyr_Ruta2LimitesconGustavoyalRioQuijoswaypoints_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta2LimitesconGustavoyalRioQuijoswaypoints_71, 
                style: style_Ruta2LimitesconGustavoyalRioQuijoswaypoints_71,
                popuplayertitle: 'Ruta 2 Limites con Gustavo y al Rio Quijos  — waypoints',
                interactive: false,
                title: '<img src="styles/legend/Ruta2LimitesconGustavoyalRioQuijoswaypoints_71.png" /> Ruta 2 Limites con Gustavo y al Rio Quijos  — waypoints'
            });
var format_Ruta3SenderoorrilladerioQuijowaypoints_72 = new ol.format.GeoJSON();
var features_Ruta3SenderoorrilladerioQuijowaypoints_72 = format_Ruta3SenderoorrilladerioQuijowaypoints_72.readFeatures(json_Ruta3SenderoorrilladerioQuijowaypoints_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta3SenderoorrilladerioQuijowaypoints_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta3SenderoorrilladerioQuijowaypoints_72.addFeatures(features_Ruta3SenderoorrilladerioQuijowaypoints_72);
var lyr_Ruta3SenderoorrilladerioQuijowaypoints_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta3SenderoorrilladerioQuijowaypoints_72, 
                style: style_Ruta3SenderoorrilladerioQuijowaypoints_72,
                popuplayertitle: 'Ruta 3 Sendero orrilla de rio Quijo — waypoints',
                interactive: false,
                title: '<img src="styles/legend/Ruta3SenderoorrilladerioQuijowaypoints_72.png" /> Ruta 3 Sendero orrilla de rio Quijo — waypoints'
            });
var format_Ruta4OCPasectorMoradillaswaypoints_73 = new ol.format.GeoJSON();
var features_Ruta4OCPasectorMoradillaswaypoints_73 = format_Ruta4OCPasectorMoradillaswaypoints_73.readFeatures(json_Ruta4OCPasectorMoradillaswaypoints_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta4OCPasectorMoradillaswaypoints_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta4OCPasectorMoradillaswaypoints_73.addFeatures(features_Ruta4OCPasectorMoradillaswaypoints_73);
var lyr_Ruta4OCPasectorMoradillaswaypoints_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta4OCPasectorMoradillaswaypoints_73, 
                style: style_Ruta4OCPasectorMoradillaswaypoints_73,
                popuplayertitle: 'Ruta 4 OCP a sector Moradillas  — waypoints',
                interactive: false,
                title: '<img src="styles/legend/Ruta4OCPasectorMoradillaswaypoints_73.png" /> Ruta 4 OCP a sector Moradillas  — waypoints'
            });
var format_Ruta1SantaLuciaSunfohaycoyCerroPlazadeArmas_74 = new ol.format.GeoJSON();
var features_Ruta1SantaLuciaSunfohaycoyCerroPlazadeArmas_74 = format_Ruta1SantaLuciaSunfohaycoyCerroPlazadeArmas_74.readFeatures(json_Ruta1SantaLuciaSunfohaycoyCerroPlazadeArmas_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta1SantaLuciaSunfohaycoyCerroPlazadeArmas_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta1SantaLuciaSunfohaycoyCerroPlazadeArmas_74.addFeatures(features_Ruta1SantaLuciaSunfohaycoyCerroPlazadeArmas_74);
var lyr_Ruta1SantaLuciaSunfohaycoyCerroPlazadeArmas_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta1SantaLuciaSunfohaycoyCerroPlazadeArmas_74, 
                style: style_Ruta1SantaLuciaSunfohaycoyCerroPlazadeArmas_74,
                popuplayertitle: 'Ruta 1 Santa Lucia-Sunfohayco y Cerro Plaza de Armas',
                interactive: false,
                title: '<img src="styles/legend/Ruta1SantaLuciaSunfohaycoyCerroPlazadeArmas_74.png" /> Ruta 1 Santa Lucia-Sunfohayco y Cerro Plaza de Armas'
            });
var format_Ruta3LagunasdeSecas_Tipopugro_SecasArribayPenondelIsco_75 = new ol.format.GeoJSON();
var features_Ruta3LagunasdeSecas_Tipopugro_SecasArribayPenondelIsco_75 = format_Ruta3LagunasdeSecas_Tipopugro_SecasArribayPenondelIsco_75.readFeatures(json_Ruta3LagunasdeSecas_Tipopugro_SecasArribayPenondelIsco_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta3LagunasdeSecas_Tipopugro_SecasArribayPenondelIsco_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta3LagunasdeSecas_Tipopugro_SecasArribayPenondelIsco_75.addFeatures(features_Ruta3LagunasdeSecas_Tipopugro_SecasArribayPenondelIsco_75);
var lyr_Ruta3LagunasdeSecas_Tipopugro_SecasArribayPenondelIsco_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta3LagunasdeSecas_Tipopugro_SecasArribayPenondelIsco_75, 
                style: style_Ruta3LagunasdeSecas_Tipopugro_SecasArribayPenondelIsco_75,
                popuplayertitle: 'Ruta 3 Lagunas de Secas_Tipopugro_Secas Arriba y Penon del Isco',
                interactive: false,
                title: '<img src="styles/legend/Ruta3LagunasdeSecas_Tipopugro_SecasArribayPenondelIsco_75.png" /> Ruta 3 Lagunas de Secas_Tipopugro_Secas Arriba y Penon del Isco'
            });
var format_Ruta4FlujoDerrameLavicoPotrerodeSanFrancisco_76 = new ol.format.GeoJSON();
var features_Ruta4FlujoDerrameLavicoPotrerodeSanFrancisco_76 = format_Ruta4FlujoDerrameLavicoPotrerodeSanFrancisco_76.readFeatures(json_Ruta4FlujoDerrameLavicoPotrerodeSanFrancisco_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta4FlujoDerrameLavicoPotrerodeSanFrancisco_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta4FlujoDerrameLavicoPotrerodeSanFrancisco_76.addFeatures(features_Ruta4FlujoDerrameLavicoPotrerodeSanFrancisco_76);
var lyr_Ruta4FlujoDerrameLavicoPotrerodeSanFrancisco_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruta4FlujoDerrameLavicoPotrerodeSanFrancisco_76, 
                style: style_Ruta4FlujoDerrameLavicoPotrerodeSanFrancisco_76,
                popuplayertitle: 'Ruta  4 Flujo Derrame Lavico, Potrero de San Francisco ',
                interactive: false,
                title: '<img src="styles/legend/Ruta4FlujoDerrameLavicoPotrerodeSanFrancisco_76.png" /> Ruta  4 Flujo Derrame Lavico, Potrero de San Francisco '
            });
var format_Derrumbe_77 = new ol.format.GeoJSON();
var features_Derrumbe_77 = format_Derrumbe_77.readFeatures(json_Derrumbe_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Derrumbe_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Derrumbe_77.addFeatures(features_Derrumbe_77);
var lyr_Derrumbe_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Derrumbe_77, 
                style: style_Derrumbe_77,
                popuplayertitle: 'Derrumbe',
                interactive: true,
                title: '<img src="styles/legend/Derrumbe_77.png" /> Derrumbe'
            });
var format_Ganado_78 = new ol.format.GeoJSON();
var features_Ganado_78 = format_Ganado_78.readFeatures(json_Ganado_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ganado_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ganado_78.addFeatures(features_Ganado_78);
var lyr_Ganado_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ganado_78, 
                style: style_Ganado_78,
                popuplayertitle: 'Ganado',
                interactive: true,
                title: '<img src="styles/legend/Ganado_78.png" /> Ganado'
            });
var format_Basura_79 = new ol.format.GeoJSON();
var features_Basura_79 = format_Basura_79.readFeatures(json_Basura_79, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Basura_79 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Basura_79.addFeatures(features_Basura_79);
var lyr_Basura_79 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Basura_79, 
                style: style_Basura_79,
                popuplayertitle: 'Basura',
                interactive: true,
                title: '<img src="styles/legend/Basura_79.png" /> Basura'
            });
var format_Contaminacinlquidos_80 = new ol.format.GeoJSON();
var features_Contaminacinlquidos_80 = format_Contaminacinlquidos_80.readFeatures(json_Contaminacinlquidos_80, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Contaminacinlquidos_80 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contaminacinlquidos_80.addFeatures(features_Contaminacinlquidos_80);
var lyr_Contaminacinlquidos_80 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Contaminacinlquidos_80, 
                style: style_Contaminacinlquidos_80,
                popuplayertitle: 'Contaminación (líquidos)',
                interactive: true,
                title: '<img src="styles/legend/Contaminacinlquidos_80.png" /> Contaminación (líquidos)'
            });
var format_Entradasinpermiso_81 = new ol.format.GeoJSON();
var features_Entradasinpermiso_81 = format_Entradasinpermiso_81.readFeatures(json_Entradasinpermiso_81, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Entradasinpermiso_81 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Entradasinpermiso_81.addFeatures(features_Entradasinpermiso_81);
var lyr_Entradasinpermiso_81 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Entradasinpermiso_81, 
                style: style_Entradasinpermiso_81,
                popuplayertitle: 'Entrada sin permiso',
                interactive: true,
                title: '<img src="styles/legend/Entradasinpermiso_81.png" /> Entrada sin permiso'
            });
var format_Derrumbe_82 = new ol.format.GeoJSON();
var features_Derrumbe_82 = format_Derrumbe_82.readFeatures(json_Derrumbe_82, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Derrumbe_82 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Derrumbe_82.addFeatures(features_Derrumbe_82);
var lyr_Derrumbe_82 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Derrumbe_82, 
                style: style_Derrumbe_82,
                popuplayertitle: 'Derrumbe',
                interactive: true,
                title: '<img src="styles/legend/Derrumbe_82.png" /> Derrumbe'
            });
var format_Ganado_83 = new ol.format.GeoJSON();
var features_Ganado_83 = format_Ganado_83.readFeatures(json_Ganado_83, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ganado_83 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ganado_83.addFeatures(features_Ganado_83);
var lyr_Ganado_83 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ganado_83, 
                style: style_Ganado_83,
                popuplayertitle: 'Ganado',
                interactive: true,
                title: '<img src="styles/legend/Ganado_83.png" /> Ganado'
            });
var format_Quema_84 = new ol.format.GeoJSON();
var features_Quema_84 = format_Quema_84.readFeatures(json_Quema_84, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Quema_84 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Quema_84.addFeatures(features_Quema_84);
var lyr_Quema_84 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Quema_84, 
                style: style_Quema_84,
                popuplayertitle: 'Quema',
                interactive: true,
                title: '<img src="styles/legend/Quema_84.png" /> Quema'
            });
var format_Roboodaodeinfraestructura_85 = new ol.format.GeoJSON();
var features_Roboodaodeinfraestructura_85 = format_Roboodaodeinfraestructura_85.readFeatures(json_Roboodaodeinfraestructura_85, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roboodaodeinfraestructura_85 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roboodaodeinfraestructura_85.addFeatures(features_Roboodaodeinfraestructura_85);
var lyr_Roboodaodeinfraestructura_85 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roboodaodeinfraestructura_85, 
                style: style_Roboodaodeinfraestructura_85,
                popuplayertitle: 'Robo o daño de infraestructura',
                interactive: true,
                title: '<img src="styles/legend/Roboodaodeinfraestructura_85.png" /> Robo o daño de infraestructura'
            });
var group_AmenazasEnero = new ol.layer.Group({
                                layers: [lyr_Basura_79,lyr_Contaminacinlquidos_80,lyr_Entradasinpermiso_81,lyr_Derrumbe_82,lyr_Ganado_83,lyr_Quema_84,lyr_Roboodaodeinfraestructura_85,],
                                fold: 'close',
                                title: 'Amenazas Enero'});
var group_AmenazasFebrero = new ol.layer.Group({
                                layers: [lyr_Derrumbe_77,lyr_Ganado_78,],
                                fold: 'close',
                                title: 'Amenazas Febrero'});
var group_Chakana = new ol.layer.Group({
                                layers: [lyr_Ruta1SantaLuciaSunfohaycoyCerroPlazadeArmas_74,lyr_Ruta3LagunasdeSecas_Tipopugro_SecasArribayPenondelIsco_75,lyr_Ruta4FlujoDerrameLavicoPotrerodeSanFrancisco_76,],
                                fold: 'close',
                                title: 'Chakana'});
var group_ElChaco = new ol.layer.Group({
                                layers: [lyr_Ruta1LineaOCPwaypoints_70,lyr_Ruta2LimitesconGustavoyalRioQuijoswaypoints_71,lyr_Ruta3SenderoorrilladerioQuijowaypoints_72,lyr_Ruta4OCPasectorMoradillaswaypoints_73,],
                                fold: 'close',
                                title: 'El Chaco'});
var group_Narupa = new ol.layer.Group({
                                layers: [lyr_Ruta1Shamatocabeceraderiojondachiwaypoints_57,lyr_Ruta3pungarayacuminasGenovevaprediosmaximoAlvaradoyJoseYumbowaypoints_58,lyr_Ruta4pungayacuvalenciaRojasNormaHuatatocaCochayacuwaypoints_59,lyr_Ruta5RosapeafielyLuisNegretewaypoints_60,lyr_Ruta6santosJumboCamposGracielaVasquezwaypoints_61,lyr_Ruta7cocodriloslimitesconPNsumacoPredioFelipaJimawaypoints_62,lyr_Ruta8LlaucanabajaHollinchicowaypoints_63,lyr_Ruta9PungarayacuHollinChicowaypoints_64,lyr_Ruta10chaquianLimitesconPNAPredioLopezwaypoints_65,lyr_Ruta11AsnayacuPredioFernadoChavezwaypoints_66,lyr_Ruta12CocodriloPrediosHeydiQuispelemaySandovalwaypoints_67,lyr_Ruta13LadolorosapredioJaimeValdezwaypoints_68,lyr_Ruta14senderovirmillontanagerHollinchicowaypoints_69,],
                                fold: 'close',
                                title: 'Narupa'});
var group_Yanacocha = new ol.layer.Group({
                                layers: [lyr_Ruta1Riopichanrucopichinchatracks_50,lyr_Ruta2CochalomaPadreencantadoCascada_tracks_51,lyr_Ruta3LacasetaTunelesCascada_tracks_52,lyr_Ruta4SenderoosoBromeliasMaskedtrongontracks_53,lyr_Ruta5PolylepisCaminodeherradurasTablawasitracks_54,lyr_Ruta6AndeanLadispensaCerroyanahurco_tracks_55,lyr_Ruta7Lacampia_tracks_56,],
                                fold: 'close',
                                title: 'Yanacocha'});
var group_Ayampe = new ol.layer.Group({
                                layers: [lyr_Ruta2SectorPiedraChispatracks_46,lyr_Ruta3Sectorjaulaguacamayostracks_47,lyr_Ruta4Partealtaltimapropiedadtracks_48,lyr_Ruta1Primerapropiedadtracks_49,],
                                fold: 'close',
                                title: 'Ayampe'});
var group_Copalinga = new ol.layer.Group({
                                layers: [lyr_RUTA2LADERAESTEOESTEYFILOtracks_40,lyr_Ruta4laderaesteylibanocopalingatracks_41,lyr_Ruta5laderaOestecopalingatracks_42,lyr_RUTA3RIOBOMBUSCAROTracks_43,lyr_Track_ruta06copalinga16175330tracks_44,lyr_Ruta1FincaEspinozapartebajatracks_45,],
                                fold: 'close',
                                title: 'Copalinga'});
var group_LasBalsas = new ol.layer.Group({
                                layers: [lyr_RUTA11SANANTONIOtracks_25,lyr_RUTA11SANANTONIOTrack002_26,lyr_Track_RUT1LASABANETtracks_27,lyr_Track_RUTA2BUSTMNTEtracks_28,lyr_Track_RUTA3LOSCEIBITOStracks_29,lyr_Track_RUTA4LOSBALSAMOStracks_30,lyr_Track_RUTA5LASVARAStracks_31,lyr_Track_RUTA6LAMANGATtracks_32,lyr_Track_RUTA7LASTRANCAStracks_33,lyr_Track_RUTA8LAPALMAtracks_34,lyr_Track_RUTA9SANFRANCISCOtracks_35,lyr_Track_RUTA10ELBUStracks_36,lyr_Track_RUTA12ZOILACORtracks_37,lyr_Track_RUTA13RIOMATIAStracks_38,lyr_Track_RUTA14PUENTELASBALSAStracks_39,],
                                fold: 'close',
                                title: 'Las Balsas'});
var group_Cuyuja = new ol.layer.Group({
                                layers: [lyr_Ruta1riosunucowaypoints_21,lyr_Ruta2rioQuijoswaypoints_22,lyr_Ruta4cascadaalParamorioSunucowaypoints_23,lyr_Ruta6alpuntoDlimiteconseorTapia2waypoints_24,],
                                fold: 'close',
                                title: 'Cuyuja'});
var group_MindoYaguira = new ol.layer.Group({
                                layers: [lyr_1_12_2025Ruta7predioveloztracks_15,lyr_2_12_2025Ruta6rutadelosotracks_16,lyr_18_11_2025Ruta5FRENTESANTAROSAtracks_17,lyr_19_11_2025Ruta1rutamanakintracks_18,lyr_24_11_2025Ruta3rutalascascadastracks_19,lyr_3_12_2025rutasantarosaMindogardentracks_20,],
                                fold: 'close',
                                title: 'Mindo-Yaguira'});
var group_Tapichalaca = new ol.layer.Group({
                                layers: [lyr_Ruta1CSAvionCaidotracks_6,lyr_Ruta2CruzdelSoldadoValladolidtracks_7,lyr_Ruta3CSCarrizalQuebradaHondatracks_8,lyr_Ruta4CSVQHNumbalaLibioJimeneztracks_9,lyr_Ruta5ValladolidQuebradadelosmolinostracks_10,lyr_Ruta6TapalaRegionaltracks_11,lyr_Ruta7YanganaCerroToledoNumbalaPalmerastracks_12,lyr_Ruta8SenderoPihaQuebradahondatracks_13,lyr_Ruta9BustamanteQuebradadeNanchimatracks_14,],
                                fold: 'close',
                                title: 'Tapichalaca'});
var group_Ecuador = new ol.layer.Group({
                                layers: [lyr_Ecuador_1,lyr_Provincias_2,lyr_Cantones_3,lyr_Parroquias_4,],
                                fold: 'close',
                                title: 'Ecuador'});

lyr_OpenTopoMap_0.setVisible(true);lyr_Ecuador_1.setVisible(true);lyr_Provincias_2.setVisible(true);lyr_Cantones_3.setVisible(true);lyr_Parroquias_4.setVisible(true);lyr_ReservasJocotoco_5.setVisible(true);lyr_Ruta1CSAvionCaidotracks_6.setVisible(true);lyr_Ruta2CruzdelSoldadoValladolidtracks_7.setVisible(true);lyr_Ruta3CSCarrizalQuebradaHondatracks_8.setVisible(true);lyr_Ruta4CSVQHNumbalaLibioJimeneztracks_9.setVisible(true);lyr_Ruta5ValladolidQuebradadelosmolinostracks_10.setVisible(true);lyr_Ruta6TapalaRegionaltracks_11.setVisible(true);lyr_Ruta7YanganaCerroToledoNumbalaPalmerastracks_12.setVisible(true);lyr_Ruta8SenderoPihaQuebradahondatracks_13.setVisible(true);lyr_Ruta9BustamanteQuebradadeNanchimatracks_14.setVisible(true);lyr_1_12_2025Ruta7predioveloztracks_15.setVisible(true);lyr_2_12_2025Ruta6rutadelosotracks_16.setVisible(true);lyr_18_11_2025Ruta5FRENTESANTAROSAtracks_17.setVisible(true);lyr_19_11_2025Ruta1rutamanakintracks_18.setVisible(true);lyr_24_11_2025Ruta3rutalascascadastracks_19.setVisible(true);lyr_3_12_2025rutasantarosaMindogardentracks_20.setVisible(true);lyr_Ruta1riosunucowaypoints_21.setVisible(true);lyr_Ruta2rioQuijoswaypoints_22.setVisible(true);lyr_Ruta4cascadaalParamorioSunucowaypoints_23.setVisible(true);lyr_Ruta6alpuntoDlimiteconseorTapia2waypoints_24.setVisible(true);lyr_RUTA11SANANTONIOtracks_25.setVisible(true);lyr_RUTA11SANANTONIOTrack002_26.setVisible(true);lyr_Track_RUT1LASABANETtracks_27.setVisible(true);lyr_Track_RUTA2BUSTMNTEtracks_28.setVisible(true);lyr_Track_RUTA3LOSCEIBITOStracks_29.setVisible(true);lyr_Track_RUTA4LOSBALSAMOStracks_30.setVisible(true);lyr_Track_RUTA5LASVARAStracks_31.setVisible(true);lyr_Track_RUTA6LAMANGATtracks_32.setVisible(true);lyr_Track_RUTA7LASTRANCAStracks_33.setVisible(true);lyr_Track_RUTA8LAPALMAtracks_34.setVisible(true);lyr_Track_RUTA9SANFRANCISCOtracks_35.setVisible(true);lyr_Track_RUTA10ELBUStracks_36.setVisible(true);lyr_Track_RUTA12ZOILACORtracks_37.setVisible(true);lyr_Track_RUTA13RIOMATIAStracks_38.setVisible(true);lyr_Track_RUTA14PUENTELASBALSAStracks_39.setVisible(true);lyr_RUTA2LADERAESTEOESTEYFILOtracks_40.setVisible(true);lyr_Ruta4laderaesteylibanocopalingatracks_41.setVisible(true);lyr_Ruta5laderaOestecopalingatracks_42.setVisible(true);lyr_RUTA3RIOBOMBUSCAROTracks_43.setVisible(true);lyr_Track_ruta06copalinga16175330tracks_44.setVisible(true);lyr_Ruta1FincaEspinozapartebajatracks_45.setVisible(true);lyr_Ruta2SectorPiedraChispatracks_46.setVisible(true);lyr_Ruta3Sectorjaulaguacamayostracks_47.setVisible(true);lyr_Ruta4Partealtaltimapropiedadtracks_48.setVisible(true);lyr_Ruta1Primerapropiedadtracks_49.setVisible(true);lyr_Ruta1Riopichanrucopichinchatracks_50.setVisible(true);lyr_Ruta2CochalomaPadreencantadoCascada_tracks_51.setVisible(true);lyr_Ruta3LacasetaTunelesCascada_tracks_52.setVisible(true);lyr_Ruta4SenderoosoBromeliasMaskedtrongontracks_53.setVisible(true);lyr_Ruta5PolylepisCaminodeherradurasTablawasitracks_54.setVisible(true);lyr_Ruta6AndeanLadispensaCerroyanahurco_tracks_55.setVisible(true);lyr_Ruta7Lacampia_tracks_56.setVisible(true);lyr_Ruta1Shamatocabeceraderiojondachiwaypoints_57.setVisible(true);lyr_Ruta3pungarayacuminasGenovevaprediosmaximoAlvaradoyJoseYumbowaypoints_58.setVisible(true);lyr_Ruta4pungayacuvalenciaRojasNormaHuatatocaCochayacuwaypoints_59.setVisible(true);lyr_Ruta5RosapeafielyLuisNegretewaypoints_60.setVisible(true);lyr_Ruta6santosJumboCamposGracielaVasquezwaypoints_61.setVisible(true);lyr_Ruta7cocodriloslimitesconPNsumacoPredioFelipaJimawaypoints_62.setVisible(true);lyr_Ruta8LlaucanabajaHollinchicowaypoints_63.setVisible(true);lyr_Ruta9PungarayacuHollinChicowaypoints_64.setVisible(true);lyr_Ruta10chaquianLimitesconPNAPredioLopezwaypoints_65.setVisible(true);lyr_Ruta11AsnayacuPredioFernadoChavezwaypoints_66.setVisible(true);lyr_Ruta12CocodriloPrediosHeydiQuispelemaySandovalwaypoints_67.setVisible(true);lyr_Ruta13LadolorosapredioJaimeValdezwaypoints_68.setVisible(true);lyr_Ruta14senderovirmillontanagerHollinchicowaypoints_69.setVisible(true);lyr_Ruta1LineaOCPwaypoints_70.setVisible(true);lyr_Ruta2LimitesconGustavoyalRioQuijoswaypoints_71.setVisible(true);lyr_Ruta3SenderoorrilladerioQuijowaypoints_72.setVisible(true);lyr_Ruta4OCPasectorMoradillaswaypoints_73.setVisible(true);lyr_Ruta1SantaLuciaSunfohaycoyCerroPlazadeArmas_74.setVisible(true);lyr_Ruta3LagunasdeSecas_Tipopugro_SecasArribayPenondelIsco_75.setVisible(true);lyr_Ruta4FlujoDerrameLavicoPotrerodeSanFrancisco_76.setVisible(true);lyr_Derrumbe_77.setVisible(true);lyr_Ganado_78.setVisible(true);lyr_Basura_79.setVisible(true);lyr_Contaminacinlquidos_80.setVisible(true);lyr_Entradasinpermiso_81.setVisible(true);lyr_Derrumbe_82.setVisible(true);lyr_Ganado_83.setVisible(true);lyr_Quema_84.setVisible(true);lyr_Roboodaodeinfraestructura_85.setVisible(true);
var layersList = [lyr_OpenTopoMap_0,group_Ecuador,lyr_ReservasJocotoco_5,group_Tapichalaca,group_MindoYaguira,group_Cuyuja,group_LasBalsas,group_Copalinga,group_Ayampe,group_Yanacocha,group_Narupa,group_ElChaco,group_Chakana,group_AmenazasFebrero,group_AmenazasEnero];
lyr_Ecuador_1.set('fieldAliases', {'NEWFIELD1': 'NEWFIELD1', 'COUNT_': 'COUNT_', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'Nombre': 'Nombre', });
lyr_Provincias_2.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'PROVIN_': 'PROVIN_', 'PROVIN_ID': 'PROVIN_ID', 'AREA_1': 'AREA_1', 'PERIMETE_1': 'PERIMETE_1', 'PROVINCIAL': 'PROVINCIAL', 'PROVINCI_1': 'PROVINCI_1', 'FNODE_': 'FNODE_', 'TNODE_': 'TNODE_', 'LPOLY_': 'LPOLY_', 'RPOLY_': 'RPOLY_', 'LENGTH': 'LENGTH', 'PROFINC_': 'PROFINC_', 'PROFINC_ID': 'PROFINC_ID', 'NOMBRE': 'NOMBRE', 'REGION': 'REGION', 'CAPITAL60': 'CAPITAL60', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Cantones_3.set('fieldAliases', {'CANTON': 'CANTON', 'COUNT_': 'COUNT_', 'AVE_AREA': 'AVE_AREA', 'SUM_AREA': 'SUM_AREA', 'MIN_AREA': 'MIN_AREA', 'MAX_AREA': 'MAX_AREA', 'STDDEV_ARE': 'STDDEV_ARE', 'VAR_AREA': 'VAR_AREA', 'AVE_PERIME': 'AVE_PERIME', 'SUM_PERIME': 'SUM_PERIME', 'MIN_PERIME': 'MIN_PERIME', 'MAX_PERIME': 'MAX_PERIME', 'STDDEV_PER': 'STDDEV_PER', 'VAR_PERIME': 'VAR_PERIME', 'AVE_PARRGE': 'AVE_PARRGE', 'SUM_PARRGE': 'SUM_PARRGE', 'MIN_PARRGE': 'MIN_PARRGE', 'MAX_PARRGE': 'MAX_PARRGE', 'STDDEV_PAR': 'STDDEV_PAR', 'VAR_PARRGE': 'VAR_PARRGE', 'AVE_PARR_1': 'AVE_PARR_1', 'SUM_PARR_1': 'SUM_PARR_1', 'MIN_PARR_1': 'MIN_PARR_1', 'MAX_PARR_1': 'MAX_PARR_1', 'STDDEV_P_1': 'STDDEV_P_1', 'VAR_PARR_1': 'VAR_PARR_1', 'AVE_CODIGO': 'AVE_CODIGO', 'SUM_CODIGO': 'SUM_CODIGO', 'MIN_CODIGO': 'MIN_CODIGO', 'MAX_CODIGO': 'MAX_CODIGO', 'STDDEV_COD': 'STDDEV_COD', 'VAR_CODIGO': 'VAR_CODIGO', 'FIRST_CODI': 'FIRST_CODI', 'LAST_CODIG': 'LAST_CODIG', 'COUNT_CODI': 'COUNT_CODI', 'AVE_FNODE_': 'AVE_FNODE_', 'SUM_FNODE_': 'SUM_FNODE_', 'MIN_FNODE_': 'MIN_FNODE_', 'MAX_FNODE_': 'MAX_FNODE_', 'STDDEV_FNO': 'STDDEV_FNO', 'VAR_FNODE_': 'VAR_FNODE_', 'AVE_TNODE_': 'AVE_TNODE_', 'SUM_TNODE_': 'SUM_TNODE_', 'MIN_TNODE_': 'MIN_TNODE_', 'MAX_TNODE_': 'MAX_TNODE_', 'STDDEV_TNO': 'STDDEV_TNO', 'VAR_TNODE_': 'VAR_TNODE_', 'AVE_LPOLY_': 'AVE_LPOLY_', 'SUM_LPOLY_': 'SUM_LPOLY_', 'MIN_LPOLY_': 'MIN_LPOLY_', 'MAX_LPOLY_': 'MAX_LPOLY_', 'STDDEV_LPO': 'STDDEV_LPO', 'VAR_LPOLY_': 'VAR_LPOLY_', 'AVE_RPOLY_': 'AVE_RPOLY_', 'SUM_RPOLY_': 'SUM_RPOLY_', 'MIN_RPOLY_': 'MIN_RPOLY_', 'MAX_RPOLY_': 'MAX_RPOLY_', 'STDDEV_RPO': 'STDDEV_RPO', 'VAR_RPOLY_': 'VAR_RPOLY_', 'AVE_PAR_': 'AVE_PAR_', 'SUM_PAR_': 'SUM_PAR_', 'MIN_PAR_': 'MIN_PAR_', 'MAX_PAR_': 'MAX_PAR_', 'STDDEV_P_2': 'STDDEV_P_2', 'VAR_PAR_': 'VAR_PAR_', 'AVE_PAR_ID': 'AVE_PAR_ID', 'SUM_PAR_ID': 'SUM_PAR_ID', 'MIN_PAR_ID': 'MIN_PAR_ID', 'MAX_PAR_ID': 'MAX_PAR_ID', 'STDDEV_P_3': 'STDDEV_P_3', 'VAR_PAR_ID': 'VAR_PAR_ID', 'AVE_PCPARQ': 'AVE_PCPARQ', 'SUM_PCPARQ': 'SUM_PCPARQ', 'MIN_PCPARQ': 'MIN_PCPARQ', 'MAX_PCPARQ': 'MAX_PCPARQ', 'STDDEV_PCP': 'STDDEV_PCP', 'VAR_PCPARQ': 'VAR_PCPARQ', 'AVE_PCPA_1': 'AVE_PCPA_1', 'SUM_PCPA_1': 'SUM_PCPA_1', 'MIN_PCPA_1': 'MIN_PCPA_1', 'MAX_PCPA_1': 'MAX_PCPA_1', 'STDDEV_P_4': 'STDDEV_P_4', 'VAR_PCPA_1': 'VAR_PCPA_1', 'FIRST_NOMB': 'FIRST_NOMB', 'LAST_NOMBR': 'LAST_NOMBR', 'COUNT_NOMB': 'COUNT_NOMB', 'FIRST_TIPO': 'FIRST_TIPO', 'LAST_TIPO': 'LAST_TIPO', 'COUNT_TIPO': 'COUNT_TIPO', 'FIRST_NIVD': 'FIRST_NIVD', 'LAST_NIVDE': 'LAST_NIVDE', 'COUNT_NIVD': 'COUNT_NIVD', 'FIRST_PROV': 'FIRST_PROV', 'LAST_PROVI': 'LAST_PROVI', 'COUNT_PROV': 'COUNT_PROV', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Parroquias_4.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'PARRGEO_': 'PARRGEO_', 'PARRGEO_ID': 'PARRGEO_ID', 'CODIGO': 'CODIGO', 'CODIGOP': 'CODIGOP', 'FNODE_': 'FNODE_', 'TNODE_': 'TNODE_', 'LPOLY_': 'LPOLY_', 'RPOLY_': 'RPOLY_', 'PAR_': 'PAR_', 'PAR_ID': 'PAR_ID', 'PCPARQ_': 'PCPARQ_', 'PCPARQ_ID': 'PCPARQ_ID', 'NOMBRE': 'NOMBRE', 'TIPO': 'TIPO', 'NIVDET': 'NIVDET', 'CANTON': 'CANTON', 'PROVINCIA': 'PROVINCIA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_ReservasJocotoco_5.set('fieldAliases', {'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Ruta1CSAvionCaidotracks_6.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'line': 'line', });
lyr_Ruta2CruzdelSoldadoValladolidtracks_7.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'line': 'line', });
lyr_Ruta3CSCarrizalQuebradaHondatracks_8.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'line': 'line', });
lyr_Ruta4CSVQHNumbalaLibioJimeneztracks_9.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Ruta5ValladolidQuebradadelosmolinostracks_10.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Ruta6TapalaRegionaltracks_11.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Ruta7YanganaCerroToledoNumbalaPalmerastracks_12.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Ruta8SenderoPihaQuebradahondatracks_13.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'line': 'line', });
lyr_Ruta9BustamanteQuebradadeNanchimatracks_14.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_1_12_2025Ruta7predioveloztracks_15.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', 'gpxtrkx_TrackStatsExtension': 'gpxtrkx_TrackStatsExtension', });
lyr_2_12_2025Ruta6rutadelosotracks_16.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', 'gpxtrkx_TrackStatsExtension': 'gpxtrkx_TrackStatsExtension', });
lyr_18_11_2025Ruta5FRENTESANTAROSAtracks_17.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', 'gpxtrkx_TrackStatsExtension': 'gpxtrkx_TrackStatsExtension', });
lyr_19_11_2025Ruta1rutamanakintracks_18.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', 'gpxtrkx_TrackStatsExtension': 'gpxtrkx_TrackStatsExtension', });
lyr_24_11_2025Ruta3rutalascascadastracks_19.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', 'gpxtrkx_TrackStatsExtension': 'gpxtrkx_TrackStatsExtension', });
lyr_3_12_2025rutasantarosaMindogardentracks_20.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', 'gpxtrkx_TrackStatsExtension': 'gpxtrkx_TrackStatsExtension', });
lyr_Ruta1riosunucowaypoints_21.set('fieldAliases', {'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheight': 'geoidheight', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'sym': 'sym', 'type': 'type', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsdata': 'ageofdgpsdata', 'dgpsid': 'dgpsid', });
lyr_Ruta2rioQuijoswaypoints_22.set('fieldAliases', {'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheight': 'geoidheight', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'sym': 'sym', 'type': 'type', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsdata': 'ageofdgpsdata', 'dgpsid': 'dgpsid', });
lyr_Ruta4cascadaalParamorioSunucowaypoints_23.set('fieldAliases', {'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheight': 'geoidheight', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'sym': 'sym', 'type': 'type', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsdata': 'ageofdgpsdata', 'dgpsid': 'dgpsid', });
lyr_Ruta6alpuntoDlimiteconseorTapia2waypoints_24.set('fieldAliases', {'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheight': 'geoidheight', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'sym': 'sym', 'type': 'type', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsdata': 'ageofdgpsdata', 'dgpsid': 'dgpsid', });
lyr_RUTA11SANANTONIOtracks_25.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', });
lyr_RUTA11SANANTONIOTrack002_26.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Track_RUT1LASABANETtracks_27.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', });
lyr_Track_RUTA2BUSTMNTEtracks_28.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', 'gpxtrkx_TrackStatsExtension': 'gpxtrkx_TrackStatsExtension', });
lyr_Track_RUTA3LOSCEIBITOStracks_29.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', 'gpxtrkx_TrackStatsExtension': 'gpxtrkx_TrackStatsExtension', });
lyr_Track_RUTA4LOSBALSAMOStracks_30.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', 'gpxtrkx_TrackStatsExtension': 'gpxtrkx_TrackStatsExtension', });
lyr_Track_RUTA5LASVARAStracks_31.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', 'gpxtrkx_TrackStatsExtension': 'gpxtrkx_TrackStatsExtension', });
lyr_Track_RUTA6LAMANGATtracks_32.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', 'gpxtrkx_TrackStatsExtension': 'gpxtrkx_TrackStatsExtension', });
lyr_Track_RUTA7LASTRANCAStracks_33.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', 'gpxtrkx_TrackStatsExtension': 'gpxtrkx_TrackStatsExtension', });
lyr_Track_RUTA8LAPALMAtracks_34.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', 'gpxtrkx_TrackStatsExtension': 'gpxtrkx_TrackStatsExtension', });
lyr_Track_RUTA9SANFRANCISCOtracks_35.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', 'gpxtrkx_TrackStatsExtension': 'gpxtrkx_TrackStatsExtension', });
lyr_Track_RUTA10ELBUStracks_36.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', 'gpxtrkx_TrackStatsExtension': 'gpxtrkx_TrackStatsExtension', });
lyr_Track_RUTA12ZOILACORtracks_37.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', 'gpxtrkx_TrackStatsExtension': 'gpxtrkx_TrackStatsExtension', });
lyr_Track_RUTA13RIOMATIAStracks_38.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', 'gpxtrkx_TrackStatsExtension': 'gpxtrkx_TrackStatsExtension', });
lyr_Track_RUTA14PUENTELASBALSAStracks_39.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', 'gpxtrkx_TrackStatsExtension': 'gpxtrkx_TrackStatsExtension', });
lyr_RUTA2LADERAESTEOESTEYFILOtracks_40.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', 'gpxtrkx_TrackStatsExtension': 'gpxtrkx_TrackStatsExtension', });
lyr_Ruta4laderaesteylibanocopalingatracks_41.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', 'gpxtrkx_TrackStatsExtension': 'gpxtrkx_TrackStatsExtension', });
lyr_Ruta5laderaOestecopalingatracks_42.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', 'gpxtrkx_TrackStatsExtension': 'gpxtrkx_TrackStatsExtension', });
lyr_RUTA3RIOBOMBUSCAROTracks_43.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Track_ruta06copalinga16175330tracks_44.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', 'gpxtrkx_TrackStatsExtension': 'gpxtrkx_TrackStatsExtension', });
lyr_Ruta1FincaEspinozapartebajatracks_45.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', 'gpxtrkx_TrackStatsExtension': 'gpxtrkx_TrackStatsExtension', });
lyr_Ruta2SectorPiedraChispatracks_46.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', 'gpxtrkx_TrackStatsExtension': 'gpxtrkx_TrackStatsExtension', });
lyr_Ruta3Sectorjaulaguacamayostracks_47.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', 'gpxtrkx_TrackStatsExtension': 'gpxtrkx_TrackStatsExtension', });
lyr_Ruta4Partealtaltimapropiedadtracks_48.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', 'gpxtrkx_TrackStatsExtension': 'gpxtrkx_TrackStatsExtension', });
lyr_Ruta1Primerapropiedadtracks_49.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', 'gpxtrkx_TrackStatsExtension': 'gpxtrkx_TrackStatsExtension', });
lyr_Ruta1Riopichanrucopichinchatracks_50.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', 'gpxtrkx_TrackStatsExtension': 'gpxtrkx_TrackStatsExtension', });
lyr_Ruta2CochalomaPadreencantadoCascada_tracks_51.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', 'gpxtrkx_TrackStatsExtension': 'gpxtrkx_TrackStatsExtension', });
lyr_Ruta3LacasetaTunelesCascada_tracks_52.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', 'gpxtrkx_TrackStatsExtension': 'gpxtrkx_TrackStatsExtension', });
lyr_Ruta4SenderoosoBromeliasMaskedtrongontracks_53.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', });
lyr_Ruta5PolylepisCaminodeherradurasTablawasitracks_54.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', 'gpxtrkx_TrackStatsExtension': 'gpxtrkx_TrackStatsExtension', });
lyr_Ruta6AndeanLadispensaCerroyanahurco_tracks_55.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', 'gpxtrkx_TrackStatsExtension': 'gpxtrkx_TrackStatsExtension', });
lyr_Ruta7Lacampia_tracks_56.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', 'gpxtrkx_TrackStatsExtension': 'gpxtrkx_TrackStatsExtension', });
lyr_Ruta1Shamatocabeceraderiojondachiwaypoints_57.set('fieldAliases', {'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheight': 'geoidheight', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'sym': 'sym', 'type': 'type', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsdata': 'ageofdgpsdata', 'dgpsid': 'dgpsid', });
lyr_Ruta3pungarayacuminasGenovevaprediosmaximoAlvaradoyJoseYumbowaypoints_58.set('fieldAliases', {'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheight': 'geoidheight', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'sym': 'sym', 'type': 'type', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsdata': 'ageofdgpsdata', 'dgpsid': 'dgpsid', });
lyr_Ruta4pungayacuvalenciaRojasNormaHuatatocaCochayacuwaypoints_59.set('fieldAliases', {'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheight': 'geoidheight', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'sym': 'sym', 'type': 'type', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsdata': 'ageofdgpsdata', 'dgpsid': 'dgpsid', });
lyr_Ruta5RosapeafielyLuisNegretewaypoints_60.set('fieldAliases', {'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheight': 'geoidheight', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'sym': 'sym', 'type': 'type', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsdata': 'ageofdgpsdata', 'dgpsid': 'dgpsid', });
lyr_Ruta6santosJumboCamposGracielaVasquezwaypoints_61.set('fieldAliases', {'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheight': 'geoidheight', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'sym': 'sym', 'type': 'type', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsdata': 'ageofdgpsdata', 'dgpsid': 'dgpsid', });
lyr_Ruta7cocodriloslimitesconPNsumacoPredioFelipaJimawaypoints_62.set('fieldAliases', {'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheight': 'geoidheight', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'sym': 'sym', 'type': 'type', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsdata': 'ageofdgpsdata', 'dgpsid': 'dgpsid', });
lyr_Ruta8LlaucanabajaHollinchicowaypoints_63.set('fieldAliases', {'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheight': 'geoidheight', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'sym': 'sym', 'type': 'type', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsdata': 'ageofdgpsdata', 'dgpsid': 'dgpsid', });
lyr_Ruta9PungarayacuHollinChicowaypoints_64.set('fieldAliases', {'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheight': 'geoidheight', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'sym': 'sym', 'type': 'type', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsdata': 'ageofdgpsdata', 'dgpsid': 'dgpsid', });
lyr_Ruta10chaquianLimitesconPNAPredioLopezwaypoints_65.set('fieldAliases', {'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheight': 'geoidheight', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'sym': 'sym', 'type': 'type', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsdata': 'ageofdgpsdata', 'dgpsid': 'dgpsid', });
lyr_Ruta11AsnayacuPredioFernadoChavezwaypoints_66.set('fieldAliases', {'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheight': 'geoidheight', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'sym': 'sym', 'type': 'type', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsdata': 'ageofdgpsdata', 'dgpsid': 'dgpsid', });
lyr_Ruta12CocodriloPrediosHeydiQuispelemaySandovalwaypoints_67.set('fieldAliases', {'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheight': 'geoidheight', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'sym': 'sym', 'type': 'type', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsdata': 'ageofdgpsdata', 'dgpsid': 'dgpsid', });
lyr_Ruta13LadolorosapredioJaimeValdezwaypoints_68.set('fieldAliases', {'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheight': 'geoidheight', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'sym': 'sym', 'type': 'type', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsdata': 'ageofdgpsdata', 'dgpsid': 'dgpsid', });
lyr_Ruta14senderovirmillontanagerHollinchicowaypoints_69.set('fieldAliases', {'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheight': 'geoidheight', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'sym': 'sym', 'type': 'type', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsdata': 'ageofdgpsdata', 'dgpsid': 'dgpsid', });
lyr_Ruta1LineaOCPwaypoints_70.set('fieldAliases', {'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheight': 'geoidheight', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'sym': 'sym', 'type': 'type', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsdata': 'ageofdgpsdata', 'dgpsid': 'dgpsid', });
lyr_Ruta2LimitesconGustavoyalRioQuijoswaypoints_71.set('fieldAliases', {'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheight': 'geoidheight', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'sym': 'sym', 'type': 'type', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsdata': 'ageofdgpsdata', 'dgpsid': 'dgpsid', });
lyr_Ruta3SenderoorrilladerioQuijowaypoints_72.set('fieldAliases', {'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheight': 'geoidheight', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'sym': 'sym', 'type': 'type', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsdata': 'ageofdgpsdata', 'dgpsid': 'dgpsid', });
lyr_Ruta4OCPasectorMoradillaswaypoints_73.set('fieldAliases', {'ele': 'ele', 'time': 'time', 'magvar': 'magvar', 'geoidheight': 'geoidheight', 'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'sym': 'sym', 'type': 'type', 'fix': 'fix', 'sat': 'sat', 'hdop': 'hdop', 'vdop': 'vdop', 'pdop': 'pdop', 'ageofdgpsdata': 'ageofdgpsdata', 'dgpsid': 'dgpsid', });
lyr_Ruta1SantaLuciaSunfohaycoyCerroPlazadeArmas_74.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', 'gpxtrkx_TrackStatsExtension': 'gpxtrkx_TrackStatsExtension', });
lyr_Ruta3LagunasdeSecas_Tipopugro_SecasArribayPenondelIsco_75.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', 'gpxtrkx_TrackStatsExtension': 'gpxtrkx_TrackStatsExtension', });
lyr_Ruta4FlujoDerrameLavicoPotrerodeSanFrancisco_76.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', 'gpxx_TrackExtension': 'gpxx_TrackExtension', 'gpxtrkx_TrackStatsExtension': 'gpxtrkx_TrackStatsExtension', });
lyr_Derrumbe_77.set('fieldAliases', {'REGISTRADO': 'REGISTRADO', 'rm_bandera': 'rm_bandera', 'rm_bande_1': 'rm_bande_1', 'rm_bande_2': 'rm_bande_2', 'FECHA': 'FECHA', 'dia': 'dia', 'mes': 'mes', 'HORA': 'HORA', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ALTITUD': 'ALTITUD', 'PRECISION': 'PRECISION', 'RESERVAS_Y': 'RESERVAS_Y', 'OTROS': 'OTROS', 'LOCALIDAD': 'LOCALIDAD', 'TIPO_DE_AM': 'TIPO_DE_AM', 'QUé_HIZO_': 'QUé_HIZO_', 'FOTOGRAFí': 'FOTOGRAFí', 'FOTOGRAF_1': 'FOTOGRAF_1', 'OBSERVACIO': 'OBSERVACIO', 'ESTADO': 'ESTADO', });
lyr_Ganado_78.set('fieldAliases', {'REGISTRADO': 'REGISTRADO', 'rm_bandera': 'rm_bandera', 'rm_bande_1': 'rm_bande_1', 'rm_bande_2': 'rm_bande_2', 'FECHA': 'FECHA', 'dia': 'dia', 'mes': 'mes', 'HORA': 'HORA', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ALTITUD': 'ALTITUD', 'PRECISION': 'PRECISION', 'RESERVAS_Y': 'RESERVAS_Y', 'OTROS': 'OTROS', 'LOCALIDAD': 'LOCALIDAD', 'TIPO_DE_AM': 'TIPO_DE_AM', 'QUé_HIZO_': 'QUé_HIZO_', 'FOTOGRAFí': 'FOTOGRAFí', 'FOTOGRAF_1': 'FOTOGRAF_1', 'OBSERVACIO': 'OBSERVACIO', 'ESTADO': 'ESTADO', });
lyr_Basura_79.set('fieldAliases', {'REGISTRADO': 'REGISTRADO', 'rm_bandera': 'rm_bandera', 'rm_bande_1': 'rm_bande_1', 'rm_bande_2': 'rm_bande_2', 'FECHA': 'FECHA', 'dia': 'dia', 'mes': 'mes', 'HORA': 'HORA', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ALTITUD': 'ALTITUD', 'PRECISION': 'PRECISION', 'RESERVAS_Y': 'RESERVAS_Y', 'OTROS': 'OTROS', 'LOCALIDAD': 'LOCALIDAD', 'TIPO_DE_AM': 'TIPO_DE_AM', 'QUé_HIZO_': 'QUé_HIZO_', 'FOTOGRAFí': 'FOTOGRAFí', 'FOTOGRAF_1': 'FOTOGRAF_1', 'OBSERVACIO': 'OBSERVACIO', 'ESTADO': 'ESTADO', });
lyr_Contaminacinlquidos_80.set('fieldAliases', {'REGISTRADO': 'REGISTRADO', 'rm_bandera': 'rm_bandera', 'rm_bande_1': 'rm_bande_1', 'rm_bande_2': 'rm_bande_2', 'FECHA': 'FECHA', 'dia': 'dia', 'mes': 'mes', 'HORA': 'HORA', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ALTITUD': 'ALTITUD', 'PRECISION': 'PRECISION', 'RESERVAS_Y': 'RESERVAS_Y', 'OTROS': 'OTROS', 'LOCALIDAD': 'LOCALIDAD', 'TIPO_DE_AM': 'TIPO_DE_AM', 'QUé_HIZO_': 'QUé_HIZO_', 'FOTOGRAFí': 'FOTOGRAFí', 'FOTOGRAF_1': 'FOTOGRAF_1', 'OBSERVACIO': 'OBSERVACIO', 'ESTADO': 'ESTADO', });
lyr_Entradasinpermiso_81.set('fieldAliases', {'REGISTRADO': 'REGISTRADO', 'rm_bandera': 'rm_bandera', 'rm_bande_1': 'rm_bande_1', 'rm_bande_2': 'rm_bande_2', 'FECHA': 'FECHA', 'dia': 'dia', 'mes': 'mes', 'HORA': 'HORA', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ALTITUD': 'ALTITUD', 'PRECISION': 'PRECISION', 'RESERVAS_Y': 'RESERVAS_Y', 'OTROS': 'OTROS', 'LOCALIDAD': 'LOCALIDAD', 'TIPO_DE_AM': 'TIPO_DE_AM', 'QUé_HIZO_': 'QUé_HIZO_', 'FOTOGRAFí': 'FOTOGRAFí', 'FOTOGRAF_1': 'FOTOGRAF_1', 'OBSERVACIO': 'OBSERVACIO', 'ESTADO': 'ESTADO', });
lyr_Derrumbe_82.set('fieldAliases', {'REGISTRADO': 'REGISTRADO', 'rm_bandera': 'rm_bandera', 'rm_bande_1': 'rm_bande_1', 'rm_bande_2': 'rm_bande_2', 'FECHA': 'FECHA', 'dia': 'dia', 'mes': 'mes', 'HORA': 'HORA', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ALTITUD': 'ALTITUD', 'PRECISION': 'PRECISION', 'RESERVAS_Y': 'RESERVAS_Y', 'OTROS': 'OTROS', 'LOCALIDAD': 'LOCALIDAD', 'TIPO_DE_AM': 'TIPO_DE_AM', 'QUé_HIZO_': 'QUé_HIZO_', 'FOTOGRAFí': 'FOTOGRAFí', 'FOTOGRAF_1': 'FOTOGRAF_1', 'OBSERVACIO': 'OBSERVACIO', 'ESTADO': 'ESTADO', });
lyr_Ganado_83.set('fieldAliases', {'REGISTRADO': 'REGISTRADO', 'rm_bandera': 'rm_bandera', 'rm_bande_1': 'rm_bande_1', 'rm_bande_2': 'rm_bande_2', 'FECHA': 'FECHA', 'dia': 'dia', 'mes': 'mes', 'HORA': 'HORA', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ALTITUD': 'ALTITUD', 'PRECISION': 'PRECISION', 'RESERVAS_Y': 'RESERVAS_Y', 'OTROS': 'OTROS', 'LOCALIDAD': 'LOCALIDAD', 'TIPO_DE_AM': 'TIPO_DE_AM', 'QUé_HIZO_': 'QUé_HIZO_', 'FOTOGRAFí': 'FOTOGRAFí', 'FOTOGRAF_1': 'FOTOGRAF_1', 'OBSERVACIO': 'OBSERVACIO', 'ESTADO': 'ESTADO', });
lyr_Quema_84.set('fieldAliases', {'REGISTRADO': 'REGISTRADO', 'rm_bandera': 'rm_bandera', 'rm_bande_1': 'rm_bande_1', 'rm_bande_2': 'rm_bande_2', 'FECHA': 'FECHA', 'dia': 'dia', 'mes': 'mes', 'HORA': 'HORA', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ALTITUD': 'ALTITUD', 'PRECISION': 'PRECISION', 'RESERVAS_Y': 'RESERVAS_Y', 'OTROS': 'OTROS', 'LOCALIDAD': 'LOCALIDAD', 'TIPO_DE_AM': 'TIPO_DE_AM', 'QUé_HIZO_': 'QUé_HIZO_', 'FOTOGRAFí': 'FOTOGRAFí', 'FOTOGRAF_1': 'FOTOGRAF_1', 'OBSERVACIO': 'OBSERVACIO', 'ESTADO': 'ESTADO', });
lyr_Roboodaodeinfraestructura_85.set('fieldAliases', {'REGISTRADO': 'REGISTRADO', 'rm_bandera': 'rm_bandera', 'rm_bande_1': 'rm_bande_1', 'rm_bande_2': 'rm_bande_2', 'FECHA': 'FECHA', 'dia': 'dia', 'mes': 'mes', 'HORA': 'HORA', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ALTITUD': 'ALTITUD', 'PRECISION': 'PRECISION', 'RESERVAS_Y': 'RESERVAS_Y', 'OTROS': 'OTROS', 'LOCALIDAD': 'LOCALIDAD', 'TIPO_DE_AM': 'TIPO_DE_AM', 'QUé_HIZO_': 'QUé_HIZO_', 'FOTOGRAFí': 'FOTOGRAFí', 'FOTOGRAF_1': 'FOTOGRAF_1', 'OBSERVACIO': 'OBSERVACIO', 'ESTADO': 'ESTADO', });
lyr_Ecuador_1.set('fieldImages', {'NEWFIELD1': 'TextEdit', 'COUNT_': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_Provincias_2.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'PROVIN_': 'TextEdit', 'PROVIN_ID': 'TextEdit', 'AREA_1': 'TextEdit', 'PERIMETE_1': 'TextEdit', 'PROVINCIAL': 'TextEdit', 'PROVINCI_1': 'TextEdit', 'FNODE_': 'TextEdit', 'TNODE_': 'TextEdit', 'LPOLY_': 'TextEdit', 'RPOLY_': 'TextEdit', 'LENGTH': 'TextEdit', 'PROFINC_': 'TextEdit', 'PROFINC_ID': 'TextEdit', 'NOMBRE': 'TextEdit', 'REGION': 'TextEdit', 'CAPITAL60': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Cantones_3.set('fieldImages', {'CANTON': 'TextEdit', 'COUNT_': 'TextEdit', 'AVE_AREA': 'TextEdit', 'SUM_AREA': 'TextEdit', 'MIN_AREA': 'TextEdit', 'MAX_AREA': 'TextEdit', 'STDDEV_ARE': 'TextEdit', 'VAR_AREA': 'TextEdit', 'AVE_PERIME': 'TextEdit', 'SUM_PERIME': 'TextEdit', 'MIN_PERIME': 'TextEdit', 'MAX_PERIME': 'TextEdit', 'STDDEV_PER': 'TextEdit', 'VAR_PERIME': 'TextEdit', 'AVE_PARRGE': 'TextEdit', 'SUM_PARRGE': 'TextEdit', 'MIN_PARRGE': 'TextEdit', 'MAX_PARRGE': 'TextEdit', 'STDDEV_PAR': 'TextEdit', 'VAR_PARRGE': 'TextEdit', 'AVE_PARR_1': 'TextEdit', 'SUM_PARR_1': 'TextEdit', 'MIN_PARR_1': 'TextEdit', 'MAX_PARR_1': 'TextEdit', 'STDDEV_P_1': 'TextEdit', 'VAR_PARR_1': 'TextEdit', 'AVE_CODIGO': 'TextEdit', 'SUM_CODIGO': 'TextEdit', 'MIN_CODIGO': 'TextEdit', 'MAX_CODIGO': 'TextEdit', 'STDDEV_COD': 'TextEdit', 'VAR_CODIGO': 'TextEdit', 'FIRST_CODI': 'TextEdit', 'LAST_CODIG': 'TextEdit', 'COUNT_CODI': 'TextEdit', 'AVE_FNODE_': 'TextEdit', 'SUM_FNODE_': 'TextEdit', 'MIN_FNODE_': 'TextEdit', 'MAX_FNODE_': 'TextEdit', 'STDDEV_FNO': 'TextEdit', 'VAR_FNODE_': 'TextEdit', 'AVE_TNODE_': 'TextEdit', 'SUM_TNODE_': 'TextEdit', 'MIN_TNODE_': 'TextEdit', 'MAX_TNODE_': 'TextEdit', 'STDDEV_TNO': 'TextEdit', 'VAR_TNODE_': 'TextEdit', 'AVE_LPOLY_': 'TextEdit', 'SUM_LPOLY_': 'TextEdit', 'MIN_LPOLY_': 'TextEdit', 'MAX_LPOLY_': 'TextEdit', 'STDDEV_LPO': 'TextEdit', 'VAR_LPOLY_': 'TextEdit', 'AVE_RPOLY_': 'TextEdit', 'SUM_RPOLY_': 'TextEdit', 'MIN_RPOLY_': 'TextEdit', 'MAX_RPOLY_': 'TextEdit', 'STDDEV_RPO': 'TextEdit', 'VAR_RPOLY_': 'TextEdit', 'AVE_PAR_': 'TextEdit', 'SUM_PAR_': 'TextEdit', 'MIN_PAR_': 'TextEdit', 'MAX_PAR_': 'TextEdit', 'STDDEV_P_2': 'TextEdit', 'VAR_PAR_': 'TextEdit', 'AVE_PAR_ID': 'TextEdit', 'SUM_PAR_ID': 'TextEdit', 'MIN_PAR_ID': 'TextEdit', 'MAX_PAR_ID': 'TextEdit', 'STDDEV_P_3': 'TextEdit', 'VAR_PAR_ID': 'TextEdit', 'AVE_PCPARQ': 'TextEdit', 'SUM_PCPARQ': 'TextEdit', 'MIN_PCPARQ': 'TextEdit', 'MAX_PCPARQ': 'TextEdit', 'STDDEV_PCP': 'TextEdit', 'VAR_PCPARQ': 'TextEdit', 'AVE_PCPA_1': 'TextEdit', 'SUM_PCPA_1': 'TextEdit', 'MIN_PCPA_1': 'TextEdit', 'MAX_PCPA_1': 'TextEdit', 'STDDEV_P_4': 'TextEdit', 'VAR_PCPA_1': 'TextEdit', 'FIRST_NOMB': 'TextEdit', 'LAST_NOMBR': 'TextEdit', 'COUNT_NOMB': 'TextEdit', 'FIRST_TIPO': 'TextEdit', 'LAST_TIPO': 'TextEdit', 'COUNT_TIPO': 'TextEdit', 'FIRST_NIVD': 'TextEdit', 'LAST_NIVDE': 'TextEdit', 'COUNT_NIVD': 'TextEdit', 'FIRST_PROV': 'TextEdit', 'LAST_PROVI': 'TextEdit', 'COUNT_PROV': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Parroquias_4.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'PARRGEO_': 'TextEdit', 'PARRGEO_ID': 'TextEdit', 'CODIGO': 'TextEdit', 'CODIGOP': 'TextEdit', 'FNODE_': 'TextEdit', 'TNODE_': 'TextEdit', 'LPOLY_': 'TextEdit', 'RPOLY_': 'TextEdit', 'PAR_': 'TextEdit', 'PAR_ID': 'TextEdit', 'PCPARQ_': 'TextEdit', 'PCPARQ_ID': 'TextEdit', 'NOMBRE': 'TextEdit', 'TIPO': 'TextEdit', 'NIVDET': 'TextEdit', 'CANTON': 'TextEdit', 'PROVINCIA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ReservasJocotoco_5.set('fieldImages', {'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Clamped': 'Range', 'Extruded': 'Range', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Ruta1CSAvionCaidotracks_6.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', 'line': '', });
lyr_Ruta2CruzdelSoldadoValladolidtracks_7.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', 'line': '', });
lyr_Ruta3CSCarrizalQuebradaHondatracks_8.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', 'line': '', });
lyr_Ruta4CSVQHNumbalaLibioJimeneztracks_9.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', });
lyr_Ruta5ValladolidQuebradadelosmolinostracks_10.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', });
lyr_Ruta6TapalaRegionaltracks_11.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', });
lyr_Ruta7YanganaCerroToledoNumbalaPalmerastracks_12.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', });
lyr_Ruta8SenderoPihaQuebradahondatracks_13.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', 'line': '', });
lyr_Ruta9BustamanteQuebradadeNanchimatracks_14.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', });
lyr_1_12_2025Ruta7predioveloztracks_15.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', 'gpxx_TrackExtension': '', 'gpxtrkx_TrackStatsExtension': '', });
lyr_2_12_2025Ruta6rutadelosotracks_16.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', 'gpxx_TrackExtension': '', 'gpxtrkx_TrackStatsExtension': '', });
lyr_18_11_2025Ruta5FRENTESANTAROSAtracks_17.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', 'gpxx_TrackExtension': '', 'gpxtrkx_TrackStatsExtension': '', });
lyr_19_11_2025Ruta1rutamanakintracks_18.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', 'gpxx_TrackExtension': '', 'gpxtrkx_TrackStatsExtension': '', });
lyr_24_11_2025Ruta3rutalascascadastracks_19.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', 'gpxx_TrackExtension': '', 'gpxtrkx_TrackStatsExtension': '', });
lyr_3_12_2025rutasantarosaMindogardentracks_20.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', 'gpxx_TrackExtension': '', 'gpxtrkx_TrackStatsExtension': '', });
lyr_Ruta1riosunucowaypoints_21.set('fieldImages', {'ele': '', 'time': '', 'magvar': '', 'geoidheight': '', 'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'sym': '', 'type': '', 'fix': '', 'sat': '', 'hdop': '', 'vdop': '', 'pdop': '', 'ageofdgpsdata': '', 'dgpsid': '', });
lyr_Ruta2rioQuijoswaypoints_22.set('fieldImages', {'ele': '', 'time': '', 'magvar': '', 'geoidheight': '', 'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'sym': '', 'type': '', 'fix': '', 'sat': '', 'hdop': '', 'vdop': '', 'pdop': '', 'ageofdgpsdata': '', 'dgpsid': '', });
lyr_Ruta4cascadaalParamorioSunucowaypoints_23.set('fieldImages', {'ele': '', 'time': '', 'magvar': '', 'geoidheight': '', 'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'sym': '', 'type': '', 'fix': '', 'sat': '', 'hdop': '', 'vdop': '', 'pdop': '', 'ageofdgpsdata': '', 'dgpsid': '', });
lyr_Ruta6alpuntoDlimiteconseorTapia2waypoints_24.set('fieldImages', {'ele': '', 'time': '', 'magvar': '', 'geoidheight': '', 'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'sym': '', 'type': '', 'fix': '', 'sat': '', 'hdop': '', 'vdop': '', 'pdop': '', 'ageofdgpsdata': '', 'dgpsid': '', });
lyr_RUTA11SANANTONIOtracks_25.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', 'gpxx_TrackExtension': '', });
lyr_RUTA11SANANTONIOTrack002_26.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Track_RUT1LASABANETtracks_27.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', 'gpxx_TrackExtension': '', });
lyr_Track_RUTA2BUSTMNTEtracks_28.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', 'gpxx_TrackExtension': '', 'gpxtrkx_TrackStatsExtension': '', });
lyr_Track_RUTA3LOSCEIBITOStracks_29.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', 'gpxx_TrackExtension': '', 'gpxtrkx_TrackStatsExtension': '', });
lyr_Track_RUTA4LOSBALSAMOStracks_30.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', 'gpxx_TrackExtension': '', 'gpxtrkx_TrackStatsExtension': '', });
lyr_Track_RUTA5LASVARAStracks_31.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', 'gpxx_TrackExtension': '', 'gpxtrkx_TrackStatsExtension': '', });
lyr_Track_RUTA6LAMANGATtracks_32.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', 'gpxx_TrackExtension': '', 'gpxtrkx_TrackStatsExtension': '', });
lyr_Track_RUTA7LASTRANCAStracks_33.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', 'gpxx_TrackExtension': '', 'gpxtrkx_TrackStatsExtension': '', });
lyr_Track_RUTA8LAPALMAtracks_34.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', 'gpxx_TrackExtension': '', 'gpxtrkx_TrackStatsExtension': '', });
lyr_Track_RUTA9SANFRANCISCOtracks_35.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', 'gpxx_TrackExtension': '', 'gpxtrkx_TrackStatsExtension': '', });
lyr_Track_RUTA10ELBUStracks_36.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', 'gpxx_TrackExtension': '', 'gpxtrkx_TrackStatsExtension': '', });
lyr_Track_RUTA12ZOILACORtracks_37.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', 'gpxx_TrackExtension': '', 'gpxtrkx_TrackStatsExtension': '', });
lyr_Track_RUTA13RIOMATIAStracks_38.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', 'gpxx_TrackExtension': '', 'gpxtrkx_TrackStatsExtension': '', });
lyr_Track_RUTA14PUENTELASBALSAStracks_39.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', 'gpxx_TrackExtension': '', 'gpxtrkx_TrackStatsExtension': '', });
lyr_RUTA2LADERAESTEOESTEYFILOtracks_40.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', 'gpxx_TrackExtension': '', 'gpxtrkx_TrackStatsExtension': '', });
lyr_Ruta4laderaesteylibanocopalingatracks_41.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', 'gpxx_TrackExtension': '', 'gpxtrkx_TrackStatsExtension': '', });
lyr_Ruta5laderaOestecopalingatracks_42.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', 'gpxx_TrackExtension': '', 'gpxtrkx_TrackStatsExtension': '', });
lyr_RUTA3RIOBOMBUSCAROTracks_43.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_Track_ruta06copalinga16175330tracks_44.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', 'gpxx_TrackExtension': '', 'gpxtrkx_TrackStatsExtension': '', });
lyr_Ruta1FincaEspinozapartebajatracks_45.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', 'gpxx_TrackExtension': '', 'gpxtrkx_TrackStatsExtension': '', });
lyr_Ruta2SectorPiedraChispatracks_46.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', 'gpxx_TrackExtension': '', 'gpxtrkx_TrackStatsExtension': '', });
lyr_Ruta3Sectorjaulaguacamayostracks_47.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', 'gpxx_TrackExtension': '', 'gpxtrkx_TrackStatsExtension': '', });
lyr_Ruta4Partealtaltimapropiedadtracks_48.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', 'gpxx_TrackExtension': '', 'gpxtrkx_TrackStatsExtension': '', });
lyr_Ruta1Primerapropiedadtracks_49.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', 'gpxx_TrackExtension': '', 'gpxtrkx_TrackStatsExtension': '', });
lyr_Ruta1Riopichanrucopichinchatracks_50.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', 'gpxx_TrackExtension': '', 'gpxtrkx_TrackStatsExtension': '', });
lyr_Ruta2CochalomaPadreencantadoCascada_tracks_51.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', 'gpxx_TrackExtension': '', 'gpxtrkx_TrackStatsExtension': '', });
lyr_Ruta3LacasetaTunelesCascada_tracks_52.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', 'gpxx_TrackExtension': '', 'gpxtrkx_TrackStatsExtension': '', });
lyr_Ruta4SenderoosoBromeliasMaskedtrongontracks_53.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', 'gpxx_TrackExtension': '', });
lyr_Ruta5PolylepisCaminodeherradurasTablawasitracks_54.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', 'gpxx_TrackExtension': '', 'gpxtrkx_TrackStatsExtension': '', });
lyr_Ruta6AndeanLadispensaCerroyanahurco_tracks_55.set('fieldImages', {'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'number': '', 'type': '', 'gpxx_TrackExtension': '', 'gpxtrkx_TrackStatsExtension': '', });
lyr_Ruta7Lacampia_tracks_56.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', 'gpxx_TrackExtension': 'TextEdit', 'gpxtrkx_TrackStatsExtension': 'TextEdit', });
lyr_Ruta1Shamatocabeceraderiojondachiwaypoints_57.set('fieldImages', {'ele': '', 'time': '', 'magvar': '', 'geoidheight': '', 'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'sym': '', 'type': '', 'fix': '', 'sat': '', 'hdop': '', 'vdop': '', 'pdop': '', 'ageofdgpsdata': '', 'dgpsid': '', });
lyr_Ruta3pungarayacuminasGenovevaprediosmaximoAlvaradoyJoseYumbowaypoints_58.set('fieldImages', {'ele': '', 'time': '', 'magvar': '', 'geoidheight': '', 'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'sym': '', 'type': '', 'fix': '', 'sat': '', 'hdop': '', 'vdop': '', 'pdop': '', 'ageofdgpsdata': '', 'dgpsid': '', });
lyr_Ruta4pungayacuvalenciaRojasNormaHuatatocaCochayacuwaypoints_59.set('fieldImages', {'ele': '', 'time': '', 'magvar': '', 'geoidheight': '', 'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'sym': '', 'type': '', 'fix': '', 'sat': '', 'hdop': '', 'vdop': '', 'pdop': '', 'ageofdgpsdata': '', 'dgpsid': '', });
lyr_Ruta5RosapeafielyLuisNegretewaypoints_60.set('fieldImages', {'ele': '', 'time': '', 'magvar': '', 'geoidheight': '', 'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'sym': '', 'type': '', 'fix': '', 'sat': '', 'hdop': '', 'vdop': '', 'pdop': '', 'ageofdgpsdata': '', 'dgpsid': '', });
lyr_Ruta6santosJumboCamposGracielaVasquezwaypoints_61.set('fieldImages', {'ele': '', 'time': '', 'magvar': '', 'geoidheight': '', 'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'sym': '', 'type': '', 'fix': '', 'sat': '', 'hdop': '', 'vdop': '', 'pdop': '', 'ageofdgpsdata': '', 'dgpsid': '', });
lyr_Ruta7cocodriloslimitesconPNsumacoPredioFelipaJimawaypoints_62.set('fieldImages', {'ele': '', 'time': '', 'magvar': '', 'geoidheight': '', 'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'sym': '', 'type': '', 'fix': '', 'sat': '', 'hdop': '', 'vdop': '', 'pdop': '', 'ageofdgpsdata': '', 'dgpsid': '', });
lyr_Ruta8LlaucanabajaHollinchicowaypoints_63.set('fieldImages', {'ele': '', 'time': '', 'magvar': '', 'geoidheight': '', 'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'sym': '', 'type': '', 'fix': '', 'sat': '', 'hdop': '', 'vdop': '', 'pdop': '', 'ageofdgpsdata': '', 'dgpsid': '', });
lyr_Ruta9PungarayacuHollinChicowaypoints_64.set('fieldImages', {'ele': '', 'time': '', 'magvar': '', 'geoidheight': '', 'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'sym': '', 'type': '', 'fix': '', 'sat': '', 'hdop': '', 'vdop': '', 'pdop': '', 'ageofdgpsdata': '', 'dgpsid': '', });
lyr_Ruta10chaquianLimitesconPNAPredioLopezwaypoints_65.set('fieldImages', {'ele': '', 'time': '', 'magvar': '', 'geoidheight': '', 'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'sym': '', 'type': '', 'fix': '', 'sat': '', 'hdop': '', 'vdop': '', 'pdop': '', 'ageofdgpsdata': '', 'dgpsid': '', });
lyr_Ruta11AsnayacuPredioFernadoChavezwaypoints_66.set('fieldImages', {'ele': '', 'time': '', 'magvar': '', 'geoidheight': '', 'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'sym': '', 'type': '', 'fix': '', 'sat': '', 'hdop': '', 'vdop': '', 'pdop': '', 'ageofdgpsdata': '', 'dgpsid': '', });
lyr_Ruta12CocodriloPrediosHeydiQuispelemaySandovalwaypoints_67.set('fieldImages', {'ele': '', 'time': '', 'magvar': '', 'geoidheight': '', 'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'sym': '', 'type': '', 'fix': '', 'sat': '', 'hdop': '', 'vdop': '', 'pdop': '', 'ageofdgpsdata': '', 'dgpsid': '', });
lyr_Ruta13LadolorosapredioJaimeValdezwaypoints_68.set('fieldImages', {'ele': '', 'time': '', 'magvar': '', 'geoidheight': '', 'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'sym': '', 'type': '', 'fix': '', 'sat': '', 'hdop': '', 'vdop': '', 'pdop': '', 'ageofdgpsdata': '', 'dgpsid': '', });
lyr_Ruta14senderovirmillontanagerHollinchicowaypoints_69.set('fieldImages', {'ele': '', 'time': '', 'magvar': '', 'geoidheight': '', 'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'sym': '', 'type': '', 'fix': '', 'sat': '', 'hdop': '', 'vdop': '', 'pdop': '', 'ageofdgpsdata': '', 'dgpsid': '', });
lyr_Ruta1LineaOCPwaypoints_70.set('fieldImages', {'ele': '', 'time': '', 'magvar': '', 'geoidheight': '', 'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'sym': '', 'type': '', 'fix': '', 'sat': '', 'hdop': '', 'vdop': '', 'pdop': '', 'ageofdgpsdata': '', 'dgpsid': '', });
lyr_Ruta2LimitesconGustavoyalRioQuijoswaypoints_71.set('fieldImages', {'ele': '', 'time': '', 'magvar': '', 'geoidheight': '', 'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'sym': '', 'type': '', 'fix': '', 'sat': '', 'hdop': '', 'vdop': '', 'pdop': '', 'ageofdgpsdata': '', 'dgpsid': '', });
lyr_Ruta3SenderoorrilladerioQuijowaypoints_72.set('fieldImages', {'ele': '', 'time': '', 'magvar': '', 'geoidheight': '', 'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'sym': '', 'type': '', 'fix': '', 'sat': '', 'hdop': '', 'vdop': '', 'pdop': '', 'ageofdgpsdata': '', 'dgpsid': '', });
lyr_Ruta4OCPasectorMoradillaswaypoints_73.set('fieldImages', {'ele': '', 'time': '', 'magvar': '', 'geoidheight': '', 'name': '', 'cmt': '', 'desc': '', 'src': '', 'link1_href': '', 'link1_text': '', 'link1_type': '', 'link2_href': '', 'link2_text': '', 'link2_type': '', 'sym': '', 'type': '', 'fix': '', 'sat': '', 'hdop': '', 'vdop': '', 'pdop': '', 'ageofdgpsdata': '', 'dgpsid': '', });
lyr_Ruta1SantaLuciaSunfohaycoyCerroPlazadeArmas_74.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', 'gpxx_TrackExtension': 'TextEdit', 'gpxtrkx_TrackStatsExtension': 'Range', });
lyr_Ruta3LagunasdeSecas_Tipopugro_SecasArribayPenondelIsco_75.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', 'gpxx_TrackExtension': 'TextEdit', 'gpxtrkx_TrackStatsExtension': 'Range', });
lyr_Ruta4FlujoDerrameLavicoPotrerodeSanFrancisco_76.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', 'gpxx_TrackExtension': 'TextEdit', 'gpxtrkx_TrackStatsExtension': 'Range', });
lyr_Derrumbe_77.set('fieldImages', {'REGISTRADO': 'TextEdit', 'rm_bandera': 'TextEdit', 'rm_bande_1': 'TextEdit', 'rm_bande_2': 'TextEdit', 'FECHA': 'DateTime', 'dia': 'TextEdit', 'mes': 'TextEdit', 'HORA': 'DateTime', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'ALTITUD': 'TextEdit', 'PRECISION': 'TextEdit', 'RESERVAS_Y': 'TextEdit', 'OTROS': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'TIPO_DE_AM': 'TextEdit', 'QUé_HIZO_': 'TextEdit', 'FOTOGRAFí': 'TextEdit', 'FOTOGRAF_1': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'ESTADO': 'TextEdit', });
lyr_Ganado_78.set('fieldImages', {'REGISTRADO': 'TextEdit', 'rm_bandera': 'TextEdit', 'rm_bande_1': 'TextEdit', 'rm_bande_2': 'TextEdit', 'FECHA': 'DateTime', 'dia': 'TextEdit', 'mes': 'TextEdit', 'HORA': 'DateTime', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'ALTITUD': 'TextEdit', 'PRECISION': 'TextEdit', 'RESERVAS_Y': 'TextEdit', 'OTROS': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'TIPO_DE_AM': 'TextEdit', 'QUé_HIZO_': 'TextEdit', 'FOTOGRAFí': 'TextEdit', 'FOTOGRAF_1': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'ESTADO': 'TextEdit', });
lyr_Basura_79.set('fieldImages', {'REGISTRADO': 'TextEdit', 'rm_bandera': 'TextEdit', 'rm_bande_1': 'TextEdit', 'rm_bande_2': 'TextEdit', 'FECHA': 'DateTime', 'dia': 'TextEdit', 'mes': 'TextEdit', 'HORA': 'DateTime', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'ALTITUD': 'TextEdit', 'PRECISION': 'TextEdit', 'RESERVAS_Y': 'TextEdit', 'OTROS': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'TIPO_DE_AM': 'TextEdit', 'QUé_HIZO_': 'TextEdit', 'FOTOGRAFí': 'TextEdit', 'FOTOGRAF_1': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'ESTADO': 'TextEdit', });
lyr_Contaminacinlquidos_80.set('fieldImages', {'REGISTRADO': 'TextEdit', 'rm_bandera': 'TextEdit', 'rm_bande_1': 'TextEdit', 'rm_bande_2': 'TextEdit', 'FECHA': 'DateTime', 'dia': 'TextEdit', 'mes': 'TextEdit', 'HORA': 'DateTime', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'ALTITUD': 'TextEdit', 'PRECISION': 'TextEdit', 'RESERVAS_Y': 'TextEdit', 'OTROS': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'TIPO_DE_AM': 'TextEdit', 'QUé_HIZO_': 'TextEdit', 'FOTOGRAFí': 'TextEdit', 'FOTOGRAF_1': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'ESTADO': 'TextEdit', });
lyr_Entradasinpermiso_81.set('fieldImages', {'REGISTRADO': 'TextEdit', 'rm_bandera': 'TextEdit', 'rm_bande_1': 'TextEdit', 'rm_bande_2': 'TextEdit', 'FECHA': 'DateTime', 'dia': 'TextEdit', 'mes': 'TextEdit', 'HORA': 'DateTime', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'ALTITUD': 'TextEdit', 'PRECISION': 'TextEdit', 'RESERVAS_Y': 'TextEdit', 'OTROS': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'TIPO_DE_AM': 'TextEdit', 'QUé_HIZO_': 'TextEdit', 'FOTOGRAFí': 'TextEdit', 'FOTOGRAF_1': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'ESTADO': 'TextEdit', });
lyr_Derrumbe_82.set('fieldImages', {'REGISTRADO': 'TextEdit', 'rm_bandera': 'TextEdit', 'rm_bande_1': 'TextEdit', 'rm_bande_2': 'TextEdit', 'FECHA': 'DateTime', 'dia': 'TextEdit', 'mes': 'TextEdit', 'HORA': 'DateTime', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'ALTITUD': 'TextEdit', 'PRECISION': 'TextEdit', 'RESERVAS_Y': 'TextEdit', 'OTROS': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'TIPO_DE_AM': 'TextEdit', 'QUé_HIZO_': 'TextEdit', 'FOTOGRAFí': 'TextEdit', 'FOTOGRAF_1': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'ESTADO': 'TextEdit', });
lyr_Ganado_83.set('fieldImages', {'REGISTRADO': 'TextEdit', 'rm_bandera': 'TextEdit', 'rm_bande_1': 'TextEdit', 'rm_bande_2': 'TextEdit', 'FECHA': 'DateTime', 'dia': 'TextEdit', 'mes': 'TextEdit', 'HORA': 'DateTime', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'ALTITUD': 'TextEdit', 'PRECISION': 'TextEdit', 'RESERVAS_Y': 'TextEdit', 'OTROS': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'TIPO_DE_AM': 'TextEdit', 'QUé_HIZO_': 'TextEdit', 'FOTOGRAFí': 'TextEdit', 'FOTOGRAF_1': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'ESTADO': 'TextEdit', });
lyr_Quema_84.set('fieldImages', {'REGISTRADO': 'TextEdit', 'rm_bandera': 'TextEdit', 'rm_bande_1': 'TextEdit', 'rm_bande_2': 'TextEdit', 'FECHA': 'DateTime', 'dia': 'TextEdit', 'mes': 'TextEdit', 'HORA': 'DateTime', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'ALTITUD': 'TextEdit', 'PRECISION': 'TextEdit', 'RESERVAS_Y': 'TextEdit', 'OTROS': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'TIPO_DE_AM': 'TextEdit', 'QUé_HIZO_': 'TextEdit', 'FOTOGRAFí': 'TextEdit', 'FOTOGRAF_1': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'ESTADO': 'TextEdit', });
lyr_Roboodaodeinfraestructura_85.set('fieldImages', {'REGISTRADO': 'TextEdit', 'rm_bandera': 'TextEdit', 'rm_bande_1': 'TextEdit', 'rm_bande_2': 'TextEdit', 'FECHA': 'DateTime', 'dia': 'TextEdit', 'mes': 'TextEdit', 'HORA': 'DateTime', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'ALTITUD': 'TextEdit', 'PRECISION': 'TextEdit', 'RESERVAS_Y': 'TextEdit', 'OTROS': 'TextEdit', 'LOCALIDAD': 'TextEdit', 'TIPO_DE_AM': 'TextEdit', 'QUé_HIZO_': 'TextEdit', 'FOTOGRAFí': 'TextEdit', 'FOTOGRAF_1': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'ESTADO': 'TextEdit', });
lyr_Ecuador_1.set('fieldLabels', {'NEWFIELD1': 'no label', 'COUNT_': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'Nombre': 'no label', });
lyr_Provincias_2.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'PROVIN_': 'no label', 'PROVIN_ID': 'no label', 'AREA_1': 'no label', 'PERIMETE_1': 'no label', 'PROVINCIAL': 'no label', 'PROVINCI_1': 'no label', 'FNODE_': 'no label', 'TNODE_': 'no label', 'LPOLY_': 'no label', 'RPOLY_': 'no label', 'LENGTH': 'no label', 'PROFINC_': 'no label', 'PROFINC_ID': 'no label', 'NOMBRE': 'no label', 'REGION': 'no label', 'CAPITAL60': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Cantones_3.set('fieldLabels', {'CANTON': 'no label', 'COUNT_': 'no label', 'AVE_AREA': 'no label', 'SUM_AREA': 'no label', 'MIN_AREA': 'no label', 'MAX_AREA': 'no label', 'STDDEV_ARE': 'no label', 'VAR_AREA': 'no label', 'AVE_PERIME': 'no label', 'SUM_PERIME': 'no label', 'MIN_PERIME': 'no label', 'MAX_PERIME': 'no label', 'STDDEV_PER': 'no label', 'VAR_PERIME': 'no label', 'AVE_PARRGE': 'no label', 'SUM_PARRGE': 'no label', 'MIN_PARRGE': 'no label', 'MAX_PARRGE': 'no label', 'STDDEV_PAR': 'no label', 'VAR_PARRGE': 'no label', 'AVE_PARR_1': 'no label', 'SUM_PARR_1': 'no label', 'MIN_PARR_1': 'no label', 'MAX_PARR_1': 'no label', 'STDDEV_P_1': 'no label', 'VAR_PARR_1': 'no label', 'AVE_CODIGO': 'no label', 'SUM_CODIGO': 'no label', 'MIN_CODIGO': 'no label', 'MAX_CODIGO': 'no label', 'STDDEV_COD': 'no label', 'VAR_CODIGO': 'no label', 'FIRST_CODI': 'no label', 'LAST_CODIG': 'no label', 'COUNT_CODI': 'no label', 'AVE_FNODE_': 'no label', 'SUM_FNODE_': 'no label', 'MIN_FNODE_': 'no label', 'MAX_FNODE_': 'no label', 'STDDEV_FNO': 'no label', 'VAR_FNODE_': 'no label', 'AVE_TNODE_': 'no label', 'SUM_TNODE_': 'no label', 'MIN_TNODE_': 'no label', 'MAX_TNODE_': 'no label', 'STDDEV_TNO': 'no label', 'VAR_TNODE_': 'no label', 'AVE_LPOLY_': 'no label', 'SUM_LPOLY_': 'no label', 'MIN_LPOLY_': 'no label', 'MAX_LPOLY_': 'no label', 'STDDEV_LPO': 'no label', 'VAR_LPOLY_': 'no label', 'AVE_RPOLY_': 'no label', 'SUM_RPOLY_': 'no label', 'MIN_RPOLY_': 'no label', 'MAX_RPOLY_': 'no label', 'STDDEV_RPO': 'no label', 'VAR_RPOLY_': 'no label', 'AVE_PAR_': 'no label', 'SUM_PAR_': 'no label', 'MIN_PAR_': 'no label', 'MAX_PAR_': 'no label', 'STDDEV_P_2': 'no label', 'VAR_PAR_': 'no label', 'AVE_PAR_ID': 'no label', 'SUM_PAR_ID': 'no label', 'MIN_PAR_ID': 'no label', 'MAX_PAR_ID': 'no label', 'STDDEV_P_3': 'no label', 'VAR_PAR_ID': 'no label', 'AVE_PCPARQ': 'no label', 'SUM_PCPARQ': 'no label', 'MIN_PCPARQ': 'no label', 'MAX_PCPARQ': 'no label', 'STDDEV_PCP': 'no label', 'VAR_PCPARQ': 'no label', 'AVE_PCPA_1': 'no label', 'SUM_PCPA_1': 'no label', 'MIN_PCPA_1': 'no label', 'MAX_PCPA_1': 'no label', 'STDDEV_P_4': 'no label', 'VAR_PCPA_1': 'no label', 'FIRST_NOMB': 'no label', 'LAST_NOMBR': 'no label', 'COUNT_NOMB': 'no label', 'FIRST_TIPO': 'no label', 'LAST_TIPO': 'no label', 'COUNT_TIPO': 'no label', 'FIRST_NIVD': 'no label', 'LAST_NIVDE': 'no label', 'COUNT_NIVD': 'no label', 'FIRST_PROV': 'no label', 'LAST_PROVI': 'no label', 'COUNT_PROV': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Parroquias_4.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'PARRGEO_': 'no label', 'PARRGEO_ID': 'no label', 'CODIGO': 'no label', 'CODIGOP': 'no label', 'FNODE_': 'no label', 'TNODE_': 'no label', 'LPOLY_': 'no label', 'RPOLY_': 'no label', 'PAR_': 'no label', 'PAR_ID': 'no label', 'PCPARQ_': 'no label', 'PCPARQ_ID': 'no label', 'NOMBRE': 'no label', 'TIPO': 'no label', 'NIVDET': 'no label', 'CANTON': 'no label', 'PROVINCIA': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_ReservasJocotoco_5.set('fieldLabels', {'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Ruta1CSAvionCaidotracks_6.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'line': 'no label', });
lyr_Ruta2CruzdelSoldadoValladolidtracks_7.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'line': 'no label', });
lyr_Ruta3CSCarrizalQuebradaHondatracks_8.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'line': 'no label', });
lyr_Ruta4CSVQHNumbalaLibioJimeneztracks_9.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_Ruta5ValladolidQuebradadelosmolinostracks_10.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_Ruta6TapalaRegionaltracks_11.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_Ruta7YanganaCerroToledoNumbalaPalmerastracks_12.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_Ruta8SenderoPihaQuebradahondatracks_13.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'line': 'no label', });
lyr_Ruta9BustamanteQuebradadeNanchimatracks_14.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_1_12_2025Ruta7predioveloztracks_15.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'gpxx_TrackExtension': 'no label', 'gpxtrkx_TrackStatsExtension': 'no label', });
lyr_2_12_2025Ruta6rutadelosotracks_16.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'gpxx_TrackExtension': 'no label', 'gpxtrkx_TrackStatsExtension': 'no label', });
lyr_18_11_2025Ruta5FRENTESANTAROSAtracks_17.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'gpxx_TrackExtension': 'no label', 'gpxtrkx_TrackStatsExtension': 'no label', });
lyr_19_11_2025Ruta1rutamanakintracks_18.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'gpxx_TrackExtension': 'no label', 'gpxtrkx_TrackStatsExtension': 'no label', });
lyr_24_11_2025Ruta3rutalascascadastracks_19.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'gpxx_TrackExtension': 'no label', 'gpxtrkx_TrackStatsExtension': 'no label', });
lyr_3_12_2025rutasantarosaMindogardentracks_20.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'gpxx_TrackExtension': 'no label', 'gpxtrkx_TrackStatsExtension': 'no label', });
lyr_Ruta1riosunucowaypoints_21.set('fieldLabels', {'ele': 'no label', 'time': 'no label', 'magvar': 'no label', 'geoidheight': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'sym': 'no label', 'type': 'no label', 'fix': 'no label', 'sat': 'no label', 'hdop': 'no label', 'vdop': 'no label', 'pdop': 'no label', 'ageofdgpsdata': 'no label', 'dgpsid': 'no label', });
lyr_Ruta2rioQuijoswaypoints_22.set('fieldLabels', {'ele': 'no label', 'time': 'no label', 'magvar': 'no label', 'geoidheight': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'sym': 'no label', 'type': 'no label', 'fix': 'no label', 'sat': 'no label', 'hdop': 'no label', 'vdop': 'no label', 'pdop': 'no label', 'ageofdgpsdata': 'no label', 'dgpsid': 'no label', });
lyr_Ruta4cascadaalParamorioSunucowaypoints_23.set('fieldLabels', {'ele': 'no label', 'time': 'no label', 'magvar': 'no label', 'geoidheight': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'sym': 'no label', 'type': 'no label', 'fix': 'no label', 'sat': 'no label', 'hdop': 'no label', 'vdop': 'no label', 'pdop': 'no label', 'ageofdgpsdata': 'no label', 'dgpsid': 'no label', });
lyr_Ruta6alpuntoDlimiteconseorTapia2waypoints_24.set('fieldLabels', {'ele': 'no label', 'time': 'no label', 'magvar': 'no label', 'geoidheight': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'sym': 'no label', 'type': 'no label', 'fix': 'no label', 'sat': 'no label', 'hdop': 'no label', 'vdop': 'no label', 'pdop': 'no label', 'ageofdgpsdata': 'no label', 'dgpsid': 'no label', });
lyr_RUTA11SANANTONIOtracks_25.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'gpxx_TrackExtension': 'no label', });
lyr_RUTA11SANANTONIOTrack002_26.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Track_RUT1LASABANETtracks_27.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'gpxx_TrackExtension': 'no label', });
lyr_Track_RUTA2BUSTMNTEtracks_28.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'gpxx_TrackExtension': 'no label', 'gpxtrkx_TrackStatsExtension': 'no label', });
lyr_Track_RUTA3LOSCEIBITOStracks_29.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'gpxx_TrackExtension': 'no label', 'gpxtrkx_TrackStatsExtension': 'no label', });
lyr_Track_RUTA4LOSBALSAMOStracks_30.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'gpxx_TrackExtension': 'no label', 'gpxtrkx_TrackStatsExtension': 'no label', });
lyr_Track_RUTA5LASVARAStracks_31.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'gpxx_TrackExtension': 'no label', 'gpxtrkx_TrackStatsExtension': 'no label', });
lyr_Track_RUTA6LAMANGATtracks_32.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'gpxx_TrackExtension': 'no label', 'gpxtrkx_TrackStatsExtension': 'no label', });
lyr_Track_RUTA7LASTRANCAStracks_33.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'gpxx_TrackExtension': 'no label', 'gpxtrkx_TrackStatsExtension': 'no label', });
lyr_Track_RUTA8LAPALMAtracks_34.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'gpxx_TrackExtension': 'no label', 'gpxtrkx_TrackStatsExtension': 'no label', });
lyr_Track_RUTA9SANFRANCISCOtracks_35.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'gpxx_TrackExtension': 'no label', 'gpxtrkx_TrackStatsExtension': 'no label', });
lyr_Track_RUTA10ELBUStracks_36.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'gpxx_TrackExtension': 'no label', 'gpxtrkx_TrackStatsExtension': 'no label', });
lyr_Track_RUTA12ZOILACORtracks_37.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'gpxx_TrackExtension': 'no label', 'gpxtrkx_TrackStatsExtension': 'no label', });
lyr_Track_RUTA13RIOMATIAStracks_38.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'gpxx_TrackExtension': 'no label', 'gpxtrkx_TrackStatsExtension': 'no label', });
lyr_Track_RUTA14PUENTELASBALSAStracks_39.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'gpxx_TrackExtension': 'no label', 'gpxtrkx_TrackStatsExtension': 'no label', });
lyr_RUTA2LADERAESTEOESTEYFILOtracks_40.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'gpxx_TrackExtension': 'no label', 'gpxtrkx_TrackStatsExtension': 'no label', });
lyr_Ruta4laderaesteylibanocopalingatracks_41.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'gpxx_TrackExtension': 'no label', 'gpxtrkx_TrackStatsExtension': 'no label', });
lyr_Ruta5laderaOestecopalingatracks_42.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'gpxx_TrackExtension': 'no label', 'gpxtrkx_TrackStatsExtension': 'no label', });
lyr_RUTA3RIOBOMBUSCAROTracks_43.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Track_ruta06copalinga16175330tracks_44.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'gpxx_TrackExtension': 'no label', 'gpxtrkx_TrackStatsExtension': 'no label', });
lyr_Ruta1FincaEspinozapartebajatracks_45.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'gpxx_TrackExtension': 'no label', 'gpxtrkx_TrackStatsExtension': 'no label', });
lyr_Ruta2SectorPiedraChispatracks_46.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'gpxx_TrackExtension': 'no label', 'gpxtrkx_TrackStatsExtension': 'no label', });
lyr_Ruta3Sectorjaulaguacamayostracks_47.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'gpxx_TrackExtension': 'no label', 'gpxtrkx_TrackStatsExtension': 'no label', });
lyr_Ruta4Partealtaltimapropiedadtracks_48.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'gpxx_TrackExtension': 'no label', 'gpxtrkx_TrackStatsExtension': 'no label', });
lyr_Ruta1Primerapropiedadtracks_49.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'gpxx_TrackExtension': 'no label', 'gpxtrkx_TrackStatsExtension': 'no label', });
lyr_Ruta1Riopichanrucopichinchatracks_50.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'gpxx_TrackExtension': 'no label', 'gpxtrkx_TrackStatsExtension': 'no label', });
lyr_Ruta2CochalomaPadreencantadoCascada_tracks_51.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'gpxx_TrackExtension': 'no label', 'gpxtrkx_TrackStatsExtension': 'no label', });
lyr_Ruta3LacasetaTunelesCascada_tracks_52.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'gpxx_TrackExtension': 'no label', 'gpxtrkx_TrackStatsExtension': 'no label', });
lyr_Ruta4SenderoosoBromeliasMaskedtrongontracks_53.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'gpxx_TrackExtension': 'no label', });
lyr_Ruta5PolylepisCaminodeherradurasTablawasitracks_54.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'gpxx_TrackExtension': 'no label', 'gpxtrkx_TrackStatsExtension': 'no label', });
lyr_Ruta6AndeanLadispensaCerroyanahurco_tracks_55.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'gpxx_TrackExtension': 'no label', 'gpxtrkx_TrackStatsExtension': 'no label', });
lyr_Ruta7Lacampia_tracks_56.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'gpxx_TrackExtension': 'no label', 'gpxtrkx_TrackStatsExtension': 'no label', });
lyr_Ruta1Shamatocabeceraderiojondachiwaypoints_57.set('fieldLabels', {'ele': 'no label', 'time': 'no label', 'magvar': 'no label', 'geoidheight': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'sym': 'no label', 'type': 'no label', 'fix': 'no label', 'sat': 'no label', 'hdop': 'no label', 'vdop': 'no label', 'pdop': 'no label', 'ageofdgpsdata': 'no label', 'dgpsid': 'no label', });
lyr_Ruta3pungarayacuminasGenovevaprediosmaximoAlvaradoyJoseYumbowaypoints_58.set('fieldLabels', {'ele': 'no label', 'time': 'no label', 'magvar': 'no label', 'geoidheight': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'sym': 'no label', 'type': 'no label', 'fix': 'no label', 'sat': 'no label', 'hdop': 'no label', 'vdop': 'no label', 'pdop': 'no label', 'ageofdgpsdata': 'no label', 'dgpsid': 'no label', });
lyr_Ruta4pungayacuvalenciaRojasNormaHuatatocaCochayacuwaypoints_59.set('fieldLabels', {'ele': 'no label', 'time': 'no label', 'magvar': 'no label', 'geoidheight': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'sym': 'no label', 'type': 'no label', 'fix': 'no label', 'sat': 'no label', 'hdop': 'no label', 'vdop': 'no label', 'pdop': 'no label', 'ageofdgpsdata': 'no label', 'dgpsid': 'no label', });
lyr_Ruta5RosapeafielyLuisNegretewaypoints_60.set('fieldLabels', {'ele': 'no label', 'time': 'no label', 'magvar': 'no label', 'geoidheight': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'sym': 'no label', 'type': 'no label', 'fix': 'no label', 'sat': 'no label', 'hdop': 'no label', 'vdop': 'no label', 'pdop': 'no label', 'ageofdgpsdata': 'no label', 'dgpsid': 'no label', });
lyr_Ruta6santosJumboCamposGracielaVasquezwaypoints_61.set('fieldLabels', {'ele': 'no label', 'time': 'no label', 'magvar': 'no label', 'geoidheight': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'sym': 'no label', 'type': 'no label', 'fix': 'no label', 'sat': 'no label', 'hdop': 'no label', 'vdop': 'no label', 'pdop': 'no label', 'ageofdgpsdata': 'no label', 'dgpsid': 'no label', });
lyr_Ruta7cocodriloslimitesconPNsumacoPredioFelipaJimawaypoints_62.set('fieldLabels', {'ele': 'no label', 'time': 'no label', 'magvar': 'no label', 'geoidheight': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'sym': 'no label', 'type': 'no label', 'fix': 'no label', 'sat': 'no label', 'hdop': 'no label', 'vdop': 'no label', 'pdop': 'no label', 'ageofdgpsdata': 'no label', 'dgpsid': 'no label', });
lyr_Ruta8LlaucanabajaHollinchicowaypoints_63.set('fieldLabels', {'ele': 'no label', 'time': 'no label', 'magvar': 'no label', 'geoidheight': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'sym': 'no label', 'type': 'no label', 'fix': 'no label', 'sat': 'no label', 'hdop': 'no label', 'vdop': 'no label', 'pdop': 'no label', 'ageofdgpsdata': 'no label', 'dgpsid': 'no label', });
lyr_Ruta9PungarayacuHollinChicowaypoints_64.set('fieldLabels', {'ele': 'no label', 'time': 'no label', 'magvar': 'no label', 'geoidheight': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'sym': 'no label', 'type': 'no label', 'fix': 'no label', 'sat': 'no label', 'hdop': 'no label', 'vdop': 'no label', 'pdop': 'no label', 'ageofdgpsdata': 'no label', 'dgpsid': 'no label', });
lyr_Ruta10chaquianLimitesconPNAPredioLopezwaypoints_65.set('fieldLabels', {'ele': 'no label', 'time': 'no label', 'magvar': 'no label', 'geoidheight': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'sym': 'no label', 'type': 'no label', 'fix': 'no label', 'sat': 'no label', 'hdop': 'no label', 'vdop': 'no label', 'pdop': 'no label', 'ageofdgpsdata': 'no label', 'dgpsid': 'no label', });
lyr_Ruta11AsnayacuPredioFernadoChavezwaypoints_66.set('fieldLabels', {'ele': 'no label', 'time': 'no label', 'magvar': 'no label', 'geoidheight': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'sym': 'no label', 'type': 'no label', 'fix': 'no label', 'sat': 'no label', 'hdop': 'no label', 'vdop': 'no label', 'pdop': 'no label', 'ageofdgpsdata': 'no label', 'dgpsid': 'no label', });
lyr_Ruta12CocodriloPrediosHeydiQuispelemaySandovalwaypoints_67.set('fieldLabels', {'ele': 'no label', 'time': 'no label', 'magvar': 'no label', 'geoidheight': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'sym': 'no label', 'type': 'no label', 'fix': 'no label', 'sat': 'no label', 'hdop': 'no label', 'vdop': 'no label', 'pdop': 'no label', 'ageofdgpsdata': 'no label', 'dgpsid': 'no label', });
lyr_Ruta13LadolorosapredioJaimeValdezwaypoints_68.set('fieldLabels', {'ele': 'no label', 'time': 'no label', 'magvar': 'no label', 'geoidheight': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'sym': 'no label', 'type': 'no label', 'fix': 'no label', 'sat': 'no label', 'hdop': 'no label', 'vdop': 'no label', 'pdop': 'no label', 'ageofdgpsdata': 'no label', 'dgpsid': 'no label', });
lyr_Ruta14senderovirmillontanagerHollinchicowaypoints_69.set('fieldLabels', {'ele': 'no label', 'time': 'no label', 'magvar': 'no label', 'geoidheight': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'sym': 'no label', 'type': 'no label', 'fix': 'no label', 'sat': 'no label', 'hdop': 'no label', 'vdop': 'no label', 'pdop': 'no label', 'ageofdgpsdata': 'no label', 'dgpsid': 'no label', });
lyr_Ruta1LineaOCPwaypoints_70.set('fieldLabels', {'ele': 'no label', 'time': 'no label', 'magvar': 'no label', 'geoidheight': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'sym': 'no label', 'type': 'no label', 'fix': 'no label', 'sat': 'no label', 'hdop': 'no label', 'vdop': 'no label', 'pdop': 'no label', 'ageofdgpsdata': 'no label', 'dgpsid': 'no label', });
lyr_Ruta2LimitesconGustavoyalRioQuijoswaypoints_71.set('fieldLabels', {'ele': 'no label', 'time': 'no label', 'magvar': 'no label', 'geoidheight': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'sym': 'no label', 'type': 'no label', 'fix': 'no label', 'sat': 'no label', 'hdop': 'no label', 'vdop': 'no label', 'pdop': 'no label', 'ageofdgpsdata': 'no label', 'dgpsid': 'no label', });
lyr_Ruta3SenderoorrilladerioQuijowaypoints_72.set('fieldLabels', {'ele': 'no label', 'time': 'no label', 'magvar': 'no label', 'geoidheight': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'sym': 'no label', 'type': 'no label', 'fix': 'no label', 'sat': 'no label', 'hdop': 'no label', 'vdop': 'no label', 'pdop': 'no label', 'ageofdgpsdata': 'no label', 'dgpsid': 'no label', });
lyr_Ruta4OCPasectorMoradillaswaypoints_73.set('fieldLabels', {'ele': 'no label', 'time': 'no label', 'magvar': 'no label', 'geoidheight': 'no label', 'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'sym': 'no label', 'type': 'no label', 'fix': 'no label', 'sat': 'no label', 'hdop': 'no label', 'vdop': 'no label', 'pdop': 'no label', 'ageofdgpsdata': 'no label', 'dgpsid': 'no label', });
lyr_Ruta1SantaLuciaSunfohaycoyCerroPlazadeArmas_74.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'gpxx_TrackExtension': 'no label', 'gpxtrkx_TrackStatsExtension': 'no label', });
lyr_Ruta3LagunasdeSecas_Tipopugro_SecasArribayPenondelIsco_75.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'gpxx_TrackExtension': 'no label', 'gpxtrkx_TrackStatsExtension': 'no label', });
lyr_Ruta4FlujoDerrameLavicoPotrerodeSanFrancisco_76.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', 'gpxx_TrackExtension': 'no label', 'gpxtrkx_TrackStatsExtension': 'no label', });
lyr_Derrumbe_77.set('fieldLabels', {'REGISTRADO': 'no label', 'rm_bandera': 'hidden field', 'rm_bande_1': 'hidden field', 'rm_bande_2': 'hidden field', 'FECHA': 'no label', 'dia': 'hidden field', 'mes': 'hidden field', 'HORA': 'hidden field', 'LATITUD': 'hidden field', 'LONGITUD': 'hidden field', 'ALTITUD': 'hidden field', 'PRECISION': 'hidden field', 'RESERVAS_Y': 'hidden field', 'OTROS': 'inline label - visible with data', 'LOCALIDAD': 'hidden field', 'TIPO_DE_AM': 'hidden field', 'QUé_HIZO_': 'hidden field', 'FOTOGRAFí': 'no label', 'FOTOGRAF_1': 'no label', 'OBSERVACIO': 'hidden field', 'ESTADO': 'hidden field', });
lyr_Ganado_78.set('fieldLabels', {'REGISTRADO': 'no label', 'rm_bandera': 'hidden field', 'rm_bande_1': 'hidden field', 'rm_bande_2': 'hidden field', 'FECHA': 'no label', 'dia': 'hidden field', 'mes': 'hidden field', 'HORA': 'hidden field', 'LATITUD': 'hidden field', 'LONGITUD': 'hidden field', 'ALTITUD': 'hidden field', 'PRECISION': 'hidden field', 'RESERVAS_Y': 'hidden field', 'OTROS': 'hidden field', 'LOCALIDAD': 'hidden field', 'TIPO_DE_AM': 'hidden field', 'QUé_HIZO_': 'hidden field', 'FOTOGRAFí': 'no label', 'FOTOGRAF_1': 'no label', 'OBSERVACIO': 'hidden field', 'ESTADO': 'hidden field', });
lyr_Basura_79.set('fieldLabels', {'REGISTRADO': 'no label', 'rm_bandera': 'hidden field', 'rm_bande_1': 'hidden field', 'rm_bande_2': 'hidden field', 'FECHA': 'no label', 'dia': 'hidden field', 'mes': 'hidden field', 'HORA': 'hidden field', 'LATITUD': 'hidden field', 'LONGITUD': 'hidden field', 'ALTITUD': 'hidden field', 'PRECISION': 'hidden field', 'RESERVAS_Y': 'hidden field', 'OTROS': 'hidden field', 'LOCALIDAD': 'hidden field', 'TIPO_DE_AM': 'hidden field', 'QUé_HIZO_': 'hidden field', 'FOTOGRAFí': 'no label', 'FOTOGRAF_1': 'no label', 'OBSERVACIO': 'hidden field', 'ESTADO': 'hidden field', });
lyr_Contaminacinlquidos_80.set('fieldLabels', {'REGISTRADO': 'no label', 'rm_bandera': 'hidden field', 'rm_bande_1': 'hidden field', 'rm_bande_2': 'hidden field', 'FECHA': 'no label', 'dia': 'hidden field', 'mes': 'hidden field', 'HORA': 'hidden field', 'LATITUD': 'hidden field', 'LONGITUD': 'hidden field', 'ALTITUD': 'hidden field', 'PRECISION': 'hidden field', 'RESERVAS_Y': 'hidden field', 'OTROS': 'hidden field', 'LOCALIDAD': 'hidden field', 'TIPO_DE_AM': 'hidden field', 'QUé_HIZO_': 'hidden field', 'FOTOGRAFí': 'no label', 'FOTOGRAF_1': 'no label', 'OBSERVACIO': 'hidden field', 'ESTADO': 'hidden field', });
lyr_Entradasinpermiso_81.set('fieldLabels', {'REGISTRADO': 'no label', 'rm_bandera': 'hidden field', 'rm_bande_1': 'hidden field', 'rm_bande_2': 'hidden field', 'FECHA': 'no label', 'dia': 'hidden field', 'mes': 'hidden field', 'HORA': 'hidden field', 'LATITUD': 'hidden field', 'LONGITUD': 'hidden field', 'ALTITUD': 'hidden field', 'PRECISION': 'hidden field', 'RESERVAS_Y': 'hidden field', 'OTROS': 'hidden field', 'LOCALIDAD': 'hidden field', 'TIPO_DE_AM': 'hidden field', 'QUé_HIZO_': 'hidden field', 'FOTOGRAFí': 'no label', 'FOTOGRAF_1': 'no label', 'OBSERVACIO': 'hidden field', 'ESTADO': 'hidden field', });
lyr_Derrumbe_82.set('fieldLabels', {'REGISTRADO': 'no label', 'rm_bandera': 'hidden field', 'rm_bande_1': 'hidden field', 'rm_bande_2': 'hidden field', 'FECHA': 'no label', 'dia': 'hidden field', 'mes': 'hidden field', 'HORA': 'hidden field', 'LATITUD': 'hidden field', 'LONGITUD': 'hidden field', 'ALTITUD': 'hidden field', 'PRECISION': 'hidden field', 'RESERVAS_Y': 'hidden field', 'OTROS': 'hidden field', 'LOCALIDAD': 'hidden field', 'TIPO_DE_AM': 'hidden field', 'QUé_HIZO_': 'hidden field', 'FOTOGRAFí': 'no label', 'FOTOGRAF_1': 'no label', 'OBSERVACIO': 'hidden field', 'ESTADO': 'hidden field', });
lyr_Ganado_83.set('fieldLabels', {'REGISTRADO': 'no label', 'rm_bandera': 'hidden field', 'rm_bande_1': 'hidden field', 'rm_bande_2': 'hidden field', 'FECHA': 'no label', 'dia': 'hidden field', 'mes': 'hidden field', 'HORA': 'hidden field', 'LATITUD': 'hidden field', 'LONGITUD': 'hidden field', 'ALTITUD': 'hidden field', 'PRECISION': 'hidden field', 'RESERVAS_Y': 'hidden field', 'OTROS': 'hidden field', 'LOCALIDAD': 'hidden field', 'TIPO_DE_AM': 'hidden field', 'QUé_HIZO_': 'hidden field', 'FOTOGRAFí': 'no label', 'FOTOGRAF_1': 'no label', 'OBSERVACIO': 'hidden field', 'ESTADO': 'hidden field', });
lyr_Quema_84.set('fieldLabels', {'REGISTRADO': 'no label', 'rm_bandera': 'hidden field', 'rm_bande_1': 'hidden field', 'rm_bande_2': 'hidden field', 'FECHA': 'no label', 'dia': 'hidden field', 'mes': 'hidden field', 'HORA': 'hidden field', 'LATITUD': 'hidden field', 'LONGITUD': 'hidden field', 'ALTITUD': 'hidden field', 'PRECISION': 'hidden field', 'RESERVAS_Y': 'hidden field', 'OTROS': 'hidden field', 'LOCALIDAD': 'hidden field', 'TIPO_DE_AM': 'hidden field', 'QUé_HIZO_': 'hidden field', 'FOTOGRAFí': 'no label', 'FOTOGRAF_1': 'no label', 'OBSERVACIO': 'hidden field', 'ESTADO': 'hidden field', });
lyr_Roboodaodeinfraestructura_85.set('fieldLabels', {'REGISTRADO': 'no label', 'rm_bandera': 'hidden field', 'rm_bande_1': 'hidden field', 'rm_bande_2': 'hidden field', 'FECHA': 'no label', 'dia': 'hidden field', 'mes': 'hidden field', 'HORA': 'hidden field', 'LATITUD': 'hidden field', 'LONGITUD': 'hidden field', 'ALTITUD': 'hidden field', 'PRECISION': 'hidden field', 'RESERVAS_Y': 'hidden field', 'OTROS': 'hidden field', 'LOCALIDAD': 'hidden field', 'TIPO_DE_AM': 'hidden field', 'QUé_HIZO_': 'hidden field', 'FOTOGRAFí': 'no label', 'FOTOGRAF_1': 'no label', 'OBSERVACIO': 'hidden field', 'ESTADO': 'hidden field', });
lyr_Roboodaodeinfraestructura_85.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});