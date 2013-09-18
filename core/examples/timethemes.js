Ext.namespace('App');
var loc = window.location.href.split('/');
loc.pop();
App.themes = {
    "local": [{
        "children": [{
            "isExpanded": true,
            "isInternalWMS": true,
            "name": "Theme 1 - Physical",
            "isBaseLayer": false,
            "children": [{
                "name": "Features",
                "isExpanded": true,
                "children": [{
                    "name": "drain_fn",
                    "legend": true,
                    "isChecked": false
                }, {
                    "name": "drainage",
                    "legend": true,
                    "isChecked": false,
                    "legendRule": "Water"
                }, {
                    "name": "Others",
                    "children": [{
                        "name": "rail",
                        "legend": true,
                        "isChecked": false,
                        "minResolutionHint": 0.00005,
                        "maxResolutionHint": 0.002
                    }, {
                        "name": "road",
                        "isChecked": false,
                        "legend": true,
                        "legendRule": "Roads"
                    }]
                }]
            }, {
                "name": "fedlimit",
                "isChecked": false,
                "legend": true,
                "maxResolutionHint": 0.1
            }, {
                "name": "bathymetry",
                "name": "Bathymetry",
                "kml": loc.join('/') + "/sundials.kml",
                "isChecked": false,
                "metadataUrl": "http://yahoo.fr",
                "icon": "http://sitn.ne.ch/mapfish/app/images/layers/npa.png",
                "legend": true,
                "legendImage": "http://sitn.ne.ch/mapfish/app/images/layers/npa.png"
            }]
        }, {
            "isExpanded":false,
            "isInternalWMS":true,
            "name":"gp_transport_route",
            "isBaseLayer":false,
            "wmsTime": {
                minValue: '2002-12-31T00:00:00+01',
                maxValue: '2011-12-31T00:00:00+01',
                defaultValue: '2002-12-31T00:00:00+01',
                values: [
                    '2002-12-31T00:00:00+01',
                    '2003-12-31T00:00:00+01',
                    '2004-12-31T00:00:00+01',
                    '2005-12-31T00:00:00+01',
                    '2006-12-31T00:00:00+01',
                    '2007-12-31T00:00:00+01',
                    '2008-12-31T00:00:00+01',
                    '2009-12-31T00:00:00+01',
                    '2010-12-31T00:00:00+01',
                    '2011-12-31T00:00:00+01'
                ]
            },
            "children":[{
                "minResolutionHint":0.0,
                "metadataURL":"http://sitn.ne.ch/sitn_php/metadonnees/metadata.php?layername=rt7_tjm_2009",
                "name":"rt7_tjm",
                "queryable":1,
                "isLegendExpanded":false,
                "legend":true,
                "isChecked":true,
                "childLayers":[

                ],
                "maxResolutionHint":352.78,
                "legendImage":"http://mapfish-geoportal.demo-camptocamp.com/vberchet/wsgi/proj/images/legends/legend_trafic.png",
                "id":405,
                "type":"internal WMS",
                "public":true,
                "imageType":null,
                "icon":"http://mapfish-geoportal.demo-camptocamp.com/vberchet/wsgi/proj/images/layers/trafic.png"
            }]
        }],
        "name": "Theme 1",
        "icon": "http://sitn.ne.ch/mapfish/app/images/themes/environnement.png"
    }, {
        "children": [{
            "name": "bathymetry",
            "isChecked": false
        }],
        "name": "Group with only one level"
    }, {
        "children": [{
            "isExpanded": false,
            "isInternalWMS": true,
            "name": "Theme 2 - Group a - Cultural",
            "isBaseLayer": false,
            "children": [{
                "name": "prov_bound"
            }, {
                "name": "roads",
                "children": [{
                    "name": "rail"
                }, {
                    "name": "roads"
                }]
            }]
        },{
            "isExpanded": false,
            "isInternalWMS": true,
            "name": "Theme 2 - Group b",
            "isBaseLayer": false,
            "children": [{
                "name": "popplace"
            }]
        }],
        "name": "Theme 2",
        "icon": "http://sitn.ne.ch/mapfish/app/images/themes/environnement.png"
    }],
    "external": [{
        "children": [{
            "isExpanded": false,
            "name": "Theme ext 1 - Group a",
            "isBaseLayer": false,
            "children": [{
                "name": "grid"
            }, {
                "name": "time grid"
            }, {
                "name": "parent",
                "children": [{
                    name: "child1"
                }, {
                    name: "child2"
                }]
            }
            ]
        }],
        "name": "Theme external 1",
        "icon": "http://sitn.ne.ch/mapfish/app/images/themes/environnement.png"
    }]
};

//App.default_themes = ["Theme external 1", "gp_transport_route", "Theme 1"];
App.default_themes = ["gp_transport_route", "Theme 1"];
