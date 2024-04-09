
// Fonction de mise à jour de la liste des zones déjà générée
function updateZoneList() {
    dict_WMSDownload.extends[zone_num] = [min_E, min_N, max_E, max_N];
    $("#list-tab").append(`<a class="list-group-item list-group-item-action " id="list-zone${zone_num}" data-toggle="list" href="#zone${zone_num}" role="tab" aria-controls="zone${zone_num}" onClick="changeActiveExtent(${zone_num})">${zone_num}</a>`);
    $("#nav-tabContent").append(`<div class="tab-pane fade show " id="zone${zone_num}" role="tabpanel" aria-labelledby="list-zone${zone_num}">
      <img src="" alt="" id="img_wms_${zone_num}" class="img_wms">
      </div>
    </div>`);
    new_zone = false;
    zone_num += 1;
    active_zone_num = zone_num-1;
    console.log(`list-zone${active_zone_num}`)
    document.getElementById(`list-zone${active_zone_num}`).click();
}

function changeActiveExtent(id_zone) {
    active_zone_num = id_zone;
    extent.setExtent(dict_WMSDownload.extends[id_zone]);
    view.fit(dict_WMSDownload.extends[id_zone]);
    view.setZoom(view.getZoom()*0.9);

    // Mettre à jour les informations de l'étendue
    updateExtentInfo();

    // Mettre à jour l'HTML
    updateHTML();
}