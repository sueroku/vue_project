<template>
  <!-- <HelloWorld/> // 넣을때..@1-->

  <!-- router-view (약속되어 있는 이름)를 통해 app.vue에서 화면 라우팅 -->
  <!-- <HeaderComponent/> -->
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
  <!-- <FooterComponent/> // 기본적인 구성.. @2--> 

</template>
<!-- 템플릿(like html body)에는 html코드가 들어가고, script 안에는 js 코드가 들어감. 디자인은 style태그 안에 들어감 -->
<!-- vue 파일 안에는 head태그가 없고, head에 공통 import 사항은 main.js에 구성 -->


<script>
// App.vue 는 vue 애플리케이션의 루트(최상단) 컴포넌트(재활용이 가능한 화면..)
// import HelloWorld from './components/HelloWorld.vue' // 넣을때..@1
// import HeaderComponent from './components/HeaderComponent.vue' 
// import FooterComponent from './components/FooterComponent.vue' // 기본적인 구성.. @2

export default {
  name: 'App',
  components: {
    // HelloWorld // 넣을때..@1
    // HeaderComponent, FooterComponent // 기본적인 구성.. @2
  }
}
</script>



<!-- 쓸데 없어 지웡
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->