function submitForm(){var e=$("#name").val(),t=$("#email").val(),i=$("#message").val();$.ajax({type:"POST",url:"http://test.too-asse.kz/mail.php",data:"name="+e+"&email="+t+"&message="+i,success:function(e){"success"==e?formSuccess():(formError(),submitMSG(!1,e))},error:function(e,t,i){0===e.status?formSuccess():(formError(),submitMSG(!1,text))}})}function formSuccess(){$("#contactForm")[0].reset(),submitMSG(!0,"Сообщение отправлено!")}function formError(){$("#contactForm").removeClass().addClass("shake animated").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){$(this).removeClass()})}function submitMSG(e,t){if(e)var i="h3 text-center tada animated text-success";else var i="h3 text-center text-danger";$("#msgSubmit").removeClass().addClass(i).text(t)}$("#contactForm").validator().on("submit",function(e){e.isDefaultPrevented()?(formError(),submitMSG(!1,"Вы правильно заполнили форму?")):(e.preventDefault(),submitForm())}),$(document).on("ready",function(){$(".section-portfolio .filter-portfolio li").on("click",function(){$(".section-portfolio .filter-portfolio li").removeClass("active"),$(this).addClass("active");var e=$(this).attr("data-filter");$(".section-portfolio .row > div").children().css({"pointer-events":"none",opacity:".4"}),$(".section-portfolio .row > div").children(e).css({"pointer-events":"auto",opacity:"1"}),"all"==e&&$(".section-portfolio .row > div").children().css({"pointer-events":"auto",opacity:"1"})});new Swiper(".section-testimonials .swiper-container",{pagination:".section-testimonials .swiper-pagination",paginationClickable:!0,slidesPerView:3,spaceBetween:30,breakpoints:{1024:{slidesPerView:3,spaceBetween:40},768:{slidesPerView:2,spaceBetween:30},640:{slidesPerView:1,spaceBetween:20},320:{slidesPerView:1,spaceBetween:10}}}),new Swiper(".section-interests .swiper-container",{pagination:".section-interests .swiper-pagination",paginationClickable:!0,slidesPerView:6,spaceBetween:30,breakpoints:{1024:{slidesPerView:5,spaceBetween:40},768:{slidesPerView:4,spaceBetween:30},640:{slidesPerView:2,spaceBetween:20},320:{slidesPerView:1,spaceBetween:10}}});$(".menu a").on("click",function(e){e.preventDefault(),$(".menu a").removeClass("active"),$(this).addClass("active"),$("html,body").animate({scrollTop:$("#"+$(this).data("value")).offset().top-20},1500)}),$(".menu .open-menu").on("click",function(){"-160px"==$(".menu").css("left")?($(".menu").css("left","0px"),$(".menu .open-menu i").attr("class","fa fa-times")):"0px"==$(".menu").css("left")&&($(".menu").css("left","-160px"),$(".menu .open-menu i").attr("class","fa fa-bars"))}),$(window).on("scroll",function(){var e=$(window).scrollTop();$(".section").each(function(t){$(this).position().top<=e+200&&($(".menu a.active").removeClass("active"),$(".menu a").eq(t).addClass("active"))}),$(this).scrollTop()>=1200?$(".scroll-top").fadeIn(500):$(".scroll-top").fadeOut(500)}),$(".scroll-top").on("click",function(){$("html,body").animate({scrollTop:0},1500)});var e={};$(".section-portfolio .item-portfolio .work-popup").each(function(){var t=parseInt($(this).attr("data-group"),10);e[t]||(e[t]=[]),e[t].push(this)}),$.each(e,function(){$(this).magnificPopup({type:"image",closeOnContentClick:!0,closeBtnInside:!1,gallery:{enabled:!0}})}),(new WOW).init()}),$(window).on("load",function(){$("body").css("overflow","auto"),$(".loading-overlay, .loading-overlay").fadeOut()});