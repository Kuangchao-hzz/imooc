<template>
  <div class="app-allcourse-container">
    <Row>
      <Button type="primary"
              @click="courseFormData.isShow = true">新增课程</Button>
    </Row>
    <Table border
             :columns="tableData.columns"
             :data="tableData.data">
    </Table>
    <Modal :title="titleHandle"
           @on-ok="submitFn"
           v-model="courseFormData.isShow">
      <Form :model="courseFormData" :label-width="80">
        <FormItem label="标题" prop="title">
          <i-input v-model="courseFormData.fields.title" placeholder="请输入标题"></i-input>
        </FormItem>
        <FormItem label="语言类别" prop="languageType">
          <i-select  v-model="courseFormData.fields.languageType">
            <i-option label="web前端" value="web前端"></i-option>
          </i-select>
        </FormItem>
        <FormItem label="作者姓名" prop="authorName">
          <i-input v-model="courseFormData.fields.authorName"></i-input>
        </FormItem>
        <FormItem label="作者等级" prop="authorLevel">
          <i-select v-model="courseFormData.fields.authorLevel">
            <i-option label="1星" value="1"></i-option>
          </i-select>
        </FormItem>
        <FormItem label="作者作品" prop="authorLevel">
          <Upload
            multiple
            :before-upload="handleUpload"
            name="courseUpload"
            type="drag"
            action="/">
            <div style="padding: 20px 0">
              <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
              <p>Click or drag files here to upload</p>
            </div>
          </Upload>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        NewCourseModal: false,
        tableData: {
          columns: [
            {
              align: 'center',
              title: 'id',
              key: '_id'
            },
            {
              align: 'center',
              title: '标题',
              key: 'title'
            },
            {
              align: 'center',
              title: '语言类别',
              key: 'languageType'
            },
            {
              align: 'center',
              title: '作者姓名',
              key: 'authorName'
            },
            {
              align: 'center',
              title: '作者等级',
              key: 'authorLevel'
            },
            {
              align: 'center',
              title: '上传时间',
              key: 'createTime'
            },
            {
              align: 'center',
              title: '更新时间',
              key: 'updateTime'
            },
            {
              align: 'center',
              title: '操作',
              render: (h, params) => {
                return h('div', [
                  h('Button', {
                    props: {
                      type: 'primary',
                      size: 'small'
                    },
                    style: {
                      marginRight: '5px'
                    }
                  }, '编辑'),
                  h('Button', {
                    props: {
                      type: 'primary',
                      size: 'small'
                    }
                  }, '下架')
                ])
              }
            }
          ],
          data: [
            {
              _id: '1',
              title: 'test',
              language: 'web前端'
            }
          ]
        },
        courseFormData: {
          isShow: true,
          fields: {
            id: '',
            languageType: '',
            authorName: '',
            authorLevel: '',
            courseFile: null
          }
        }
      }
    },
    computed: {
      titleHandle () {
        return this.courseFormData.fields.id === '' ? '新增课程' : '编辑课程'
      }
    },
    methods: {
      handleUpload (file) {
        this.courseFormData.fields.courseFile = file
        return false
      },
      submitFn () {
        let formData = new FormData()
        let keys = _.keys(this.courseFormData.fields)
        keys.forEach(_item => {
          console.log(this.courseFormData.fields[_item])
          formData.append(_item, this.courseFormData.fields[_item])
        })
        console.log(this.courseFormData.fields.courseFile)
        this.$http.courseAdminList('/add', formData).then(res => {
          console.log(res)
        })
      }
    }
  }
</script>
<style lang="scss" type="text/scss" scoped>

</style>
