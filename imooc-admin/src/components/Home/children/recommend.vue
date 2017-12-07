<template>
  <div class="app-home-tj">
    <row :gutter="16">
      <i-col span="12">
        <Card>
          <p slot="title">
            <Icon type="ios-film-outline"></Icon>
            置顶推荐课程
          </p>
          <div slot="extra">
            <Icon type="trash-a" size="20"></Icon>
            <Icon type="plus-circled" size="20"></Icon>
          </div>
          <Carousel v-model="value" loop>
            <CarouselItem>
              <div class="demo-carousel">
                <img src="http://t1.niutuku.com/960/45/45-439758.jpg" alt="">
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class="demo-carousel">
                <img src="http://t1.niutuku.com/960/45/45-439758.jpg" alt="">
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class="demo-carousel">
                <img src="http://t1.niutuku.com/960/45/45-439758.jpg" alt="">
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class="demo-carousel">
                <img src="http://t1.niutuku.com/960/45/45-439758.jpg" alt="">
              </div>
            </CarouselItem>
          </Carousel>
        </Card>
      </i-col>
      <i-col span="12">
        <Card>
          <p slot="title">
            <Icon type="ios-film-outline"></Icon>
            实战推荐
          </p>
          <div slot="extra">
            <Icon type="trash-a" size="20"></Icon>
            <Icon type="plus-circled" size="20"></Icon>
          </div>

        </Card>
      </i-col>
    </row>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        value: 0,
        height: 200,
        title: '推荐',
        tableData: {
          columns: [
            {
              align: 'center',
              title: 'Id',
              key: 'id'
            },
            {
              align: 'center',
              title: 'Name',
              key: 'name'
            },
            {
              align: 'center',
              title: 'Age',
              key: 'age'
            },
            {
              align: 'center',
              title: 'Address',
              key: 'address'
            }
          ],
          data: [],
          total: 0
        }
      }
    },
    computed: {
      totalHandle () {
        return this.tableData.total
      }
    },
    mounted () {
      this.recommendFetchFn()
    },
    methods: {
      recommendFetchFn () {
//        this.$http.recommendFetch().then(res => {
//          this.$nextTick(() => {
//            this.tableData.data = res.list
//            this.tableData.total = res.total
//          })
//        })
      }
    }
  }
</script>
<style lang="scss" type="text/scss">
.app-home-tj{
  .ivu-card{
    .ivu-card-body{
      .ivu-carousel{
        .ivu-carousel-list{
          .ivu-carousel-item{
            .demo-carousel{
              height: 200px;
              margin-bottom: 50px;
              img{
                width: 100%;
                height: 100%;
              }
            }
          }
        }
      }
    }
  }
}
</style>
