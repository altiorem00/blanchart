document.addEventListener('DOMContentLoaded', function () {
    const dropdownList = document.querySelectorAll('.dropdown');

    dropdownList.forEach((dropdown) => {
        const title = dropdown.querySelector('.dropdown__title');

        title.addEventListener('click', () => {
            const active = dropdown.matches('.active');
            dropdownList.forEach((dropdown) => {
                dropdown.classList.remove('active');
            });
            if (!active) {
                dropdown.classList.add('active');
            }
        });
    });
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) {
            dropdownList.forEach((dropdown) => {
                dropdown.classList.remove('active');
            });
        }
    });
});
