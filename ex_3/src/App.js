import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";
class App extends Component {
  componentDidMount() {
    // === THREE.JS CODE START ===
    var scene = new THREE.Scene();
    var spotLight = new THREE.SpotLight(0xeeeece);
    spotLight.position.set(1000, 1000, 1000);
    scene.add(spotLight);
    var spotLight2 = new THREE.SpotLight(0xffffff);
    spotLight2.position.set( -200, -200, -200);
    scene.add(spotLight2);

    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );
    var geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
    var material = new THREE.MeshPhongMaterial( {
      color: 0xdaa520,
      specular: 0xbcbcbc,
    } );
    var torus = new THREE.Mesh( geometry, material );
    scene.add( torus );
    camera.position.z = 25;
    var animate = function () {
      requestAnimationFrame( animate );
      torus.rotation.x += 0.01;
      torus.rotation.y += 0.01;
      renderer.render( scene, camera );
    };
    animate();
    // === THREE.JS EXAMPLE CODE END ===
  }
  render() {
    return (
      <div />
    )
  }
}
export default App;
