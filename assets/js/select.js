methods = ['EDVR', 'MuCAN', 'BasicVSR', 'IconVSR', 'TTVSR', 'BasicVSRPP']
data = ['data1', 'data2', 'data3', 'data4', 'data5', 'data6', 'data7', 'data8', 'data9','data10']
var methodNames = {
    'EDVR': 'EDVR',
    'MuCAN': 'MuCAN',
    'BasicVSR': 'BasicVSR',
    'IconVSR': 'IconVSR',
    'TTVSR': 'TTVSR',
    'BasicVSRPP': 'BasicVSR++'
}
var currentData = 'data1';  // Default data
var currentMethod = 'BasicVSRPP'; // Default method


methods2 = ['base', 'tempAttn', 'FeatProp', 'AntiAlias', 'HFShuttle']
data2 = ['data1-ablation', 'data2-ablation', 'data3-ablation']
var methodNames2 = {
    'base': 'Without depth smoothing',
    'NoFm1': 'Without Frame Matrix',
    'NoFm2': 'Without Frame Matrix',
    'NoRI': 'No Reinjection Inpainting',
}
// Variables for the second set of controls
var currentData2 = 'data1-ablation';
var currentMethod2 = 'base';

var slider2 = document.getElementById('dataSlider2');
var sliderValueDisplay2 = document.getElementById('sliderValue2');

slider2.oninput = function() {
    currentData2 = 'data' + this.value + '-ablation';
    sliderValueDisplay2.textContent = this.value;
    updateVideos2();
}

function updateVideos2(method = null) {
    if (method) {
        currentMethod2 = method;
        var fullName2 = methodNames2[method];// || method;
        document.getElementById('currentMethodDisplay2').textContent = fullName2;
    }

    if (currentMethod2 == "base") {
        document.getElementById('methodVideo2').src = './results1/ab/v1_depth_smooth.mp4';
        document.getElementById('gtVideo2').src = './results1/ab/v1_depth_no_smooth.mp4';
    }
    if (currentMethod2 == "NoFm1") {
        document.getElementById('methodVideo2').src = './results1/ab/v1_consistency.mp4';
        document.getElementById('gtVideo2').src = './results1/ab/v1_consistency_no_fm.mp4';
    }
    if (currentMethod2 == "NoFm2") {
        document.getElementById('methodVideo2').src = './results1/ab/v1_man_book.mp4';
        document.getElementById('gtVideo2').src = './results1/ab/v1_man_book_no_fm.mp4';
    }
    if (currentMethod2 == "NoRI") {

        document.getElementById('methodVideo2').src = './results1/ab/v1_bear.mp4';
        document.getElementById('gtVideo2').src = './results1/ab/v1_bear_no_injection.mp4';
    }
}

// Initialize the second set of videos
updateVideos2('base');



function updateVideos1(method = null) {
    var methodNames_1 = {
        'base': 'DynIBaR',
        'propainter': 'ProPainter',
        'robdynerf': 'RoDynRF',
        'e2fgvi': 'E2FGVI',
    }
    if (method) {
        currentMethod = method;
        var fullName = methodNames_1[method];// || method;
        document.getElementById('currentMethodDisplay').textContent = fullName;
    }

    if (currentMethod == "propainter") {
        document.getElementById('methodVideo').src = './results1/comparisons/v1_propainter_corgi.mp4';
        document.getElementById('oursVideo').src = './results1/comparisons/v1_ours_corgi.mp4';
    }

    if (currentMethod == "base") {
        document.getElementById('methodVideo').src = './results1/comparisons/v1_dynibar_corgi.mp4';
        document.getElementById('oursVideo').src = './results1/comparisons/v1_ours_corgi.mp4';
    }

    if (currentMethod == "robdynerf") {
        document.getElementById('methodVideo').src = './results1/comparisons/v1_robdynerf_corgi.mp4';
        document.getElementById('oursVideo').src = './results1/comparisons/v1_ours_corgi.mp4';
    }
    if (currentMethod == "e2fgvi") {
        document.getElementById('methodVideo').src = './results1/comparisons/v1_e2fgvi_corgi.mp4';
        document.getElementById('oursVideo').src = './results1/comparisons/v1_ours_corgi.mp4';
    }

}

// Initialize the second set of videos
updateVideos1('base');


function updateVideos_r2(method = null) {
    var methodNames_1 = {
        'base': 'E2FGVI',
        'propainter': 'ProPainter',
        'robdynerf': 'RoDynRF',
        'e2fgvi': 'E2FGVI',
    }
    if (method) {
        currentMethod = method;
        var fullName = methodNames_1[method];// || method;
        document.getElementById('currentMethodDisplay_r2').textContent = fullName;
    }

    if (currentMethod == "propainter") {
        document.getElementById('methodVideo_r2').src = './results1/comparisons/v1_propainter_knight.mp4';
        document.getElementById('oursVideo_r2').src = './results1/comparisons/v1_ours_knight.mp4';
    }

    if (currentMethod == "base") {
        document.getElementById('methodVideo_r2').src = './results1/comparisons/v1_e2fgvi_knight.mp4';
        document.getElementById('oursVideo_r2').src = './results1/comparisons/v1_ours_knight.mp4';
    }

    if (currentMethod == "robdynerf") {
        document.getElementById('methodVideo_r2').src = './results1/comparisons/v1_robdynerf_knight.mp4';
        document.getElementById('oursVideo_r2').src = './results1/comparisons/v1_ours_knight.mp4';
    }

}

// Initialize the second set of videos
updateVideos_r2('base');