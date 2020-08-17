function updateMap() {
    fetch("/data.json") // Fetch Api's returns a promise
        .then(response => response.json()) //Response.json is itself a promise so we to write .then one more time
        .then(rsp => {
            //console.log(rsp.data);

            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;


                cases= element.infected;
                if(cases>255){
                    color="rgb(255,0,0)"
                }
                else{
                    color=`rgb(${cases},0,0)`
                }

                //Mark on the map
                new mapboxgl.Marker({
                    draggable: false ,
                    color:color
                })
                    .setLngLat([longitude, latitude])
                    .addTo(map);


            });
        })
}

updateMap();