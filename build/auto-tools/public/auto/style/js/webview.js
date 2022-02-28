
layui.define(["layer","laydate","form"],function (exports) {
    let layer = layui.layer;

    function getTop(){
        let clientHeight = window.screen.height;
        let browserHeight= document.body.offsetHeight;
        console.log(clientHeight,browserHeight);
    }

    if(!window.AndroidJS){

        window.AndroidJS = {
            selectCategory:function (type) {
                layer.prompt({
                    title: '请输入分类名称',
                },function(value, index, elem){
                    layui.$("#regular_sort").val(value);
                    layer.close(index);
                });
            },
            testCategory:function (regulars) {
                let jsHtml =
                    '<form class="layui-form layui-form-pane" lay-filter="formAction" action="" onsubmit="return false">\n' +
                    '  <div class="layui-form-item">\n' +
                    '    <label class="layui-form-label">当前时</label>\n' +
                    '    <div class="layui-input-block">\n' +
                    '      <input type="number" name="hour" value="12" required placeholder="请输入时" autocomplete="off" class="layui-input">\n' +
                    '    </div>\n' +
                    '  </div>\n' +
                    '  <div class="layui-form-item">\n' +
                    '    <label class="layui-form-label">当前分</label>\n' +
                    '    <div class="layui-input-block">\n' +
                    '      <input type="number" name="minute" value="12" required placeholder="请输入分" autocomplete="off" class="layui-input">\n' +
                    '    </div>\n' +
                    '  </div>\n' +
                    '  <div class="layui-form-item">\n' +
                    '    <label class="layui-form-label">商户名称</label>\n' +
                    '    <div class="layui-input-block">\n' +
                    '      <input type="text" name="shop" value="" placeholder="请输入商户名称" autocomplete="off" class="layui-input">\n' +
                    '    </div>\n' +
                    '  </div>\n' +
                    '  <div class="layui-form-item">\n' +
                    '    <label class="layui-form-label">商户备注</label>\n' +
                    '    <div class="layui-input-block">\n' +
                    '      <input type="text" name="remark" value="" placeholder="请输入商户备注" autocomplete="off" class="layui-input">\n' +
                    '    </div>\n' +
                    '  </div>\n' +
                    '  <div class="layui-form-item">\n' +
                    '    <label class="layui-form-label">金额</label>\n' +
                    '    <div class="layui-input-block">\n' +
                    '      <input type="text" name="money" value="0.99"  placeholder="请输入金额" autocomplete="off" class="layui-input">\n' +
                    '    </div>\n' +
                    '  </div>\n' +
                    '  <div class="layui-form-item">\n' +
                    '    <label class="layui-form-label">类型</label>\n' +
                    '    <div class="layui-input-block">\n' +
                    '      <select name="type" lay-verify="required">\n' +
                    '        <option value="支出" selected>支出</option>\n' +
                    '        <option value="收入">收入</option>\n' +
                    '        <option value="报销">报销</option>\n' +
                    '      </select>\n' +
                    '    </div>\n' +
                    '  </div>\n' +
                    '  <div class="layui-form-item">\n' +
                    '    <div >\n' +
                    '      <button class="layui-btn" lay-submit lay-filter="formDemo">确定</button>\n' +
                    '    </div>\n' +
                    '  </div>\n' +
                    '</form>' +
                    '<script>' +
                    'layui.form.render();' +
                  //  'layui.form.val("formAction",JSON.parse(sessionStorage.getItem("data_form_demo")))' +
                    'layui.form.on("submit(formDemo)", function (data) {' +
                    'sessionStorage.setItem("data_form_demo",JSON.stringify(data.field));' +
                    'layui.layer.closeAll();' +
                    '});' +
                    '</script>';

                layer.open({
                    title:"补充数据",
                    type: 1,
                    content: jsHtml,
                    end:function () {
                        let data = JSON.parse(sessionStorage.getItem("data_form_demo"));


                        let jsInner = "const isInTimeInner=function(a,b,c,d){regT=/([01\\b]\\d|2[0-3]):([0-5]\\d)/;const e=a.match(regT),f=b.match(regT);if(null==e||null==f||e.length<3||f.length<3)return!1;const g=parseInt(e[1],10),h=parseInt(f[1],10),i=parseInt(e[2],10),j=parseInt(f[2],10);return g>h?c===g&&d>=i||c>g||h>c||c===h&&j>=d:h>g?c===g&&d>=i||c>g&&h>c||c===h&&j>=d:g===h?j>i?c===g&&d>=i&&j>=d:i>j?c===g&&d>=i||j>=d||c!==g:i===j&&d===i&&c===g:void 0};";


                        let js = "function getCategory(shopName,shopRemark,type,hour,minute,money){%s  %s return 'NotFound';} getCategory('%s','%s','%s',%s,%s,'%s');";

                        let format = function () {
                            console.log(arguments)
                            let s = arguments[0];
                            for (let i = 1; i < arguments.length; i++) {
                                const reg = new RegExp("%s", "m");
                                s = s.replace(reg, arguments[i]);
                            }
                            return s;
                        };
                        js = format(js,jsInner,regulars,data.shop,data.remark,data.type,data.hour,data.minute,data.money);
                        console.log(js)
                        var resultHtml = '';
                        try{
                            var result = eval(js);
                            resultHtml="<div style='margin: 10px'><b>分类结果："+result+"</b><pre>本次测试用例信息：\n时间："+data.minute+":"+data.hour+" \n消费类型："+data.type+" \n消费金额："+data.money+" \n商户名称："+data.shop+"\n商户备注："+data.remark+" \n</pre></div>";
                        }catch (e){
                            resultHtml = 'JS执行出错！'+e.toString();
                        }

                        layer.open({
                            title:"测试结果",
                            //   offset: 'b',
                            type: 1,
                            content: resultHtml
                        });


                    }
                });
                //$js = sprintf($js,$jsInner,$data["regular"],$bill["shop"],$bill["remark"],$bill["typeName"],$bill["h"],$bill["m"],$bill["money"]);


                console.log(regulars)
            },
            toast:function (msg) {
                layui.layer.msg(msg);
            },
            testRegular:function (regulars,testData) {

            },
            selectTime:function (dom) {
                layui.laydate.render({
                    elem: '#'+dom
                    ,show: true //直接显示
                    ,type: 'time'
                    ,format: 'H:M'
                    ,closeStop: '#'+dom //这里代表的意思是：点击 test1 所在元素阻止关闭事件冒泡。如果不设定，则无法弹出控件
                });
            },

            save:function (js,data) {
                let json = JSON.parse(data);
                let temp = {
                    app: json.regular_app||"",
                    data: data,
                    dataId: json.dataId,
                    id: 0,
                    identify: json.identify||"category",
                    name: json.regular_name,
                    regular: js,
                    remark: json.regular_remark,
                    sort: 0,
                    use: 1,
                    version: json.version,
                }
                sessionStorage.setItem("save_data",JSON.stringify(temp));
                layer.prompt({
                    maxlength:99999999999999999999,
                    formType: 2,
                    value: JSON.stringify(temp),
                    title: '请复制下列内容后到github提交',
                }, function(value, index, elem){
                    parent.window.open('https://github.com/dreamncn/AutoResource/issues/new?assignees=&labels=&template=-----rule-submission.yml&title='+encodeURI(json.regular_name))
                    layer.close(index);
                });

            },
            selectReg:function (dom,data) {
              //  console.log(dom)

                let script = "<script>function clickItem(data) {layui.$('#"+dom+"').val(layui.$('#"+dom+"').val()+data);layui.layer.closeAll();}</script>";

                let table = "<style>button{background: white!important;}</style><table border=\"1\" class=\"layui-table\">\n" +
                    "  <tr>\n" +
                    "    <th>名称</th>\n" +
                    "    <th>选项</th>\n" +
                    "  </tr>\n" ;

                if(dom==="regular_app"){
                    table +=    "  <tr>\n" +
                        "    <td>微信</td>\n" +
                        "    <td><button type=\"button\" class=\"layui-btn layui-btn-primary layui-border-blue\" onclick=\"clickItem('com.tencent.mm')\">选择</button></td>\n" +
                        "  </tr>\n" ;
                    table +=    "  <tr>\n" +
                        "    <td>支付宝</td>\n" +
                        "    <td><button type=\"button\" class=\"layui-btn layui-btn-primary layui-border-blue\" onclick=\"clickItem('com.eg.android.AlipayGphone')\">选择</button></td>\n" +
                        "  </tr>\n" ;
                    table +=    "  <tr>\n" +
                        "    <td>QQ</td>\n" +
                        "    <td><button type=\"button\" class=\"layui-btn layui-btn-primary layui-border-blue\" onclick=\"clickItem('com.tencent.mobileqq')\">选择</button></td>\n" +
                        "  </tr>\n" ;
                    table += "</table>";
                    layer.open({
                        title:"请选择操作",
                        //   offset: 'b',
                        type: 1,
                        content: table+script
                    });
                    return;
                }else{
                    table +=    "  <tr>\n" +
                        "    <td>【$+】加法运算符</td>\n" +
                        "    <td><button type=\"button\" class=\"layui-btn layui-btn-primary layui-border-blue\" onclick=\"clickItem('$+')\">选择</button></td>\n" +
                        "  </tr>\n" ;

                    table +=    "  <tr>\n" +
                        "    <td>【$-】减法运算符</td>\n" +
                        "    <td><button type=\"button\" class=\"layui-btn layui-btn-primary layui-border-blue\" onclick=\"clickItem('$-')\">选择</button></td>\n" +
                        "  </tr>\n" ;

                    table +=    "  <tr>\n" +
                        "    <td>【$|】或运算符</td>\n" +
                        "    <td><button type=\"button\" class=\"layui-btn layui-btn-primary layui-border-blue\" onclick=\"clickItem('$|')\">选择</button></td>\n" +
                        "  </tr>\n" ;
                }

                data = JSON.parse(data);

                for (let i =1; i<data.length; i++) {
                    table +=    "  <tr>\n" +
                        "    <td>【$"+i+"】"+data[i]+"</td>\n" +
                        "    <td><button type=\"button\" class=\"layui-btn layui-btn-primary layui-border-blue\" onclick=\"clickItem('$"+i+"')\">选择</button></td>\n" +
                        "  </tr>\n" ;
                }


                table += "</table>"

                layer.open({
                    title:"请选择操作",
                 //   offset: 'b',
                    type: 1,
                    content: table+script
                });
            },
            testReg:function (js,type,app,data) {
                let jsCode  = "function getData(a){function b(a,b,c){var d,e,f,g,h,i,j;if(\"string\"!=typeof b)return b;if(d=\"$|\"!=c,\"$|\"==c&&(b+=\"$|\"),-1!=b.indexOf(c)){for(e=b.split(c),f=0,g=\"\",h=0;h<e.length;h++)try{if(i=e[h],-1!=e[h].indexOf(\"$\")?(j=parseInt(e[h].replace(\"$\",\"\")),j<a.length&&(i=d?parseFloat(a[j].replace(\",\",\"\")):a[j])):d&&(i=parseFloat(e[h].replace(\",\",\"\"))),0==f){g=i,f=g;continue}f=\"$-\"==c?g-i:\"$+\"==c?g+i:g||i,g=f}catch(k){console.log(k)}return f}return b}function c(a,b){var c,d,e;for(c=a.length-1;c>=1;c--)for(d=\"$\"+c.toString(),e=a[c];-1!=b.indexOf(d);)b=b.replace(d,e);return b};{regular};return\"undefined##undefined##undefined##undefined##undefined##undefined##undefined##undefined##0\"}getData('{str_input}');";
              jsCode =   jsCode.replace("{regular}",js).replace("{str_input}",data);

                var resultHtml = '';
                try{
                    let result = eval(jsCode);
                    let results =  result.split("##");

                    if(results.length!==9){
                        resultHtml = "规则长度错误！";
                    }else{
                        resultHtml="<pre style='margin: 10px'>您的规则测试数据如下：\n\n 时间："+results[7]+"(云端不解析时间，时间戳或者直接日期都行) \n 金额："+results[3]+" \n 手续费："+results[6]+" \n 账户1："+results[1]+" \n 账户2："+results[4]+"  \n 商户："+results[5]+"  \n 商户备注："+results[0]+"</pre>";
                    }
                }catch (e) {
                    resultHtml = 'JS执行出错！'+e.toString();
                }

                layer.open({
                    title:"测试结果",
                 //   offset: 'b',
                    type: 1,
                    content: resultHtml
                });

            },
            initData:function () {

            },
        }
    }
   // console.log(window.AndroidJS)
    const obj = {
        selectCategory: function (type) {
            window.AndroidJS.selectCategory(type);
        },
        testCategory: function (regulars) {
            window.AndroidJS.testCategory(regulars);
         },
        toast: function (msg) {
            window.AndroidJS.toast(msg);
        },
        testRegular: function (regulars,testData) {
            window.AndroidJS.testRegular(regulars,testData);
        },
        selectTime:function(dom){
            window.AndroidJS.selectTime(dom);
        },
        saveCategory:function (js,data){
            window.AndroidJS.save(js,data);
        },
        saveReg:function (js,data){
            window.AndroidJS.save(js,data);
        },
        selectReg:function (dom,data){
            window.AndroidJS.selectReg(dom,data);
        },
        testReg:function (js,type,app,data){
            window.AndroidJS.testReg(js,type,app,data);
        },
        initData:function () {
            window.AndroidJS.initData();
        }
    };
    exports('webview', obj);
});