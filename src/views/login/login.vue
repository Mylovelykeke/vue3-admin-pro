<template>
  <div class="login-container">
    <div class="login-body">
      <el-row :gutter="20">
        <el-col :span="12">
          <!-- <div class="login-carousel">
            <el-carousel height="450px" indicator-position="outside">
              <el-carousel-item :key="1">
                <img
                  src="../../assets/love.png"
                  alt="图片1"
                  style="width: 100%"
                />
              </el-carousel-item>
              <el-carousel-item :key="1">
                <img
                  src="../../assets/run.png"
                  alt="图片1"
                  style="width: 100%"
                />
              </el-carousel-item>
            </el-carousel>
          </div> -->
        </el-col>
        <el-col :span="10" :offset="2">
          <el-card class="login-card" shadow="hover">
            <el-form
              ref="ruleFormRef"
              class="login-form"
              :model="ruleForm"
              :rules="rules"
            >
              <h1 class="login-title">vue3 管理系统</h1>
              <el-form-item prop="name">
                <el-input v-model="ruleForm.name" size="large">
                  <template #prefix>
                    <el-icon size="20" class="icon-H">
                      <svg
                        t="1648877269667"
                        class="icon"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="2189"
                        width="200"
                        height="200"
                      >
                        <path
                          d="M614.015 562.226H409.928c-191.021 0-346.487 153.046-346.487 341.29v20.07C63.441 1024 216.36 1024 409.928 1024h204.087c185.927 0 346.46 0 346.5-100.413v-20.121c0-188.156-155.48-341.291-346.5-341.291zM501.77 0C350.075 0 226.7 121.566 226.7 271.02s123.323 271.047 275.07 271.047S776.84 420.475 776.84 271.02 653.454 0 501.771 0z"
                          p-id="2190"
                        ></path>
                      </svg>
                    </el-icon>
                  </template>
                </el-input>
              </el-form-item>

              <el-form-item prop="password">
                <el-input
                  v-model="ruleForm.password"
                  size="large"
                  type="password"
                  placeholder="Please input password"
                  show-password
                >
                  <template #prefix>
                    <el-icon size="20" class="icon-H">
                      <svg
                        t="1648877729416"
                        class="icon"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        p-id="7690"
                        width="200"
                        height="200"
                      >
                        <path
                          d="M512.002047 4.582356c187.817244 0 340.079786 152.253332 340.079785 340.078762 0 4.334716-0.112563 8.660223-0.270152 12.950938h-75.054243c0.208754-4.290714 0.313131-8.608035 0.313131-12.950938 0-146.401055-118.676676-265.077731-265.068521-265.077731-146.401055 0-265.081824 118.676676-265.081825 265.077731 0 4.342903 0.113587 8.660223 0.318248 12.950938h-75.049127a344.096255 344.096255 0 0 1-0.270152-12.950938C171.918168 156.835688 324.175593 4.582356 512.002047 4.582356z"
                          fill="#515151"
                          p-id="7691"
                        ></path>
                        <path
                          d="M63.227917 345.071463h897.537003c14.747859 0.775665 25.553951 8.947772 25.317568 25.308359l-0.130983 556.383771c-0.00921 50.96771-41.695551 92.653028-92.653028 92.653028H130.69436c-50.953384 0-92.644842-41.685318-92.653028-92.653028l-0.12689-556.383771c0.065491-16.551945 11.34128-25.325754 25.313475-25.308359z m383.666403 522.407004h130.20215l-29.442507-177.509502v-0.018419c37.483631-14.336491 64.100795-50.651509 64.100796-93.174913 0-55.100835-44.66825-99.757829-99.751689-99.757829-55.099812 0-99.760899 44.656993-99.760899 99.757829 0 42.523404 26.612048 78.838422 64.090563 93.174913v0.018419l-29.438414 177.509502z"
                          fill="#515151"
                          p-id="7692"
                        ></path>
                      </svg>
                    </el-icon>
                  </template>
                </el-input>
              </el-form-item>
              <el-divider content-position="right"></el-divider>
              <el-form-item>
                <el-button
                  type="primary"
                  size="large"
                  style="width: 100%"
                  :loading="loading"
                  @click="handleLogin"
                  >登录</el-button
                >
              </el-form-item>
            </el-form>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="authcenter-foot">
      <p>
        关于公司的一些信息@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
        <el-divider direction="vertical" />
        International Business
        <el-divider direction="vertical" />
        <a href="https://www.baidu.com">百度</a>
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useUserStore } from '/@/store/user'
import type { FormInstance } from 'element-plus'
import { useRouter } from 'vue-router'
const ruleFormRef = ref<FormInstance>()
const store = useUserStore()
const ruleForm = reactive({
  name: '',
  password: '',
})
const rules = reactive({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
  ],
  password: [
    {
      required: true,
      message: 'Please select Activity zone',
      trigger: 'change',
    },
  ],
})
const loading = ref(false)
const router = useRouter()
const handleLogin = async () => {
  loading.value = true
  if (!ruleFormRef.value) return
  await ruleFormRef.value.validate(async (valid) => {
    await store.login(ruleForm)
    router.push('/')
    loading.value = false
  })
}
</script>
<style lang="scss">
.login-container {
  height: 100vh;
  width: 100%;
  // background-image: url('../../assets/bg.jpeg');
  // background-repeat: no-repeat;
  // background-size: cover;
  background-color: #2d3a4b;
  overflow: hidden;
  .login-body {
    height: calc(100% - 80px);
    .login-carousel {
      margin-top: 120px;
      padding: 0 10px;
      border-radius: 10px;
    }
    .icon-H {
      height: 100%;
      color: #333333;
    }
    .login-card {
      position: absolute;
      top: 120px;
      width: 400px;
      height: 450px;
      .login-form {
        margin: 0 auto;
        padding: 20px 0;
        .login-title {
          text-align: center;
          margin: 30px 0;
        }
      }
    }
  }
  .authcenter-foot {
    width: 100%;
    height: 80px;
    text-align: center;
    color: white;
    font-size: 14px;
    a {
      color: white;
    }
  }
}
</style>
