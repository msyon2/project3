/* Basic functions : header */
// member join/login tab menu
let loginWrapper = $(".member"),
  loginLink = loginWrapper.find(".login"),
  loginMenu = loginWrapper.find(".join");

loginLink.click(function (e) {
  e.preventDefault();
  loginMenu.toggle();
});

// top nav tab menu
let tabWrapper = $("#header .nav"),
  targetLink = tabWrapper.find("li a.depth1"),
  tabContent = tabWrapper.find(".search_box>div.search"),
  tabPlace = tabWrapper.find("li:first-child a.depth1"),
  tabExp = tabWrapper.find("li:nth-child(2) a.depth1");
//console.log(tabPlace, tabExp)

targetLink.each(function (i, e) {
  //console.log(i,e); //(index no, 값)
  let tg = $(this); //this = 순환하고 있는 요소중 현재 번째
  let tgAnc = tg.attr("href");
  let tgt = tgAnc.substr(1);
  tg.click(function (e) {
    e.preventDefault();
    targetLink.removeClass("active");
    tg.addClass("active");
    tabContent.hide();
    $("#" + tgt).show();
  });
});
tabContent.eq(0).show();

//hide search box dropdown when main nav tab changes
tabPlace.on({
  click: function (e) {
    e.preventDefault();
    searchExpContent.hide();
  },
});
tabExp.on({
  click: function (e) {
    e.preventDefault();
    searchPlaceContent.hide();
  },
});




/* -- search box tab dropdown option -- */
let searchBoxWrapper = $(".search_box"),
  searchPlaceTab = searchBoxWrapper.find("#tab_place .query"),
  searchPlaceContent = searchBoxWrapper.find("#tab_place_content > .depth2"),
  searchExpTab = searchBoxWrapper.find("#tab_experience .query"),
  searchExpContent = searchBoxWrapper.find("#tab_experience_content > .depth2");

// Places to stay sub tab toggle on&off
placeTabToggle = $.each(searchPlaceTab, function (i) {
  let tg = $(this);
  tg.on({
    click: function (e) {
      e.preventDefault();

      searchExpContent.hide();
      searchPlaceContent.eq(i).siblings().hide();
      searchPlaceContent.eq(i).toggle("fade", 500);
    },
  });
});

// Experiences sub tab toggle on&off
ExpTabToggle = $.each(searchExpTab, function (i) {
  let tg = $(this);
  tg.on({
    click: function (e) {
      e.preventDefault();

      searchPlaceContent.hide();
      searchExpContent.eq(i).siblings().hide();
      searchExpContent.eq(i).toggle("fade", 500);
    },
  });
});

// search box datepicker
$(function () {
  $("#date").datepicker({
    numberOfMonths: 2,
    showButtonPanel: true,
    defaultDate: +4,
    gotoCurrent: true,
    minDate: -0,
    maxDate: "+2M +10D",
  });
});
$(function () {
  var dateFormat = "mm/dd/yy",
    from = $("#check_in")
      .datepicker({
        defaultDate: "+1w",
        changeMonth: false,
        numberOfMonths: 2,
        minDate: -0,
      })
      .on("change", function () {
        to.datepicker("option", "minDate", getDate(this));
      }),
    to = $("#check_out")
      .datepicker({
        defaultDate: "+1w",
        changeMonth: false,
        numberOfMonths: 2,
      })
      .on("change", function () {
        from.datepicker("option", "maxDate", getDate(this));
      });

  function getDate(element) {
    var date;
    try {
      date = $.datepicker.parseDate(dateFormat, element.value);
    } catch (error) {
      date = null;
    }

    return date;
  }
});

//Shrink Header on scrollTop
var $mainHeader = $("#header"),
  $window = $(window),
  $Logo = $(".logo img"),
  $colorLogo = "./assets/logo_clr.svg",
  $defaultLogo = "./assets/logo.svg",
$iconLang = $(".member .lang img"),
$iconLangDark = "./assets/globe_footer.svg",
$defaultIconLang = "./assets/globe.svg";
$divide = $mainHeader.outerHeight();
//outerHeight() 높이(패딩/보더포함)
$window.scroll(function () {
  if ($window.scrollTop() > $divide) {
    if (!$mainHeader.hasClass("shrink")) {
      switchLogo($colorLogo);
      $mainHeader.addClass("shrink");
      switchLang($iconLangDark);
    }
  } else {
    if ($mainHeader.hasClass("shrink")) {
      switchLogo($defaultLogo);
      $mainHeader.removeClass("shrink");
      switchLang($defaultIconLang);
    }
  }
});
//img path 바꾸는 switchImg 함수
function switchLogo(newLogoPath) {
  $Logo.hide();
  $Logo.attr("src", newLogoPath);
  $Logo.show();
}
function switchLang(newLangPath) {
  $iconLang.hide();
  $iconLang.attr("src", newLangPath);
  $iconLang.show();
}


// future destination section tab
let futurDestWrapper = $("#future_dest"),
  tabList = futurDestWrapper.find(".future_dest_list a"),
  tabPanel = futurDestWrapper.find(".future_dest_panel>div");

tabList.each(function (i, e) {
  //console.log(i,e); //(index no, 값)
  let tab = $(this); //this = 순환하고 있는 요소중 현재 번째
  let link = tab.attr("href");
  let panel = link.substr(1);
  tab.click(function (e) {
    e.preventDefault();
    tabList.removeClass("active");
    tab.addClass("active");
    tabPanel.hide();
    $("#" + panel).show();
  });
});
tabPanel.eq(0).show();



/* --- @mediaquery mobile & mobile_s styling --- */

// scroll header & skicky nav bar
const scrollHeader = $("#header_scroll")
const stickyNav = $("#sticky_nav")
const screenW = $(window).outerWidth()

$(window).on({
	scroll: function () {
		if ($(window).scrollTop() > 100) {
			scrollHeader.css("background", "#fff")
			scrollHeader.find(".search_box .search").css("background", "#f7f7f7")
		} else {
			scrollHeader.css("background", "transparent")
			scrollHeader.find(".search_box .search").css("background", "#fff")
		}
		if ($(window).scrollTop() > 900) {
			stickyNav.hide();
      
		} 
	},
	resize: function () {
		var newWidth = $(window).outerWidth();
		console.log(newWidth)
		if (newWidth > 768) {
			stickyNav.hide();
      
		} else if (newWidth < 767) {
			console.log(screenW)
			stickyNav.show();
		} 
	},
});



// gift card img show/hide
if (jQuery.browser.mobile == true) {
  $("div.giftcard_image").hide();
  $("div.giftcard_image.w100").show();
  stickyNav.show();
} else {
  $("div.giftcard_image").show();
  $("div.giftcard_image.w100").hide();
  //stickyNav.hide();
}

//need to resolve the below
/* if (jQuery.browser.mobile == false){
  stickyNav.hide();
} */
