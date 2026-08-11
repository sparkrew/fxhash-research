function keyPressed() {

    if (player.status == 'idle' && dialogOpen == 'none') {

        if (key == ' ' || keyCode === 32) {
            player.doAction()
        }
    
    }

    if (key == 'p' || keyCode === 80) {
        if (!bgMusic.isPlaying()) {
            bgMusic.loop();
            bgMusic.setVolume(0.5)
        } else {
            bgMusic.stop()
            soundOn = false
        }
    }
    

    if (key == 'i' || keyCode === 73) {
        if (dialogOpen == 'none') {
            console.log("Opening character screen..")
            dialogOpen = 'character'
        } else if (dialogOpen == 'character') {
            console.log("Closing character screen..")
            dialogOpen = 'none'
        }
    }

    if (key == 'r' || keyCode === 82) {
        if (dialogOpen == 'none') {
            console.log("Opening reset screen..")
            dialogOpen = 'reset'
        }
    }

    if (dialogOpen == 'reset') {
        if (keyCode === 89 || key == 'y') {
            dialogOpen = 'none'
            resetGame()
        } else if (keyCode === 78 || key == 'n') {
            console.log("Closing reset screen..")
            dialogOpen = 'none'
        }
    }

    if (dialogOpen == 'death' || dialogOpen == 'victory') {
        if (keyCode === 82 || key == 'r') {
            dialogOpen = 'none'
            resetGame()
        }
    }

}