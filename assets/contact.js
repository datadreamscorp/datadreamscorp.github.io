document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('term-contact-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = form.elements['name'].value.trim();
        const email = form.elements['email'].value.trim();
        const message = form.elements['message'].value.trim();
        const to = form.dataset.to;
        const subject = encodeURIComponent('anthrocult.org — message from ' + (name || 'anonymous'));
        const body = encodeURIComponent(message + '\n\n---\nfrom: ' + name + ' <' + email + '>');
        window.location.href = 'mailto:' + to + '?subject=' + subject + '&body=' + body;
    });
});
