

var stars = 20000;

var renderer;
var container = document.createElement('div');
document.body.appendChild( container );

var camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight,1, 4000)
camera.position.z = 1000; 

var scene = new THREE.Scene();

scene.add(camera)

 renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild( renderer.domElement );

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
})



var scene = new THREE.Scene();
scene.fog = new THREE.FogExp2( 0x555555, 0.0003 );  
var geometry = new THREE.Geometry();

for (i = 0; i < stars; i ++) 
{ 
  var vertex = new THREE.Vector3();
  vertex.x = Math.random()*40000-20000;
  vertex.y = Math.random()*7000-3500;
  vertex.z = Math.random()*7000-3500;
  geometry.vertices.push( vertex );
}

var material = new THREE.ParticleBasicMaterial( { size: 6 });
var particles = new THREE.ParticleSystem( geometry, material );
      
scene.add( particles ); 



camera.position.z = 13000;



renderer.render( scene, camera );





function onMouseMove( event ) {
    
    mouseX = event.clientX;
    mouseY = event.clientY;
}



update(){
updateParticles()
}




document.addEventListener( 'mousemove', onMouseMove, false );
setInterval(update,1000/30); 


