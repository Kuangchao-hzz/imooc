<template>
  <div class="app-admin-container">
    <Row>
      <Button type="primary"
              @click="roleModal = true">新增账号</Button>
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
      @on-cancel="handleCancel()"
      @on-ok="userAdminHandleFn()">
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
        <FormItem label="角色名称" prop="rolename">
          <Input v-model="roleModalForm.rolename" autocomplete="off" placeholder="请输入真实姓名..."></Input>
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
        currentRouter: this.$store.state.asyncRouter.asyncRouter,
        roleModalForm: {
          id: '',
          username: '',
          realname: '',
          rolename: '',
          password: '123456',
          againPassword: '123456',
          rules: {
            username: [
              {required: true, message: '账号名称不能为空', trigger: 'blur'}
            ],
            realname: [
              {required: true, message: '真实姓名不能为空', trigger: 'blur'}
            ],
            rolename: [
              {required: true, message: '角色名称不能为空', trigger: 'blur'}
            ],
            password: [
              {
                validator: (rule, value, callback) => {
                  if (value === '') {
                    callback(new Error('请输入密码'))
                  } else {
                    if (this.roleModalForm.againPassword !== '') {
                      this.$refs.roleModalForm.validateField('againPassword')
                      callback()
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
              key: '_id'
            },
            {
              align: 'center',
              title: '名称',
              key: 'username'
            },
            {
              align: 'center',
              title: '真实姓名',
              key: 'realname'
            },
            {
              align: 'center',
              title: '密码',
              key: 'password'
            },
            {
              align: 'center',
              title: '注册时间',
              render: (h, params) => {
                return h('div', moment(params.row.meta.createTime).format('YYYY/MM/DD HH:mm:ss'))
              }
            },
            {
              align: 'center',
              title: '更新时间',
              render: (h, params) => {
                return h('div', moment(params.row.meta.updateTime).format('YYYY/MM/DD HH:mm:ss'))
              }
            },
            {
              align: 'center',
              title: '权限分配',
              key: 'rolename'
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
                    on: {
                      click: () => {
                        this.roleModal = true
                        this.userAdminFindByIdFn(params.row._id)
                      }
                    },
                    style: {
                      marginRight: '5px'
                    }
                  }, '编辑'),
                  h('Button', {
                    props: {
                      type: 'error',
                      size: 'small'
                    },
                    on: {
                      click: () => {
                        console.log(params)
                        swal({
                          title: '你确定要删除该账号?',
                          type: 'warning',
                          showCancelButton: true,
                          confirmButtonColor: '#3085d6',
                          cancelButtonColor: '#d33',
                          confirmButtonText: '确定',
                          cancelButtonText: '取消'
                        }).then((result) => {
                          if (result.value) {
                            this.userAdminHandleFn('/del', params.row._id)
                          }
                        })
                      }
                    },
                    style: {
                      marginRight: '5px'
                    }
                  }, '删除')
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
        return this.roleModalForm.id === '' ? '新增账号' : '编辑账号'
      },
      totalHandle () {
        return this.tableData.data.total ? this.tableData.data.total : 1
      }
    },
    mounted () {
      this.userAdminListFn()
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
              name: item.name,
              expand: true,
              children: item.children.map(_item => {
                return {
                  title: _item.meta.title,
                  name: _item.name,
                  expand: true
                }
              })
            })
            this.adminTree(item.children, true)
          } else {
            trees.push({
              title: item.meta.title,
              name: item.name,
              expand: true
            })
          }
        })
        return trees
      },
      // 获取账户数据list
      handleCancel () {
        this.$refs['roleModalForm'].resetFields()
        this.roleModalForm.id = ''
      },
      /*
      * @$type='/list' - 【数据列表接口】
      * @$type='/add'  - 【添加账号接口】
      * @$type='/edit' - 【编辑账号接口】
      * @$type='/del'  - 【删除账号接口】
      * */
      userAdminListFn () {
        this.$http.userAdminList('/list', {}).then(res => {
          this.tableData.data = res
        })
      },
      userAdminFindByIdFn ($id) {
        this.$http.userAdminList('/findById', {id: $id}).then(res => {
          this.roleModalForm.id = res.data._id
          this.roleModalForm.username = res.data.username
          this.roleModalForm.realname = res.data.realname
          this.roleModalForm.rolename = res.data.rolename
        })
      },
      userAdminHandleFn ($type = '/add', $id) {
        var auth = {}
        let checkedNodes = this.$refs['roleTree'].getCheckedNodes()
        checkedNodes.forEach(_item => {
          auth[_item.name] = {
            admin: true
          }
        })
        let $params = {
          id: $id || this.roleModalForm.id,
          username: this.roleModalForm.username,
          realname: this.roleModalForm.realname,
          rolename: this.roleModalForm.rolename,
          password: this.roleModalForm.password,
          auth: auth
        }
        if (this.roleModalForm.id) {
          $type = '/edit'
        }
        console.log(this.$store)
        console.log($params)
        this.$http.userAdminList($type, $params).then(res => {
          this.handleCancel()
          this.userAdminListFn()
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
