document.addEventListener('DOMContentLoaded', function () {
    var el = document.querySelector('.counter .digits');
    if (!el) return;

    var isLanding = el.dataset.landing === 'true';
    var endpoint = isLanding
        ? 'https://abacus.jasoncameron.dev/hit/anthrocult.org/visits'
        : 'https://abacus.jasoncameron.dev/get/anthrocult.org/visits';

    fetch(endpoint)
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
