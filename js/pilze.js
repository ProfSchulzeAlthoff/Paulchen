function initMap(event){
	var pilzMap = L.map('PilzMap');
	pilzMap.setView([50.22, 8.42],15, );
	
	var pilzkarteUrl = './img/PaulchensKarte.jpg';
    pilzkarteBounds = [[ 50.20734, 8.39810,], [ 50.24249, 8.44799,]];
	pilzkarteLayer = L.imageOverlay(pilzkarteUrl, pilzkarteBounds);


	//var osmLayer = L.tileLayer.wms('http://maps.heigit.org/osm-wms/service?', {format: 'image/png', layers: 'osm_auto:all', attribution:'&copy; <a href="www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'});

	//osmLayer.addTo(pilzMap);
	pilzkarteLayer.addTo(pilzMap);
}

document.addEventListener('DOMContentLoaded', initMap);

