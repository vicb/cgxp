var mapPanel, map, tree;
Ext.onReady(function() {
    Ext.QuickTips.init();

    map = new OpenLayers.Map({
        projection: 'EPSG:21781',
        units: 'm',
        numZoomLevels: 20,
        maxExtent: new OpenLayers.Bounds(-81, -62, 96, 45).transform(new OpenLayers.Projection('EPSG:4326'), new OpenLayers.Projection('EPSG:21781'))
    });
    map.addLayers([
        new OpenLayers.Layer('fake', {isBaseLayer: true})
    ]);
    mapPanel = new GeoExt.MapPanel({
        renderTo: document.body,
        width: 512,
        height: 256,
        map: map
    });

    //map.setCenter(new OpenLayers.LonLat(7, 46).transform(new OpenLayers.Projection('EPSG:4326'), new OpenLayers.Projection('EPSG:21781')), 6);
    //map.zoomToMaxExtent();
    map.zoomToExtent(new OpenLayers.Bounds(550144.43152296,199215.13643449,564709.43152296,205095.13643449));


    tree = new cgxp.tree.LayerTree({
        id: "layertree",
        width: 250,
        height: 300,
        autoScroll: true,
        //wmsURL: 'http://www2.dmsolutions.ca/cgi-bin/mswms_gmap',
        wmsURL: 'http://mapfish-geoportal.demo-camptocamp.com/vberchet/wsgi/mapserv_proxy',
        mapPanel: mapPanel,
        themes: App.themes,
        defaultThemes: App.default_themes
    });
    tree.render('tree');

    tree.loadDefaultThemes();
});
