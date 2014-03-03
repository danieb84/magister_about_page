/**
 * jQuery script for contact form.
 * Created by danielle matthews.
 */

var startup = function() {
    var $contactForm = ".contact-form";
    var $email = ".email-button";
    var $send = ".submit-btn";
    var $confirm = "#about-page .confirm-submit";
    var $closeForm = "#about .close";
    var $overlay = ".overlay";

    $($overlay).hide();
    $($confirm).hide();

    //brings up contact form to lay on top of About Page with a partially-opaque dark overlay
    $($email).on('vclick', function(){
        $($contactForm).css({transform:'translate3d(0,-100%,0)', transition:'0.5s'});
        $($overlay).fadeIn();
    });

    //closes form
    $($closeForm).on('vclick', function(){
        $($contactForm).css({transform:'translate3d(0,0,0)', transition:'0.5s'});
        $($overlay).fadeOut();
    });

    //send button that also displays confirmation
    $($send).on('vclick', function(){
        $($contactForm).css({transform:'translate3d(0,0,0)', transition:'0.5s'});
        $($confirm).delay(400).fadeIn();
    });

    //closes out form to reveal About Page
    $($confirm).on('vclick', function(){
        $(this).fadeOut();
        $($overlay).fadeOut();
    });
};
jQuery(document).ready(startup);
