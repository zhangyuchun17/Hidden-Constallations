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

const iconNum = 5;
const colors = ["cccccc", '9B59B6', '9B59B655', 'FF0EFF', 'ff00ff', 'ff6600', '8a4fcf', 'cc7f7f', '9bb7cc', '4b944b'];

function assignRandomIconsWithFixedColor(geojson, color) {
  geojson.features.forEach(feature => {
    const randomIndex = Math.floor(Math.random() * iconNum);
    const iconName = `colored_dot_${randomIndex + 1}_${color}`;
    feature.properties.icon = iconName;
  });
  return geojson;
}

map.on('load', () => {
    console.log('Map loaded');

    // 0. upload icon images
    // format as colored_dot_{index}_{color} for all indices paired with all colors
    for (let i = 0; i < iconNum; i++) {
        for (let j = 0; j < colors.length; j++) {
            const iconName = `colored_dot_${i+1}_${colors[j]}`;
            map.loadImage(`assets/dots/${iconName}.png`, (error, image) => {
                if (error) throw error;
                map.addImage(iconName, image);
            });
        }
    }

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
    fetch('assets/data/cishet_bars.geojson')
    .then(response => response.json())
    .then(originalGeojson => {
        const geojsonWithIcons = assignRandomIconsWithFixedColor(originalGeojson, 'cccccc');
        map.addSource('cishet-bars', {
            type: 'geojson',
            data: geojsonWithIcons
        });
        map.addLayer({
            id: 'cishet-bars',
            type: 'symbol', // 'circle'
            source: 'cishet-bars',
            layout: {
                'icon-image': ['get', 'icon'],
                'icon-size': 0.03,
                'icon-allow-overlap': true,
                'icon-ignore-placement': true,
            },
            // paint: {
            //     'circle-radius': 4,
            //     'circle-color': '#cccccc',
            //     'circle-opacity': 0.7
            // }
        });

    fetch('assets/data/LGBTQ_bars.geojson')
    .then(response => response.json())
    .then(originalGeojson => {
        const geojsonWithIcons = assignRandomIconsWithFixedColor(originalGeojson, '9B59B6');
        map.addSource('lgbtq-bars', {
            type: 'geojson',
            data: geojsonWithIcons
        });
        map.addLayer({
            id: 'lgbtq-bars',
            type: 'symbol', // 'circle'
            source: 'lgbtq-bars',
            layout: {
                'icon-image': ['get', 'icon'],
                'icon-size': 0.03,
                'icon-allow-overlap': true,
                'icon-ignore-placement': true,
                
            },
            // paint: {
            //     'circle-radius': 5,
            //     'circle-color': '#9B59B6', // 紫色
            //     'circle-opacity': 0.8
            // }
        });

    fetch('assets/data/LGBTQ_bars.geojson')
    .then(response => response.json())
    .then(originalGeojson => {
        const geojsonWithIcons = assignRandomIconsWithFixedColor(originalGeojson, '9B59B655');
        map.addSource('lgbtq-bars-dim', {
            type: 'geojson',
            data: geojsonWithIcons
        });
        map.addLayer({
            id: 'lgbtq-bars-dim',
            type: 'symbol', // 'circle'
            source: 'lgbtq-bars-dim',
            layout: {
                'icon-image': ['get', 'icon'],
                'icon-size': 0.03,
                'icon-allow-overlap': true,
                'icon-ignore-placement': true,
                
            },
            // paint: {
            //     'circle-radius': 5,
            //     'circle-color': '#9B59B6', // 紫色
            //     'circle-opacity': 0.8
            // }
        });
    
    fetch('assets/data/lesbian_bars.geojson')
    .then(response => response.json())
    .then(originalGeojson => {
        const geojsonWithIcons = assignRandomIconsWithFixedColor(originalGeojson, 'FF0EFF');
        map.addSource('lesbian-bars', {
            type: 'geojson',
            data: geojsonWithIcons
        });

        map.addLayer({
            id: 'lesbian-bars',
            type: 'symbol', // 'circle'
            source: 'lesbian-bars',
            layout: {
                'icon-image': ['get', 'icon'],
                'icon-size': 0.03,
                'icon-allow-overlap': true,
                'icon-ignore-placement': true,
            },
            // paint: {
            //     'circle-radius': 6,
            //     'circle-color': '#FF0EFF', // 亮紫色
            //     'circle-opacity': 0.9
            // }
        });

    // 4. 加载数据点图层
    const CATEGORY_COLORS = {
        'Official': 'ff00ff',
        'Events': 'ff6600',
        'Pop-up': '8a4fcf',
        'Mixed': 'cc7f7f',
        'Implied': '9bb7cc',
        'Unknown': '4b944b'
    };

    // Default color if category is missing or unknown
    const DEFAULT_COLOR = '999999';

    // Step 1: Load the GeoJSON
    fetch('./assets/data/lesbian_bars_final.geojson')
    .then(res => res.json())
    .then(geojson => {
        // Step 2: Assign icon name to each feature
        geojson.features.forEach(feature => {
            const category = feature.properties['Category Code'] || 'Unknown';

            // Get color from fixed map or use default
            const color = CATEGORY_COLORS[category] || DEFAULT_COLOR;

            // Assign random shape index
            const shapeIndex = Math.floor(Math.random() * iconNum);

            // Build icon name
            const iconName = `colored_dot_${shapeIndex + 1}_${color}`;
            feature.properties.icon = iconName;
        });

        // Step 3: Add source
        map.addSource('Gwendolyn Stegall data', {
            type: 'geojson',
            data: geojson
        });

        map.addLayer({
            id: 'Gwendolyn Stegall data-layer',
            type: 'symbol',
            source: 'Gwendolyn Stegall data',
            layout: {
                'icon-image': ['get', 'icon'],
                'icon-size': 0.03,
                'icon-allow-overlap': true,
                'icon-ignore-placement': true,
            }
        });
    });
    });
    });
    });
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
        // west village hand-drawn map
        map.addSource('handdrawn_overlay_west_village', {
            type: 'image',
            url: 'assets/map/handdrawn_overlay_west_village.png',
            coordinates: [
                [-74.20, 40.95],
                [-73.68, 40.95],
                [-73.68, 40.52],
                [-74.20, 40.52]
            ]
        });
        map.addLayer({
            id: 'handdrawn_overlay_west_village-layer',
            type: 'raster',
            source: 'handdrawn_overlay_west_village',
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

    window.markers = [];
    config.people.forEach((person) => {
        if (person.icon_map) {
            map.addSource(`icon-map-${person.name}`, {
                type: 'image',
                url: person.icon_map.path,
                coordinates: person.icon_map.coordinates
            });
            map.addLayer({
                id: `icon-map-${person.name}`,
                type: 'raster',
                source: `icon-map-${person.name}`,
                paint: {
                    'raster-opacity': 0.8
                }
            });
            // add clickable marker
            var el = document.createElement('div');
            el.className = 'marker';
            el.style.backgroundImage = `url(${person.avatar})`;
            el.style.width = `50px`;
            el.style.height = `50px`;
            el.style.backgroundSize = 'cover';
            // cursor pointer
            el.style.cursor = 'pointer';
            el.style.pointerEvents = 'auto';
            el.style.zIndex = '99999999999';

            el.addEventListener('click', () => {
                console.log('Clicked on marker:', person.name);
                var layerId = `icon-map-${person.name}`;
                var isVisible = map.getLayoutProperty(layerId, 'visibility') === 'visible';
                if (isVisible) {
                    map.setLayoutProperty(layerId, 'visibility', 'none');
                } else {
                    map.setLayoutProperty(layerId, 'visibility', 'visible');
                }
            });
            new mapboxgl.Marker(el)
            .setLngLat(person.icon_map.icon_coordinates)
            .addTo(map);

            window.markers.push(el);
            el.style.visibility = 'hidden';
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