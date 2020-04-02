import "jquery";
import "popper.js";
import "bootstrap";
import "details-element-polyfill";
import "slick-carousel";
import Headroom from "headroom.js";
import LazyLoad from "vanilla-lazyload";
const Cookies = require('js-cookie');

var lazyLoadInstance = new LazyLoad;

$(function () {
  // Tab on hover instead of click
  $('.tab-hover[data-mouse="hover"] a').hover(function(){
    $(this).tab('show');
  });
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    var target = $(e.relatedTarget).attr('href');
    $(target).removeClass('active');
  });
  
  //Menu toggler functionality
  $(".site-menu-toggler").click(function () {
    $("body").toggleClass("menu-open");
    return false;
  });

  //Tooltip
  $('[data-toggle="tooltip"]').tooltip();

  //Sticky header initialization
  let header = document.querySelector(".site-header");
  let headroom  = new Headroom(header, {
    offset: header.offsetHeight,
    classes: {
      initial: "site-header",
      pinned: "site-header--pinned",
      unpinned: "site-header--unpinned",
      top: "site-header--top",
      bottom: "site-header--bottom",
      notTop: "site-header--not-top",
      notBottom: "site-header--scrolled"
    }
  });
  // initialise
  headroom.init();

  //Remove top bar on click
  if (!Cookies.get('announcement')) {
    $(".top-bar").addClass('top-bar--show');
  }

  $(".top-bar-close").click(function(){
    Cookies.set('announcement', 'true', { expires: 10 });
    $(".top-bar").removeClass('top-bar--show');
  });

  $('[data-toggle="tooltip"]').tooltip();

  //Slick Slider
  $('.carousel-list').slick({
    autoplay: false,
    dots: false,
    speed: 300,
    useTransform: false,
    centerPadding: '60px',
    slidesToShow: 1,
    fade: true
  });
});
