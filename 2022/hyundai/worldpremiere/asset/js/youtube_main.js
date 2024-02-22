if (ioniqApp.data._gdpr_settings === 'none' || (ioniqApp.data._gdpr_settings !== 'none' && ioniqApp.data._gdpr_settings.preference.functional === 'true')) {
	
	var tag = document.createElement('script');
	tag.src = "//www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	var player_main;
	var player_ready = false;
	var playerId = "U8eryJF-w2s";

	function onYouTubePlayerAPIReady() {
		player_main = new YT.Player("player_main", {
			height: '100%',
			width: '100%',
			videoId: playerId,
			playerVars: {
				'controls': 1,
				'autohide': 0,
				'rel': 0,
				'wmode': 'opaque',
				'html5': 1,
				'playsinline': 1,
				'autoplay': 0,
			},
			events: {
				'onReady': onPlayerReady1,
				'onStateChange': onPlayerStateChange1
			}
		});
	}

	function onPlayerReady1(event) {  
		player_ready = true;
	}

	function onPlayerStateChange1(event) {
		if (event.data == YT.PlayerState.PLAYING) {

		}
		if (event.data == YT.PlayerState.ENDED) {

		}
	}

}