
let isMapContainerExist = function (containerId) {
    return !!document.getElementById(containerId);
};
let constructMap = function (arData) {
    if (isMapContainerExist(arData.yandexMapID)) {
        let mapContainer = document.getElementById(arData.yandexMapID);
        const circleLayout = ymaps.templateLayoutFactory.createClass('<div class="map__placemark"></div>');

        // Проверка наличия контейнера в DOM
        if (!mapContainer) {
            throw new Error("Doesn't exist '#" + arData.yandexMapID + "' container in DOM");
        }

        // Проверка установленного значения arData.center
        if (!arData.center) {
            arData.center = [57.1500079, 65.5247413];
        } else {
            arData.center = [arData.center.lat, arData.center.lng];
        }

        // Проверка установленного значения zoom
        if (!arData.zoom) {
            arData.zoom = 12;
        }
        let map = []
        // Инициализация карты
        map[arData.yandexMapID] = new ymaps.Map(arData.yandexMapID, {
            center: arData.center,
            zoom: arData.zoom,
        });

        // Настройка контролов управления
        map[arData.yandexMapID].controls.remove('searchControl');
        map[arData.yandexMapID].controls.remove('trafficControl');
        map[arData.yandexMapID].controls.remove('typeSelector');
        map[arData.yandexMapID].controls.remove('fullscreenControl');
        map[arData.yandexMapID].controls.remove('rulerControl');
        map[arData.yandexMapID].behaviors.disable(['scrollZoom']);

        // Размещение точек на карте
        arData.points.forEach((point) => {
            let placemark = '';
            if (point.color) {
                placemark = new ymaps.Placemark(
                    [point.position.lat, point.position.lng],
                    {},
                    {
                        iconColor: point.color,
                        iconId: point.id,
                    },
                );
            } else {
                placemark = new ymaps.Placemark(
                    [point.position.lat, point.position.lng],
                    {hintContent: point.hint},
                    {
                        iconId: point.id,
                        iconLayout: circleLayout,
                        iconShape: {
                            type: 'Circle',
                            coordinates: [0, 0],
                            radius: 20
                        }
                    },
                );
            }

            map[arData.yandexMapID].geoObjects.add(placemark);
        });
        return true;
    } else {
        return false;
    }
};
async function initYandexMap(arData) {
    let isMapInit = await constructMap(arData);
    return isMapInit;
}
