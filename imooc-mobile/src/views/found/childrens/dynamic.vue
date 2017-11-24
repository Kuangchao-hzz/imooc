<template>
  <div class="found-dynamic-container">
    <tabs-list selected="all" fontSize="1rem" animate touch>
      <pane label="全部动态" name="all">
        <scroller :on-refresh="refresh" :on-infinite="infinite">
          <div class="dyn__list__cont base-padding">
            <div class="dyn__list__item" v-for="it in 10">
              <div class="item__avatar">
                <img src="http://t1.niutuku.com/960/45/45-439758.jpg">
              </div>
              <div class="item__info">
                <p class="item__info_username">慕丝6111709</p>
                <p class="item__info_userTime">1小时前</p>
                <p class="item__info_userCont">求问大佬， 这个怎么做， C语言</p>
                <ul class="item__info_userImage">
                  <li class="userImage__item" v-for="item in list">
                    <img v-lazy="item" class="page-lazyload-image">
                  </li>
                </ul>
                <div class="item__info_handle">
                  <Icon type="ion-thumbsup" size="20" badge="100"></Icon>
                  <Icon type="ion-chatbox-working" size="20" badge="评论"></Icon>
                </div>
                <div class="item__info_comments">
                  <p class="comment-list">
                    <span class="comment__user">weixin_Savory_0:</span>
                    <span class="comment__cont">
                      好漂漂哦
                    </span>
                  </p>
                  <p class="comment-list">
                    <span class="comment__user">weixin_Savory_0</span>
                    <span class="comment__user_source">回复</span>
                    <span class="comment__user">眼泪掉还能笑:</span>
                    <span class="comment__cont">
                      好漂漂哦
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </scroller>
      </pane>
      <pane label="我的关注" name="focus">
        222
      </pane>
    </tabs-list>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        list: [
          'http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg',
          'http://fuss10.elemecdn.com/3/1e/42634e29812e6594c98a89e922c60jpeg.jpeg',
          'http://fuss10.elemecdn.com/1/c5/95c37272d3e554317dcec1e17a9f5jpeg.jpeg',
          'http://fuss10.elemecdn.com/1/c5/95c37272d3e554317dcec1e17a9f5jpeg.jpeg',
          'http://fuss10.elemecdn.com/7/85/e478e4b26af74f4539c79f31fde80jpeg.jpeg'
        ]
      }
    },
    computed: {},
    methods: {
      refresh: function (done) {
        var self = this
        setTimeout(function () {
          var start = self.top - 1
          for (var i = start; i > start - 10; i--) {
            self.items.splice(0, 0, i + ' - keep walking, be 2 with you.')
          }
          self.top = self.top - 10
          done()
        }, 1500)
      },
      infinite: function (done) {
        setTimeout(() => {
          done('没有更多数据')
        }, 1500)
      }
    }
  }
</script>
<style lang="scss" type="text/scss">
.found-dynamic-container{
  height: 100%;
  .tabs-list-container{
    height: 100%;
    .tabs-group{
      display: flex;
      >div{
        width: 50%;
        text-align: center;
      }
    }
    .pane-group{
      height: 100%;
      box-sizing: border-box;
      .dyn__list__cont{
        .dyn__list__item{
          padding: 1rem 0;
          .item__avatar{
            width: 4rem;
            height: 4rem;
            border-radius: 50%;
            float: left;
            overflow: hidden;
            img{
              width: 100%;
              height: 100%;
            }
          }
          .item__info{
            margin-left: 5rem;
            >p{
              margin: 0;
              line-height: 2rem;
              &.item__info_username{
                color: #666;
                line-height: 2rem;
              }
              &.item__info_userTime{
                color: #ddd;
                line-height: 2rem;
              }
            }
            .item__info_userImage{
              padding: 0;
              margin: 0;
              list-style: none;
              display: flex;
              flex-wrap: wrap;
              .userImage__item{
                flex: 0 0 33.333%;
                padding-top: 33.333%;
                box-sizing: border-box;
                border: 1.5px transparent solid;
                position: relative;
                img{
                  width: 100%;
                  height: 100%;
                  position: absolute;
                  left: 0;
                  top: 0;
                }
              }
              .userImage__item:first-child:nth-last-child(4) ~ .userImage__item:nth-child(2) {
                margin-right: 33%;
              }
            }
            .item__info_handle{
              padding: 10px 0;
              text-align: right;
              .icon{
                margin-left: 3rem;
              }
            }
            .item__info_comments{
              padding: .5rem 15px;
              background: #ddd;
              p{
                line-height: 20px;
                margin: 0;
                .comment__user{
                  color: cornflowerblue;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
