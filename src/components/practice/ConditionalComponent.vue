<template>
    <h1>conditional component</h1>
    <button @click="login">로그인</button>
    <div v-if="isLogined">어서와요 고객님</div>
    <div v-else>로그인해주세요</div>

    <h1>상품목록조회</h1>
    <ul>
        <!-- v-for에서는 반드시 key값을 지정, key를 지정함으로서 각 요소마다의 고유식별 -->
        <li v-for="product in products" :key="product.id">{{product.name}}</li>
    </ul>
</template>


<script>
export default{
    data(){
        return{
            isLogined: false,
            products:[
                {id:1, name: "apple"},
                {id:2, name: "banana"},
                {id:3, name: "grape"} // 실제로는 배열 비워놓다가 데이터 받고 뿌리고~
            ],
        }
    },
    methods: {
        login(){
            this.isLogined = true;
        }
    }
}
</script>