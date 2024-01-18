
import { Application } from './js/runtime.js';
const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/LxCxwQrwyF0RjuUR/scene.splinecode');



<canvas id="canvas3d" class="threed-logo" style="width: 100vw; height: 100vh;"></canvas>



/////////



<script type="module" src="https://unpkg.com/@splinetool/viewer@1.0.21/build/spline-viewer.js"></script>

<spline-viewer url="https://prod.spline.design/LxCxwQrwyF0RjuUR/scene.splinecode" id="canvas3d" class="threed-logo" style="width: 100vw; height: 100vh;"></spline-viewer>