const ANTHROCULT_PUBS = [
    { year: "prep", cite: "Pérez Velilla, A., Padilla, K. J., et al. A full-population assessment of Palenquero proficiency in San Basilio de Palenque, Colombia.", link: null, linktext: null },
    { year: "prep", cite: "Pérez Velilla, A., Nöldeke, G., Peña, J. Reciprocity and the evolution of risk-reduction sharing.", link: null, linktext: null },
    { year: "'26", cite: "Pérez Velilla, A., Ready, E. The emergence of sharing networks through indirect signaling.", link: "https://osf.io/preprints/socarxiv/6zfju_v1", linktext: "preprint" },
    { year: "'26", cite: "Pérez Velilla, A., Smaldino, P. Risk, learning and culture. In Oxford Handbook of Evolutionary Psychology. (in press)", link: "https://osf.io/preprints/socarxiv/fw26j", linktext: "preprint" },
    { year: "'26", cite: "Pérez Velilla, A., Smaldino, P. A demographic theory of similarity-biased social learning. PNAS, 123, e2606741123.", link: "https://doi.org/10.1073/pnas.2606741123", linktext: "doi" },
    { year: "'26", cite: "Pérez Velilla, A., Smaldino, P. The adaptive role of peer culture is shaped by risk landscapes. Behavioral and Brain Sciences, 49.", link: "https://doi.org/10.1017/S0140525X25102008", linktext: "doi" },
    { year: "'26", cite: "Pérez Velilla, A., Beheim, B., Smaldino, P. The development of risk behaviors and their cultural transmission. Psychological Review.", link: "/docs/PerezVelillaEtAl2026-_Risk_PsychRev.pdf", linktext: "pdf" },
    { year: "'25", cite: "Smaldino, P. E., Pérez Velilla, A. The evolution of similarity-biased social learning. Evolutionary Human Sciences, 7, e4.", link: "https://doi.org/10.1017/ehs.2024.46", linktext: "doi" },
    { year: "'24", cite: "Smaldino, P. E., Moser, C., Pérez Velilla, A., Werling, M. Maintaining transient diversity is a general principle for improving collective problem solving. Perspectives on Psychological Science, 19(2), 454-464.", link: "https://doi.org/10.1177/17456916231180100", linktext: "doi" },
    { year: "'22", cite: "Pérez Velilla, A., Moser, C. J., Smaldino, P. E. Hidden clusters beyond ethnic boundaries. Behavioral & Brain Sciences, 45, e178.", link: "https://doi.org/10.1017/S0140525X21001709", linktext: "doi" }
];

function anthrocultPickRandom(arr, n) {
    const pool = arr.slice();
    const out = [];
    for (let i = 0; i < n && pool.length; i++) {
        const idx = Math.floor(Math.random() * pool.length);
        out.push(pool.splice(idx, 1)[0]);
    }
    return out;
}

function anthrocultRenderPubs(container) {
    const picks = anthrocultPickRandom(ANTHROCULT_PUBS, 3);
    container.innerHTML = picks.map(function (p) {
        var link = p.link ? '<a class="pub-link" href="' + p.link + '">' + p.linktext + ' &rarr;</a>' : '';
        return '<div class="pub-card">' +
            '<div class="pub-year">' + p.year + '</div>' +
            '<div class="pub-cite">' + p.cite + '</div>' +
            link +
            '</div>';
    }).join('');
}

document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('pub-list');
    if (!container) return;
    anthrocultRenderPubs(container);
    const btn = document.getElementById('shuffle');
    if (btn) btn.addEventListener('click', function () { anthrocultRenderPubs(container); });
});
