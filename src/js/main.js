console.log('main.js');

$("#submit").click(function(){
   $.ajax({url: "php/mailer.php", type: 'POST', success: function(result){
       $("form").hide();
   }});
   return false;
});

function scrollToAnchor(){
    var aTag = $('#arrow-link');
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

$("#arrow-link").click(function() {
   scrollToAnchor('#arrow-end');
   console.log(' arrow clicked');
});

$('.play-container').click(function(){
	alert("HEY GUYS! This will play a youtube video in a lightbox like AVMA microsite but need to upload the final video to youtube.")
});