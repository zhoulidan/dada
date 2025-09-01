<template>
  <div class="hello">
<!-- 我是second1 -->
 <!-- <van-button type="primary" @click="Btn2">点击传值给first1</van-button> -->
  </div>
</template>

<script>
export default {
  name: 'second1',
  props: {
    firstTxt1: {
      type: String,
      default: ''
    },
  },
   data () {
    return {
     firstTxt:'我是组件一',

    }
  },
methods:{
   Btn2() {
      this.$bus.$emit('secoundEvent', '我是2啊')

    },
},
created(){
    //this.$bus.$off( 'first1Event' );
    this.$bus.$on('first1Event', res=>{
        console.log(res) // res choseEvent方法传递的值data
    })
}
}
</script>


<style rel="stylesheet/scss" lang="scss" scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
