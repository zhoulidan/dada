<template>
  <div class="firstMain">
   <!-- <h3>当前最新的count值为：{{$store.getters.showNum}}</h3> -->

<!-- <div class="blockzfx"></div>
<div class="blockzfx2"></div> -->
<!-- <p class="txt1">zbcd</p> -->
<p class="p1">vant+vue项目</p>
<p class="p1">第二个div元素</p>
<p class="p1">第三个div元素</p>
<div class="home-banner-wrapper">
  <!-- <div class="home-banner" style="transform: translate3d(0px, 75px, 0px);"></div> -->

</div>
     <!-- <button @click="addAsync">延迟1秒+1 Async</button>
    <button @click="addNAsync(5)">延迟N秒+N Async</button> -->
  </div>
</template>

<script >
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  name: 'first1',
  computed:{
    ...mapState(['count']),
    ...mapGetters(['showNum'])
  },
  props: {
    firstTxt1: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
    }
  },
  created(){
const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, cur) => acc + cur, 0);
console.log(sum); // 10
  },
  methods: {
    ...mapMutations(['sub', 'subN']), // 注册sub和subN函数
     ...mapActions(['addAsync', 'addNAsync']),
     btnHandler1() {
      this.$store.commit('add')
      // this.$store.count++; // 不要在本组件中直接修改State域中数据的值
    },
    btnHandler2() {
      // commit 的作用，就是调用 某个 mutation 函数
      this.$store.commit('addN', 3)
    },

  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
// p::first-letter {
//   font-size: 200%;
//   color: #8A2BE2;
// }
p:first-child {
  color: red;
}

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

.back1{
  background: wheat;
}
.blockzfx{
  height: 100px;
  width: 100px;
  background: #42b983;
  position: absolute;
  // transform: translate(-50%,-50%);
     transform: translateY(-50%);
  top: 50%;
  left: 50%;
  //  margin-right: 50px;
  // margin-bottom: 50px;
}
// .blockzfx2{
//     height: 100px;
//   width: 100px;
//   background: #c05a23;
//   display: grid;
//   place-items:center;
// }
.firstMain{
position: relative; height: 100vh;
}
.home-banner-wrapper video {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
}

</style>
