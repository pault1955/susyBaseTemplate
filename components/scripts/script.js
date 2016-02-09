$(document).ready(function () {

  'use strict';

  //add classes

  $('ul.root_menu > li:first-child').addClass('first first_item');
  $('ul.root_menu > li:last-child').addClass('last last_item');



  /* remove sub menus from Home   */

  $('ul.root_menu > li.has_sub_menu:first-child > ul.sub_menu').remove();

  /* remove 1st item in dropdown menu re-instate my area>my details.
   set background color on ul where no groups below top-level item   */


  $('.menu_item_level_2.first').each(function() {
    if($(this).find('a[href=\'/MyArea/MyDetails.aspx\']').length === 0) {
      if($(this).siblings().length === 0) {
        $(this).parent().remove();
      } else {
        $(this).remove();
      }
    }
  });

  /* mobile menu */

  $('.root_menu').slicknav({
    prependTo: '#mobile_nav',
    allowParentLinks: true,
    label: 'Menu',
    closedSymbol: '&#9660;',
    openedSymbol: '&#9654;',
    'afterOpen': function() {
      $('.slice_affinity_header .slicknav_menu').css({'margin-bottom':'50px'});

    },
    'afterClose': function() {
      $('.slice_affinity_header .slicknav_menu').css({'margin-bottom':'0'});

    },
    'init': function(){
      if ($('body').hasClass('guest_user')) {
        $('<li class="sign_in_nav"><div class="statusbar"><a href="/user/login.aspx" title="Login to access more features">Login</a><a href="/User/Registration.aspx" title="Apply for web site username and password" class="register_link">Register</a></div></li>').insertAfter('.slicknav_nav > .last_item').fadeIn("slow");
      }else{
        $('<li class="log_out_nav"><div class="statusbar"><a href="/User/Logout.aspx" title="Sign out of the web site" class="logout_link">Logout</a><a href="/Admin/Default.aspx" title="Access site administration pages" class="weboffice_link">Web Office</a></div></li>').insertAfter('.slicknav_nav > .last_item').fadeIn("slow");
      }
    }
  });

  $('.slice_affinity_slideshow  .bannerSlides .gallery_ul').show().bxSlider({
    mode: 'fade',
    auto: true,
    pause: 8000,
    speed: 500,
    pager: true,
    controls: true,
    preloadImages: 'all'
  });


  $( '.slice_affinity_slideshow  .bannerSlides ul li.gallery_li a img' ).each(function( ) {
    var slideLink = $(this).parent().attr('href');
    var alt = $(this).attr('alt');
    var data = $.parseHTML( alt );
    var title = '<div class="slideTitle">' + ($(data).text().split('*')[ 0 ] || '') + '</div>';
    var subtitle = '<div class="slideText">' + ($(data).text().split('*')[ 1 ] || '') + '</div>';
    var caption = '<div class="caption">' + title + '<div class="divider"></div>' + subtitle + '<a href="' + slideLink + '" class="slideButton">MORE DETAILS</a></div>';
    $(caption).insertAfter( this );
  });


});