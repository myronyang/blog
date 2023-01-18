<template>
  <div class="start" id="canvas">
  </div>
</template>

<script>
import * as THREE from './three.module';
import { OrbitControls } from './OrbitControls';

export default {
  data() {
    return {
      elem: null
    }
  },
  mounted() {
    this.elem = document.querySelector('.content-wrapper')
    this.elem.className += ' full'

    let camera, scene, renderer, clock;

    init();
    animate();

    function init() {
      const canvas = document.getElementById('canvas');

      camera = new THREE.PerspectiveCamera(105, canvas.offsetWidth / canvas.offsetHeight, 1, 10000);
      camera.position.set(0, -300, 500);

      scene = new THREE.Scene();
      scene.background = new THREE.Color('#111');

      clock = new THREE.Clock();

      const loader = new THREE.FontLoader();
      loader.load('helvetiker_regular.typeface.json', (font) => {
        addtext(font, 0, "I will update the post from time to time")
        addtext(font, -1000, "Hope you like it!")
      }); //end load function

      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
      canvas.appendChild(renderer.domElement);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;
      controls.target.set(0, 0, 0);
      controls.update();
    } // end init

    function addtext(font, position, message) {
      const matLite = new THREE.MeshBasicMaterial({
        color: '#73883a',
        transparent: true,
        opacity: 0.4,
        side: THREE.DoubleSide
      });

      const shapes = font.generateShapes(message, 100);

      const geometry = new THREE.ShapeGeometry(shapes);

      geometry.computeBoundingBox();

      const xMid = - 0.5 * (geometry.boundingBox.max.x - geometry.boundingBox.min.x);

      geometry.translate(xMid, 0, 0);

      // make shape ( N.B. edge view not visible )

      const text = new THREE.Mesh(geometry, matLite);
      text.position.z = position - 200;
      scene.add(text);
    }


    function animate() {
      requestAnimationFrame(animate);

      render();

    }

    let flag = true

    function render() {
      const delta = clock.getDelta() * 0.05;
      
      for (let i = 0; i < scene.children.length; i++) {
        const object = scene.children[i];
        
        object.rotation.y += delta; 
        // if (object.rotation.y < 0.2) {

        // } else {
        //   object.rotation.y -= delta; 
        //   flag = true
        // }
      }

      renderer.render(scene, camera);

    }
  },
  destroyed() {
    this.elem.classList.remove('full')
  }
};
</script>

<style lang="stylus" scoped>
.start
  width 100%
  height 700px

  > a
    text-decoration none
    font-size 1.2rem
    border 1px solid
    padding 0.8rem 1.6rem
    border-radius 4px
    transition 0.1s ease
    box-sizing border-box

  @media (max-width: $MQMobile)
    display flex
    justify-content center

p
  font-size 20px

@media (max-width: $MQMobile)
  .beginning
    margin-top 0 !important
    text-align center
</style>
