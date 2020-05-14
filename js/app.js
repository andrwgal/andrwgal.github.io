

const sections = document.querySelectorAll('section');
const bubble = document.querySelector('.bubble');
const gradients = [
    "linear-gradient(to bottom, #3b8d99, #6b6b83, #aa4b6b)",
    "linear-gradient(to bottom, #f5af19, #f12711)",
    "linear-gradient(to top, #F3F9A7, #CAC531)"
];


const options = {
    threshold: 0.7
};


let observer = new IntersectionObserver(navCheck, options);



function navCheck(entries) {
    entries.forEach(entry => {
        const className = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page=${className}]`) /* Questo tipo di apici è differente ed essenziale per il funzionamento */ 
        const gradientIndex = entry.target.getAttribute('data-index');
        const coords = activeAnchor.getBoundingClientRect();
        const directions = {
            height: coords.height,
            width: coords.width,
            top: coords.top,
            left: coords.left
        };
        if (entry.isIntersecting){
            bubble.style.setProperty('left',`${directions.left}px`); /* Questo tipo di apici è differente ed essenziale per il funzionamento */
            bubble.style.setProperty('top',`${directions.top}px`); /* Questo tipo di apici è differente ed essenziale per il funzionamento */
            bubble.style.setProperty('width',`${directions.width}px`); /* Questo tipo di apici è differente ed essenziale per il funzionamento */
            bubble.style.setProperty('height',`${directions.height}px`); /* Questo tipo di apici è differente ed essenziale per il funzionamento */
            bubble.style.background = gradients[gradientIndex];
        }
        
    });
}


sections.forEach(section => {
    observer.observe(section);
});


