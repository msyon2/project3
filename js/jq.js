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
  tabContent = tabWrapper.find(".search_box>div.search");

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
    $("#" + tgt).show(); //다른 class와 연결하거나 해야할때 쓰는 방법
    //$(tgAnc).show(); //위방법과 동일
  });
});
tabContent.eq(0).show();
console.log(tabContent.eq(0));




// search box tab dropdown option





//Shrink Header on scrollTop
var $mainHeader=$('#header'),
	$window=$(window),
	$Logo=$('.logo img'),
	$colorLogo='./assets/logo_clr.svg',
	$defaultLogo='./assets/logo.svg'
  $iconLang=$('.member .lang img')
  $iconLangDark='./assets/globe_footer.svg'
  $defaultIconLang='./assets/globe.svg'
	$divide=$mainHeader.outerHeight();
	//outerHeight() 높이(패딩/보더포함)
$window.scroll(function () {
	if($window.scrollTop()>$divide){
		if(!$mainHeader.hasClass('shrink')){
			switchLogo($colorLogo);
			$mainHeader.addClass('shrink');
      switchLang($iconLangDark);
		}
	}else{
		if($mainHeader.hasClass('shrink')){
			switchLogo($defaultLogo);
			$mainHeader.removeClass('shrink');
      switchLang($defaultIconLang);
		}
	}
});
//img 주소를 바꾸는 switchImg 함수
function switchLogo(newLogoPath){
	$Logo.hide();
	$Logo.attr('src',newLogoPath);
	$Logo.show();
}
function switchLang(newLangPath){
	$iconLang.hide();
	$iconLang.attr('src',newLangPath);
	$iconLang.show();
}
//scroll header search bar 위치 이동 함수




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
    $("#"+panel).show(); 
  });
});
tabPanel.eq(0).show();













/* @mediaquery mobile & mobile_s styling */

// scroll header 
const scrollHeader=$('#header_scroll');
$(window).scroll(function () {
	if($(window).scrollTop()>100){
		scrollHeader.css('background','#fff')
		scrollHeader.find('.search_box .search').css('background','#eee')
	}else{
		scrollHeader.css('background','transparent')
		scrollHeader.find('.search_box .search').css('background','#f7f7f7')
	}
})

// gift card img show/hide
if (jQuery.browser.mobile == true) {
  $("div.giftcard_image").hide();
  $("div.giftcard_image.w100").show();
} else {
  $("div.giftcard_image").show();
  $("div.giftcard_image.w100").hide();
}