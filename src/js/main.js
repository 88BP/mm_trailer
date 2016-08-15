console.log('main.js');

var myFirebaseRef = new Firebase("https://radiant-fire-5832.firebaseio.com");

$("#submit").click(function(e) {

	var formData = {
	    'name': $('#name').val(),
	    'email': $('#email').val(),
	    'company': $('#company').val(),
	    'phone': $('#phone').val(),
	    'message': $('#message').val()
	};

    $.ajax({
        url: "php/mailer.php",
        type: 'POST',
        data: formData,
        success: function(result) {
            $(".connect-form").trigger("reset");
            $(".form-success").show();
        },
				error: function(error) {
					console.log(error);
				}
    });
    e.preventDefault();
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