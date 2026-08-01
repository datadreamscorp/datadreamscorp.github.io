document.addEventListener('DOMContentLoaded', function () {
    var el = document.querySelector('.counter .digits');
    if (!el) return;

    fetch('https://abacus.jasoncameron.dev/hit/anthrocult.org/visits')
        .then(function (res) { return res.json(); })
        .then(function (data) {
            if (typeof data.value === 'number') {
                el.textContent = String(data.value).padStart(6, '0');
            }
        })
        .catch(function () {
            /* leave the static placeholder in place if the counter service is unreachable */
        });
});
