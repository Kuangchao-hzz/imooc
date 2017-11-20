<template>
  <div class="course-icon-gourp base-padding">
      <swiper :options="swiperOption">
        <swiper-slide v-for="($item, $index) in data" :key="$index">
          <i class="icon icon-calendar"></i>
          <p>{{$item.label}}</p>
        </swiper-slide>
      </swiper>
    </div>
</template>
<script>
export default {
  name: 'course-icon',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        slidesPerView: this.slidesPerView,
        paginationClickable: true,
        spaceBetween: 10,
        freeMode: true
      }
    }
  },
  props: {
    slidesPerView: {
      type: Number,
      default: 4
    },
    data: {
      type: [Object, Array],
      default: () => [
        {
          label: '前端开发'
        },
        {
          label: '后端开发'
        },
        {
          label: '移动开发'
        },
        {
          label: '数据库'
        },
        {
          label: '云计算&大数据'
        },
        {
          label: '运维&测试'
        },
        {
          label: 'UI设计'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.course-icon-gourp{
    background: #f1f1f1;
    padding-top: 12px;
    .swiper-slide{
      text-align: center;
      padding-top: 12px;
      i.icon{
        font-size: 2rem;
      }
    }
  }
</style>
