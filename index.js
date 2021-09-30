console.log("Script Loded")
var audioPlayer = document.getElementById("audio-player");


var btnPlay = document.getElementById("btn-play");
var btnPause= document.getElementById("btn-pause");
var btnForward = document.getElementById("btn-forward");
var btnBackward= document.getElementById("btn-backward");
var btnPlaybackPoint5 = document.getElementById("btn-playback-0.5");
var btnPlaybackNormal = document.getElementById("btn-playback-0.5");
var btnPlayback1Point5 =document.getElementById("btn-playback-0.5");
var progressBar = document.getElementById("progress-bar");
var btnNext = document.getElementById("btn-next");
var btnPrev = document.getElementById("btn-prev");


//  audioPlayer.volume = 0.3;
//  playerVolume.innerHTML = audioPlayer.volume * 100 + "%";

// audioPlayer.addEventListener("ended", nextSong);


audioPlayer.addEventListener("timeupdate", function() {
   var durationPlayerSoFar = audioPlayer.currentTime/audioPlayer.
   duration * 100;

   console.log(durationPlayerSoFar);
   progressBar.style.width = durationPlayerSoFar + "%";

})

///////////////////////////////////////////////////////////////
btnPlay.addEventListener("click",function
(){
  audioPlayer.play();
})

btnPause.addEventListener("click" , function
(){
   audioPlayer.pause();

})

//////////////////////////////////////////////////////////////////

btnForward.addEventListener("click",function
() {
  var updatedDuration =  audioPlayer.currentTime + 10;
  if(updatedDuration > audioPlayer.duration) {
     audioPlayer.currentTime  = audioPlayer.duration
  } else{
     audioPlayer.currentTime = updatedDuration;
  }
})

btnBackward.addEventListener("click" , function
() {

   var updatedDuration =  audioPlayer.currentTime - 10;
   if(updatedDuration > audioPlayer.duration) {
      audioPlayer.currentTime  = audioPlayer.duration;
   } else{
      audioPlayer.currentTime = updatedDuration;
   }
  
});

//////////////////////////////////////////////////////////////









////////////////////////////////////////////////////////////////


// btnPlaybackPoint5.addEventListener("click",function(){
//    audioPlayer.playbackRate = 0.5;
// })

// btnPlaybackNormal.addEventListener("click",function(){
//    audioPlayer.playbackRate = 1;
// })

// btnPlayback1Point5.addEventListener("click",function(){
//    audioPlayer.playbackRate = 1.5;
// })

////////////////////////////////////////////////////////////////

// btnVolumeInc.addEventListener("click" , function () {
//    var updatedVolume =  audioPlayer.volume + 0.1;
//    if(updatedVolume  )
   
//     playerVolume.innerHTML = audioPlayer.volume * 100 + "%";
// })

// btnVolumeDec.addEventListener("click" , function() {
//    audioPlayer.volume -= 0.1 
//    playerVolume.innerHTML = audioPlayer.volume * 100 + "%";
// })

///////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////

function renderAudioTrack(data){
  var card = $("<div>").addClass("playlist-card").attr("id" , data . id)
  var thumbnail = $("<img>").addClass("cover-img").attr("src",data.albumCover);
  var meta =$("<div>");
  var title = $("<h3>").addClass("track-title").html(data.track)
  var artist = $("<p>").addClass("track-artist").html(data.artist)
  meta .append(title,artist);

card.append(thumbnail, meta)
$("#playlist-section").append(card);


card.click(function() {
  
   var id = $(this).attr("id");

   $.get("http://5dd1894f15bbc2001448d28e.mockapi.io/playlist/" + 
   id, function(response){
   
      $("#audio-track-title").html(response.track)
      $("#audio-track-artist").html(response.artist)
      $("#audio-source").attr("src",response.file)
      $("#main-img").attr("src" , response.albumCover)
        audioPlayer.load();
        audioPlayer.play();

       
      
        
      })
      
     

  })
    
}

$.get("http://5dd1894f15bbc2001448d28e.mockapi.io/playlist" , function(response){
   console.log(response);
   for(var i=0 ; i<response.length ; i++){
    renderAudioTrack(response[i]);
   }
})

