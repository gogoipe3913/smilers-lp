window.addEventListener('DOMContentLoaded', () => {
    const menus = document.querySelectorAll('.menu');
    console.log(menus)
    let down = false;
    document.getElementById('button-1').addEventListener('click', function () {
        down = !down;
        if (down) {
            menus.forEach(menu => {
                menu.classList.add('down');
                console.log(menu);
            })
        } else {
            menus.forEach(menu => {
                menu.classList.remove('down');
            })
        }
    });
});