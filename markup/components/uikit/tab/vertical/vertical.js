// *делаем из селекта табы для BS*
document.addEventListener('DOMContentLoaded', function () {
    const tabs = this.querySelectorAll('.tab--vertical');
    if (tabs) {
        tabs.forEach((tab) => {
            const links = tab.querySelectorAll('.nav-link'),
                select = tab.querySelector('.f-select'),
                selectData = [];
            // забираем названия табиков и убираем мишуру
            links.forEach((link, index) => {
                let currentName = link.innerHTML.replace(/<\/?[^>]+(>|$)/g, '').trim();
                selectData.push({ text: `${currentName}` });
            });
            // устанавливаем их как option у пустого селекта
            select.slim.setData(selectData);
            select.slim.set(selectData[0].text);
            // забираем индекс выбранного option и тригерим клик по нужному табу
            select.slim.beforeOnChange = (el) => {
                let currentOption = tab.querySelector(`[data-id='${el.id}']`);
                let index = [...tab.querySelectorAll('.ss-option')].indexOf(currentOption);
                links[index].click();
            };
        });
    }
});
