var player1;
var youtubeId1 = ["HHLIsKwOkOs"];

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var video1_readyPlay = false;

function onYouTubePlayerAPIReady() {
	player1 = new YT.Player("player1", {
		height: '100%',
		width: '100%',
		videoId: youtubeId1[0],
		playerVars: {'controls':1,'autohide':0,'rel':0,'wmode':'transparent','playsinline':1, 'allowScriptAccess': 'always'},
		events: {
			'onReady': onPlayerReady1,
			'onStateChange': onPlayerStateChange1
		}
	});
}
function onPlayerReady1(event) {
    //event.target.setPlaybackQuality('hd720');     
    video1_readyPlay = true;     
}
function onPlayerStateChange1(event) {
    if (event.data == YT.PlayerState.PLAYING) {
		$("#event_popup3 .youtube_box .yt_poster").addClass('on');
    }	
    if (event.data == YT.PlayerState.ENDED) {
		$("#event_popup3 .youtube_box .yt_poster").removeClass('on');
    }	
}










