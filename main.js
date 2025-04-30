const stepEnterBehaviors = {
    'map-6': () => {
        toggleDecadeSlider(map, true, 'Gwendolyn Stegall data-layer');
    },
    'map-8': () => {
        toggleComparisonVisibility(true, 'map-8');
    },
    'map-15': () => {
        map.setFilter('Gwendolyn Stegall data-layer', ['in', '2020s', ['get', 'Decades']]);
        const allLayers = map.getStyle().layers.map(layer => layer.id);
        const layersToShow = allLayers.filter(layerId => layerId.startsWith('cogmap-'));
        window.cogmapLayerShowHandles = [];
        removeAndShowCogmapsOneByOne();
        window.cogmapShowHandle = setInterval(removeAndShowCogmapsOneByOne, 1000 * (layersToShow.length + 3)); // 1 second delay for all layers
    },
};
const stepExitBehaviors = {
    'map-6': () => {
        toggleDecadeSlider(map, false, 'Gwendolyn Stegall data-layer');
    },
    'map-8': () => {
        toggleComparisonVisibility(false, 'map-8');
    },
    'map-15': () => {
        if (window.cogmapShowHandle) {
            console.log("clearing cogmapShowHandle");
            clearInterval(window.cogmapShowHandle);
            window.cogmapShowHandle = null;
        }
        if (window.cogmapLayerShowHandles) {
            window.cogmapLayerShowHandles.forEach(handle => {
                clearTimeout(handle);
            });
            window.cogmapLayerShowHandles = [];
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
