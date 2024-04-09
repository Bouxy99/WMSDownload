// Style de la selection
const boxStyle = new ol.style.Style({
	stroke: new ol.style.Stroke({
		color: 'rgb(255, 0, 0)',
		width: 3,
	}),
	fill: new ol.style.Fill({
		color: 'rgba(255, 0, 0, 0.1)',
	}),
});
const pointerStyle = new ol.style.Style({
	image: new ol.style.Circle({
		radius: 6,
		fill: new ol.style.Fill({ color: '#ff0000' }),
		stroke: new ol.style.Stroke({
			color: '#ffffff', width: 2
		})
	})
});

const extent = new ol.interaction.Extent({
	boxStyle,
	pointerStyle,
	condition: ol.events.condition.altKeyOnly
});
map.addInteraction(extent);

function updateExtentInfo() {
	
	min_E = extent.extent_[0];
	min_N = extent.extent_[1];
	max_E = extent.extent_[2];
	max_N = extent.extent_[3];

	d_E = max_E - min_E;
	d_N = max_N - min_N;

	// Changer la résolution minimum
	if (Math.max(d_E, d_N) / max_pix > res_min) {
		new_res_min = Math.max(d_E, d_N) / max_pix;
	} else {
		new_res_min = res_min;
	};

	// Calculer la résolution maximum et effective
	res_max = new_res_min * 10;
	resolution = new_res_min * 5;
};