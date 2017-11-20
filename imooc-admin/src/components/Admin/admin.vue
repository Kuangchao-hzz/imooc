<template>
  <div class="app-admin-container">
    <Row>
      <Button type="primary"
              @click="roleModal = true">新增角色</Button>
    </Row>
    <Table
      border
      :columns="tableData.columns"
      :data="tableData.data.list"></Table>
    <Page
      :page-size="20"
      :total="totalHandle"></Page>
    <!-- 新增角色modal -->
    <Modal
      width="800"
      :title="titleHandle"
      v-model="roleModal"
      @on-cancel="handleCancel('roleModalForm')"
      @on-ok="userAdminListFn()">
      <Form :model="roleModalForm" ref="roleModalForm" :label-width="80" :rules="roleModalForm.rules">
        <FormItem label="账号名称" prop="username">
          <Input v-model="roleModalForm.username" autocomplete="off" placeholder="请输入账号名称..."></Input>
        </FormItem>
        <FormItem label="真实姓名" prop="realname">
          <Input v-model="roleModalForm.realname" autocomplete="off" placeholder="请输入真实姓名..."></Input>
        </FormItem>
        <FormItem label="密码" prop="password">
          <Input type="password" v-model="roleModalForm.password" autocomplete="off" placeholder="请输入密码..."></Input>
        </FormItem>
        <FormItem label="确认密码" prop="againPassword">
          <Input type="password" v-model="roleModalForm.againPassword" autocomplete="off" placeholder="请输入密码..."></Input>
        </FormItem>
        <FormItem label="权限">
          <Tree ref="roleTree" :data="treeData" show-checkbox></Tree>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        roleModal: false,
        loading: true,
        treeData: [],
        currentRouter: this.$store.state.asyncRouter.addRouters,
        roleModalForm: {
          id: '',
          username: '',
          realname: '',
          password: '',
          againPassword: '',
          rules: {
            username: [
              {required: true, message: '账号名称不能为空', trigger: 'blur'}
            ],
            realname: [
              {required: true, message: '真实姓名不能为空', trigger: 'blur'}
            ],
            password: [
              {
                validator: (rule, value, callback) => {
                  if (value === '') {
                    callback(new Error('请输入密码'))
                  } else {
                    if (this.roleModalForm.againPassword !== '') {
                      this.$refs.roleModalForm.validateField('againPassword')
                    } else {
                      callback()
                    }
                  }
                },
                trigger: 'blur'
              }
            ],
            againPassword: [
              {
                validator: (rule, value, callback) => {
                  if (value === '') {
                    callback(new Error('请输入密码'))
                  } else {
                    if (value !== this.roleModalForm.password) {
                      callback(new Error('两次输入密码不一致!'))
                    } else {
                      callback()
                    }
                  }
                },
                trigger: 'blur'
              }
            ]
          }
        },
        tableData: {
          columns: [
            {
              align: 'center',
              title: 'Id',
              key: 'id'
            },
            {
              align: 'center',
              title: '名称',
              key: 'signName'
            },
            {
              align: 'center',
              title: '真实姓名',
              key: 'realname'
            },
            {
              align: 'center',
              title: '权限分配',
              key: 'admin'
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
                  }, '编辑')
                ])
              }
            }
          ],
          data: []
        }
      }
    },
    computed: {
      // 判断model的类型
      titleHandle () {
        return this.roleModalForm.id === '' ? '新增角色' : '编辑角色'
      },
      totalHandle () {
        return this.tableData.data.total ? this.tableData.data.total : 1
      }
    },
    mounted () {
      this.userAdminListFn('/list')
      this.treeData = this.adminTree(this.currentRouter)
    },
    methods: {
      // 权限树数据
      adminTree (data, children) {
        var trees = []
        data.forEach(item => {
          if (item.children && item.children.length > 0 && !item.meta.single) {
            trees.push({
              title: item.meta.title,
              expand: true,
              children: item.children.map(_item => {
                return {
                  title: _item.meta.title,
                  expand: true
                }
              })
            })
            this.adminTree(item.children, true)
          } else {
            trees.push({
              title: item.meta.title,
              expand: true
            })
          }
        })
        return trees
      },
      // 获取账户数据list
      handleCancel (ref) {
        this.$refs[ref].resetFields()
      },
      userAdminListFn ($type) {
        if (!$type) {
          this.roleModalForm.id === '' ? $type = '/add' : $type = '/edit'
        }
        var $params = {
          id: this.roleModalForm.id,
          username: this.roleModalForm.username,
          realname: this.roleModalForm.realname,
          password: this.roleModalForm.password
        }
        console.log(this.roleModalForm.role)
        this.$http.userAdminList($params, $type).then(res => {
          this.tableData.data = res
        })
      }
    }
  }
</script>
<style lang="scss" type="text/scss" scoped>
.app-admin-container{
  .ivu-form-item-content{

  }
}
.ivu-tree{
  border: 1px #ddd solid;
  border-radius: 4px;
  padding: 0 10px;
  height: 210px;
  overflow: auto;
}
</style>
