# 自动记账  :id=GoToHelpDoc

![](https://img.shields.io/static/v1?label=framework&message=Xposed&color=success&style=for-the-badge)
![](https://img.shields.io/static/v1?label=licenes&message=GPL3.0&color=important&style=for-the-badge)
![](https://img.shields.io/github/issues/dreamncn/Qianji_auto?style=for-the-badge)
![](https://img.shields.io/github/stars/dreamncn/Qianji_auto.svg?style=for-the-badge)
![](https://img.shields.io/badge/dynamic/json?color=blueviolet&label=Coolapk&suffix=%20fans&query=%24.data.totalSubs&url=https%3A%2F%2Fapi.spencerwoo.com%2Fsubstats%2F%3Fsource%3Dcoolapk%26queryKey%3D1503334&link=http%3A%2F%2Fwww.coolapk.com%2Fu%2F1503334&style=for-the-badge)
![](https://img.shields.io/static/v1?label=download&message=40K&color=9cf&style=for-the-badge)

## 项目简介

?>资本在行动，他们用消费主义四处撒网，少年们纷纷卷入陷阱之中，原本富足的少年开始慢慢变穷。<br/>
少年们很费解，为什么赚的钱越来越多，生活却越来越拮据。<br/>
少年们找到了阅历丰富的老人，老人告诉他们：你们要学会理财。
**理财？**<br/>
哦！那可真是个大难题。<br/>
可少年们还是行动了，年轻人总是那么的勇敢。<br/>
想要理财，首先得弄清每一笔财富的去向。<br/>
于是，少年们找到了记账软件：[钱迹](https://www.coolapk.com/apk/com.mutangtech.qianji)。<br/>
它是一款好软件。<br/>
但，记录那些琐碎而零散的消费，会耗费大量的精力。这对于疲惫不堪的少年们来说，简直就是灾难。<br/>
如果这些工作由机器来完成，那该多好啊！<br/>
仿佛听到了群山中少年们的呼唤，光芒自迷雾中降生，**自动记账**——他来了！<br/>
他，是你账单的守护者，记录你的每一笔收支。<br/>
他，是支付与记账的桥梁，随付随到，从不缺席。<br/>
无需苦思冥想，无需左右切换，只需在付款后轻轻一点，即可完成记账。<br/>
**自动记账：**一款真正人性化的插件。<br/>

!>*自动记账* 是一款辅助记账软件，基于[钱迹记账](https://www.coolapk.com/apk/com.mutangtech.qianji)App记账接口开发。因此本插件需搭配[钱迹](https://www.coolapk.com/apk/com.mutangtech.qianji)App使用。
!> 在自动记账3.0版本中加入了对其他记账软件的支持，详情请参考[使用其他记账软件]()

----

自动记账提供 **Xposed** 和 **无障碍** 两种模式。由于实现的原理差异，在功能上具有一定的差异，在条件允许的情况下，我们推荐使用**Xposed模式**。

具体的对比如下:

| 优点及缺点                                               | 无障碍 | Xposed |
| --------------------------------------------------------| ------ | ------ |
| **直接报销，无需进入钱迹【开发中】**                               | <font color="#ff7733">✘</font>| <font color="#ff7733">✘</font>|
| **直接从钱迹拉取资产、分类数据**                         | <font color="#ff7733">✘</font>| <font color="#44cc66">✔</font>|
| **微信、支付宝等账单识别**                             | <font color="#44cc66">✔</font>| <font color="#44cc66">✔</font>|
| **通知以及短信监听识别**                             | <font color="#44cc66">✔</font>| <font color="#44cc66">✔</font>|
| **后台扣费账单识别**                      | <font color="#ff7733">✘</font>| <font color="#44cc66">✔</font>|
| **账单信息读取**                  | **<font color="#ff7733">不够精准</font>**| **<font color="#44cc66">精准</font>**|
| **<font color="#ff7733">需要解锁BootLoader刷机</font>** | <font color="#44cc66">✘</font>| <font color="#ff7733">✔</font>|
| **<font color="#ff7733">需要常驻后台</font>**           | <font color="#ff7733">✔</font>| <font color="#44cc66">✘</font>|


## 文字教程

[点击开始教程](教程说明.md)

## 视频教程

<iframe src="https://player.bilibili.com/player.html?aid=289448844&bvid=BV1Hf4y147Yi&cid=303785417&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" height="500" width="400"> </iframe>

## 贡献代码

- Fork该项目到您的Github账号中
- Clone您fork的项目到本地
- 本地调试修改好后提交到您的项目中
- 从您fork的项目向我的项目发起Pull Request
- 详细操作[点我](Contribution.md)

## 编译步骤

- 下载源代码到本地
- 使用Android Studo打开
- Build

## 下载

[【酷安】自动记账](https://www.coolapk.com/apk/cn.dreamn.qianji_auto)

友情提醒：自动记账仅在酷安发布更新，其他渠道下载注意安全。

## 版本内容更新

[请查看更新日志](/ChangeLog.md) 

## 鸣谢

- [钱迹](http://www.qianjiapp.com/)
- [XUI](https://github.com/xuexiangjys/XUI)


## 版权声明

自动记账遵循 [GPL-3.0 License](/LICENSE) 开源协议发布，并提供免费使用，请勿用于非法用途。

Copyright © 2021 by dreamn (https://dreamn.cn)

All rights reserved.