<template>
  <div class="app-home-tj">
    <Table
      border
      :columns="tableData.columns"
      :data="tableData.data"></Table>
    <Page
      :page-size="20"
      :total="totalHandle"></Page>
  </div>
</template>
<script>
  export default {
    data () {
      return {
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

</style>
