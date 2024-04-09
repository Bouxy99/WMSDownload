// Fonction de mise à jour des variables dans l'HTML
function updateHTML() {
    $("#resolution").attr({
        "max": res_max,
        "min": new_res_min
    });
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
    if (e.key == "Alt" && extent.extent_ !== null) {

        // Mettre à jour les informations de l'étendue
        updateExtentInfo();

        // Mettre à jour l'HTML
        updateHTML();

        // Permettre à l'utilisateur de faire un aperçu et de télécharger
        zone_select = true;
        $("#apercu").removeClass("btn-secondary")
        $("#apercu").addClass("btn-primary")
        $("#download").removeClass("btn-secondary")
        $("#download").addClass("btn-success")
        new_zone = true;
    }
};