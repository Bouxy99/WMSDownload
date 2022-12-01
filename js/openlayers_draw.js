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
