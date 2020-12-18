

//add map
mapboxgl.accessToken = 'pk.eyJ1IjoieGxpdXhsaXUiLCJhIjoiY2tnZ2Zpd3piMHYycTJ5cGl4czZleXZpayJ9.5egPi5UdGMf6Kczfj47ahg';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/xliuxliu/cki9im9zd4ke719rw3bgnbglv',
center: [113.416361,32.481272],
zoom: 11
});

var layerTypes = {
    'fill': ['fill-opacity'],
    'line': ['line-opacity'],
    'circle': ['circle-opacity', 'circle-stroke-opacity'],
    'symbol': ['icon-opacity', 'text-opacity'],
    'raster': ['raster-opacity'],
    'fill-extrusion': ['fill-extrusion-opacity']
}

var alignments = {
    'left': 'lefty',
    'center': 'centered',
    'right': 'righty'
}

function getLayerPaintType(layer) {
    var layerType = map.getLayer(layer).type;
    return layerTypes[layerType];
}

function setLayerOpacity(layer) {
    var paintProps = getLayerPaintType(layer.layer);
    paintProps.forEach(function(prop) {
        map.setPaintProperty(layer.layer, prop, layer.opacity);
    });
}

// Main 'story' and 'features' elements
// var story = document.getElementById('story');
// var features = document.createElement('div');
// features.classList.add(alignments[config.alignment]);
// features.setAttribute('id', 'features');
//
// var header = document.createElement('div');
//
// //title,subtitle, and other discription on the map
// if (config.title) {
//     var titleText = document.createElement('h1');
//     titleText.innerText = config.title;
//     header.appendChild(titleText);
// }
//
// if (config.subtitle) {
//     var subtitleText = document.createElement('h2');
//     subtitleText.innerText = config.subtitle;
//     header.appendChild(subtitleText);
// }
//
// if (config.byline) {
//     var bylineText = document.createElement('p');
//     bylineText.innerText = config.byline;
//     header.appendChild(bylineText);
// }
//
// if (config.description) {
//     var bylineText = document.createElement('p');
//     bylineText.innerText = config.description;
//     header.appendChild(bylineText);
// }
//
// // If the header has anything in it, it gets appended to the story
// if (header.innerText.length > 0) {
//     header.classList.add(config.theme);
//     header.setAttribute('id', 'header');
//     story.appendChild(header);
// }
//
// /* After building the elements and assigning content to the header these
// functions will loop through the chapters in the config.js file,
// create the vignette elements and assign them their respective content */
//
// config.chapters.forEach((record, idx) => {
//     var container = document.createElement('div');
//     var chapter = document.createElement('div');
//
//     if (record.title) {
//         var title = document.createElement('h3');
//         title.innerText = record.title;
//         chapter.appendChild(title);
//     }
//
//     if (record.image) {
//         var image = new Image();
//         image.src = record.image;
//         chapter.appendChild(image);
//     }
//
//     if (record.description) {
//         var story = document.createElement('p');
//         story.innerHTML = record.description;
//         chapter.appendChild(story);
//     }
//
//     // Sets the id for the vignette and adds the step css attribute
//     container.setAttribute('id', record.id);
//     container.classList.add('step');
//     if (idx === 0) {
//         container.classList.add('active');
//     }
//
//     chapter.classList.add(config.theme);
//     container.appendChild(chapter);
//     features.appendChild(container);
// });
//
// story.appendChild(features);
//
// var footer = document.createElement('div');
//
// if (config.footer) {
//     var footerText = document.createElement('p');
//     footerText.innerHTML = config.footer;
//     footer.appendChild(footerText);
// }
//
// if (footer.innerText.length > 0) {
//     footer.classList.add(config.theme);
//     footer.setAttribute('id', 'footer');
//     story.appendChild(footer);
// }

// mapboxgl.accessToken = config.accessToken;

// const transformRequest = (url) => {
//     const hasQuery = url.indexOf("?") !== -1;
//     const suffix = hasQuery ? "&pluginName=journalismScrollytelling" : "?pluginName=journalismScrollytelling";
//     return {
//       url: url + suffix
//     }
// }

/* This section creates the map element with the
attributes from the main section of the config.js file */
// var map = new mapboxgl.Map({
//     container: 'map',
//     style: config.style,
//     center: config.chapters[0].location.center,
//     zoom: config.chapters[0].location.zoom,
//     bearing: config.chapters[0].location.bearing,
//     pitch: config.chapters[0].location.pitch,
//     scrollZoom: true,
//     transformRequest: transformRequest
// });

// var marker = new mapboxgl.Marker();
// if (config.showMarkers) {
//     marker.setLngLat(config.chapters[0].location.center).addTo(map);
// }
//
// // instantiate the scrollama
// var scroller = scrollama();

// map.on("load", function() {
//     // setup the instance, pass callback functions
//     scroller
//     .setup({
//         step: '.step',
//         offset: 0.5,
//         progress: true
//     })
//     .onStepEnter(response => {
//         var chapter = config.chapters.find(chap => chap.id === response.element.id);
//         response.element.classList.add('active');
//         map.flyTo(chapter.location);
//         if (config.showMarkers) {
//             marker.setLngLat(chapter.location.center);
//         }
//         if (chapter.onChapterEnter.length > 0) {
//             chapter.onChapterEnter.forEach(setLayerOpacity);
//         }
//     })
//     .onStepExit(response => {
//         var chapter = config.chapters.find(chap => chap.id === response.element.id);
//         response.element.classList.remove('active');
//         if (chapter.onChapterExit.length > 0) {
//             chapter.onChapterExit.forEach(setLayerOpacity);
//         }
//     });
// });

// setup resize event
// window.addEventListener('resize', scroller.resize);
