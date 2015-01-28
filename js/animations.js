$(document).ready(function(){
    $('#tweet-controls').hide();
    
    
    $('.tweet-compose').on('focus', function () {
        $(this).css('height', '80px');
        
        $('#tweet-controls').css('display', 'inherit');
    }); 
    
    $('.tweet-compose').on('keyup',function() {
        
        var charLength = $(this).val().length;
        if (charLength < 140) {
            $('#char-count').text(140 - charLength);
            if (charLength > 130) {
                $('#char-count').css('color', 'red');
                console.log(charLength);
            };
            $('#char-count').css('color', '#999');
            $('.button').removeClass('disabled');
        }   else {
            $('.button').addClass('disabled');
            $('#char-count').text('0');
            $('#char-count').css('color', '#999');
     
        }
        
    });
    
    $('#tweet-submit').on('click', function () {
        var tweet = '<li>' + $('.tweet-compose').val() + '</li>';
        var name = $('#profile-summary p').text();
        $('#stream').prepend('<div class="tweet"> <div class="content"> <img class="avatar" src="img/alagoon.jpg" /> <strong class="fullname">' + name + '</strong> <span class="username">@superbullock</span> <p class="tweet-text">' + tweet + '</p> <div class="tweet-actions"> <ul> <li><span class="icon action-reply"></span> Reply</li> <li><span class="icon action-retweet"></span> Retweet</li> <li><span class="icon action-favorite"></span> Favorite</li> <li><span class="icon action-more"></span> More</li> </ul> </div> <div class="stats"> <div class="retweets"> <p class="num-retweets">30</p> <p>RETWEETS</p> </div> <div class="favorites"> <p class="num-favorites">6</p> <p>FAVORITES</p> </div> <div class="users-interact"> <div> <img src="img/alagoon.jpg" /> <img src="img/vklimenko.jpg" /> </div> </div> <div class="time"> 1:04 PM - 19 Sep 13 </div> </div> <div class="reply"> <img class="avatar" src="img/alagoon.jpg" /> <textarea class="tweet-compose" placeholder="Reply to @mybff"/></textarea> </div> </div> </div>');
        
                                                     
    });
});