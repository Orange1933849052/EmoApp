<template>
  <div class="mine">
    <top-bar></top-bar>
    <div>
        <p class="text">
            请选择以下账号登陆
        </p>
        <login-button color="green" content="微信登陆"></login-button>
        <login-button color="skyblue" content="QQ登入"></login-button>
        <login-button color="yellow" content="快速登入"></login-button>
        <login-button color="black" content="Sign in with Apple"></login-button>      
    </div>
  </div>
</template>

<script>
import LoginButton from '../components/common/LoginButton.vue'
import TopBar from '../components/common/TopBar.vue'


export default {
    components:{
        TopBar,
        LoginButton
       
    }
}
</script>

<style lang="less" scoped>
.mine{
    .text{
        margin-top: 30px;
        text-align: center;
        font-size: 20px;
    }
}
</style>