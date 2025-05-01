const stepEnterBehaviors = {
    'map-6': () => {
        toggleDecadeSlider(map, true, 'Gwendolyn Stegall data-layer');
        toggleLegendVisibility(true);
    },
    'map-8': () => {
        toggleComparisonVisibility(true, 'map-8');
    },
    'map-15': () => {
        map.setFilter('Gwendolyn Stegall data-layer', ['in', '2020s', ['get', 'Decades']]);
        // hide all icon-map layers
        const allLayers = map.getStyle().layers.map(layer => layer.id);
        allLayers.forEach(layerId => {
            if (layerId.startsWith('icon-map')) {
                map.setLayoutProperty(layerId, 'visibility', 'none');
            }
        });
        // show all markers
        window.markers.forEach(marker => {
            marker.style.visibility = 'visible';
        });
    },
    'map-18': () => {
        // breathe effect
        window.opacityDir = -1;
        map.setPaintProperty('handdrawn-combined-layer', 'raster-opacity', 0.5);
        window.breatheHandle = setInterval(breatheHanddrawnLayer, 50);
    }
};
const stepExitBehaviors = {
    'map-6': () => {
        toggleDecadeSlider(map, false, 'Gwendolyn Stegall data-layer');
        toggleLegendVisibility(false);
    },
    'map-8': () => {
        toggleComparisonVisibility(false, 'map-8');
    },
    'map-15': () => {
        window.markers.forEach(marker => {
            marker.style.visibility = 'hidden';
        });
    },
    'map-18': () => {
        map.setPaintProperty('handdrawn-combined-layer', 'raster-opacity', 1.0);
        if (window.breatheHandle) {
            clearInterval(window.breatheHandle);
            window.breatheHandle = null;
        }
    },
};

// === Scrollama hook ===
const scroller = scrollama();
scroller
    .setup({ step: '.step', offset: 0.25 })
    .onStepEnter(response => {
        response.element.classList.add('active');

        const index = +response.element.dataset.index;
        const chapter = config.chapters[index];
        // console.log('Enter step:', index, chapter.id);        

        // prioritize map operationss
        if (chapter.type == "map" && map) {
            showMapLayersBasedOnConfig(map, chapter.id);
            toggleMapVisibility(true);
            setTimeout(() => {
                map.resize();
                map.flyTo({
                    center: chapter.mapLocation.center,
                    zoom: chapter.mapLocation.zoom,
                    essential: true,
                    speed: 0.8
                });
            }, 100);
            showBackground(null);
        } else {
            toggleMapVisibility(false);
            if (chapter.backgroundIndex !== undefined && chapter.backgroundIndex !== null) {
                showBackground(chapter.backgroundIndex);
            } else {
                showBackground(null);
            }
        }

        if (chapter.type === 'grid') updateCogmapGrid(chapter.column, chapter.keep_list);
        toggleCogmapGridVisibility(chapter.type == "grid");
        toggleImageContainerVisibility(chapter.type == "image", chapter);

        // 在地图飞行等操作之后再执行交互逻辑，避免干扰
        setTimeout(() => {
            if (stepEnterBehaviors[chapter.id]) {
                stepEnterBehaviors[chapter.id]();
            }
        }, 200); // 可视情况调整时间
    })
    .onStepExit(response => {
        response.element.classList.remove('active');

        const index = +response.element.dataset.index;
        const chapter = config.chapters[index];
        // console.log('Exit step:', index, chapter.id);

        if (stepExitBehaviors[chapter.id]) {
            stepExitBehaviors[chapter.id]();
        }
    });
