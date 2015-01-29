$(document).ready(function(){
    $('#tweet-controls').hide();
    $('.tweet-actions').hide();
    $('.stats').hide();
    $('.reply').hide();
    
    
    $('.tweet-compose').on('focus', function () {
        $(this).css('height', '5em');
        
        $('#tweet-controls').css('display', 'inherit');
        
    }); 
    
    $('.tweet-compose').on('blur', function () {
        if ($(this).val().length === 0) {
            $('#tweet-controls').hide();
            $(this).css('height', '2.5em');
        }
    });
    
    $('.tweet-compose').on('keyup',function() {
        
        var charLength = $(this).val().length;
        
        if (charLength <= 140) {
            
            $('#char-count').text(140 - charLength);
            
            if (charLength > 130) {
                
                $('#char-count').css('color', '#E63539');
                
            } else {
                
                $('#char-count').css('color', '#999');
                
            }
            
            $('.button').removeAttr('disabled');
            
        }   else {
            
            $('.button').attr('disabled','disabled');
            
            $('#char-count').text('0');
     
        }
        
    });
    
    $('#tweet-submit').on('click', function () {
        var tweet = $('.tweet-compose').val();
        var name = $('#profile-summary p').text();
        $('#stream').prepend('<div class="tweet"> <div class="content"> <img class="avatar" src="img/alagoon.jpg" /> <strong class="fullname">' + name + '</strong> <span class="username">@superbullock</span> <p class="tweet-text">' + tweet + '</p> <div class="tweet-actions"> <ul> <li><span class="icon action-reply" data-toggle="tooltip" data-original-title="Reply"></span></li> <li><span class="icon action-retweet" data-toggle="tooltip" data-original-title="Retweet"></span></li> 	<li><span class="icon action-favorite" data-toggle="tooltip" data-original-title="Favorite"></span></li> <li><span class="icon action-more" data-toggle="tooltip" data-original-title="More..."></span> </li> </ul> </div> <div class="stats"> <div class="retweets"> <p class="num-retweets">30</p> <p>RETWEETS</p> </div> <div class="favorites"> <p class="num-favorites">6</p> <p>FAVORITES</p> </div> <div class="users-interact"> <div> <img src="img/alagoon.jpg" /> <img src="img/vklimenko.jpg" /> </div> </div> <div class="time"> 1:04 PM - 19 Sep 13 </div> </div> <div class="reply"> <img class="avatar" src="img/alagoon.jpg" /> <textarea class="tweet-compose" placeholder="Reply to @mybff"/></textarea> </div> </div> </div>');
        $('.tweet-compose').val('');
        $('#tweet-controls').hide();
        $('.tweet-compose').css('height', '2.5em');
        $('#char-count').text(140);
    });
    
    $('#stream').on('mouseenter', '.tweet', function() {
        $(this).find('.tweet-actions').show();
    });
    
    $('#stream').on('mouseleave', '.tweet', function() {
        $(this).find('.tweet-actions').hide();
    });
    
    $('#stream').on('click','.tweet', function() {
        $(this).find('.tweet-actions').show();
        $(this).find('.stats').show();
        $(this).find('.reply').show();
    });
    
    $('#stream').on('dblclick', '.tweet', function() {
        $(this).find('.tweet-actions').hide();
        $(this).find('.stats').hide();
        $(this).find('.reply').hide();
    });
    
    $(function () { $("[data-toggle='tooltip']").tooltip(); });
});