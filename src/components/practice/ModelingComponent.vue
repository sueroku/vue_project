<template>
    <!-- HTML 요소의 동적 값 표시 -->
    <!-- html요소 안에 중괄호 2번을 사용함으로서 script에 정의된 변수 값을 화면에 표시 -->
    <h1>hello world {{language}}</h1>

    <!-- :value 문법을 사용하면 단방향 데이터 바인딩 -->
    <input type="text" :value="value1">
    <!-- v-model문법을 사용하면 양방향 데이터 바인딩 -->
    <input type="text" v-model="value2">
    <button @click="showValue">변수변경사항확인</button>

    <br>
    <h1>{{count}}</h1>
    <button @click="numberCount">증가</button>
    
    <h1>{{doubleCount}}</h1>
    
    <br>
    <input type="number" v-model="count2">
    <button @click="numberCount2">증가</button>
</template>

<script>
export default{
    data(){ // 얘는 변수 초기화하는, 뷰에서 약속한 함수
        return{
            language: "python",
            value1: "java",
            value2: "python",
            count: 0,
            count2: 0
        }
    },
    // computed 는 종속된 반응형 데이터가 변경될 때에 함수를 다시 실행하여 값을 계산하는 함수
    computed: {
        doubleCount(){
            return this.count*2;
        }
    },
    methods:{
        showValue(){
            alert(this.value2)
        },
        numberCount(){
            this.count = this.count + 1
        },
        numberCount2(){
            this.count2 += 1
        }
    }
}
</script>