

import { createRouter, createWebHashHistory } from 'vue-router'
import HelloWorld from "../components/HelloWorld";
import Edit from "../components/Edit";

import List from "@/components/List";
import Wechat from "@/components/Wechat";

const routes = [
    { path: '/', component: HelloWorld },
    { path: '/Edit', component: Edit },
    { path: '/List',component: List },
    { path: '/Upload',  beforeEnter() {location.href = 'https://github.com/dreamncn/AutoResource/issues/new?assignees=&labels=&template=-----rule-submission.yml&title='} },
    { path: '/Question',  beforeEnter(){location.href = 'https://github.com/dreamncn/Qianji_auto/issues/new/choose'}},
    { path: '/Wechat',  component: Wechat },
    { path: '/Docs',  beforeEnter() {location.href = 'http://github.com'}},
    { path: '/Github',  beforeEnter() {location.href = 'https://github.com/dreamncn/Qianji_auto/'}},
];

const router = new createRouter({
    history: createWebHashHistory(),
    routes
})


export default (app) => {
    app.use(router)
}