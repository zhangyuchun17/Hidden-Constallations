// ========== Showing Map Layers one by one ========== //
function removeAndShowCogmapsOneByOne() {
    const allLayers = map.getStyle().layers.map(layer => layer.id);
    const layersToShow = allLayers.filter(layerId => layerId.startsWith('cogmap-'));
    layersToShow.forEach((layerId) => {
        map.setLayoutProperty(layerId, 'visibility', 'none');
    });
    layersToShow.forEach((layerId, index) => {
        window.cogmapLayerShowHandles.push(setTimeout(() => {
            map.setLayoutProperty(layerId, 'visibility', 'visible');
        }, (index + 1) * 1000)); // 1 second delay for each layer
    });
    // clear the window.cogmapLayerShowHandles after all layers are shown
    setTimeout(() => {
        window.cogmapLayerShowHandles = [];
    }, (layersToShow.length + 1) * 1000); // 1 second delay after all layers
}

// ========== Handdrawn Layer Breathe Effect ========== //
function breatheHanddrawnLayer(layerId = 'handdrawn-combined-layer', max_opacity = 0.3, min_opacity = 0.0, step = 0.01) {
    const handdrawnLayer = map.getLayer(layerId);
    if (handdrawnLayer) {
        const currentOpacity = map.getPaintProperty(layerId, 'raster-opacity');
        // increase or decrease by step based on window.opacityDir
        let newOpacity = currentOpacity + step * window.opacityDir;
        if (newOpacity > max_opacity) {
            newOpacity = max_opacity;
            window.opacityDir = -1;
        } else if (newOpacity < min_opacity) {
            newOpacity = min_opacity;
            window.opacityDir = 1;
        }
        map.setPaintProperty(layerId, 'raster-opacity', newOpacity);
    }
}


// ========== Toggling Visibility for Specific Steps ========== //

function showBackground(index) {
    document.querySelectorAll('.bg-img').forEach((el, i) => {
        el.classList.toggle('active', i === index);
    });
}

function toggleLegendVisibility(visible) {
    const legend = document.querySelector('#legend');
    if (visible) {
        legend.style.setProperty('display', 'block');
    }
    else {
        legend.style.setProperty('display', 'none');
    }
}

function toggleComparisonVisibility(visibility, mapId) {
    // find config based on chapter name
    const mapConfig = config.chapters.find(chapter => chapter.id === mapId);
    const compare_container = document.querySelector('.compare-container');
    if (visibility) {
        const img1 = document.querySelector('.compare__image-one');
        img1.src = mapConfig.media.after;
        const img2 = document.querySelector('.compare__image-two');
        img2.src = mapConfig.media.before;
        
        // copy the below code on mapContainer
        compare_container.style.setProperty('display', 'block');

        compare_container.style.opacity = '0';
        setTimeout(() => {
            compare_container.style.transition = 'opacity 1s ease';
            compare_container.style.opacity = '1';
        }, 10);
        const note = document.querySelector('.compare__note p');
        note.textContent = mapConfig.compare_note;
    }
    else {
        compare_container.style.opacity = '0';
        setTimeout(() => {
            compare_container.style.setProperty('display', 'none');
        }, 1000);
    }
}

function setLayerOpacity(layerId, opacity, duration = 1000) {
    if (!map.getLayer(layerId)) return;
    map.setPaintProperty(layerId, 'circle-opacity-transition', { duration, delay: 0 });
    map.setPaintProperty(layerId, 'circle-opacity', opacity);
}

function lockScroll(e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
}

// make a scroll pop up that shows the bigger version of the map and a brief introduction to it.
function showMapPopup(person) {
    const popup = document.querySelector('.cogmap-popup');
    const title = document.getElementById('cogmap-title');
    const image = document.getElementById('cogmap-image');
    const description = document.getElementById('cogmap-description');
    const closeBtn = document.querySelector('.close-btn');

    title.innerHTML = `${person.name}'s Cognition Map`;
    image.src = person.map.path;
    description.innerHTML = person.map.description;
    
    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
        document.querySelector('body').style.overflow = 'auto';
    });
    popup.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    popup.style.display = 'flex';
    document.querySelector('body').style.overflow = 'hidden';
}

function showInterviewPopup(person) {
    const popup = document.querySelector('.interviewee-popup');
    const nameElement = popup.querySelector('.name');
    const briefElement = popup.querySelector('.brief');
    const fullInterviewElement = popup.querySelector('.full-interview');
    const quotesElement = popup.querySelector('.quotes');
    const closeBtn = popup.querySelector('.close-btn');
    const avatar = popup.querySelector('.avatar');
    const map = popup.querySelector('.map');

    nameElement.textContent = person.name;
    briefElement.innerHTML = person.brief.join('<br>');
    fullInterviewElement.textContent = person.full;
    quotesElement.innerHTML = person.quotes;
    avatar.src = person.avatar;
    map.src = person.map.path;

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
        document.querySelector('body').style.overflow = 'auto';
    });

    popup.querySelector('.popup-content').addEventListener('click', (e) => {
        e.stopPropagation();
    });

    popup.style.display = 'flex';
    document.querySelector('body').style.overflow = 'hidden';
}

function toggleMapVisibility(visible) {
    if (visible) {
        mapContainer.style.setProperty('display', 'block');
        mapContainer.style.setProperty('position', 'fixed');
        mapContainer.style.setProperty('top', '0');
        mapContainer.style.setProperty('right', '0');
        mapContainer.style.setProperty('width', '50vw');
        mapContainer.style.setProperty('height', '100vh');

        mapContainer.style.opacity = '0';
        setTimeout(() => {
            mapContainer.style.transition = 'opacity 1s ease';
            mapContainer.style.opacity = '1';
        }, 50);
    } else {
        mapContainer.style.opacity = '0';
        setTimeout(() => {
            mapContainer.style.setProperty('display', 'none');
        }, 1000);
    }
}

function updateCogmapGrid(column, keep_list=null) {
    // set column of card container
    const cardContainer = document.querySelector('.cogmap-grid');
    cardContainer.style.setProperty('grid-template-columns', 'auto '.repeat(column));

    // filter the cells in cogmap grid, only keep those with id in keep_list
    const allCards = document.querySelectorAll('.cogmap-card');

    if (keep_list === null || keep_list === undefined) {
        // show all cards
        allCards.forEach(card => {
            card.style.display = 'block';
        })
    }
    else {
        allCards.forEach(card => {
            var id = card.id;
            // remove the prefix "cogmap-card-"
            id = id.replace('cogmap-card-', '');
            if (keep_list.includes(id)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }  
}

current_image_container_index = -1;
current_image_container = null;
function toggleImageContainerVisibility(visible, chapter) {
    // const imageContainer = document.querySelector('.image-container');
    // if (visible) {
    //     const img = document.querySelector('.image-container img');
    //     img.src = chapter.media;

    //     imageContainer.style.setProperty('display', 'flex');
    //     imageContainer.style.setProperty('opacity', '0');        

    //     setTimeout(() => {
    //         imageContainer.style.transition = 'opacity 1s ease';
    //         imageContainer.style.opacity = '1';
    //     }, 20);
    // } else {
    //     imageContainer.style.setProperty('opacity', '0');
    //     setTimeout(() => {
    //         imageContainer.style.setProperty('display', 'none');
    //     }, 1000);
    // }
    // modify the above code to support transition between 2 image containers
    if (visible) {
        // if there are no image containers, use the first one with id image-container-1/2
        if (current_image_container_index === -1) {
            current_image_container_index = 0;
            current_image_container = document.getElementById('image-container-1');
        }
        else {
            // fade out the current image container
            current_image_container.style.opacity = '0';
            const container_to_hide = current_image_container;
            setTimeout(() => {
                container_to_hide.style.display = 'none';
            }, 1000);
            current_image_container_index = (current_image_container_index + 1) % 2;
            current_image_container = document.getElementById(`image-container-${current_image_container_index + 1}`);
        }
        const img = current_image_container.querySelector('img');
        img.src = chapter.media;
        current_image_container.style.display = 'flex';
        current_image_container.style.opacity = '0';
        const container_to_show = current_image_container;
        setTimeout(() => {
            container_to_show.style.opacity = '1';
        }, 50);
    }
    else {
        if (current_image_container) {
            current_image_container.style.opacity = '0';
            const container_to_hide = current_image_container;
            setTimeout(() => {
                container_to_hide.style.display = 'none';
            }, 1000);
            current_image_container = null;
            current_image_container_index = -1; // reset index
        }
    }
}

function showMapLayersBasedOnConfig(map, mapId) {
    // find config with matching id in config
    const mapConfig = config.chapters.find(chapter => chapter.id === mapId);
    const allLayers = map.getStyle().layers.map(layer => layer.id);
    if (mapConfig) {
        const layersToShow = mapConfig.layersToShow || [];
        const layersToHide = allLayers.filter(layerId => !layersToShow.includes(layerId));
        layersToShow.forEach(layerId => {
            map.setLayoutProperty(layerId, 'visibility', 'visible');
        });
        layersToHide.forEach(layerId => {
            map.setLayoutProperty(layerId, 'visibility', 'none');
        });
    }
}

function toggleDecadeSlider(map, visibility, layerId = 'Gwendolyn Stegall data-layer') {
    const container = document.getElementById('decade-slider-container');
    
    if (container) {
        if (visibility) {
            container.style.display = 'block';
            const value = parseInt(container.querySelector('input').value);
            const decadeString = `${value}s`;
            map.setFilter(layerId, ['in', decadeString, ['get', 'Decades']]);
        }
        else {
            container.style.display = 'none';
        }
    }
    else {
        console.warn('Decade slider container not found');
    }
}


function toggleCogmapGridVisibility(visibility) {
    const grid = document.querySelector('.cogmap-grid-container');
    if (visibility && grid.style.display === "none") {
        grid.style.display = 'block';
        grid.style.opacity = '0';
        setTimeout(() => {
            grid.style.transition = 'opacity 1s ease';
            grid.style.opacity = '1';
        }, 10);
    }
    else if (!visibility && grid.style.display === 'block') {
        grid.style.opacity = '0';
        setTimeout(() => {
            grid.style.display = 'none';
        }, 1000);
    }
}