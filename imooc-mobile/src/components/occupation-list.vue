<template>
  <div class="occupation-list-group">
    <div class="occ-list" v-for="($item, $index) in 9" :key="$index">
      <div class="occ-container">
        <div class="pic">
          <img src="http://img.mukewang.com/590369df0001041812000460.jpg" alt="">
        </div>
        <div class="desc">
          <strong>零基础入门Android语法与界面</strong>
          <small>5步骤·43门课·1123人在学</small>
          <p>￥399</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'occupation-list'
}
</script>
<style lang="scss" scoped>
$backg: rgba(203, 203, 203, .4);
.occupation-list-group{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 1.2rem;
  .occ-list{
    background: #fff;
    position: relative;
    width: 48%;
    height: 13rem;
    margin-bottom: 2.4rem;
    .occ-container {
      display: block;
      width: 100%;
      height: 100%;
      background: #fff;
      border-radius: .4rem;
      box-shadow: 0 3px 5px $backg;
      overflow: hidden;
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      z-index: 3;
      .pic{
        width: 100%;
        height: 5rem;
        border-radius: .4rem;
        overflow: hidden;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .desc{
        padding: 0 .8rem;
        strong{
          width: 100%;
          display: block;
          padding: .5rem 0;
          font-size: 1.3rem;
        }
        small{
          display: block;
          font-size: .85rem;
           -webkit-text-size-adjust:none;
        }
        p{
          margin: 0.5rem 0;
        }
      }
    }
     &:after {
        content: '';
        width: 95%;
        background: #fff;
        border-radius: .4rem;
        display: block;
        position: absolute;
        left: 50%;
        bottom: -5px;
        transform: translateX(-50%);
        z-index: 2;
        height: 12rem;
        box-shadow: 0 3px 10px $backg;
        margin-top: 1.2rem;
      }
      &:before {
        content: '';
        width: 90%;
        background: #fff;
        border-radius: .4rem;
        display: block;
        position: absolute;
        left: 50%;
        bottom: -10px;
        transform: translateX(-50%);
        z-index: 1;
        height: 12rem;
        box-shadow: 0 3px 5px $backg;
        margin-top: 1.2rem;
      }
  }
}
</style>
