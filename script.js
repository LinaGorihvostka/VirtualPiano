document.addEventListener("keydown", function(event) {
    if (event.code == "KeyA") {
        let audio = document.createElement("AUDIO");
        audio.src = "media/A.mp3";
        audio.play();
    } else if (event.code == "KeyS") {
        let audio = document.createElement("AUDIO");
        audio.src = "media/S.mp3";
        audio.play();
    } else if (event.code == "KeyD") {
        let audio = document.createElement("AUDIO");
        audio.src = "media/D.mp3";
        audio.play();
    } else if (event.code == "KeyF") {
        let audio = document.createElement("AUDIO");
        audio.src = "media/F.mp3";
        audio.play();
    } else if (event.code == "KeyG") {
        let audio = document.createElement("AUDIO");
        audio.src = "media/G.mp3";
        audio.play();
    } else if (event.code == "KeyH") {
        let audio = document.createElement("AUDIO");
        audio.src = "media/H.mp3";
        audio.play();
    } else if (event.code == "KeyJ") {
        let audio = document.createElement("AUDIO");
        audio.src = "media/J.mp3";
        audio.play();
    } else if (event.code == "KeyW") {
        let audio = document.createElement("AUDIO");
        audio.src = "media/W.mp3";
        audio.play();
    } else if (event.code == "KeyE") {
        let audio = document.createElement("AUDIO");
        audio.src = "media/E.mp3";
        audio.play();
    } else if (event.code == "KeyT") {
        let audio = document.createElement("AUDIO");
        audio.src = "media/T.mp3";
        audio.play();
    } else if (event.code == "KeyY") {
        let audio = document.createElement("AUDIO");
        audio.src = "media/Y.mp3";
        audio.play();
    } else if (event.code == "KeyU") {
        let audio = document.createElement("AUDIO");
        audio.src = "media/U.mp3";
        audio.play();
    } else {
        console.log("Press the piano keys, please.");
    }
});

