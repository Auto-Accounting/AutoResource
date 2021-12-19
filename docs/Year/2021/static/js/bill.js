'use strict';

function toThousands(num) {

    return (num.toString().indexOf('.') !== -1) ? num.toLocaleString() : num.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');

}



/***
 *  定义动画
 * @type {{}}
 */
var animation = {};
animation.initAnimationItems = function () {
    $('.animated').each(function () {
        var aniDuration, aniDelay;

        $(this).attr('data-origin-class', $(this).attr('class'));

        aniDuration = $(this).data('ani-duration');
        aniDelay = $(this).data('ani-delay');

        $(this).css({
            'visibility': 'hidden',
            'animation-duration': aniDuration,
            '-webkit-animation-duration': aniDuration,
            'animation-delay': aniDelay,
            '-webkit-animation-delay': aniDelay
        });
    });
};

animation.playAnimation = function (dom) {
    this.clearAnimation();

    var aniItems = $(dom).find('.animated');

    $(aniItems).each(function () {
        var aniName;
        $(this).css({'visibility': 'visible'});
        aniName = $(this).data('ani-name');
        $(this).addClass(aniName);
    });
};

animation.clearAnimation = function () {
    $('.animated').each(function () {
        $(this).css({'visibility': 'hidden'});
        $(this).attr('class', $(this).data('origin-class'));
    });
};




const data = {
    "maxPay":[
        {
            reg: /花呗|白条|唯品花|月付|零花钱|信用/,
            text:"警惕消费主义，量入为出，适度消费。"
        },{
            reg:/支付宝|微信|QQ|云闪付|数字钱包/,
            text:"偏爱移动支付的你，一定走在互联网的最前沿。"
        },{
            reg:/储蓄卡|银行/,
            text:"大手一挥，来，刷卡！"
        },{
            reg:/现金/,
            text:"传统支付仍然具有极高的占有率。"
        }
    ],
    "maxPayData":[
        {
            reg:/医|疗|药|病|保险/,
            text:"无论是一个人还是两个人，都要好好爱自己。",
            remark:"健康"
        },{
            reg:/红包|转账/,
            text:"高档如您，不掩饰豪气，也追求多面。",
            remark:"一掷千金"
        },{
            reg:/手机|平板|智能|电子|数码|电器/,
            text:"数字产品的更新迭代是个人生活品质的提高。",
            remark:"换机达人"
        },{
            reg:/购物|网购|代付|快递/,
            text:"买买买！不差钱！",
            remark:"剁手患者"
        },{
            reg:/运动|健身|肌|蛋白/,
            text:"不断奔跑,才能更靠近梦想。",
            remark:"梦想"
        },{
            reg:/烟|酒/,
            text:"令人陶醉其中的东西，往往伤害最大。",
            remark:"清醒"
        },{
            reg:/话费|网费/,
            text:"流量就是生命，断网就是失联。",
            remark:"数字冲浪者"
        },{
            reg:/育儿|婴儿/,
            text:"努力，让下一代享受更好的生活。",
            remark:"奋斗"
        },{
            reg:/学|书|考|研|文具/,
            text:"在不断提高自我的过程中，一定充满成就感。",
            remark:"奋斗"
        },{
            reg:/穿|戴|衣|鞋|帽|理发|护肤|美妆/,
            text:"生活再苦，也要光彩照人。",
            remark:"不负生活"
        },{
            reg:/会员|App|游戏|小说|漫画|电影|打赏/,
            text:"虚无飘渺的世界，总有寄托之地。",
            remark:"虚无"
        },{
            reg:/租|公寓|家/,
            text:"愿漂泊于他乡的旅人，早日找到自己的归途。",
            remark:"浮萍"
        },{
            reg:/餐|捞|面|饭|吃|零食|饮料|水果|夜宵/,
            text:"民以食为天。",
            remark:"吃货"
        },{
            reg:/机|单车|高铁|地铁|打车|出行|公交|加油|汽车/,
            text:"风雨中奔波的差旅人，辛苦了。",
            remark:"风雨无阻"
        },{
            reg:/余.*宝|基金|黄金|债券|外汇|理财|股/,
            text:"投机倒把，数你最行。",
            remark:"理财达人"
        }

    ]
}
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);  //获取url中"?"符后的字符串并正则匹配
    var context = "";
    if (r != null)
        context = r[2];
    reg = null;
    r = null;
    return context == null || context === "" || context === undefined ? "" : context;
}
$(document).ready(function () {
    var chars = {
        "in":[13,  6, 7,1, 23, 9, 10, 11, 53, 34, 5],
        "out":[1, 2, 33, 4, 5, 6, 7,1, 23, 3, 4, 35]
    }
    try{
        const analyzeData = decodeURIComponent(getQueryString("data"));
        var json = JSON.parse(analyzeData);
        $("#yearAll").text(toThousands(json.bill.page1.yearAll));
        $("#yearTotal").text(toThousands(json.bill.page1.yearTotal));
        $(".userName").text(json.name);
        $("#earlyTime").text(json.bill.page2.earlyTime);
        $("#earlyDate").text(json.bill.page2.earlyDate);
        $("#earlyMoney").text(toThousands(json.bill.page2.earlyMoney));
        $("#earlyRemark").text(json.bill.page2.earlyRemark);
        $("#lateTime").text(json.bill.page2.lateTime);
        $("#lateDate").text(json.bill.page2.lateDate);
        $("#lateMoney").text(toThousands(json.bill.page2.lateMoney));
        $("#lateRemark").text(json.bill.page2.lateRemark);

        $("#maxPay").text(json.bill.page3.maxPay);
        $("#maxNumber").text(json.bill.page3.maxNumber);
        $("#maxPayMoney").text(toThousands(json.bill.page3.maxPayMoney));
       for(var p in data.maxPay){

           if(data.maxPay[p].reg.test(json.bill.page3.maxPay)){
               $("#payTip").text(data.maxPay[p].text);
               break;
           }
       }
       var d = json.bill.page3.data;
        for(let key  in json.bill.page3.data){
            $("#payData").html("<div>"+key+" <span class=\"onlinedata\">"+d[key]+"</span>次;</div>"+$("#payData").html());
        }

        $("#maxType").text(json.bill.page4.maxType);
        $("#maxMoney").text(toThousands(json.bill.page4.maxMoney));
        $("#maxInType").text(json.bill.page4.maxInType);
        $("#maxInMoney").text(toThousands(json.bill.page4.maxInMoney));
        chars.in = json.bill.page4.in;
        chars.out = json.bill.page4.out;


        for(var q in data.maxPayData){

            if(data.maxPayData[q].reg.test(json.bill.page4.maxInType)){
                $("#inMaxTip").text(data.maxPayData[q].text);

            }
            if(data.maxPayData[q].reg.test(json.bill.page4.maxType)){
                $("#payMaxTip").text(data.maxPayData[q].text);
                $("#key_name").text(data.maxPayData[q].remark);
                $("#key_text").text(data.maxPayData[q].text);
            }
        }
        $("#ul_in").hide();
        $("#ul_out").hide();
        if(json.bill.page5.ouTotal!==0){
            $("#ul_out").show();
            $("#outPeople").text(json.bill.page5.outPeople);
            $("#outPeopleMoney").text(toThousands(json.bill.page5.outPeopleMoney));
            $("#outTotal").text(json.bill.page5.outTotal);
        }
        if(json.bill.page5.inTotal!==0){
            $("#ul_in").show();
            $("#inPeople").text(json.bill.page5.inPeople);
            $("#inPeopleMoney").text(toThousands(json.bill.page5.inPeopleMoney));
            $("#inTotal").text(json.bill.page5.inTotal);
        }

        if(json.bill.page5.ouTotal===0&&json.bill.page5.inTotal===0){
            $(".item5 ul").removeChild();
            $(".item5 ul").html("<li class=\"animated\" data-ani-name=\"fadeInLeft\" data-ani-duration=\"1s\" data-ani-delay=\"0s\">2021年，我未曾借出或者借入。<br><div id=\"outTip\">每一分钱都有存在的意义。</div>  </li>");
        }


        var o = json.bill.page6.maxPay;
        for(var m in o){
            $("#out_pay").html("<div class=\"inner\">"+m+"<span class=\"onlinedata\" >"+toThousands(o[m])+"</span>元</div>"+$("#out_pay").html())
        }

         o = json.bill.page6.maxIn;
        for( m in o){
            $("#in_pay").html("<div class=\"inner\">"+m+"<span class=\"onlinedata\" > "+toThousands(o[m])+"</span>元</div>"+$("#out_pay").html())
        }

        $("#yearMoney").text(toThousands(json.bill.page7.yearMoney));
        $("#inMoney").text(toThousands(json.bill.page7.inMoney));
        $("#outMoney").text(toThousands(json.bill.page7.outMoney));
        
    }catch (e) {
        console.log(e)
    }

    var elevideo = document.getElementById("video");
    elevideo.addEventListener('ended', function () { //结束
        document.getElementById("videoDiv").setAttribute("style","display:none")
    }, false);

    //初始化，动画效果
    animation.initAnimationItems();
    //初始化画布
    $(".item").show();
    //初始化滚动效果
    fullscreen.init({
        'type': 2, 'useArrow': true,
        'useMusic':{
            'autoPlay' : true,
            'loopPlay' : true,
            'src' : 'http://mat1.gtimg.com/news/2015/love/FadeAway.mp3'
        },
        'pageShow': function (dom) {//页面出现时候
            animation.playAnimation(dom);
            console.log($(dom).index(),"当前页面")
            if($(dom).index()===7){
                $('.overlay').hide();
            }
            if ($(dom).index() === 5 ) {
                var myChart = echarts.init(document.getElementById('chart_main'));



                var option = {
                    tooltip: {
                        trigger: 'axis', axisPointer: { type: 'cross' }
                    },legend: {},
                    grid: {
                        containLabel: true,
                        right:78
                    },
                    xAxis: {
                        type: 'category',
                        axisTick: {
                            alignWithLabel: true
                        },
                        data: [
                            '1月',
                            '2月',
                            '3月',
                            '4月',
                            '5月',
                            '6月',
                            '7月',
                            '8月',
                            '9月',
                            '10月',
                            '11月',
                            '12月'
                        ]
                    },
                    yAxis: {
                        name: '千元',
                        type: 'value'
                    },
                    //每一个series中的{}中数据代表一条折线
                    series: [{
                        name:'收入',
                        type:'line',
                        smooth: true,
                        data:chars.in,
                        color:"green"
                    },
                        {
                            name:'支出',
                            type:'line',
                            smooth: true,
                            data:chars.out,
                            color:"red"
                        }]
                };

                myChart.setOption(option);
            }
        }, 'pageHide': function (dom) {//页面被隐藏
                                       //
        }
    });
    //强制执行动画
    animation.playAnimation($(".item2"));
    //开启下一页
   $(".btn").click(function () {
        var item = $('.item2');
        item.attr('state', 'prev');
        item.siblings('.item').removeAttr('state');
        var currentItem = item.next();
        currentItem.attr('state', 'next');
        item.css('-webkit-transform', 'scale(.8)');
        item.next().css('-webkit-transform', 'translate3d(0,0,0)');
        return false;
    });


});


!(function(win, doc){
    function setFontSize() {
        // 获取window 宽度
        // zepto实现 $(window).width()就是这么干的
        var winWidth =  window.innerWidth;
        // doc.documentElement.style.fontSize = (winWidth / 640) * 100 + 'px' ;

        // 2016-01-13 订正
        // 640宽度以上进行限制 需要css进行配合
        var size = (winWidth / 640) * 100;
        doc.documentElement.style.fontSize = (size < 100 ? size : 100) + 'px' ;
    }

    var evt = 'onorientationchange' in win ? 'orientationchange' : 'resize';

    var timer = null;

    win.addEventListener(evt, function () {
        clearTimeout(timer);

        timer = setTimeout(setFontSize, 300);
    }, { passive: false });

    win.addEventListener("pageshow", function(e) {
        if (e.persisted) {
            clearTimeout(timer);

            timer = setTimeout(setFontSize, 300);
        }
    }, { passive: false });

    // 初始化
    setFontSize();

}(window, document));