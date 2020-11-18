var video;;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	let vol = document.querySelector("#volume").innerHTML = 100*video.volume + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate*.9;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate/.9;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime < video.duration && video.currentTime > video.duration-5) {
		console.log(video.currentTime);
		video.currentTime = 0;
	}
	else {
		video.currentTime += 5;
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == true) {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}
	else {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	video.volume = this.value/100;
	document.querySelector("#volume").innerHTML = 100*video.volume + "%";
});

document.querySelector("#old").addEventListener("click", function() {
	document.getElementById("myVideo").className = "oldTime";
});

document.querySelector("#original").addEventListener("click", function() {
	document.getElementById("myVideo").classList.remove("oldTime");
});