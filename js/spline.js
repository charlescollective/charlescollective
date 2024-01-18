import { Application } from './runtime.js';

function initSplineViewer() {
    console.log('initSplineViewer function is being called.'); // Log a message
    const canvas = document.getElementById('canvas3d');
    const app = new Application(canvas);
    app.load('https://prod.spline.design/LxCxwQrwyF0RjuUR/scene.splinecode');
    }

    initSplineViewer();