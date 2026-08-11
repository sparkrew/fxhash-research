            var audioContext = new AudioContext();
            //const compressor = audioContext.createDynamicsCompressor();
            
            let patch = null
            let stream = null
            let webpdNode = null
            let engegat=false
            const initApp = async () => {
                // Register the worklet
                await WebPdRuntime.initialize(audioContext)

                // Fetch the patch code
                response = await fetch('patch.wasm')
                patch = await response.arrayBuffer()

              

               
            }

            const startApp = async () => {
                 // AudioContext needs to be resumed on click to protects users 
                // from being spammed with autoplay.
                // See : https://github.com/WebAudio/web-audio-api/issues/345
                if (audioContext.state === 'suspended') {
                    audioContext.resume()
                }

                // Setup web audio graph
                webpdNode = await WebPdRuntime.run(
                    audioContext, 
                    patch, 
                    WebPdRuntime.defaultSettingsForRun('./patch.wasm'),
                )
                webpdNode.connect(audioContext.destination)

               



                
                
            }

           

            initApp().
                then(() => {
                    console.log('App initialized')
                })

            // You can then use this function to interact with your patch
            // e.g. :
            // sendMsgToWebPd('n_0_1', '0', ['bang'])
            // sendMsgToWebPd('n_0_2', '0', [123])
            const sendMsgToWebPd = (nodeId, portletId, message) => {
                webpdNode.port.postMessage({
                    type: 'io:messageReceiver',
                    payload: {
                        nodeId,
                        portletId,
                        message,
                    },
                })
            }
            


           // Here is an index of objects IDs to which you can send messages, with hints so you can find the right ID.
            // Note that by default only GUI objects (bangs, sliders, etc ...) are available.
            //  - nodeId "n_0_0" portletId "0"
            //      * type "hradio"
            //      * position [111,19]
            
            //  - nodeId "n_0_1" portletId "0"
            //      * type "floatatom"
            //      * position [109,57]
            //      * label "in_kick0_play"
            
            //  - nodeId "n_0_2" portletId "0"
            //      * type "hradio"
            //      * position [497,11]
            
            //  - nodeId "n_0_3" portletId "0"
            //      * type "floatatom"
            //      * position [498,48]
            //      * label "in_hihat0_play"
            
            //  - nodeId "n_0_4" portletId "0"
            //      * type "hradio"
            //      * position [777,8]
            
            //  - nodeId "n_0_5" portletId "0"
            //      * type "floatatom"
            //      * position [778,45]
            //      * label "in_beep0_play"
            
            //  - nodeId "n_0_6" portletId "0"
            //      * type "floatatom"
            //      * position [1006,52]
            //      * label "in_clic0_play"
            
            //  - nodeId "n_0_7" portletId "0"
            //      * type "hradio"
            //      * position [1009,10]
            
            //  - nodeId "n_0_8" portletId "0"
            //      * type "floatatom"
            //      * position [1356,46]
            //      * label "in_noise0_play"
            
            //  - nodeId "n_0_9" portletId "0"
            //      * type "hradio"
            //      * position [1359,4]
            
            //  - nodeId "n_0_16" portletId "0"
            //      * type "floatatom"
            //      * position [174,218]
            //      * label "in_kick0_dl"
            
            //  - nodeId "n_0_17" portletId "0"
            //      * type "floatatom"
            //      * position [143,137]
            //      * label "in_kick0_fb"
            
            //  - nodeId "n_0_18" portletId "0"
            //      * type "hsl"
            //      * position [150,112]
            
            //  - nodeId "n_0_19" portletId "0"
            //      * type "hsl"
            //      * position [178,193]
            
            //  - nodeId "n_0_20" portletId "0"
            //      * type "msg"
            //      * position [176,169]
            
            //  - nodeId "n_0_21" portletId "0"
            //      * type "msg"
            //      * position [147,81]
            
            //  - nodeId "n_0_22" portletId "0"
            //      * type "floatatom"
            //      * position [564,222]
            //      * label "in_hihat0_dl"
            
            //  - nodeId "n_0_23" portletId "0"
            //      * type "floatatom"
            //      * position [533,141]
            //      * label "in_hihat0_fb"
            
            //  - nodeId "n_0_24" portletId "0"
            //      * type "hsl"
            //      * position [540,116]
            
            //  - nodeId "n_0_25" portletId "0"
            //      * type "hsl"
            //      * position [568,197]
            
            //  - nodeId "n_0_26" portletId "0"
            //      * type "msg"
            //      * position [566,173]
            
            //  - nodeId "n_0_27" portletId "0"
            //      * type "msg"
            //      * position [537,85]
            
            //  - nodeId "n_0_28" portletId "0"
            //      * type "floatatom"
            //      * position [827,215]
            //      * label "in_beep0_dl"
            
            //  - nodeId "n_0_29" portletId "0"
            //      * type "floatatom"
            //      * position [796,134]
            //      * label "in_beep0_fb"
            
            //  - nodeId "n_0_30" portletId "0"
            //      * type "hsl"
            //      * position [803,109]
            
            //  - nodeId "n_0_31" portletId "0"
            //      * type "hsl"
            //      * position [831,190]
            
            //  - nodeId "n_0_32" portletId "0"
            //      * type "msg"
            //      * position [829,166]
            
            //  - nodeId "n_0_33" portletId "0"
            //      * type "msg"
            //      * position [800,78]
            
            //  - nodeId "n_0_34" portletId "0"
            //      * type "floatatom"
            //      * position [1089,204]
            //      * label "in_clic0_dl"
            
            //  - nodeId "n_0_35" portletId "0"
            //      * type "floatatom"
            //      * position [1058,123]
            //      * label "in_clic0_fb"
            
            //  - nodeId "n_0_36" portletId "0"
            //      * type "hsl"
            //      * position [1065,98]
            
            //  - nodeId "n_0_37" portletId "0"
            //      * type "hsl"
            //      * position [1093,179]
            
            //  - nodeId "n_0_38" portletId "0"
            //      * type "msg"
            //      * position [1091,155]
            
            //  - nodeId "n_0_39" portletId "0"
            //      * type "msg"
            //      * position [1062,67]
            
            //  - nodeId "n_0_40" portletId "0"
            //      * type "floatatom"
            //      * position [1417,208]
            //      * label "in_noise0_dl"
            
            //  - nodeId "n_0_41" portletId "0"
            //      * type "floatatom"
            //      * position [1386,127]
            //      * label "in_noise0_fb"
            
            //  - nodeId "n_0_42" portletId "0"
            //      * type "hsl"
            //      * position [1393,102]
            
            //  - nodeId "n_0_43" portletId "0"
            //      * type "hsl"
            //      * position [1421,183]
            
            //  - nodeId "n_0_44" portletId "0"
            //      * type "msg"
            //      * position [1419,159]
            
            //  - nodeId "n_0_45" portletId "0"
            //      * type "msg"
            //      * position [1390,71]
            


            // ------------- 3. SENDING MESSAGES FROM THE PATCH TO JAVASCRIPT
            // Coming soon ... 


