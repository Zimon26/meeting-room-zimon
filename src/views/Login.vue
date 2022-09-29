<template>
  <div class="login-container">
    <el-row class="all-form-container">
      <el-col :span="8" :offset="8">
        <!-- 顶级容器 -->
        <el-container class="top_container">
          <!-- 主体区域 -->
          <el-main>
            <!-- <el-container direction="vertical">
              <el-tabs v-model="userType" @tab-click="onUserTypeClick" tabPosition="left" style="height: 100%; margin-top: 50px">
                <el-tab-pane label="管理员登录" name="first"></el-tab-pane>
                <el-tab-pane label="用户登录" name="second"></el-tab-pane>
              </el-tabs>
            </el-container> -->
            <div style="height: 20px; margin-bottom: 20px">
              <h3 style="color: #409EFF">欢迎使用智能会议室系统，请先登录</h3>
            </div>
            <!-- 选择登录身份 -->
            <el-select v-model="userType" placeholder="请选择登录身份" style="margin-bottom: 10px">
              <el-option v-for="item in userTypeOptions" :key="item.id" :label="item.label" :value="item.id">
              </el-option>
            </el-select>
            <!-- 表单部分 -->
            <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-position="left">
              <!-- 用户名 -->
              <el-form-item prop="id" :label="nameLabel" label-width="80px">
                <el-input v-model="loginForm.id"></el-input>
              </el-form-item>
              <!-- 密码 -->
              <el-form-item prop="password" label="密码" label-width="80px">
                <el-input v-model="loginForm.password" show-password></el-input>
              </el-form-item>
              <!-- 登录和重置按钮 -->
              <el-form-item>
                <el-button type="primary" @click="onSubmitButton">登录</el-button>
                <el-button @click="onResetButton">清空</el-button>
              </el-form-item>
            </el-form>
          </el-main>
        </el-container>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  data() {
    return {
      userTypeOptions: [
        { id: 0, label: '用户' },
        { id: 1, label: '管理员' }
      ],
      userType: '',
      nameLabelChoice: ['用户ID', '管理员ID'],
      nameLabel: '用户ID',
      loginForm: {
        id: '',
        password: ''
      },
      loginFormRules: {
        id: [{ required: true, message: 'ID不能为空', trigger: 'blur' }],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
          // 需要的话这里添加密码的长度要求
        ]
      }
    }
  },
  methods: {
    onResetButton() {
      this.$refs.loginFormRef.resetFields()
    },
    onSubmitButton() {
      // axios
      //   .post('http://127.0.0.1', {
      //     id: this.id,
      //     password: this.password
      //   })
      //   .then(
      //     resolve => {
      //       console.log('post fine')
      //     },
      //     reject => {
      //       console.log('post not fine')
      //     }
      //   )
      this.$refs.loginFormRef.validate(valid => {
        if (!valid) return this.$message.error('登录失败')
        if (this.loginForm.id === 'admin' && this.loginForm.password === '123456') {
          this.$message.success('登录成功')
        }
        if (!this.userType) this.$router.push('/user')
        else this.$router.push('/admin')
      })
      // ajax传递到后台，跟后台比对密码
    }
  },
  watch: {
    userType: {
      handler(newVal) {
        this.nameLabel = this.nameLabelChoice[newVal]
      }
    }
  }
}
</script>

<style lang="less" scoped>
// html,
// body,
// .login-container {
//   // height: 100%;

// }
.login-container {
  padding-top: 12%;
}
.main_container {
  background-color: pink;
}
.head_blank {
  height: 200px;
  // background-color: pink;
}
.top_container {
  // height: 450px;
  border: 2px solid #dcdfe6;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.el-input {
  width: 80%;
}
</style>