<template>
  <div class="LoginButton">
    <van-button :color="color" class="btn">{{content}}</van-button>
  </div>
</template>

<script>
export default {
    props:['color','content']
}
</script>

<style lang="less" scoped>
.LoginButton{
    display: flex;
    justify-content: center;
    padding:15px;
    .btn{
        width: 250px;
        border-radius: 5px;
    }
}
</style>