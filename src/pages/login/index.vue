<template>

    <div class="content-login">
      <div class="login-container">
        <Login @on-submit="handleSubmit">
          <UserName name="userName" />
          <Password name="passWord" />
          <Captcha class="demo-login-captcha" name="captcha" :count-down="0" @on-get-captcha="handleGetCaptcha">
            <template #text>
              <div
                class="random-letter"
                v-for="(letter, index) in captchaLetters"
                :key="index"
                :style="{ transform: 'skew(' + captchaSkews[index] + 'deg)' }"
              >
                {{ letter }}
              </div>
            </template>
          </Captcha>
          <Submit />
        </Login>
      </div>
  </div>
</template>
<script setup lang="ts">
import { Message } from 'view-ui-plus'
import { login, getPublicKey } from '@/api/index'
import { RSAencrypt } from '@/utils/index'
import { localStorage } from '@/utils/storage'
import { useRouter } from 'vue-router'

const publicKey = ref('')
const getPublicKeyApi = async () => {
  let { data } = await getPublicKey()
  publicKey.value = data
}
getPublicKeyApi()
const router = useRouter()
const handleSubmit = async (
  valid: boolean,
  {
    userName,
    passWord,
    captcha
  }: {
    userName: string
    passWord: string
    captcha: string
  }
) => {
  if (!userName) {
    Message.info('请输入用户名')
    return
  }
  if (!passWord) {
    Message.info('请输入密码')
    return
  }

  if (!captcha) {
    Message.info('请输入验证码')
    return
  }
  if (valid) {
    if (captchaData.value !== captcha) {
      Message.info('验证码错误')
      handleGetCaptcha()
      return
    }
    passWord = RSAencrypt(passWord, publicKey.value) as string
    let { success, data } = await login({ userName, passWord })
    if (success) {
      localStorage.set('usertoken', data.token)
      localStorage.set('userName', data.userName)
      localStorage.set('userId', data.userId)
      localStorage.set('nickName', data.nickName)
      localStorage.set('logo', data.logo)
      router.push('/')
      Message.success('登录成功')
    } else {
      Message.error('用户名或密码错误')
    }
  }
}
const captchaLetters = ref<any>([])
const captchaSkews = ref<any>([])
const captchaData = ref('')
const generateRandomLetter = () => {
  let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let randomIndex = Math.floor(Math.random() * letters.length)
  return letters[randomIndex] as string
}

const generateRandomSkew = () => {
  let minSkew = -30 
  let maxSkew = 30 
  return Math.floor(Math.random() * (maxSkew - minSkew + 1)) + minSkew
}

const handleGetCaptcha = () => {
  captchaLetters.value = []
  captchaSkews.value = []
  captchaData.value = ''

  for (let i = 0; i < 4; i++) {
    let randomLetter = generateRandomLetter()
    let randomSkew = generateRandomSkew()
    captchaLetters.value.push(randomLetter)
    captchaSkews.value.push(randomSkew)
    captchaData.value += randomLetter
  }
}
handleGetCaptcha()
</script>
<style scoped>

.content-login {
  background: url('@/assets/login.png') no-repeat;
  background-size: 100% 100%;
  position: absolute;
  top: 200px;
  height: 495px;
  width: 46%;
  display: flex;
  justify-content: end;
  align-items: center;
}
.login-container {
  width: 320px;
  height: 292px;
  margin-right: 26px;
  margin-bottom: 12px;
}
::v-deep .ivu-input {
  background-color: rgba(0, 0, 0, 0);
}
::v-deep .ivu-btn-large {
  padding: 0;
}
.random-letter {
  opacity: 1;
  font-size: 20px;
  font-weight: bold;
  display: inline-block;
  position: relative;
  perspective: 1000px;
  width: 25px;
}
</style>
