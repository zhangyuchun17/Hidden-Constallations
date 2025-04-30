mapboxgl.accessToken = 'pk.eyJ1Ijoiemhhbmd5dWMyMSIsImEiOiJjbTZmYXQ4MHEwMzZ5Mm1vdDF3ZzJ1dG0xIn0.C5cWrhKHt5BdYRDPF0YIqQ';

const mapContainer = document.getElementById('map');
mapContainer.style.opacity = '0';
mapContainer.style.transition = 'opacity 1.5s ease-in-out';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/empty-v9',  // 👈 空白底图
    center: [-73.9851, 40.7589],
    zoom: 10,
    bearing: 0,
    interactive: false
});

// window.map = map;
// window.mapContainer = mapContainer;

map.on('load', () => {
    console.log('Map loaded');

    // 1. 隐藏底图所有背景和线框类图层
    const layers = map.getStyle().layers;
    layers.forEach(layer => {
        const id = layer.id;
        if (
            layer.type === 'background' ||
            layer.type === 'line' ||
            layer.type === 'fill' ||
            layer.id.includes('label') ||
            layer.id.includes('road') ||
            layer.id.includes('land') ||
            layer.id.includes('building')
        ) {
            try {
                map.setPaintProperty(id, `${layer.type}-opacity`, 0);
            } catch (e) {
                console.warn('Skip layer:', id);
            }
        }
    });

    // 2. 加手绘图 overlay
    map.addSource('handdrawn-overlay', {
        type: 'image',
        url: 'assets/images/handdrawn_overlay1.png',
        coordinates: [
            [-74.20, 40.95],
            [-73.68, 40.95],
            [-73.68, 40.52],
            [-74.20, 40.52]
        ]
    });
    map.addLayer({
        id: 'handdrawn-overlay',
        type: 'raster',
        source: 'handdrawn-overlay',
        paint: {
            'raster-opacity': 1
        }
    });

    // 3. Add sources and layers for cishet, LGBTQ+, and lesbian bars
    map.addSource('cishet-bars', {
        type: 'geojson',
        data: 'assets/data/cishet_bars.geojson'
    });

    map.addLayer({
        id: 'cishet-bars',
        type: 'circle',
        source: 'cishet-bars',
        paint: {
            'circle-radius': 4,
            'circle-color': '#cccccc',
            'circle-opacity': 0.7
        }
    });

    map.addSource('lgbtq-bars', {
        type: 'geojson',
        data: 'assets/data/LGBTQ_bars.geojson'
    });

    map.addLayer({
        id: 'lgbtq-bars',
        type: 'circle',
        source: 'lgbtq-bars',
        paint: {
            'circle-radius': 5,
            'circle-color': '#9B59B6', // 紫色
            'circle-opacity': 0.8
        }
    });

    map.addSource('lesbian-bars', {
        type: 'geojson',
        data: 'assets/data/lesbian_bars.geojson'
    });

    map.addLayer({
        id: 'lesbian-bars',
        type: 'circle',
        source: 'lesbian-bars',
        paint: {
            'circle-radius': 6,
            'circle-color': '#FF0EFF', // 亮紫色
            'circle-opacity': 0.9
        }
    });

    // 4. 加载数据点图层
    map.addSource('Gwendolyn Stegall data', {
        type: 'geojson',
        data: './assets/data/lesbian_bars_final.geojson'
    });

    map.addLayer({
        id: 'Gwendolyn Stegall data-layer',
        type: 'circle',
        source: 'Gwendolyn Stegall data',
        paint: {
            'circle-radius': 6,
            'circle-color': [
                'match',
                ['get', 'Category Code'],
                'Official', '#ff00ff',
                'Events', '#ff6600',
                'Pop-up', '#8a4fcf',
                'Mixed', '#cc7f7f',
                'Implied', '#9bb7cc',
                'Unknown', '#4b944b',
    /* default */ '#999999'
            ],
            'circle-opacity': 0.9
        }
    });

    // 5. add hand-drawn images done by interviewees
    config.people.forEach(person => {
        if (person.map) {
            map.addSource(`cogmap-${person.name}`, {
                type: 'image',
                url: person.map.path,
                coordinates: person.map.coordinates
            });

            map.addLayer({
                id: `cogmap-${person.name}`,
                type: 'raster',
                source: `cogmap-${person.name}`,
                paint: {
                    'raster-opacity': 0.8
                }
            });
        }
    });
    // the combined layer for all interviewees
    map.addSource('handdrawn-combined-maps', {
        type: 'image',
        url: 'assets/map/handdrawn_combined.png',
        coordinates: [
            [-74.20, 40.95],
            [-73.68, 40.95],
            [-73.68, 40.52],
            [-74.20, 40.52]
        ]
    });
    map.addLayer({
        id: 'handdrawn-combined-layer',
        type: 'raster',
        source: 'handdrawn-combined-maps',
        paint: {
            'raster-opacity': 0.8
        }
    });
    // icon-layer
    map.addSource('icon-layer', {
        type: 'image',
        url: 'assets/map/icon_on_map.png',
        coordinates: [
            [-74.20, 40.95],
            [-73.68, 40.95],
            [-73.68, 40.52],
            [-74.20, 40.52]
        ]
    });
    map.addLayer({
        id: 'icon-layer',
        type: 'raster',
        source: 'icon-layer',
        paint: {
            'raster-opacity': 0.8
        }
    });

    // ✅ 控制手绘图透明度
    const steps = ['map-1', 'map-2', 'map-3'];
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = entry.target.id;

            if (entry.isIntersecting) {
                if (id === 'map-1') {
                    map.setPaintProperty('handdrawn-overlay', 'raster-opacity', 0.9);
                    mapContainer.style.opacity = '1';
                }
            }
        });
    }, { threshold: 0.5 });

    steps.forEach(stepId => {
        const el = document.getElementById(stepId);
        if (el) observer.observe(el);
    });
});