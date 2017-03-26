(function(){
	var $span=$('#navActive');
	var $span2=$('#navActive');
	 var spanWidth=$span.outerWidth();
	 var spanLeft=$span2.offset().left; 
	 $('#moveSpan').css({
	 	"width":spanWidth,
	 	"left":spanLeft
	 })
   	 $('.site-nav>li').not($('.moveNull')).hover(function(){
        var spanWidth=$(this).outerWidth();
        var spanLeft=$(this).offset().left;
     $('#moveSpan').stop().animate({
            "left":spanLeft,
            "width":spanWidth
        },800,"easeOutElastic")
    },function(){
            $('#moveSpan').stop().animate({
            "left":spanLeft,
            "width":spanWidth
        },800,"easeOutElastic")
});

    $('#spanHide').hover(function(){
        $('#moveSpan').css(
            {
                'display':'none'
            }
        )
    },function(){
         $('#moveSpan').css(
            {
                'display':'block'
            }
        )
    });

    var imgArray=["./img/01.png","./img/02-2.png","./img/03-2.png","./img/04.png","./img/05.png","./img/06.png","./img/07.png","./img/08.png","./img/09.png","./img/10.png"];
    var spanArray=["使用嗷嗷管家，明显提升了工作效率","物流商的精明管家","操作便捷，配送优先","发单便捷，真正的实发实抢","接单自由,订单多,赚钱多多","好用的发单工具","轻松发单，信息实时反馈","一站式管家，省心、舒心","智能调度，配送效率大大提升","自由拓展业务，服务升级，轻松赚钱"];
    var array3=[];
    var i=0;
    function star(){
        setTimeout(function(){
            star();
            function selectImg(){
                array3=[];
                for(var j=0;j<6;j++){
                    array3.push(($('.fade-user').eq(j).find('img').attr('src')));
                };
                if(array3.indexOf(imgArray[i])!=-1){
                    i++;
                    selectImg();
                }
            }
            selectImg();
            var userNum=Math.floor(Math.random()*9);
        if(i>9){
            i=0;
        }
        $('.fade-user').eq(userNum).animate({
            opacity:0
        },500).siblings().animate({
            opacity:1
        });
        $('.fade-user').eq(userNum).find('img').attr({
            src:imgArray[i]
        });
            $('.fade-user').eq(userNum).find('span').text(spanArray[i])
        },2000)
    }
    star();
    function salesShow(){
        $('#sales-btn').click(function(){
            $('#sales-show').hide('fast');
            $('#sales-hide').show('slow');
        });
        $('#userSubmit').click(function(){
            $('.userMessage').show('slow');
            $('#bottomOpa').css({
                opacity:0.4
            });
            $('#mengBan5').css({
                'display':'block'
            });
            $('#userBan').addClass("userBan2");
            var subTimer=setInterval(function(){
                $('#userBan').removeClass("userBan2");
                $('.userMessage').hide('slow');
                $('#sales-hide').hide('slow');
                $('#sales-show').show('slow');
                $('.mengBan').hide();
                $('#bottomOpa').css({
                opacity:1
            });
                $('#mengBan5').css({
                'display':'none'
            });

                clearInterval(subTimer);
            },3000)
        })
        $(document).scroll(function(){
           if($(document).scrollTop()>310&&$(document).scrollTop()<1970){
                $('#tableFixed').css({
                    opacity:1
                })
           }
           else{
                $('#tableFixed').css({
                   opacity:0
               })
           }
        })


    }
    salesShow();

    /*program1*/
     $(".numberAdd1").click(function(){
     var t=$('#userPrice1');
     t.val(parseInt(t.val())+1);
     if(parseInt(t.val())>10){
     t.val(10);
     }
         price1();
     });
     $(".numberCut1").click(function(){
     var t=$('#userPrice1');
     t.val(parseInt(t.val())-1);
     if(parseInt(t.val())<0){
     t.val(0);
     }
     price1();
     });
     function price1(){
       var f=Number($('#userPrice1').val());
         /*button1 hover color*/
         $('.numberAdd1').hover(function(f){
             var f=Number($('#userPrice1').val());
             if(f!=10){
                 $('.numberAdd1 i').css({
                     color:'red'
                 })
             }
             document.getElementById('numberAdd111').addEventListener("click",function(){
                 var f=Number($('#userPrice1').val());
                 if(f==10){
                    $('.numberAdd1 i').css({
                        color:'#000000'
                    })
                 }
             })
         },function(){
             $('.numberAdd1 i').css({
                 color:'#000000'
             });
         });
         $('.numberCut1').hover(function(f){
             var f=Number($('#userPrice1').val());
             if(f!=0){
                 $('.numberCut1 i').css({
                     color:'red'
                 })
             }
             document.getElementById('numberCut111').addEventListener("click",function(){
                 var f=Number($('#userPrice1').val());
                 if(f==0){
                     $('.numberCut1 i').css({
                         color:'#000000'
                     })
                 }
             })
         },function(){
             $('.numberCut1 i').css({
                 color:'#000000'
             });
         })
         /*button1 hover color*/
         if(f==0){
             $('#normal').html('299');

         }
         else if(f>0){
             if(f>5||f==5){
                 $('#normal').html(f*1000*0.06+299);

             }else if(f==1){
                 $('#normal').html('379');
             }else if(f==2){
                 $('#normal').html('449');
             }else if(f==3){
                 $('#normal').html('509');
             }else if(f==4){
                 $('#normal').html('559');
             }
         }

     }
     price1();
     /*program2*/
     $(".numberAdd2").click(function(){
     var t=$('#userPrice2');
     t.val(parseInt(t.val())+1);
     if(parseInt(t.val())>10){
     t.val(10);
     }
     price2();
     });
     $(".numberCut2").click(function(){
     var t=$('#userPrice2');
     t.val(parseInt(t.val())-1);
     if(parseInt(t.val())<0){
     t.val(0);
     }
     price2();
     });
     function price2() {
         var f = Number($('#userPrice2').val());
         /*button2 hover color*/
         $('.numberAdd2').hover(function(f){
             var f=Number($('#userPrice2').val());
             if(f!=10){
                 $('.numberAdd2 i').css({
                     color:'red'
                 })
             }
             document.getElementById('numberAdd222').addEventListener("click",function(){
                 var f=Number($('#userPrice2').val());
                 if(f==10){
                     $('.numberAdd2 i').css({
                         color:'#000000'
                     })
                 }
             })
         },function(){
             $('.numberAdd2 i').css({
                 color:'#000000'
             });
         });
         $('.numberCut2').hover(function(f){
             var f=Number($('#userPrice2').val());
             if(f!=0){
                 $('.numberCut2 i').css({
                     color:'red'
                 })
             }
             document.getElementById('numberCut222').addEventListener("click",function(){
                 var f=Number($('#userPrice2').val());
                 if(f==0){
                     $('.numberCut2 i').css({
                         color:'#000000'
                     })
                 }
             })
         },function(){
             $('.numberCut2 i').css({
                 color:'#000000'
             });
         })
         /*button2 hover color*/
         if (f == 0) {
             $('#senior').html('1099');
             /*$('#normal').html('0');*/
         } else if(f>0){
             if (f == 1) {
                 $('#senior').html('1149');
             } else if (f == 2) {
                 $('#senior').html('1179');
             } else if (f == 3) {
                 $('#senior').html('1390');
             } else if (f == 4) {
                 $('#senior').html('1209');
             } else if (f > 5 || f == 5) {
                 $('#senior').html(f * 1000 * 0.06 + 1099);
             }
         }
     }
     price2();
     /*program3*/
     $(".numberAdd3").click(function(){
         var t=$('#userPrice3');
         t.val(parseInt(t.val())+1);
         if(parseInt(t.val())>10){
         t.val(10);
     }
        price3();
     })
     $(".numberCut3").click(function(){
        var t=$('#userPrice3');
        t.val(parseInt(t.val())-1)
        if(parseInt(t.val())<0){
        t.val(0);
     }
        price3();
     })
     function price3(){
       var f=Number($('#userPrice3').val());
         /*button3 hover color*/
         $('.numberAdd3').hover(function(f){
             var f=Number($('#userPrice3').val());
             if(f!=10){
                 $('.numberAdd3 i').css({
                     color:'red'
                 })
             }
             document.getElementById('numberAdd333').addEventListener("click",function(){
                 var f=Number($('#userPrice3').val());
                 if(f==10){
                     $('.numberAdd3 i').css({
                         color:'#000000'
                     })
                 }
             })
         },function(){
             $('.numberAdd3 i').css({
                 color:'#000000'
             });
         });
         $('.numberCut3').hover(function(f){
             var f=Number($('#userPrice3').val());
             if(f!=0){
                 $('.numberCut3 i').css({
                     color:'red'
                 })
             }
             document.getElementById('numberCut333').addEventListener("click",function(){
                 var f=Number($('#userPrice3').val());
                 if(f==0){
                     $('.numberCut3 i').css({
                         color:'#000000'
                     })
                 }
             })
         },function(){
             $('.numberCut3 i').css({
                 color:'#000000'
             });
         })
         /*button3 hover color*/
         if(f==0){
            $('#flagship').html('2680');

        }else if(f>0){
             if(f==1){
                 $('#flagship').html('2760');
             }else if(f==2){
                 $('#flagship').html('2830');
             }else if(f==3){
                 $('#flagship').html('2890');
             }else if(f==4){
                 $('#flagship').html('2940');
             }else if(f>5||f==5){
                 $('#flagship').html(f*1000*0.06+2680);
             }
        }
     }
     price3();
     window.onload=function(){
        $('#userPrice3').val(0);
        $('#userPrice2').val(0);
        $('#userPrice1').val(0);
         $('header').width($(window).width());
         
     };
     window.onresize=function(){
         $('header').width($(window).width());
         web();
     };
    function web(){
        var screenWid = document.documentElement.offsetWidth||document.body.offsetWidth;
        var screenHei = document.documentElement.offsetHeight||document.body.offsetHeight;
        var nowWid = (screenWid/414)*100;
        var oHtml = document.getElementsByTagName("html")[0];
        oHtml.style.fontSize = nowWid+"px";
    }
    web();
     /*mobile end systems*/
     var Rotate=true;
     $('#spanHide').click(function(){

         if($(window).width()<1025){
             $('#productHover1').toggle();
             if(Rotate){
                 $('.mobile-select').css({
                     transform:"rotate(180deg)"
                 })
                Rotate=false;
             }
             else if(Rotate==false){
                 $('.mobile-select').css({
                     transform:"rotate(360deg)"
                 })
                 Rotate=true;
             }
         }
     });
    /*mobile-price_titile-toggle*/
    function tableToggle(){
        $('.mobile-table-title td').click(function(){
            $(this).css({
                background:"#f0f0f0"
            }).siblings().css({
                background:"#f9f9f9"
            });
            var tableindex=$(this).index();
            $('.mobile-table-showall').eq(tableindex).addClass('mobile-table-toggle2').removeClass('mobile-table-toggle1').siblings('.mobile-table-showall').addClass('mobile-table-toggle1').removeClass('mobile-table-toggle2');
        })
    }
    tableToggle();
    /*mobile-price-biaozhun*/
    /*program1*/
    $(".numberAdd1").click(function(){
        var t=$('#userPrice1_1');
        t.val(parseInt(t.val())+1);
        if(parseInt(t.val())>10){
            t.val(10);
        }
        price1_1();
    });
    $(".numberCut1").click(function(){
        var t=$('#userPrice1_1');
        t.val(parseInt(t.val())-1);
        if(parseInt(t.val())<0){
            t.val(0);
        }
        price1_1();
    });
    function price1_1(){
        var f=Number($('#userPrice1_1').val());
        /*button1 hover color*/
        $('.numberAdd1').hover(function(f){
            var f=Number($('#userPrice1_1').val());
            if(f!=10){
                $('.numberAdd1 i').css({
                    color:'red'
                })
            }
            document.getElementById('numberAdd111_1').addEventListener("click",function(){
                var f=Number($('#userPrice1_1').val());
                if(f==10){
                    $('.numberAdd1 i').css({
                        color:'#000000'
                    })
                }
            })
        },function(){
            $('.numberAdd1 i').css({
                color:'#000000'
            });
        });
        $('.numberCut1').hover(function(f){
            var f=Number($('#userPrice1_1').val());
            if(f!=0){
                $('.numberCut1 i').css({
                    color:'red'
                })
            }
            document.getElementById('numberCut111_1').addEventListener("click",function(){
                var f=Number($('#userPrice1_1').val());
                if(f==0){
                    $('.numberCut1 i').css({
                        color:'#000000'
                    })
                }
            })
        },function(){
            $('.numberCut1 i').css({
                color:'#000000'
            });
        })
        /*button1 hover color*/
        if(f==0){
            $('#normal_1').html('299');

        }
        else if(f>0){
            if(f>5||f==5){
                $('#normal_1').html(f*1000*0.06+299);

            }else if(f==1){
                $('#normal_1').html('379');
            }else if(f==2){
                $('#normal_1').html('449');
            }else if(f==3){
                $('#normal_1').html('509');
            }else if(f==4){
                $('#normal_1').html('559');
            }
        }

    }
    price1_1();

    /*program2*/
    $(".numberAdd2").click(function(){
        var t=$('#userPrice2_1');
        t.val(parseInt(t.val())+1);
        if(parseInt(t.val())>10){
            t.val(10);
        }
        price2_1();
    });
    $(".numberCut2").click(function(){
        var t=$('#userPrice2_1');
        t.val(parseInt(t.val())-1);
        if(parseInt(t.val())<0){
            t.val(0);
        }
        price2_1();
    });
    function price2_1() {
        var f = Number($('#userPrice2_1').val());
        /*button2 hover color*/
        $('.numberAdd2').hover(function(f){
            var f=Number($('#userPrice2_1').val());
            if(f!=10){
                $('.numberAdd2 i').css({
                    color:'red'
                })
            }
            document.getElementById('numberAdd222_1').addEventListener("click",function(){
                var f=Number($('#userPrice2_1').val());
                if(f==10){
                    $('.numberAdd2 i').css({
                        color:'#000000'
                    })
                }
            })
        },function(){
            $('.numberAdd2 i').css({
                color:'#000000'
            });
        });
        $('.numberCut2').hover(function(f){
            var f=Number($('#userPrice2_1').val());
            if(f!=0){
                $('.numberCut2 i').css({
                    color:'red'
                })
            }
            document.getElementById('numberCut222_1').addEventListener("click",function(){
                var f=Number($('#userPrice2_1').val());
                if(f==0){
                    $('.numberCut2 i').css({
                        color:'#000000'
                    })
                }
            })
        },function(){
            $('.numberCut2 i').css({
                color:'#000000'
            });
        })
        /*button2 hover color*/
        if (f == 0) {
            $('#senior_1').html('1099');
        } else if(f>0){
            if (f == 1) {
                $('#senior_1').html('1149');
            } else if (f == 2) {
                $('#senior_1').html('1179');
            } else if (f == 3) {
                $('#senior_1').html('1209');
            } else if (f == 4) {
                $('#senior_1').html('1259');
            } else if (f > 5 || f == 5) {
                $('#senior_1').html(f * 1000 * 0.06 + 1099);
            }
        }
    }
    price2_1();

    /*program3*/
    $(".numberAdd3").click(function(){
        var t=$('#userPrice3_1');
        t.val(parseInt(t.val())+1);
        if(parseInt(t.val())>10){
            t.val(10);
        }
        price3_1();
    })
    $(".numberCut3").click(function(){
        var t=$('#userPrice3_1');
        t.val(parseInt(t.val())-1)
        if(parseInt(t.val())<0){
            t.val(0);
        }
        price3_1();
    })
    function price3_1(){
        var f=Number($('#userPrice3_1').val());
        /*button3 hover color*/
        $('.numberAdd3').hover(function(f){
            var f=Number($('#userPrice3_1').val());
            if(f!=10){
                $('.numberAdd3 i').css({
                    color:'red'
                })
            }
            document.getElementById('numberAdd333_1').addEventListener("click",function(){
                var f=Number($('#userPrice3_1').val());
                if(f==10){
                    $('.numberAdd3 i').css({
                        color:'#000000'
                    })
                }
            })
        },function(){
            $('.numberAdd3 i').css({
                color:'#000000'
            });
        });
        $('.numberCut3').hover(function(f){
            var f=Number($('#userPrice3_1').val());
            if(f!=0){
                $('.numberCut3 i').css({
                    color:'red'
                })
            }
            document.getElementById('numberCut333_1').addEventListener("click",function(){
                var f=Number($('#userPrice3_1').val());
                if(f==0){
                    $('.numberCut3 i').css({
                        color:'#000000'
                    })
                }
            })
        },function(){
            $('.numberCut3 i').css({
                color:'#000000'
            });
        })
        /*button3 hover color*/
        if(f==0){
            $('#flagship_1').html('2680');
        }else if(f>0){
            if(f==1){
                $('#flagship_1').html('2760');
            }else if(f==2){
                $('#flagship_1').html('2830');
            }else if(f==3){
                $('#flagship_1').html('2890');
            }else if(f==4){
                $('#flagship_1').html('2940');
            }else if(f>5||f==5){
                $('#flagship_1').html(f*1000*0.06+2680);
            }
        }
    }
    price3_1();
})();