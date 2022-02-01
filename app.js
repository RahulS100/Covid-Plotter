function updatemap() {
fetch('data.json').then(response => response.json())
.then(res => {
    res.data.forEach(element => {
        latitude = element.latitude;
        longitude = element.longitude;
        newcase = element.infected;
        if(newcase> 255) {
            main_color = "rgb(255,0,0)";
        } else {
           main_color = `rgb(${newcase}, 0, 0)`;
        }
        new mapboxgl.Marker({
            draggable: false,
            color: main_color
            })
            .setLngLat([longitude, latitude])
            .addTo(map);
});
})
}


updatemap();