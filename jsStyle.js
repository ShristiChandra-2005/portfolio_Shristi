$(document).ready(function(){

    // 1. AOS (Animate on Scroll) Initialization
    AOS.init({
        duration: 1000, // Animation duration
        once: true,     // Animate only once
        offset: 100,    // Offset (in px) from the original trigger point
    });

    // 2. Typed.js Initialization for the typing effect
    var options = {
        strings: ["Web Developer.", "Machine Learning Enthusiast.", "Problem Solver."],
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 1500,
        loop: true
    };

    var typed = new Typed('.typing-text', options);
    
    // 3. Active Nav Link on Scroll
    $(window).scroll(function() {
        var scrollDistance = $(window).scrollTop();
        
        // Assign active class to nav links while scrolling
        $('section').each(function(i) {
            if ($(this).position().top <= scrollDistance + 150) {
                $('.navbar-nav a.active').removeClass('active');
                $('.navbar-nav a').eq(i).addClass('active');
            }
        });
    }).scroll();

});