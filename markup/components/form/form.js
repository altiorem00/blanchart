document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = form.querySelector('[name=name]');
        const phone = form.querySelector('[name=phone]');
        const nameError = name.closest('.form__fields-item').querySelector('.form__fields-error');
        const phoneError = phone.closest('.form__fields-item').querySelector('.form__fields-error');
        if (!name.value.length) {
            name.classList.add('error');
            nameError.classList.add('d-block');
            nameError.innerHTML = 'Обязательное поле';
        } else if (name.value.replace(/[a-zа-яё]/gi, '').length) {
            name.classList.add('error');
            nameError.classList.add('d-block');
            nameError.innerHTML = 'Недопустимый формат';
        } else {
            name.classList.remove('error');
            nameError.classList.remove('d-block');
            nameError.classList.add('d-none');
        }
        if (phone.value.replace(/[^0-9]/g, '').length < 11) {
            phone.classList.add('error');
            phoneError.classList.add('d-block');
            phoneError.innerHTML = 'Обязательное поле';
        } else {
            phone.classList.remove('error');
            phoneError.classList.remove('d-block');
            phoneError.classList.add('d-none');
        }
        if (!name.classList.contains('error') && !phone.classList.contains('error')) {
            form.submit();
        }
    });
});
