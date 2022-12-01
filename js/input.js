// Fonction de mise à jour des variables dans l'HTML
function updateHTML() {
    $("#resolution").val(resolution);
    $("#min_resolution").text(`${new_res_min.toFixed(1)} m`);
    $("#max_resolution").text(`${res_max.toFixed(1)} m`);
    $("#label_resolution").text(`Résolution : ${resolution.toFixed(1)} m`);
};
updateHTML();

// Fonction de mise à jour des variables javascript
function updateJS() {
    resolution = parseFloat($("#resolution").val());
    $("#label_resolution").text(`Résolution : ${resolution.toFixed(1)} m`);
};

// Mettre a jour les variable javascript
document.addEventListener("keyup", keyUpHandler, false);
function keyUpHandler(e) {
    if(e.key == "Alt" && extent.extent_ !== null) {
        min_E = extent.extent_[0];
        min_N = extent.extent_[1];
        max_E = extent.extent_[2];
        max_N = extent.extent_[3];
            
        d_E = max_E - min_E;
        d_N = max_N - min_N;

        // Changer la résolution minimum
        if (Math.max(d_E, d_N)/max_pix > res_min) {
            new_res_min = Math.max(d_E, d_N)/max_pix;
        } else {
            new_res_min = res_min;
        };

        // Calculer la résolution maximum et effective
        res_max = new_res_min*50;
        resolution = new_res_min*5;

        $("#resolution").attr({
            "max" : res_max,
            "min" : new_res_min
         });

        // Mettre à jour l'HTML
        updateHTML();

        // Permettre à l'utilisateur de faire un aperçu et de télécharger
        zone_select = true;        
        $("#apercu").removeClass("btn-secondary")
        $("#apercu").addClass("btn-primary")
        $("#download").removeClass("btn-secondary")
        $("#download").addClass("btn-success")
    }
};