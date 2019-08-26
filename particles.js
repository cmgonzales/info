var camera, scene, renderer,

				mouseX = 0, mouseY = 0,
		
				particles = [];
			
			init();
			function init() {
				 
				camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 1, 4000 );
	
			
				camera.position.z = 1800;
				
                scene = new THREE.Scene();
                scene.fog = new THREE.FogExp2( 0x555555, 0.0003 );  
				

				scene.add(camera);
	
				
	 
				renderer = new THREE.WebGLRenderer();
				renderer.setSize( window.innerWidth, window.innerHeight );
	            window.addEventListener('resize', () => {
                    renderer.setSize(window.innerWidth, window.innerHeight);
                })
                
				
				document.body.appendChild( renderer.domElement );
				makeParticles(); 
			
				
				document.addEventListener( 'mousemove', onMouseMove, false );
				
			
				setInterval(update,1500/30); 
			
			}
			
			function update() {
				updateParticles();
			
				renderer.render( scene, camera );
			}
		
			
			function makeParticles() { 
				
				var particle, material; 
				
				for ( var positionZ= 1; positionZ < 2000; positionZ++ ) {
		
					material = new THREE.ParticleBasicMaterial( { color: "white", program: particleRender, size: 2 } );
					
					particle = new THREE.Particle(material);
		
					
					particle.position.x = Math.random() * 30000 - 2000;
					particle.position.y = Math.random() * 7000-3500;
		
					
					particle.position.z = positionZ;
		
			
					particle.scale.x = particle.scale.y = 6;
		
				
					scene.add( particle );
		
					
					particles.push(particle); 
				}
				
			}
			
			
			function particleRender( context ) {
				
			
				context.beginPath();
			
				context.arc( 0, 0, 1, 0,  Math.PI * 2, true );
				context.fill();
			};
			
		
			
			function updateParticles() { 
				
				
				for(var i=0; i<particles.length; i++) {
		
					particle = particles[i]; 
		
					
				
		            particle.position.z +=  mouseX * 0.10;
					
					if(particle.position.z>1350) particle.position.z-=2000; 
		
				}
	
			}
		
		// called when the mouse moves
			function onMouseMove( event ) {
				
				mouseX = event.clientX;
				mouseY = event.clientY;
			}