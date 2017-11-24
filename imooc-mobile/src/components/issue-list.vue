<template>
  <div class="issue-list-container">
    <div class="issue__list">
      <div class="issue__user">
        <img src="http://img.mukewang.com/590369df0001041812000460.jpg">
      </div>
      <div class="issue__desc">
        <p class="issue__desc__form">
          来自 C C# JavaScript 3个回答
        </p>
        <p class="issue__desc__issue">
          函数的形参同是也是局部变量
        </p>
        <p class="issue__desc__answer">
          以采纳onemoo的回答
        </p>
        <p class="issue__desc__answer__cont">
          是的。 从函数定义的参数列表开始，包括形参在内都算是在函数作用域中。是的。 从函数定义的参数列表开始，包括形参在内都算是在函数作用域中。
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'issue-list'
}
</script>
<style lang="scss" type="text/scss" scoped>
.issue-list-container{
  overflow: hidden;
  position: relative;
  &::after{
    content: '';
    clear: both;
  }
  .issue__list{
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
    overflow: hidden;
    border-bottom: 1px #ddd solid;
    .issue__user{
      float: left;
      width: 3rem;
      height: 3rem;
      border-radius: .4rem;
      overflow: hidden;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .issue__desc{
      margin-left: 4rem;
      p{
        margin: 0;
        padding: 0;
        overflow: hidden;
        min-height: .48rem;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        &.issue__desc__form{
          color: #71777d;
          padding-bottom: .5rem
        }
        &.issue__desc__issue{
          color: #2b333b;
          padding-bottom: 1rem
        }
        &.issue__desc__answer{
          color: #54585d;
          padding-bottom: .5rem
        }
        &.issue__desc__answer__cont{
          color: #54585d;
        }
      }
    }
  }
}
</style>
