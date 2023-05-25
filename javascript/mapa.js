window.onload = function() {
    var dojo = new google.maps.LatLng(36.70061739901418, -4.4458192591743435);
    var mapOptions = {
    center: dojo,
    zoom: 8,
    mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById('mapa'), mapOptions);
    var marker = new google.maps.Marker({
    position: new google.maps.LatLng(36.700552911330284, -4.446409342327591),
    map: map,
    title: 'Dojo Yoshinkai',
    icon: '../imagenes/green.png'
    });
    var infowindow = new google.maps.InfoWindow({
    content:'<h1>Dojo Yoshinkai</h1><p>Y aquí tenemos el dojo de Nieves porque no tenemos una ubicación y es el más chachi pistachi'
    });
    google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
    });
    // marcador 1
    var marker1 = new google.maps.Marker({
    position: new google.maps.LatLng(36.700552911330284, -4.446409342327591),
    map: map,
});
// InfoWindow para el marcador 1
}