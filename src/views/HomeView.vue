<template>
  <div class="pageMain">
 <first1 @lick='addFun' :firstTxt1='firstTxt'></first1>
<second1 :secondTxt1='secondTxt'></second1>
    <!-- <div class="loading">
 <div class="loading_item"></div>
  <div class="loading_item"></div>
   <div class="loading_item"></div>
    <div class="loading_item"></div>
   <div class="loading_item"></div>
 <div class="loading_item"></div>
 </div> -->
  </div>
</template>

<script>
import first1 from '@/components/first1.vue'
import second1 from '@/components/second1.vue'

export default {
  name: 'HomeView',
  components: {
    first1,
    second1
  },
 data () {
    return {
     firstTxt:'我是组件一',
      secondTxt:'我是组件二'
    }
  },

    methods: {
addFun(){}
    },
     created () {

     }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.pageMain {
  // display: flex;
  // justify-content: space-around;
  // margin-right: 50px;
  // flex-wrap: wrap;
}
.couponMain {
  display: flex;
  justify-content: space-around;
  margin-right: 50px;
  flex-wrap: wrap;
}
.coupon1 {
  width: 240px;
  height: 100px;
  margin-top: 15px;
  background-color: #f56c6c;
  -webkit-mask: radial-gradient(
    circle at left center,
    transparent 20px,
    red 20px
  );
}
.coupon2 {
  width: 240px;
  height: 100px;
  margin-top: 15px;
  background-color: #f56c6c;
  -webkit-mask: radial-gradient(circle at 0, #0000 20px, red 0),
    radial-gradient(circle at right, #0000 20px, red 0);
  -webkit-mask-size: 51%;
  -webkit-mask-position: 0, 100%;
  -webkit-mask-repeat: no-repeat;
}
.coupon3 {
  width: 240px;
  height: 100px;
  margin-top: 15px;
  background-color: #f56c6c;
  -webkit-mask: radial-gradient(circle at 20px, #0000 20px, red 0);
}
.coupon4 {
  width: 240px;
  height: 100px;
  margin-top: 15px;
  background-color: #f56c6c;
  -webkit-mask: radial-gradient(circle at 20px 20px, #0000 20px, red 0);
  -webkit-mask-position: -20px -20px;
}
// 缩写
// .coupon4 {
//   -webkit-mask: radial-gradient(circle at 20px 20px, #0000 20px, red 0) -20px -20px;
// }
.coupon5 {
  width: 240px;
  height: 100px;
  margin-top: 15px;
  background-color: #f56c6c;
  -webkit-mask: radial-gradient(circle at 20px 20px, #0000 20px, red 0);
  -webkit-mask-position: -20px -20px;
  -webkit-mask-size: 50%;
}
// 缩写
// .coupon5 {
//   -webkit-mask: radial-gradient(circle at 20px 20px, #0000 20px, red 0) -20px -20px / 50%;
// }
.coupon6 {
  width: 240px;
  height: 100px;
  margin-top: 15px;
  background-color: #f56c6c;
  -webkit-mask: radial-gradient(circle at 10px, #0000 10px, red 0);
  -webkit-mask-position: -10px;
  -webkit-mask-size: 100% 30px;
}
.coupon7 {
  width: 240px;
  height: 100px;
  margin-top: 15px;
  background-color: #f56c6c;
  -webkit-mask: radial-gradient(circle at 50%, red 5px, #0000 0) 50% 50% / 100%
      20px,
    radial-gradient(circle at 20px 20px, #0000 20px, red 0) -20px -20px / 50%;
  -webkit-mask-composite: destination-out;
  mask-composite: subtract; /*Firefox*/
}
.coupon8 {
  width: 240px;
  height: 100px;
  margin-top: 15px;
  background-color: #f56c6c;
  -webkit-mask: radial-gradient(circle at 5px, red 5px, #0000 0) -5px 50% / 100%
      20px,
    radial-gradient(circle at 20px 20px, #0000 20px, red 0) -20px -20px / 50%;
  -webkit-mask-composite: destination-out;
  mask-composite: subtract; /*Firefox*/
}
.stampMain {
  display: flex;
  justify-content: space-around;
  margin-right: 50px;
  flex-wrap: wrap;
  margin-top: 50px;
}
.stamp {
  width: 387px;
  height: 140px;
  padding: 0 10px;
  position: relative;
  overflow: hidden;
}
.stamp:before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 10px;
  right: 10px;
  z-index: -1;
}
.stamp:after {
  content: '';
  position: absolute;
  left: 10px;
  top: 10px;
  right: 10px;
  bottom: 10px;
  box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.5);
  z-index: -2;
}
.stamp i {
  position: absolute;
  left: 20%;
  top: 45px;
  height: 190px;
  width: 390px;
  background-color: rgba(255, 255, 255, 0.15);
  transform: rotate(-30deg);
}
.stamp .par {
  float: left;
  padding: 16px 15px;
  width: 220px;
  border-right: 2px dashed rgba(255, 255, 255, 0.3);
  text-align: left;
}
.stamp .par p {
  color: #fff;
}
.stamp .par span {
  font-size: 50px;
  color: #fff;
  margin-right: 5px;
}
.stamp .par .sign {
  font-size: 34px;
}
.stamp .par sub {
  position: relative;
  top: -5px;
  color: rgba(255, 255, 255, 0.8);
}
.stamp .copy {
  display: inline-block;
  padding: 21px 14px;
  width: 100px;
  vertical-align: text-bottom;
  font-size: 30px;
  color: rgb(255, 255, 255);
}
.stamp .copy p {
  font-size: 16px;
  margin-top: 15px;
}
.stamp01 {
  background: #f39b00;
  background: radial-gradient(
    rgba(0, 0, 0, 0) 0,
    rgba(0, 0, 0, 0) 5px,
    #f39b00 5px
  );
  background-size: 15px 15px;
  background-position: 9px 3px;
}
.stamp01:before {
  background-color: #f39b00;
}
.stamp02 {
  background: #d24161;
  background: radial-gradient(transparent 0, transparent 5px, #d24161 5px);
  background-size: 15px 15px;
  background-position: 9px 3px;
}
.stamp02:before {
  background-color: #d24161;
}
.stamp03 {
  background: #7eab1e;
  background: radial-gradient(transparent 0, transparent 5px, #7eab1e 5px);
  background-size: 15px 15px;
  background-position: 9px 3px;
}
.stamp03:before {
  background-color: #7eab1e;
}
.stamp03 .copy {
  padding: 10px 6px 10px 12px;
  font-size: 24px;
}
.stamp03 .copy p {
  font-size: 14px;
  margin-top: 5px;
  margin-bottom: 8px;
}
.stamp03 .copy a {
  background-color: #fff;
  color: #333;
  font-size: 14px;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 3px;
  display: block;
}
.stamp04 {
  margin-top: 10px;
  width: 390px;
  background: #50add3;
  background: radial-gradient(
    rgba(0, 0, 0, 0) 0,
    rgba(0, 0, 0, 0) 4px,
    #50add3 4px
  );
  background-size: 12px 8px;
  background-position: -5px 10px;
}
.stamp04:before {
  background-color: #50add3;
  left: 5px;
  right: 5px;
}
.stamp04 .copy {
  padding: 10px 6px 10px 12px;
  font-size: 24px;
}
.stamp04 .copy p {
  font-size: 14px;
  margin-top: 5px;
  margin-bottom: 8px;
}
.stamp04 .copy a {
  background-color: #fff;
  color: #333;
  font-size: 14px;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 3px;
  display: block;
}
// 样式三
.list {
  background: #eeeeee;
  width: 100%;
  .item {
    overflow: hidden;
    margin: 10px 20px;
    .left {
      float: left;
    }
    .left {
      position: relative;
      width: 500px;
      height: 190px;
      background-image: radial-gradient(
        circle at 1px 8px,
        transparent 6px,
        #fff 6px,
        #fff 0px
      );
      background-size: 500px 18px;
      background-position: 0 0, 500px 0;
      background-repeat-x: no-repeat;
      .block {
        margin: 15px;
        .first,
        .third {
          padding: 20px 20px;
        }
        .second,
        .fourth {
          padding: 10px 20px;
          color: #888;
        }
        .first {
          color: #f60d0b;
          span:nth-child(1) {
            font-size: 30px;
          }
          span:nth-child(2) {
            font-size: 48px;
          }
        }
        .third {
          color: #000;
          font-size: 36px;
        }
      }
    }
    .right {
      position: relative;
      width: 200px;
      height: 190px;
      background-image: radial-gradient(
        circle at 199px 8px,
        transparent 6px,
        #409eff 6px,
        #409eff 0px
      );
      background-size: 200px 18px;
      background-repeat-x: no-repeat;
      margin-left: 500px;
      p {
        width: 100px;
        height: 100%;
        margin: 0 auto;
        color: #fff;
        line-height: 100px;
        text-align: center;
        font-size: 44px;
      }
    }
  }
}
// 样式四
.theme1Main{
  display: flex;
  width: 100%;
padding: 10px;
}
.theme1{
    --main-color: #ec407a;
  --f-color: #444;
}
.theme2{
--main-color: #039BE5; --f-color: #fff;
}
.coupon {
  background-color: #e0e0e0;
  width: 200px; /* css变量 */
margin-left: 10px;
}

.price {
  position: relative;
  height: 120px;
  background-image: radial-gradient(
    circle at 100px -8px,
    #fff 20px,
    var(--main-color) 21px
  );
  color: #fff;
  font-size: 20px;
  text-align: center;
  padding-top: 40px;
}
.price .timeout {
  color: var(--f-color);
  font-size: 14px;
  margin-top: 25px;
}
.price span {
  font-size: 14px;
}
//锯齿状1
.price::after{ position: absolute; content: ''; display: block; bottom: 0px; height: 10px; width: 100%;   background-size: 11px 200px;   background-image: radial-gradient( circle at 5px 10px, #E0E0E0 6px, var(--main-color) 7px);}
//锯齿状样式2
// .price::after{ position: absolute; content: ''; display: block; bottom: -5px; width: 100%; border-bottom: 10px dotted #E0E0E0;}

.describe{ color: #333; padding: 10px; font-size: 14px;}.btns { /* 使其button可以居中 */ text-align: center;}.btns button{ /* 重置按钮样式 */ border: none; box-shadow: none; outline: none; background-color: var(--main-color); color: #fff; width: 50%; border-radius: 20px; line-height: 30px; margin: 40px 0 20px; cursor: pointer;}
</style>
