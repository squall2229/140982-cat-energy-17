function init () {
  var map = new ymaps.Map('map', {
    center: [59.938631, 30.323055],
    zoom: 18,
    controls: ['smallMapDefaultSet']
  }, {
    searchControlProvider: 'yandex#search'
  });

  var placemark = new ymaps.Placemark([59.938631, 30.323055], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/map-pin.png',
    iconImageSize: [55, 53]
  });

  map.geoObjects.add(placemark);
}

ymaps.ready(init);
