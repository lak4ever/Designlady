/* in this file we will create events and from validation */
/*this will load the dom elements compltly starts here */
 $(document).ready(function () {

//home section animation starts here
    //border animations for Nav items starts here

        $('.navbar-nav li a').addClass('border-animation');

   //border animations for Nav items ends here

     //home page button animations//
     //submit bt-1 starts here

     $('.btn-sub1').hover(function () {
             // over
             //rap multiple css in hover event we use {} and create array list
             $('.fa-angle-right').css({
                 "transform":"rotate(180deg)",
                 "margin-left":"5px"
                });

         }, function () {
             // out
             $('.fa-angle-right').css({
                 "transform":"rotate( 0deg)",
                 "margin-left":"0px"
                });
         }
     );
    //submit bt-1 ends here

    //submit bt-2 starts here

    $('.btn-sub2').hover(function () {
        // over
        //rap multiple css in hover event we use {} and create array list
        $('.fa-angle-double-right').css({
            "transform":"rotate(180deg)",
            "margin-left":"5px"
           });
    }, function () {
        // out
        $('.fa-angle-double-right').css({
            "transform":"rotate( 0deg)",
            "margin-left":"0px"
           });
    }
);

   //submit bt-2 ends here

//home section animations ends here

//featured page animations start here
//content-1

$('.content-1 .col-md-4 .circle').hover(function () {
        // over
        $(this).css({
            "width":"105px",
            "height":"105px",
            "color":"#3F494C",
        });
    }, function () {
        // out
        $(this).css({
            "width":"100px",
            "height":"100px",
            "color":"#EF233C",
        })
    }
);
//featured page animations ends here


/*About us page animation starts here*/
     //content-2  /* we use widow object instead of the document object. window object is parent of the document object */
     //progress bar animation

     const x = 854;//scroll top
     const y = 672;

     $(window).on("scroll",function(){
         // specifying event in the first para meter
         //get the value of the document we use scrollh
         var scrollh =$(document).height();
         // specifying event in the second para meter
         //get the value of scrolltop we use scrollt
         var scrollt =$(document).scrollTop ();

        if (x < scrollt) {
                $('.pro-1').css('width','90%');
                $('.pro-2').css('width','96%');
                $('.pro-3').css('width','95%');
                $('.pro-4').css('width','90%');
                $('.pro-5').css('width','92%');
                $('.pro-6').css('width','93%');
            //when scroll is over make into default value
        } else if(y > scrollt) {
            $('.pro-1,.pro-2,.pro-3,.pro-4,.pro-5,.pro-6').css('width','0%');
        }
        /*
         $('.progress .sp-1').text(scrollh);
         $('.progress .sp-2').text(scrollt);
         remove it due to we dont want show any text
         */
     })
/*About us page animation ends here*/

/*pricing page animation starts here*/
         //content 3
         //creating the hover event to basic
         var basic_span = '.basic .basic-border:nth-child';
         var enterprise_span = '.enterprise .basic-border:nth-child';
         $('.basic a').hover(
            function(){
            $( basic_span+'(1)').css("width","100%");
            $( basic_span+'(2)').css("height","100%");
            $( basic_span+'(3)').css("height","100%");
            $( basic_span+'(4)').css("width","100%");

            $('.basic hr').css("background-color","red");
          },
          function(){
            $(basic_span+'(1)').css("width","30px");
            $(basic_span+'(2)').css("height","30px");
            $(basic_span+'(3)').css("height","30px");
            $(basic_span+'(4)').css("width","30px");

            $('.basic hr').css("background-color","inherit");
          }
        );

        $('.enterprise a').hover(
            function(){
              $( enterprise_span+'(1)').css("width","100%");
              $( enterprise_span+'(2)').css("height","100%");
              $( enterprise_span+'(3)').css("height","100%");
              $( enterprise_span+'(4)').css("width","100%");
              $('.enterprise hr').css("background-color","red");
          },
          function(){
            $(enterprise_span+'(1)').css("width","30px");
            $(enterprise_span+'(2)').css("height","30px");
            $(enterprise_span+'(3)').css("height","30px");
            $(enterprise_span+'(4)').css("width","30px");
            $('.enterprise hr').css("background-color","inherit");
          }
        );

       // Pro animation
 var pro_span = '.pro .pro-span:nth-child';
 $('.pro #pro-button').hover(
   function(){
     $(pro_span+'(1)').css({
       "height" : "100%",
       "bottom" : "0%"
     });

     $(pro_span+'(2)').css({
       "height" : "100%",
       "bottom" : "0%"
     });

     $('.standard hr').css("background-color","red");
 },
 function(){
   $(pro_span+'(1)').css({
     "height" : "130px",
     "bottom" : "40%"
   });

   $(pro_span+'(2)').css({
     "height" : "130px",
     "bottom" : "40%"
   });

   $('.standard hr').css("background-color","inherit");
 });
    /*Pricing page animation ends here*/



    /*tab section animation starts here*/
    //red line uda tab eke default selct wecha eke always have
        $('.content-4 .nav-tabs:nth-child(1)').css({
            "background-color":"#ffffff",
            "border-top":"3px solid #EF233C",
        });

        //we creating focus in event
        //tab first start here
        $('.content-4 .nav-tabs:nth-child(1)').on('focusin',function(){
            $(this).css({
                "background-color":"#fff",
                "border-top":"3px solid #EF233C",
            })
        });

        //we creating focus ut event

        $('.content-4 .nav-tabs:nth-child(1)').on('focusout',function(){
            $(this).css({
                "background-color":"#EDF2F4",
                "border-top":"0px",
            })
        });
        //tab first end here

        //second tab starts here
    

        //when we click second tab it apperas read border but first one still remains
        $('.content-4 .nav-tabs:nth-child(2)').on('focusin',function(){

            // so we do this
            $('.content-4 .nav-tabs:nth-child(1)').css({
                "background-color":"#EDF2F4",
                "border-top":"0px",

            });


            $(this).css({
                "background-color":"#fff",
                "border-top":"3px solid #EF233C",
            })
        });

        $('.content-4 .nav-tabs:nth-child(2)').on('focusout',function(){
            $(this).css({
                "background-color":"#EDF2F4",
                "border-top":"0px",
            })
        });

        //third tab
        //tab third start here
        $('.content-4 .nav-tabs:nth-child(3)').on('focusin',function(){
            $(this).css({
                "background-color":"#fff",
                "border-top":"3px solid #EF233C",
            })
        });

        //we creating focus in event

        $('.content-4 .nav-tabs:nth-child(3)').on('focusout',function(){
            $(this).css({
                "background-color":"#EDF2F4",
                "border-top":"0px",
            })
        });
        //tab third end here

        //4th tab starts here
        $('.content-4 .nav-tabs:nth-child(1)').on('focusin',function(){
            $(this).css({
                "background-color":"#fff",
                "border-top":"3px solid #EF233C",
            })
        });

        //we creating focus in event

        $('.content-4 .nav-tabs:nth-child(1)').on('focusout',function(){
            $(this).css({
                "background-color":"#EDF2F4",
                "border-top":"0px",
            })
        });
        //4tab ends here

        $('.content-4 .nav-tabs:nth-child(4)').on('focusin',function(){
            $(this).css({
                "background-color":"#fff",
                "border-top":"3px solid #EF233C",
            })
        });

        //we creating focus ut event

        $('.content-4 .nav-tabs:nth-child(4)').on('focusout',function(){
            $(this).css({
                "background-color":"#EDF2F4",
                "border-top":"0px",
            })
        });

        




    /*tab page animation ends here*/


    //slowly navigation to top start here
    $('.top a').on("click",function () { 
        $('html,body').animate({
            scrollTop:0
        },2000);
     })
    //slowly navigation to top ends here

    //Stciky nav bar stars here
        $(window).scroll(function(){
            if($(document).scrollTop () > 450){
                // the bootstrap stick class and class that we created
                $('nav').addClass('fixed-top').addClass('sticky') ; 
            }else{
                $('nav').removeClass('fixed-top').removeClass('sticky') ; 
            }
        });
    //Stciky nav bar ends here

    //linking the nav items starts here
    //home
        $('.nav-item #Home').on('click',function () {  
            $('html,body').animate({scrollTop:0},1000)
        });
    //features
        $('.nav-item #Features').on('click',function () {  
            $('html,body').animate({scrollTop:430},1000)
        }); 

    //Services
        $('.nav-item #Services').on('click',function () {  
            $('html,body').animate({scrollTop:2470},1000)
        });

    //Pricing
        $('.nav-item #Pricing').on('click',function () {  
            $('html,body').animate({scrollTop:1950},1000)
        });

    //About Us
        $('.nav-item #AboutUs').on('click',function () {  
            $('html,body').animate({scrollTop:2890},1000)
        });

    //contact 
        $('.nav-item #ContactUs').on('click',function () {  
            $('html,body').animate({scrollTop:3800},1000)
        });


    //linking the nav items ends here


 });
 /*this will load the dom elements compltly ends here */