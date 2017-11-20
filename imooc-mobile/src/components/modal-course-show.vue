<template>
  <div class="modal-course-show base-padding">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <div class="title">
            {{title}}
          </div>
        </div>
        <!-- 混合 -->
        <div class="modal-body" v-if="type === 'hybrid'">
          <div class="modal-warps modal-warps-hybrid">
            <div>
              <div class="modal-item">
                <div class="pic">
                  <img src="http://img.mukewang.com/590369df0001041812000460.jpg">
                  <p class="title">
                    <span>Python</span>
                    <span>Python3入门与进阶</span>
                  </p>
                  <p class="desc">
                    <span>￥366</span>
                    <span>
                      <i class="icon icon-bussiness-man"></i>
                      <span>1364</span>
                    </span>
                  </p>
                </div>
              </div>
               <div class="modal-item">
                <div class="pic">
                  <img src="http://img.mukewang.com/590369df0001041812000460.jpg">
                  <p class="title">
                    <span>Python</span>
                    <span>Python3入门与进阶</span>
                  </p>
                  <p class="desc">
                    <span>￥366</span>
                    <span>
                      <i class="icon icon-bussiness-man"></i>
                      <span>1364</span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div class="modal-item" v-for="($item, $index) in 4" :key="$index">
              <div class="pic">
                <img src="http://img.mukewang.com/590369df0001041812000460.jpg">
                <p class="desc">
                  <span>中级</span>
                  <span>
                    <i class="icon"></i>
                    <span>1364</span>
                  </span>
                </p>
              </div>
              <div class="info">
                <p>Vue2.0+Node.js+MongoDB全栈打造商城系统</p>
                <p>初级 · 51人在学</p>
                <p>￥288</p>
              </div>  
            </div>  
          </div>      
        </div> 
        <!-- 默认模板 -->
        <div class="modal-body" v-if="type === 'default'">
           <div class="modal-warps modal-warps-default">
            <div class="modal-item" v-for="($item, $index) in 4" :key="$index">
              <div class="pic">
                <img src="http://img.mukewang.com/590369df0001041812000460.jpg">
                <p class="desc">
                  <span>中级</span>
                  <span>
                    <i class="icon"></i>
                    <span>1364</span>
                  </span>
                </p>
              </div>
              <div class="info">
                <p>Vue2.0+Node.js+MongoDB全栈打造商城系统</p>  
                <p>￥288</p>
              </div>  
            </div>  
          </div>      
        </div> 
        <!-- 跑马灯 -->
        <div class="modal-body" v-if="type === 'swiper'">
           <div class="modal-warps modal-warps-swiper">
            <swiper :options="swiperOption">
              <swiper-slide v-for="($item, $index) in 4" :key="$index">
                <div class="modal-item modal-item-swiper">
                  <div class="pic">
                    <img src="http://img.mukewang.com/590369df0001041812000460.jpg">
                    <p class="desc">
                      <span>中级</span>0
                      <span>
                        <i class="icon"></i>
                        <span>1364</span>
                      </span>
                    </p>
                  </div>
                  <div class="info">
                    <p>Vue2.0+Node.js+MongoDB全栈打造商城系统</p>
                    <p>￥288</p>
                  </div>
               </div>
              </swiper-slide>
            </swiper>
          </div>      
        </div> 
      </div>
    </div>
  </div>
</template>
<script>
/* start
 * ====================================
 *  课程推荐模板
 * ====================================
 * end */

export default {
  name: 'modal-course-show',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        slidesPerView: 2.1,
        paginationClickable: true,
        spaceBetween: 10,
        freeMode: true
      }
    }
  },
  props: {
    title: {
      type: String
    },
    type: {
      type: String
    }
  }
}
</script>
<style lang="scss" scoped>
  .modal-course-show{
    .modal-dialog{
      .modal-content{
        .modal-header{
          .title{
            display: flex;
            align-items: center;
            line-height: 4rem;
            font-size: 1.4rem;
          }
        }
        .modal-body{
          .modal-warps{
            display: flex;
            justify-content: space-between;
            .modal-item{
              width: 48.5%;
              &.modal-item-swiper{
                width: 100%;
              }
              .pic{
                height: 7rem;
                border-radius: 0.4rem;
                overflow: hidden;
                position: relative;
                img{
                  width: 100%;
                  height: 100%;
                }
                .title{
                  position: absolute;
                  margin: 0;
                  left: 0rem;
                  top: 0.8rem;
                  color: #fff;
                  >span{
                    display: block;
                    padding-left: 0.8rem;
                    line-height: 1.5rem;
                  }
                }
              .desc {
                  position: absolute;
                  margin: 0;
                  bottom: 0.8rem;
                  color: #fff;
                  >span {
                    padding-left: 0.8rem;
                    .icon-bussiness-man:before {
                      content: "\E929";
                      color: #515151;
                    }
                  }
                }
              }
              .info{
                line-height: 1.5rem;
                font-size: 1.2rem;
                p{
                  margin: .5rem 0;
                }
              }
            }
            &.modal-warps-default{
              flex-wrap: wrap;
            }
            &.modal-warps-swiper{
              >div{
                height: 13rem;
                .pic{
                   height: 6rem;
                }
              }
            }
            // 混合
            &.modal-warps-hybrid {
              display: block;
              >div{
                display: flex;
                justify-content: space-between;
                margin-bottom: 2.5rem;
                .modal-item{
                  height: 10rem;
                  border-radius: 0.4rem;
                  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
                  .pic{
                    height: 100%;
                  }
                }
              }
              >div.modal-item {
                width: 100%;
                display: flex;
                margin-bottom: 1.2rem;
                >div.pic {
                  width: 10rem;
                  height: 6rem;
                }
                >div.info {
                  padding-left: 1.2rem;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
2