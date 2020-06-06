// eslint-disable-next-line no-undef
ymaps.ready(function () {
  // eslint-disable-next-line no-undef
  var myMap = new ymaps.Map('map', {
      center: [59.938631, 30.323055],
      zoom: 16,
      controls: []
    }, {
      suppressMapOpenBlock: true
    }, {
      searchControlProvider: 'yandex#search'
    }),
    // eslint-disable-next-line no-undef
    myPlacemark = new ymaps.Placemark(([59.938631, 30.323055]), {

    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: 'img/backgrounds/marker.svg',
      // Размеры метки.
      iconImageSize: [36, 36],
      // Смещение левого верхнего угла иконки относительно
      // её 'ножки' (точки привязки).
      iconImageOffset: [0, 0]
    });
  myMap.geoObjects.add(myPlacemark);
  myMap.controls.remove('rulerControl');
  myMap.controls.remove('searchControl');
  myMap.controls.remove('trafficControl');
  myMap.controls.remove('typeSelector');
  myMap.controls.remove('zoomControl');
  myMap.controls.remove('geolocationControl');
  myMap.controls.remove('routeEditor');
});
