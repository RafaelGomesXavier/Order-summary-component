export default function initSectionButtonA() {
    const linkCancelOrder = document.querySelector('.section-button a');

    linkCancelOrder.addEventListener('mouseenter', () => {
        const estilo = linkCancelOrder.classList.add('muda');
    })
    linkCancelOrder.addEventListener('mouseout', () => {
        const estilo = linkCancelOrder.classList.remove('muda');
    })
}