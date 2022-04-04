document.addEventListener('DOMContentLoaded', function() {
    this.querySelectorAll('[data-phone-mask]').forEach(element => {
        const im = new Inputmask(element.dataset.phoneMask);
        im.mask(element);
    });
})
