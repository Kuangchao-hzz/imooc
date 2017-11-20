<template>
  <div class="app-unlock-container">
    <div class="unlock-con"
         @keydown.enter="handleUnlockFn"
         :style="avatarSly">
      <div class="unlock__avatar" @click="handleClickAvatarFn">
        <div class="unlock__avatar__cover"></div>
        <img :src="avatarPath">
        <Icon type="unlocked" :size="30"></Icon>
        <p>解锁</p>
      </div>
      <div class="unlock__password"
           :style="passwordSly">
        <input ref="inputEle" type="text" placeholder="输入登录密码解屏">
        <button @click="handleUnlockFn" class="unlock-btn">
          <i class="ivu-icon ivu-icon-key" style="color: white;"></i>
        </button>
      </div>
    </div>
    <p class="locked">已锁定</p>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        timeOut: null,
        avatarPath: this.$store.state.userAvatar,
        lockStatus: false
      }
    },
    computed: {
      avatarSly () {
        var left = this.lockStatus ? '40' : '50'
        var sly = {
          left: `${left}%`
        }
        return sly
      },
      passwordSly () {
        var deg = this.lockStatus ? '-360' : '-90'
        let sly = {
          transform: `translateY(-50%) rotate(${deg}deg)`,
          visibility: this.lockStatus ? 'visible' : 'hidden',
          opacity: this.lockStatus ? '1' : '0'
        }
        return sly
      }
    },
    mounted () {
      let d = document.getElementsByClassName('app-unlock-container')[0]
      d.style.backgroundColor = this.$store.state.lockConfig.background
    },
    methods: {
      handleClickAvatarFn () {
        clearTimeout(this.timeOut)
        // 每过5分钟将锁屏重置为初始状态
        this.timeOut = setInterval(() => {
          this.lockStatus = false
        }, 1000 * 60 * 5)
        this.lockStatus = true
        // 输入框自动获取焦点
        setTimeout(() => {
          this.$refs.inputEle.focus()
        }, 300)
      },
      handleUnlockFn () {
        cookie.set('unlock', 0)
        this.$router.push('/')
      }
    }
  }
</script>
<style lang="scss" type="text/scss">
.app-unlock-container{
  width: 100%;
  height: 100%;
  position: relative;
  .unlock-con{
    width: 112px;
    height: 112px;
    transition: all ease .5s;
    position: absolute;
    left: 40%;
    top: 40%;
    transform: translate(-50%, -50%);
    z-index: 9999;
    .unlock__avatar{
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right:0;
      cursor: pointer;
      border: 6px #667aa6 solid;
      box-sizing: content-box;
      border-radius: 50%;
      z-index: 999;
      transition: all ease .5s;
      img{
        border-radius: 50%;
      }
      p{
        opacity: 0;
        position: absolute;
        left: 50%;
        bottom: 20%;
        transform: translateX(-50%);
        font-size: 20px;
        color: #fff;
        z-index: 999;
        transition: opacity ease 1s;
      }
      .ivu-icon{
        opacity: 0;
        position: absolute;
        left: 50%;
        bottom: 50%;
        transform: translateX(-50%);
        z-index: 999;
        color: #fff;
        transition: opacity ease 1s;
      }
      .unlock__avatar__cover{
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0);
        position: absolute;
        left: 0;
        top: 0;
        z-index: 998;
        border-radius: 50%;
        border: 2px #fff solid;
        box-shadow: 0 0 20px 3px rgba(255, 255, 255, 1);
        animation: avatarMove 2s linear infinite alternate;
      }
      &:hover{
        .unlock__avatar__cover{
          background: rgba(0, 0, 0, .5);
        }
        p{
          opacity: 1;
        }
        .ivu-icon{
          opacity: 1;
        }
      }
    }
    .unlock__password{
      display: flex;
      visibility: hidden;
      position: absolute;
      left: 58px;
      top: 50%;
      z-index: 998;
      transform: translateY(-50%) rotate(-90deg);
      transform-origin: 0;
      transition: all ease 1s;
      input{
        height: 22px;
        width: 230px;
        font-size: 18px;
        outline: none;
        padding: 11px 10px 11px 70px;
        box-sizing: content-box;
        border: 2px solid #e2ddde;
      }
      .unlock-btn{
        font-size: 20px;
        padding: 7px 30px;
        cursor: pointer;
        border-radius: 0 25px 25px 0;
        border: 2px solid #e2ddde;
        border-left: none;
        background: #2d8cf0;
        outline: none;
        &:hover{
          background: #5cadff;
          box-shadow: 0 0 10px 3px hsla(0,0%,100%,.2);
        }
      }
    }
  }
  .locked{
    font-size: 20px;
    color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
@keyframes avatarMove {
  to {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 1);
  }
}
</style>
