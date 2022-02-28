var yUtils = {};
/****
 * 格式化时间
 * @param time
 * @param fmt yyyy-MM-dd hh:mm:ss
 * @returns {*}
 */
yUtils.formatTime = function (time, fmt) {
    var o = {
        "M+": time.getMonth() + 1, //月份
        "d+": time.getDate(), //日
        "h+": time.getHours(), //小时
        "m+": time.getMinutes(), //分
        "s+": time.getSeconds(), //秒
        "q+": Math.floor((time.getMonth() + 3) / 3), //季度
        "S": time.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (time.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
};

/***
 * 格式化时间
 * @param time
 */
yUtils.simpleDate = function (time) {
    return this.formatTime(new Date(time), "yyyy-MM-dd");
};

/****
 * 出现错误提示
 * @param msg  结尾不要标点符号
 */
yUtils.showErrorToast = function (msg) {
    if (!msg)
        msg = "失败";
    var $toast = $('#msgToast');
    $toast.find(".weui-icon_toast").removeClass("weui_icon_success_no_circle").addClass("weui-icon-cancel");
    $toast.find("#msgContent").text(msg);
    $toast.fadeIn(200);
    setTimeout(function () {
        $toast.fadeOut(500);
    }, 2000);
};

/****
 * 出现成功|正确提示
 * @param msg  不能出现感叹号，必须为句号结尾
 */
yUtils.showSuccessToast = function (msg) {
    if (!msg)
        msg = "成功";
    var $toast = $('#msgToast');
    $toast.find(".weui-icon_toast").removeClass("weui-icon-cancel").addClass("weui-icon-success-no-circle");
    $toast.find("#msgContent").text(msg);
    $toast.fadeIn(200);
    setTimeout(function () {
        $toast.fadeOut(500);
    }, 2000);
};
/****
 * 获取url中参数名称
 * @param name
 * @param url
 * @returns {*}
 */
yUtils.getParam = function (name, url) {
    if (!url) url = location.href;
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(url);
    return results == null ? null : results[1];
};

$(function () {
    //解决微信返回时候不刷新，问题
 /*   var rnumber = Math.floor(Math.random() * 10000),
        search = location.search.replace(/[?,&]v=\d{1,4}/, "");
    if (search.length > 0) {
        search = search.replace(/^&/, "?");
        history.replaceState({mod: rnumber}, 'Title', search + '&v=' + rnumber);
    } else {
        history.replaceState({mod: rnumber}, 'Title', '?v=' + rnumber);
    }*/

    //底部导航栏操作
    if (!localStorage.tabbarItem) {
        localStorage.tabbarItem = 0;
    }
    $('.weui-tabbar__item').eq(localStorage.tabbarItem).addClass('weui-bar__item_on');
    $('.weui-tabbar__item').on('click', function () {
        localStorage.tabbarItem = $(this).index();
    });

    //dialog close
    $(".icon-close").click(function () {
        $(this).parents(".dialog").fadeOut();
    });
});

/****
 * 钱格式化
 * @p aram n
 * @param x
 * @returns {string}
 */
Number.prototype.format = function (n, x) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
    return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
};
