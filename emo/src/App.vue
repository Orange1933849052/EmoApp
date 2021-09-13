<template>
  <div id="app">
    <div id="nav">
      <div>
        <span>
          <van-icon name="user-o" />
        </span>
        <p>首页</p>
      </div>
      <div>
        <span>
          <van-icon name="description" />
        </span> 
        <p>微表情</p>
      </div>
      <div>
        <span>
          <van-icon name="edit" />
        </span>
        <p>头像</p>
      </div>
      <div>
        <span>
          <van-icon name="contact" />
        </span>
        <p>我的</p>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
  body{
    margin:0;
    padding:0;
    background-color: #f4f4f4;
  }
  #nav{
    width: 100%;
    height: 60px;
    background-color:skyblue;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 0;
    >div{
      display: flex;
      flex:1;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      >p{
        margin: 0;
      }
    }
  }
</style>
