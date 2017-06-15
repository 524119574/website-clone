$(document).ready(function() {
  signature();
  updateNav();
  changeElementWhenSeen(".service-box i", function() {
    $(".service-box i").css("transform", "scale(1)")
  });
  changeElementWhenSeen("#download-content .button", function() {
    $("#download-content .button").css("transform", "translateY(0) scale(1)")
  });
  changeElementWhenSeen("#about-content .button", function() {
    $("#about-content .button").css("transform", "translateY(0) scale(1)")
  });
  changeElementWhenSeen(".contact-info i", function() {
    $(".contact-info i").css("transform", "scale(1)")
  });
});
$(window).scroll(function() {
  updateNav();
  changeElementWhenSeen(".service-box i", function() {
    $(".service-box i").css("transform", "scale(1)")
  });
  changeElementWhenSeen("#download-content .button", function() {
    $("#download-content .button").css("transform", "translateY(0) scale(1)")
  });
  changeElementWhenSeen("#about-content .button", function() {
    $("#about-content .button").css("transform", "translateY(0) scale(1)")
  });
  changeElementWhenSeen(".contact-info i", function() {
    $(".contact-info i").css("transform", "scale(1)")
  });
})

var updateNav = function() {
  if ($("nav").width() > 650) {
    var toTop = $(window).scrollTop()
    if (toTop > 100) {
      $("nav").addClass("nav-white");
      $("li a").addClass("nav-title-scroll");
      $(".nav-header").addClass("nav-header-scroll");
    }else {
      $("nav").removeClass("nav-white");
      $("li a").removeClass("nav-title-scroll");
      $(".nav-header").removeClass("nav-header-scroll");
    }
  }
};

var openNav = function() {
  var allClass = $(".nav-title").attr("class");
  var haveAppear = /nav-title-appear/.test(allClass);
  if (!haveAppear) {
    $(".nav-title").addClass("nav-title-appear");
  }else {
    $(".nav-title").removeClass("nav-title-appear");
  }
};

//a function to check whether element appear in the viewports

var showElementWhenSeen = function(element) {
  if (typeof element === "string") {
  }
};

var changeElementWhenSeen = function(element, cb) {
  if (typeof element === "string" && typeof cb === "function") {
    var top_of_element = $(element).offset().top;
    var bottom_of_element = $(element).offset().top + $(element).outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).height();
    var top_of_screen = $(window).scrollTop();

    if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
        // The element is visible, do something
        cb();
    }
  }
};

var signature = function() {
  var date = new Date();
  var currentYear = date.getFullYear();
  $("footer span").text("Leonard Ge " + currentYear)
}
