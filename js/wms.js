
function updateWMSImage() {
    if (zone_select) {
        // Calcul de la résolution et création du lien
        widht = d_E / resolution;
        height = d_N / resolution;
        link = `https://wms.geo.admin.ch/?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=ch.swisstopo.swissimage&FORMAT=image/jpeg&BBOX=${min_E},${min_N},${max_E},${max_N}&CRS=EPSG:2056&WIDTH=${widht}&HEIGHT=${height}`
       
        // Ajouter la nouvelle zone dans le dictionnaire temporaire
        if (new_zone) {
            updateZoneList();
        };
        $(`#img_wms_${active_zone_num}`).attr("src",link);
    };
};

function downloadWMSImage() {
    if (zone_select) {
        widht = d_E / resolution;
        height = d_N / resolution;
        link = `https://wms.geo.admin.ch/?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=ch.swisstopo.swissimage&FORMAT=image/tiff&BBOX=${min_E},${min_N},${max_E},${max_N}&CRS=EPSG:2056&WIDTH=${widht}&HEIGHT=${height}`
        forceDownload(link, 'wms_img.tiff')
    };
};

// Function de téléchargement d'une image avec un url
// Source : https://stackoverflow.com/a/49886131
function forceDownload(url, fileName){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "blob";
    xhr.onload = function(){
        var urlCreator = window.URL || window.webkitURL;
        var imageUrl = urlCreator.createObjectURL(this.response);
        var tag = document.createElement('a');
        tag.href = imageUrl;
        tag.download = fileName;
        document.body.appendChild(tag);
        tag.click();
        document.body.removeChild(tag);
    }
    xhr.send();
};