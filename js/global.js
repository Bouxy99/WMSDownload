// Definition des variables
const res_min = 0.1;
let new_res_min = 0.1;
let res_max = res_min*10;
let resolution = res_min*5; // taille en mètre par pixel
let max_pix = 10000;

let zone_select = false;
let new_zone = true;
let zone_num = 1;
let active_zone_num = 1;

let min_E = 0;
let min_N = 0;
let max_E = 0;
let max_N = 0;
let d_E = 0;
let d_N = 0;

let dict_WMSDownload = {"extends":{}};

let link = '';