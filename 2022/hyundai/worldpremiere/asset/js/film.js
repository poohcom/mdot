$(function(){			
  filmInit();
});

function filmInit(){
  $(".film_list li a").on("click", function(){
    var youtubeId = $(this).attr("data-youtube");
    console.log(player_ready);
    if(player_ready || !ioniqApp.data._gdpr_settings === 'none' || !(ioniqApp.data._gdpr_settings !== 'none' && ioniqApp.data._gdpr_settings.preference.functional === 'true')) {
      togglePopup('#popup_film');
      player_film.cueVideoById(youtubeId);
      setTimeout(function(){
        player_film.playVideo();  
      }, 500);
    }  
  });
  $("#popup_film .btn_close").on("click", function(){
    player_film.pauseVideo();  
  });
  
}		