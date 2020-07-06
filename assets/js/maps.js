<script>
        function initMap() {
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 6,
                center: {
                    lat: 52.394956,
                    lng: 0.248542
                }
            });
            
            /*  adding map clusters or locations to map to show where I've worked... */
             var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";
            /* 52.394956, 0.248542  is Hervey Close */
            /* 52.553331 -0.323800 is Westpoint, Pboro */
            /* 52.570847, -0.300464  is Travelex */
            /* 52.202436, 0.124296 is Cambridge City Council */
            /* 52.186435, 0.131288 is Cambridge University Press */
            var locations = [{
                lat: 52.394956, 
                lng: 0.248542
            }, {
                lat: 52.553331, 
                lng: -0.323800
            }, {
                lat: 52.570847,
                lng: -0.300464
            }, {
                lat: 52.202436, 
                lng: 0.124296
            }, {
                lat: 52.186435,
                lng: 0.131288
            }];

            var markers = locations.map(function(location, i) {
                return new google.maps.Marker({
                    position: location,
                    label: labels[i % labels.length]
                });
            });

            var markerCluster = new MarkerClusterer(map, markers, {
                imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
            });
        }
</script>