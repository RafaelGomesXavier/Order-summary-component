export default
    function changePlan() {
    const change = document.querySelector('#div-music-plan a');
    const musicPlan = document.querySelector('#div-music-plan span');


    change.addEventListener('click', function (event) {
        const randomValor1 = Math.floor(Math.random() * 99);
        const randomValor2 = Math.floor(Math.random() * 99);
        const planos = `$${randomValor1}.${randomValor2}/year`

        musicPlan.innerHTML = planos;




    })

}
