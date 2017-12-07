<template>
  <div class="app-signup-container">
    <Card>
      <p slot="title">登录</p>
      <Form ref="signupForm" :model="signupForm" :rules="signupForm.rules">
        <FormItem prop="username">
          <Input type="text" v-model="signupForm.username">
            <span slot="prepend">
              <Icon :size="16" type="person"></Icon>
            </span>
          </Input>
        </FormItem>
        <FormItem prop="password">
          <Input type="password" v-model="signupForm.password">
            <span slot="prepend">
              <Icon :size="16" type="locked"></Icon>
            </span>
          </Input>
        </FormItem>
        <FormItem>
          <Button @click="handleSubmit('signupForm')" type="primary" long :loading="loading">
            <span v-if="!loading">登录</span>
            <span v-else="!loading">登录中...</span>
          </Button>
        </FormItem>
      </Form>
    </Card>
  </div>
</template>
<script>
  export default {
    name: 'signup',
    data () {
      return {
        loading: false,
        title: '登录',
        signupForm: {
          username: 'imooc-admin',
          password: '123456',
          rules: {
            username: [
              { required: true, message: '账号不能为空', trigger: 'blur' }
            ],
            password: [
              { required: true, message: '账号不能为空', trigger: 'blur' }
            ]
          }
        }
      }
    },
    methods: {
      handleSubmit (form) {
        this.$refs[form].validate((valid) => {
          if (valid) {
            this.loading = true
            let $params = {
              username: this.signupForm.username,
              password: this.signupForm.password
            }
            this.$http.userSignup($params).then(res => {
              this.loading = false
              cookie.set('auths', JSON.stringify(res.data.auth))
              this.$router.push('/home/recommend')
            }, err => {
              this.loading = false
              console.log(err)
            })
          } else {
            return false
          }
        })
      }
    }
  }
</script>
<style lang="scss" type="text/scss" scoped>
.app-signup-container{
  width: 100%;
  height:100%;
  background-image: url(https://file.iviewui.com/iview-admin/login_bg.jpg);
  background-size: cover;
  background-position: 50%;
  position: relative;
  .ivu-card{
    width: 300px;
    position: absolute;
    right: 160px;
    top: 50%;
    transform: translateY(-60%);
  }
}
</style>
