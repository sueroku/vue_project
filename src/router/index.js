import {createRouter, createWebHistory} from 'vue-router';
// 파일 내부에 export default가 있는 경우에는 {}가 필요없고, 그렇지 않으면 {}필요(이게 기본이긴 함)
// import하는 요소가 여러개 있을 때에도 {}를 붙인다.
// import HomeComponent from '@/components/HomeComponent.vue'; // @는 root 폴더경로, 즉 여기서는 src를 의미한다.
// import TestComponent from '@/components/TestComponent.vue';

import { practiceRouter } from './practiceRouter';

const routes = [
    // {
    //     // path로도 라우팅이 가능하고, name으로도 라우팅이 가능
    //     // name으로 라우팅하는 경우는 , js코드 내에서 라우팅하는 경우
    //     path: '/home',
    //     name:'HOME',
    //     component: HomeComponent
    // },
    // {
    //     path: '/test',
    //     name: 'TEST',
    //     component: TestComponent
    // }

    ...practiceRouter
]

const router = createRouter({
    // vue-router는 내부적으로 두가지 방식의 히스토리 관리를 제공
    // 1) createWebHistory : /home    2) createHasHistory : /#/home
//  대부분 1번 쓴다. 
    history: createWebHistory(),
    routes
});

export default router;