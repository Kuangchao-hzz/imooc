<template>
  <div class="app-view-my">
    <scroller>
      <div class="my__tool_cont base-padding">
        <icon type="ion-android-expand" size="20"></icon>
        <icon type="ion-android-mail" size="20"></icon>
      </div>
      <div class="my__header_cont base-padding">
        <div class="header__avatar">
          <img src="http://img.mukewang.com/590369df0001041812000460.jpg">
        </div>
        <div class="header__info">
          <p class="header__username">nothing_hzz</p>
          <p class="header__desc">
            <span><span>学习时长</span> 250小时</span>
            <span><span>经验</span> 6586</span>
          </p>
        </div>
      </div>
      <div class="my__focus_cont">
        <div class="item__list">
          关注 <span>3</span>
        </div>
        <div class="item__list">
          粉丝 <span>3</span>
        </div>
        <div class="item__list">
          积分 <span>3</span>
        </div>
      </div>
      <div class="my__learn_cont base-padding">
        <div class="learn__list">
          <icon type="ion-android-time" size="20"></icon>
          <p>最近学习</p>
        </div>
        <div class="learn__list">
          <icon type="ion-android-star-outline" size="20"></icon>
          <p>我的收藏</p>
        </div>
        <div class="learn__list">
          <icon type="ion-ios-videocam" size="20"></icon>
          <p>我的实战</p>
        </div>
        <div class="learn__list">
          <icon type="ion-merge" size="20"></icon>
          <p>我的路径</p>
        </div>
      </div>
      <div class="my__item-cont">
        <div class="item-list base-padding">
          <icon type="ion-document-text" size="22"></icon>
          <p>我的订单</p>
        </div>
        <div class="item-list base-padding">
          <icon type="ion-pricetag" size="20"></icon>
          <p>优惠券</p>
        </div>
        <div class="item-list base-padding">
          <icon type="ion-android-create" size="20"></icon>
          <p>我的手记</p>
        </div>
        <div class="item-list base-padding">
          <icon type="ion-ios-help" size="20"></icon>
          <p>我的猿问</p>
        </div>
        <div class="item-list base-padding">
          <icon type="ion-calendar" size="20"></icon>
          <p>我的课表</p>
        </div>
        <div class="item-list base-padding">
          <icon type="ion-ios-gear" size="20"></icon>
          <p>设置</p>
        </div>
      </div>
    </scroller>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    methods: {}
  }
</script>

<style lang="scss" type="text/scss" scope>
.app-view-my{
  height: 100%;
  display: block;
  background: #ddd;
  .my__tool_cont{
    padding-top: 1rem;
    text-align: right;
    display: block;
    overflow: hidden;
    background: #fff;
    .icon{
      margin-left: 1rem;
    }
  }
  .my__header_cont{
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    background: #fff;
    .header__avatar{
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      overflow: hidden;
      float: left;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .header__info{
      margin-left: 6rem;
      p{
        margin: 0;
        &.header__username{
          font-size: 2rem;
          line-height: 2.5rem;
        }
        &.header__desc{
          >span{
            margin-right: 20px;
            line-height: 2rem;
            span{
              padding-right: .5rem;
            }
          }
        }
      }
    }
  }
  .my__focus_cont{
    display: flex;
    padding: 1rem 0;
    background: #fff;
    border-bottom: 1px #ddd solid;
    .item__list{
      flex: 0 0 33.333%;
      text-align: center;
      font-size: 1.2rem;
      span{
        color: #212121;
      }
      &:nth-child(2){
        box-sizing: border-box;
        border-right: 1px #ddd solid;
        border-left: 1px #ddd solid;
      }
    }
  }
  .my__learn_cont{
    padding-bottom: 1rem;
    padding-top: 1rem;
    display: flex;
    background: #fff;
    justify-content: space-between;
    margin-bottom: 8px;
    .learn__list{
      text-align: center;
      p{
        margin: 0;
        line-height: 2rem;
      }
    }
  }
  .my__item-cont{
    padding-right: 0;
    .item-list{
      background: #fff;
      display: flex;
      align-items: center;
      padding-right: 0;
      .icon{
        width: 3rem;
      }
      p{
        width: 100%;
        margin: 0;
        line-height: 3.5rem;
        font-size: 1.2rem;
        box-sizing: border-box;
        border-bottom: 1px #ddd solid;
      }
      &:nth-child(2), &:nth-child(5), &:last-child{
        margin-bottom: 8px;
        p{
          border-bottom: none;
        }
      }
    }
  }
}
</style>
