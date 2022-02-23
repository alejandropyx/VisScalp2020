let scene,camera,renderer;var model;function init(){(scene=new THREE.Scene).background=new THREE.Color(0),(camera=new THREE.PerspectiveCamera(40,window.innerWidth/window.innerHeight,1,5e3)).position.x=0,camera.position.y=200,camera.position.z=200,camera.rotation.y=45,(renderer=new THREE.WebGLRenderer({antialias:!0})).setSize(window.innerWidth/2,window.innerHeight/2),controls=new THREE.OrbitControls(camera,renderer.domElement),controls.addEventListener("change",renderer),directionalLight=new THREE.DirectionalLight(16768477,.5),directionalLight.position.set(300,300,300),directionalLight.castShadow=!0,scene.add(directionalLight),light=new THREE.PointLight(16711935,1),light.position.set(0,-100,0),scene.add(light),(new THREE.GLTFLoader).setPath("./").load("scene.gltf",e=>{e.scene.rotation.y=Math.PI,model=e.scene.children[4],console.log(model),model.cursor="pointer",console.log(model.material.opacity),model.material.opacity=.3,model.material.transparent=!0,model.traverse(e=>{e.isMesh&&(e.castShadow=!0,e.receiveShadow=!0,e.material.map&&(e.material.map.anisotropy=1))}),scene.add(e.scene),renderer.render(scene,camera),animate()})}function animate(){requestAnimationFrame(animate),renderer.render(scene,camera)}init();var graph={},node=[],Atlas1=[];function ReGraph(e){const n=new Set,a=new Set;let o=null;const t=document.getElementById("3d-graph"),r=ForceGraph3D()(t).graphData(e).nodeLabel("name").enableNodeDrag(!1).nodeColor(e=>n.has(e)?e===o?"rgb(255,0,0,1)":"rgba(255,160,0,0.8)":"rgba(0,255,255,0.6)").linkWidth(e=>a.has(e)?4:1).onNodeHover(e=>t.style.cursor=e?"pointer":null).onNodeHover(t=>{!t&&!n.size||t&&o===t||(n.clear(),a.clear(),t&&(n.add(t),console.log(t),console.log(e.links),e.links.forEach(e=>{e.source.id!=t.id&&e.target.id!=t.id||(a.add(e),n.add(e.source),n.add(e.target))})),o=t||null,i())}).onLinkHover(e=>{n.clear(),a.clear(),e&&(a.add(e),n.add(e.source),n.add(e.target)),i()}).onNodeClick(e=>{const n=1+40/Math.hypot(e.x,e.y,e.z);r.cameraPosition({x:e.x*n,y:e.y*n,z:e.z*n},e,3e3)});function i(){r.nodeColor(r.nodeColor()).linkWidth(r.linkWidth())}console.log(r.scene()),r.scene().position.x=0,r.scene().position.y=0,r.scene().position.z=0,console.log(r.scene().camera),r.scene().add(scene),r.cameraPosition({x:0,y:100,z:300},{x:0,y:0,z:0})}function download(){var e=document.createElement("a"),n="";$.ajax({type:"GET",url:"matTemP.csv",dataType:"text",success:function(a){n=a,e.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(n)),e.setAttribute("download","ExampleName.csv"),e.style.display="none",document.body.appendChild(e),e.click(),document.body.removeChild(e)}})}function loadFileAsText(){var e=document.getElementById("fileToLoad").files[0],n=new FileReader;n.onload=function(e){var n=e.target.result;CSV2Array(n),document.getElementById("content-target").value=n},n.readAsText(e,"UTF-8")}function CSV2Array(e){for(var n=e.split("\n"),a=(n[0].split(" "),[]),o=0;o<n.length;o++)a.push(n[o].split(","));arrar2Links(a)}function arrar2Links(e){console.log(graph),graph.links=[];var n=parseFloat($("#myInput").val());for(console.log(n),i=0;i<20;i++)for(j=i+1;j<20;j++)parseFloat(e[i][j])<n||graph.links.push({source:i,target:j});graph.links.filter(e=>e).map(e=>({source:e})),ReGraph(graph)}$.ajax({type:"GET",url:"Scalp2.json",dataType:"text",success:function(e){Atlas1=JSON.parse(e)}}),$(document).ajaxComplete(function(e,n,a){graph={nodes:Atlas1,links:[...Array(21).keys()].filter(e=>e).map(e=>({source:e,target:Math.round(Math.random()*(e-1))}))},console.log(graph.links),ReGraph(graph)});
