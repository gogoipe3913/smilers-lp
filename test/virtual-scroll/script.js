const throttle = (f, ms) => {
    let _t = Date.now();
    let _handle;
    return (...args) => {
        const t = Date.now();
        clearTimeout(_handle);
        if (t - _t < ms) {
            _handle = setTimeout(() => f(...args), ms - (t - _t));
        } else {
            f(...args);
        }
    }
};

window.addEventListener('DOMContentLoaded', () => {
    const debug = document.getElementById('debug');
    const sections = Array.from(document.querySelectorAll('section'));
    sections.forEach((section, i) => {
        section.classList.add('section');
        if (i > 0) {
            section.classList.add('down');
        }
    });
    const threshold = 400;
    let _virtualY = 0;
    let _index;
    document.addEventListener('wheel', throttle(e => {
        _virtualY += e.deltaY;
        _virtualY = Math.max(Math.min(_virtualY, (sections.length - 1) * threshold), 0);
        const i = Math.floor(_virtualY / threshold);
        if (i !== _index) {
            sections.forEach((section, j) => {
                section.classList.remove('down');
                section.classList.remove('up');
                if (j < i) {
                    section.classList.add('up');
                } else if (j > i) {
                    section.classList.add('down');
                }
            })
        }
        //console.log(e.deltaY);
        debug.innerText = `Y:${_virtualY}`;
    }, 50));
});