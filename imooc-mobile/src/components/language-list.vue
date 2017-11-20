<template>
  <div class="language-list-container">
    <div class="language-list-item" v-for="($item, $index) in language" :key="$index">{{$item.label}}</div>
  </div>
</template>
<script>
export default {
  name: 'language-list',
  data () {
    return {
      language: [
        {
          label: 'PHP'
        },
        {
          label: 'JAVA'
        },
        {
          label: 'Html/CSS'
        },
        {
          label: 'Android'
        },
        {
          label: 'CSS3'
        },
        {
          label: 'IOS'
        },
        {
          label: 'Html5'
        },
        {
          label: '更多'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.language-list-container{
  padding-top: .5rem;
  padding-bottom: .5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .language-list-item{
    text-align: center;
    width: 23%;
    line-height: 3rem;
    border-radius: .4rem;
    display: block;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    margin: .5rem 0
  }
}
</style>
