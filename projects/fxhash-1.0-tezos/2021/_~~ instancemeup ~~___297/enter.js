const DEBUG=false
const debug_log = function (msg) { if (DEBUG) console.log(msg) }

//const medienhaus_api_prefix = 'https://rundgang.udk-berlin.de/api/'
const medienhaus_api_prefix = 'https://bgo.la/med/api/'
const medienhaus_api_all = medienhaus_api_prefix + 'all'

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Quit if WebGL2 is not supported
let gl = renderer.domElement.getContext( 'webgl2', { antialias: false } );
let isWebGL2 = !!gl;
if(!isWebGL2) {
    document.body.innerHTML = `
<p>WebGL 2 is not available.  
See <a href="https://www.khronos.org/webgl/wiki/Getting_a_WebGL_Implementation">
How to get a WebGL 2 implementation</a></p>`;
    throw 'No WebGL 2 available.';
}


let user_is_ready = false
let loading_done = false

const ready = function () {
    user_is_ready = true
    document.getElementById("bt").style.display = 'none'
    document.getElementById("info").style.display = 'none'
    if (loading_done) { director(); }
};

// Setup THREE.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
}
window.addEventListener( 'resize', onWindowResize );

const control = new THREE.OrbitControls(camera, renderer.domElement);
control.enableDamping = true;
control.zoomSpeed = 0.25;
control.rotateSpeed = 0.25;
control.autoRotate = false;
control.autoRotateSpeed = 0.1;
/*const control = new THREE.FirstPersonControls(camera, renderer.domElement);
control.movementSpeed = 0.00001;
control.lookSpeed = 0.00000001;
control.domElement = renderer.domElement;
control.rollSpeed = Math.PI / 4800000;
control.autoForward = false;
control.dragToLook = false;*/




// Some helpers when debugging
if (DEBUG) {
    scene.add(new THREE.GridHelper())
    scene.add(new THREE.AxesHelper(5))
    var stats = new Stats();
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.top = '0px';
    document.body.appendChild( stats.domElement );
}



var all_textures = [];
const thumb_size = 300;
const thumbnail_loading_manager = new THREE.LoadingManager();
const thumbnail_loader = new THREE.TextureLoader(thumbnail_loading_manager);
thumbnail_loading_manager.onLoad = function ( ) {
	// Called when all thumbnails are loaded.
    let projects = Object.entries(all_projects);
    for (const [id, project] of projects) {
        if (project.texture) {
            project.thumb_brightness = get_image_brightness(project.texture.image, 6)
        }
    }

	// Sort thumbnails by brightness
    projects.sort((first, second) => {
        return second[1].thumb_brightness - first[1].thumb_brightness;
    })

    for (const [id, project] of projects) {
        if (project.texture) {
            data = get_image_data(project.texture, thumb_size, thumb_size);
            all_textures.push(data);
        }
    }

    if (all_textures.length < 1) {
		// Something went wrong loading textures?
        document.getElementById("loading").innerHTML = "There was an error loading... sorry."
       	throw "No textures are loaded!!";
       	return
    }
    document.getElementById("loading").style.display = 'none'
    
    loading_done = true
    document.getElementById("bt").style.display = 'block'
    run()
    go_random()
    if (user_is_ready) {
        // enters async animate loop
        director();
    }
};

var all_projects;
getJSON(medienhaus_api_all).then(json => {
    all_projects = json;
    for (const [id, project] of Object.entries(all_projects)) {
        if (project.thumbnail) {
            var path = project.thumbnail.replaceAll("800", `${thumb_size}`)
            thumbnail_loader.load(path, (texture) => {
                all_projects[id].texture = texture; 
            }, undefined, (err) => { if (DEBUG) { debug_log(`Failed to load thumb for "${id}"`) }} )
        }
    }
});


const get_video_element = async function (video_html) {
    const template = document.createElement('template')
    template.innerHTML = video_html;
    const video_div = template.content.children[0]
    
    document.body.appendChild(video_div) 
    
    return new Promise(resolve => { 
        const wait_for_video_tag = function (ttl) {
            ttl--;
            if (ttl <= 0) {
                // timeout
                debug_log("Timed out waiting for video tag to appear!")
                video_div.parentElement.removeChild(video_div)
                resolve({iframe_container: null, video_element: null, texture: null});
                return;
            }

            if (!video_div.children[0].contentDocument) {
                setTimeout(() => wait_for_video_tag(ttl), 100);
                return;
            }

            const video_element = video_div.children[0].contentDocument.getElementsByTagName('video')[0];
            if (!video_element) {
                setTimeout(() => wait_for_video_tag(ttl), 100);
                return;
            };
            
            video_element.crossOrigin = "anonymous"
            video_texture = new THREE.VideoTexture(video_element);
            video_texture.flipY = false;
            resolve({iframe_container: video_div, element: video_element, texture: video_texture});
        };

        wait_for_video_tag(100);
    });
}

const clear_project_content = function (project) {
    // cleans all the loaded resources, just in case
    if (project.videos != null) {
        project.videos.forEach(video => {
            if (video.iframe_container) {
                remove_node_from_dom(video.iframe_container);
            }
            video.iframe_container = null;
            video.texture = null
            video.element = null
        });
        project.videos = null;
    }

    if (project.audios != null) {
        project.audios.forEach(audio => {
            remove_node_from_dom(audio)
        });
        project.videos = null;
    }

    project.audios = null;
    project.textures = null;
}


const load_project_content = async function (project) {
    if (!project || !project.content) return new Promise(resolve => resolve(project))
    return new Promise(async (resolve) => {
        let project_texture_loader = new THREE.TextureLoader();
        let texture_promises = [];
        let video_promises = [];
        project.audios = [];
        Object.entries(project.content).forEach(([i, content]) => {
            if (content.type == 'video') {
                video_promises.push(get_video_element(
                        content.formatted_content.replace('stream.udk-berlin.de', 'bgo.la')))
            } else if (content.type == 'image') {
                texture_promises.push(new Promise(texture_resolve => {
                    project_texture_loader.load(content.content, (texture) => {
                        texture.flipY = false;
                        texture.needsUpdate = true;
                        texture_resolve(texture);
                    });
                }));
            } else if (content.type == 'audio') {
                const audio_element = document.createElement('audio')
                audio_element.src = content.content;
                audio_element.style.display = 'none'
                audio_element.crossOrigin = 'anonymous'
                project.audios.push(audio_element);
            };
        });
        project.videos = await Promise.all(video_promises)
        project.textures = await Promise.all(texture_promises)
        resolve(project)
    });
}

const choose_project = async function(id, load_content=true) {
    let project_entry = all_projects[id];
    if (id == null) {
        project_entry = choose(all_projects)
    }
    const project = await getJSON(medienhaus_api_prefix + project_entry.id);
    project.texture = project_entry.texture;
    if (load_content) {
        return await load_project_content(project);
    };
    return project;
}

const setup_thumbnail_textures = function (all_textures) {
    const textures_data = new Uint8Array(all_textures[0].length * all_textures.length)
    all_textures.forEach( (texture, i) => {
        textures_data.set(texture, texture.length*i);
    });
    const textures = new THREE.DataTexture2DArray(textures_data, thumb_size, thumb_size, all_textures.length);
    textures.generateMipmaps = true;
    textures.anisotropy = renderer.capabilities.getMaxAnisotropy();
    textures.format = THREE.RGBAFormat;
    textures.type = THREE.UnsignedByteType;
    return textures;
}

const transition = async function (uniform, to, duration, easing=TWEEN.Easing.Quadratic.In) {
    let object = planes.material.uniforms[uniform];
    debug_log(`Doing transition for ${uniform} to ${to}. Duration: ${duration}`)
    return new Promise(resolve => {
            new TWEEN.Tween(object)
                .to({value:to}, duration)
                .easing(easing)
                .onComplete(resolve)
                .onStop(resolve)
                .start()
    });
}


const show_photo = async function(texture, ratio, time = 1, do_transition = true) {
    if (ratio > 1) {
        ratio = ratio / 1.2687
    } else if (ratio < 1) {
        ratio = ratio * 1.2687
    }
    
    if (do_transition) { 
        planes.material.uniforms.photo_texture.value = planes.material.uniforms.photo_texture_transition.value;
        planes.material.uniforms.photo_mix.value = 0;
        planes.material.uniforms.photo_texture_transition.value = texture;
        planes.material.uniforms.tex_mode_a.value = planes.material.uniforms.tex_mode_b.value;
        planes.material.uniforms.tex_mode_mix.value = 0;
        planes.material.uniforms.tex_mode_b.value = 2;
        planes.material.uniforms.vert_mode_a.value = planes.material.uniforms.vert_mode_b.value;
        planes.material.uniforms.vert_mode_mix.value = 0;
        planes.material.uniforms.vert_mode_b.value = 3;
    } else {
        planes.material.uniforms.photo_texture_transition.value = texture;
    }
    return new Promise(async resolve => {
        if (do_transition) {
            await Promise.all([
                transition("vert_mode_mix", 1, time * Math.random() * 8000 + 2000, TWEEN.Easing.Cubic.Out),
                transition("tex_mode_mix", 1, time * Math.random() * 8000 + 2000, TWEEN.Easing.Bounce.InOut),
                transition("photo_mix", 1, time * Math.random() * 8000 + 2000, TWEEN.Easing.Quadratic.Out),
                transition("photo_ratio", ratio, time * Math.random() * 4000 + 1000, TWEEN.Easing.Bounce.InOut)
            ])
        } 
        resolve();
    });
}

const move_camera_to_photo = function () {
    // Move camera to a position to see full pictures
    return new Promise(tween_resolve => {
        new TWEEN.Tween(camera.position)
            .to({x:0, y:0, z:260}, Math.random() * 6000 + 6000)
            .easing(TWEEN.Easing.Quadratic.InOut)
            .onComplete(tween_resolve)
            .start()
    });
}

let current_project;
const title_element = document.getElementById('title')
const show_project = async function(id) {
    return new Promise(async resolve => {
        debug_log("Looking for a project to show")
        let project = await choose_project(id);
        let has_audio = project.audios.length > 0;
        let has_video = project.videos.length > 0;
        let has_image = project.textures.length > 0;

        if (!has_audio && !has_video && !has_image) {
            // Project has no content to show, lets try another random one
            debug_log("Project has no content, will try another one.");
            await show_project()
            resolve()
            return
        }

        debug_log(`Showing project with id: ${project.id} [${project.title}]`);
        if (current_project && current_project != project) {
            clear_project_content(current_project)
        }
        
        current_project = project;
        
        let chosen_video;
        let play_audio = false;
        let promises = [];
        control.autoRotate = false; 

        if (has_audio && (!has_video || Math.random() > 0.5)) {
            play_audio = true;
            chosen_audio = choose(project.audios)
            debug_log("Play audio")
            // pause the main audio player
            new TWEEN.Tween(audio_player).to({volume: 0}, 1000).onComplete(()=>{audio_player.pause(); console.log("paused audio player")}).start();
            audio_player_title.innerHTML = ''
            chosen_audio.play()
            project.playing_audio = true;
            audio_player_title.innerHTML = `Audio from "${project.name}" by ${project.authors}`
            if (project.credit) {
                audio_player_title.innerHTML += `, ${project.credit}`
            }
            audio_promise = new Promise(audio_resolve => {
                chosen_audio.onerror = () => { debug_log("Error on audio"); audio_resolve(); project.playing_audio = false }; // show_project(); };
                chosen_audio.onended = () => { debug_log("Audio ended"); audio_resolve(); project.playing_audio = false };
            })
            promises.push(audio_promise);
        }

        let texture;
        let ratio;
        if (has_video && !play_audio) {
            chosen_video = choose(project.videos);
            // Wait for video element to be ready and loaded
            await new Promise(resolve => setTimeout(resolve, 4000));
            texture = chosen_video.texture;
            
            await new Promise(async resolve => {
                // timeout for playing
                let promise = chosen_video.element.play()
                let promise_done;
                promise.then(() => promise_done = true);
                let ttl = 20
                const check_promise = function () {
                    ttl--;
                    if (promise_done || ttl <= 0) {
                        resolve();
                    } else {
                        setTimeout(check_promise, 500)
                    }
                }

                check_promise(10)
            })

            if (chosen_video.element.mozHasAudio || 
                    chosen_video.element.webkitAudioDecodedByteCount != undefined || 
                    Boolean(chosen_video.element.audioTracks && chosen_video.element.audioTracks.length)) {
                // pause the main audio player
                new TWEEN.Tween(audio_player).to({volume: 0}, 4000).onComplete(()=>audio_player.pause()).start();
                audio_player_title.innerHTML = ''
                project.playing_audio = true;
            }

            title_element.innerHTML = `Now showing "${project.name}" by ${project.authors}`
            if (project.credit) {
                title_element.innerHTML += `, ${project.credit}`
            }

            ratio = chosen_video.element.videoWidth / chosen_video.element.videoHeight;
            promises.push(show_photo(texture, ratio))
            promises.push(move_camera_to_photo())
            
            promises.push(new Promise(async video_resolve => {
                await new Promise(resolve => setTimeout(resolve, 10000));
                while (!chosen_video.element.paused) {
                    if (Math.random() > 0.7) {
                        await go_random(true)
                        await new Promise(resolve => setTimeout(resolve, 5000));
                    } else {
                        await show_photo(texture, ratio)
                        promises.push(move_camera_to_photo())
                        await new Promise(resolve => setTimeout(resolve, 15000));
                    }
                }
                video_resolve()
            }))

            promises.push(new Promise(video_resolve => {
                const video_done_resolve = async () => {
                    planes.material.uniforms.photo_texture.value = planes.material.uniforms.photo_texture_transition.value;
                    if (project.texture) {
                        planes.material.uniforms.photo_texture_transition.value = project.texture;
                        project.texture.flipY = true;
                        project.texture.needsUpdate = true;
                    }
                    planes.material.uniforms.photo_mix.value = 0;
                    await transition('photo_mix', 1, 1)
                    video_resolve(); 
                    project.playing_audio = false;
                };

                chosen_video.element.onerror = async () => { 
                    debug_log("Error on video");
                    await video_done_resolve();
                };
                chosen_video.element.onended = async () => { 
                    debug_log("Video ended");
                    await video_done_resolve();
                };
            }));
        } else {
            promises.push(move_camera_to_photo());
            title_element.innerHTML = `Now showing "${project.name}" by ${project.authors}`
            if (project.credit) {
                title_element.innerHTML += `, ${project.credit}`
            }

            if (has_image) {
                let wait_time = Math.random() * 60 + 60;
                let how_many_times = (Math.random() * 150 + 50) / project.textures.length;
                let total_time = wait_time * how_many_times;
                if (project.textures.length > 0) {
                    total_time *= project.textures.length;
                }
                let transition_time = Math.random() * total_time + 10000;
                let vert_transition = true;
                promises.push(new Promise(resolve => setTimeout(async () =>{ await go_random(true); resolve() }, Math.min(transition_time*4, total_time))))
                for (; how_many_times > 0; how_many_times-=1) {
                    for (const i in project.textures) {
                        if (!project.textures || project.textures.length == 0) { continue }
                        let texture = project.textures[i];//choose(project.textures)
                        ratio = texture.image.width / texture.image.height;
                        promises.push(show_photo(texture, ratio, transition_time/10000, vert_transition))
                        vert_transition = false;
                        await new Promise(resolve => setTimeout(resolve, wait_time));
                    }
                }
            } else {
                ratio = project.texture.image.width / project.texture.image.height;
                await show_photo(project.texture);
                await new Promise(resolve => setTimeout(resolve, Math.random() * 5000+5000));
            }
        }
        if (play_audio) {
            // Wait for audio to finish playing, but keep travelling around
            let is_done = false;
            Promise.all(promises).then(() => {is_done = true});
            while (!is_done) {
                if (Math.random() > 0.2) {
                    await go_random()
                    await new Promise(resolve => setTimeout(resolve, Math.random() * 25000 + 5000));
                } else {
                    ratio = project.texture.image.width / project.texture.image.height;
                    await show_photo(project.texture);
                    await new Promise(resolve => setTimeout(resolve, Math.random() * 5000+5000));
                }
            }
        } else {
            await Promise.all(promises)
        }
        // Done showing
        title_element.innerHTML = ""
        resolve()
    });
}

const go_random = async function(keep_texture=false) {
    debug_log('Going random')
    return new Promise(async resolve => {
        planes.material.uniforms.vert_mode_a.value = planes.material.uniforms.vert_mode_b.value;
        planes.material.uniforms.vert_mode_mix.value = 0;
        planes.material.uniforms.vert_mode_b.value = choose([4,5]);
        planes.material.uniforms.tex_mode_a.value = planes.material.uniforms.tex_mode_b.value;
        planes.material.uniforms.tex_mode_mix.value = 0;
        planes.material.uniforms.tex_mode_a.value = planes.material.uniforms.tex_mode_b.value;
        if (keep_texture) 
            planes.material.uniforms.tex_mode_b.value = choose([2,3]);
        else if (planes.material.uniforms.tex_mode_a.value > 1) 
            planes.material.uniforms.tex_mode_b.value = choose([1,2,3]);
        else 
            planes.material.uniforms.tex_mode_b.value = 1;
        let ampli = Math.random() * 100 + 10;
        control.autoRotate = true;
        await Promise.all([
            transition("vert_mode_mix", 1, Math.random() * 4000 + 8000, TWEEN.Easing.Cubic.Out),
            transition("amplitude", ampli, Math.random() * 4000 + 8000, TWEEN.Easing.Cubic.InOut),
            transition("tex_mode_mix", 1, Math.random() * 4000 + 8000, TWEEN.Easing.Bounce.InOut),
            new Promise(tween_resolve => {
                    new TWEEN.Tween(camera.position)
                        .to({
                            x: (Math.random()*2-1) * ampli,
                            y: (Math.random()*-1) * ampli,
                            z: (Math.random()*2-1) * ampli
                        }, Math.random() * 4000 + 4000)
                        .easing(TWEEN.Easing.Quadratic.InOut)
                        .onComplete(tween_resolve)
                        .start()
            })
        ])
        resolve();
    })
}


var planes;
const run = async function() {
    const textures = setup_thumbnail_textures(all_textures);
    const n_instances = 160000;
    const shaderMaterial = new THREE.ShaderMaterial({
        side: THREE.DoubleSide,
        uniforms: {
            frame: {value: 0}, 
            textures: {value: textures},
			photo_ratio: {value: 1},
			photo_texture: {value: all_textures[0]},
			photo_texture_transition: {value: all_textures[1]},
			photo_mix: {value: 0},
            n_tex: {value: all_textures.length}, 
            n_instances: {value: n_instances},
            vert_mode_a: {value: 4},
            vert_mode_b: {value: 4},
            vert_mode_mix: {value: 0},
            tex_mode_a: {value: 1},
            tex_mode_b: {value: 1},
            tex_mode_mix: {value: 0},
            amplitude: {value: 1},
        },
        vertexShader: vShader,
        fragmentShader: fShader
    });

    const geometry = new THREE.PlaneGeometry();
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    planes = new THREE.InstancedMesh( geometry, shaderMaterial, n_instances);
    let instances_indexes = new Float32Array(n_instances);
    let instances_ids = new Float32Array(n_instances);
    var dummy = new THREE.Object3D();
    for (let i = 0; i < n_instances; i++) {
        instances_indexes[i] = i;//Math.floor(Math.random() * i);
        instances_ids[i] = Math.floor(Math.random() * n_instances);
        let x = i - n_instances/2;
        let w = Math.pow(n_instances, 0.5);
        let h = w;
        planes.setMatrixAt(i, dummy.matrix.setPosition(0,0,0));
    };

    geometry.setAttribute( 'instance_index', new THREE.InstancedBufferAttribute( instances_indexes, 1 ) );
    geometry.setAttribute( 'instance_id', new THREE.InstancedBufferAttribute( instances_ids, 1 ) );

    scene.add( planes );

    planes.instanceMatrix.needsUpdate = true; 
    planes.rotation.x = Math.PI/2

    camera.position.z = 250;

    animate(0);
}

const audio_player = document.getElementById("audio_player")
const audio_player_title = document.getElementById("audio_title")
let last_audio;
let already_loading = false;
const play_audio_from_some_project = async function() {
    if (!audio_player.paused || already_loading) {
       // already playing
       return
    } 
    already_loading = true;
    audio_player_title.innerHTML = ""
    let found = false;
    while (!found) {
        let project = await choose_project(null, false)
        for (const j in project.content) {
            let content = choose(project.content)
            if (content.type == 'audio') {
                if (last_audio && content.content == last_audio) continue
                // If there is a project already playing audio, just leave
                if (current_project && current_project.playing_audio) { console.log("just leave"); already_loading = false; return }
                found = true;
                audio_player.pause();
                audio_player.src = content.content
                audio_player.volume = 1;
                await audio_player.play();
                audio_player.onended = () => { audio_player_title.innerHTML = '' };
                audio_player.onerror = () => { audio_player_title.innerHTML = '' };
                audio_player_title.innerHTML = `Sound from "${project.name}" by ${project.authors}`
                if (project.credit) {
                    audio_player_title.innerHTML += `, ${project.credit}`
                }
                last_audio = content.content
                break;
            }
        }
    }
    already_loading = false;
}

const director = async function () {
    document.getElementById("footer").style.display = 'block'
    let prob = 0.0;
    play_audio_from_some_project()
    while (true) {
        if (Math.random() > prob) {
            await go_random();
            last_was_project = false;
            await new Promise(resolve => setTimeout(resolve, Math.random() * 20000 + 10000));
            prob += 0.3
        } else {
            await show_project()
            prob = 0.0;
        }
        play_audio_from_some_project()
    }
}

let frame = 0;
const animate = function (time) {
    requestAnimationFrame( animate );
    
    planes.material.uniforms.frame.value = frame;
    frame++;
    
    TWEEN.update(time) 
    control.update(time)

    if (DEBUG) stats.update();
    
    renderer.render( scene, camera );
};



window.addEventListener("keydown", function (event) {
  if (event.defaultPrevented) {
    return; // Should do nothing if the default action has been cancelled
  }

  if (event.code == "Space") {
    audio_player.muted = !audio_player.muted;
	current_project.videos.forEach( (vid) => { vid.element.muted  = !vid.element.muted })
  }
}, true);

ready();
