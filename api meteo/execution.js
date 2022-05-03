
$("#submit").click(function(){
    window.setTimeout(function(){
        $('.meteo').css('display','flex');
      }, 16000);
    chargerdonner($("#search").val());
    var video = document.createElement('video');
    video.src = 'soleil.mp4';
    video.play();
    $("html").append(video);
    $("video").delay(14000).fadeOut(1100);
    $('#submit').click(
        function() {
            $('video').show();
            
        },
        function() {
            $('video').remove();
        }
    );
   
})
