// main.js 는 vue애플리케이션의 시작점

import { createApp } from 'vue'
import App from './App.vue'
// src/router/index.js 파일의 router를 사용하겠다는 선언
import router from '@/router/index.js' // 골뱅이는 src를 의미..
// import router from 'vue-router // 전체 모듈이 아니라.. 라우터 아래 인덱스의 라우터 부른다..? //
import vuetify from './plugins/vuetify';

// createApp(App).mount('#app')
const app = createApp(App);

app.use(router);
app.use(vuetify);
app.mount('#app');
