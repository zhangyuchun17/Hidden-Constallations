// const nav = document.getElementById('nav-arrows');
// const up = document.getElementById('arrow-up');
// const down = document.getElementById('arrow-down');
// const coverPage = document.getElementById('cover');

// up.addEventListener('click', () => {
//     coverPage.style.display = 'flex';
//     document.body.style.overflow = 'hidden';
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//     setTimeout(() => {
//         nav.style.display = 'none';
//     }, 600);
// });

// down.addEventListener('click', () => {
//     const steps = document.querySelectorAll('.step');
//     const secondStep = steps[1];
//     if (secondStep) {
//         secondStep.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
// });

// Show nav only after leaving cover
// document.getElementById('cover-arrow').addEventListener('click', () => {
//     coverPage.style.display = 'none';
//     document.body.style.overflow = 'auto';
//     document.getElementById('bgm').play();
//     const introStep = document.querySelector('.step.intro');
//     if (introStep) {
//         setTimeout(() => {
//             introStep.classList.add('show');
//         }, 300);
//     }
//     setTimeout(() => {
//         nav.style.display = 'flex';
//     }, 500);
// });
