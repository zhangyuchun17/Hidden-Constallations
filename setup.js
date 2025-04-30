function setupCoverArrow() {
    const cover = document.getElementById('cover');
    const arrow = document.getElementById('cover-arrow');
    const bgm = document.getElementById('bgm');
    arrow.addEventListener('click', () => {
        cover.style.display = 'none';
        document.body.style.overflow = 'auto';
        bgm.play().catch(e => console.warn('Audio play was blocked:', e));

        const introStep = document.querySelector('.step.intro');
        if (introStep) {
            setTimeout(() => {
                introStep.classList.add('show');
            }, 300);
        }
    });
}

function setupDecadeSlider(map, layerId = 'Gwendolyn Stegall data-layer') {
    const slider = document.getElementById('decade-slider');
    const label = document.getElementById('decade-label');
    slider.addEventListener('input', () => {
        const decade = parseInt(slider.value);
        label.innerHTML = `Decade: ${decade}`;
        const decadeString = `${decade}s`;
        map.setFilter(layerId, ['in', decadeString, ['get', 'Decades']]);
    });
}

function setupCogmapGrid() {
    const container = document.querySelector('.cogmap-grid');

    config.people.forEach(person => {
        const card = document.createElement('div');
        card.className = 'cogmap-card';
        card.id = `cogmap-card-${person.name}`;
        card.innerHTML = `
    <img src="${person.map.path}"/>
    <div class='hint'>${person.map.hint}</h4>
`;
        card.addEventListener('click', () => showMapPopup(person));

        container.appendChild(card);
    });   
} 

function createLeftText(chapter) {
    const wrapper = document.createElement('div');
    wrapper.className = 'step-inner';

    const textCol = document.createElement('div');
    textCol.className = 'step-text';

    if (chapter.title) {
        const h3 = document.createElement('h3');
        h3.innerHTML = chapter.title;
        textCol.appendChild(h3);
    }

    if (chapter.description) {
        const p = document.createElement('p');
        p.innerHTML = chapter.description;
        textCol.appendChild(p);
    }

    wrapper.appendChild(textCol);
    return wrapper;
}

function createInterviewChapter(step, chapter) {
    if (chapter.title) {
        const h3 = document.createElement('h3');
        h3.innerHTML = chapter.title;
        step.appendChild(h3);
    }

    const container = document.createElement('div');
    container.className = 'interview-grid';
    step.appendChild(container);

    config.people.forEach(person => {
        const card = document.createElement('div');
        card.className = 'interview-card';
        card.innerHTML = `
    <img src="${person.avatar}" alt="${person.name}" />
    <h4>${person.name}</h4>
`;
        card.addEventListener('click', () => showInterviewPopup(person));
        container.appendChild(card);
    });
}

function createStoryChapter(chapter) {
    const content = document.createElement('div');

    if (chapter.title) {
        const h3 = document.createElement('h3');
        h3.innerHTML = chapter.title;
        content.appendChild(h3);
    }

    if (chapter.description) {
        const p = document.createElement('p');
        p.innerHTML = chapter.description;
        content.appendChild(p);
    }

    return content;
}

function createImageComparisonSlider(step, chapter) {
    // add text first
    const text_wrapper = document.createElement('div');
    text_wrapper.className = 'step-text';

    if (chapter.title) {
        const h3 = document.createElement('h3');
        h3.innerHTML = chapter.title;
        text_wrapper.appendChild(h3);
    }

    if (chapter.description) {
        const p = document.createElement('p');
        p.innerHTML = chapter.description;
        text_wrapper.appendChild(p);
    }

    step.appendChild(text_wrapper);

    // Create the container for the slider
    const container = document.createElement('div');
    container.className = 'big-compare-container';

    // Create the comparison structure
    container.innerHTML = `
    <div class="big-compare-container__inner">
        <div class="big-compare" style="overflow: visible;">
            <img class="big-compare__image-one" src="${chapter.media.after}">
            <div class="big-compare__mask">
                <img class="big-compare__image-two" src="${chapter.media.before}">
            </div>
        <div class="big-compare__separator">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="big-compare__icon" viewBox="0 0 16 16">
                <path d="M 6 2 L 1 8 L 6 14 M 10 2 L 15 8 L 10 14" stroke="currentColor"></path>
            </svg>
        </div>
        <input class="big-compare__input" type="range" min="0" step="0.5" max="100" value="50">
    </div>
    `;

    // Add event listener for the slider input
    const input = container.querySelector('.big-compare__input');
    const compare = container.querySelector('.big-compare');
    input.addEventListener('input', () => {
        compare.style.setProperty('--mask-width', `${input.value}%`);
    });

    step.appendChild(container);
}

function setupImageComparisonSlide() {
    const compare = document.querySelector('.compare');
    const input = document.querySelector('.compare input');

    input.addEventListener("input", () => {
        compare.style.setProperty("--mask-width", `${input.value}%`);
    });
}

function setupChapters() {
    const features = document.getElementById('features');
    config.chapters.forEach((chapter, index) => {
        const step = document.createElement('div');
        step.className = 'step';
        step.setAttribute('data-index', index);
        step.id = chapter.id;

        if (index === 0) step.classList.add('intro');
        if (chapter.alignment) step.classList.add(chapter.alignment);

        step.classList.add(chapter.type);
        if (chapter.alignment === 'split-left') {
            wrapper = createLeftText(chapter);
            step.appendChild(wrapper);
        }
        else if (chapter.type == "interview") {
            createInterviewChapter(step, chapter);
        }
        else if (chapter.type == "full-compare") {
            createImageComparisonSlider(step, chapter);
        }
        else {
            content = createStoryChapter(chapter);
            step.appendChild(content);
        }
        features.appendChild(step);
    });
}

setupCoverArrow();
setupDecadeSlider(map, 'Gwendolyn Stegall data-layer');
setupChapters();
setupImageComparisonSlide();
setupCogmapGrid();