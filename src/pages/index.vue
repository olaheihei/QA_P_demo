<template>
  <div class="home">
    <el-container style="height: 100%;">
      <!-- 以下为左侧菜单栏 -->
      <el-aside width="200px">
        <Left></Left>
      </el-aside>
      <!-- 以下为内容区域 -->
      <el-container >
        <!-- 头部 -->
        <el-header>
          <Top></Top>
        </el-header>

        <!-- 页面主体 -->
        <el-main>
          <router-view></router-view>
        </el-main>
        <!-- 页脚 -->
        <el-footer style="height:20px">by.QA</el-footer>

      </el-container>
    </el-container>
  </div>
</template>

<script>
  import Top from '@/components/Top'
  import Left from '@/components/Menu'
  export default {
    name:'app',
    components:{ 
      Top,
      Left
    }
  } 
</script>

<style >
  html,
  body,
  #app,
  .home,
  .el-container {
    padding:0px;
    margin:0px; 
    height:100%;
  }
  .el-header {
    /*background-color: #B3C0D1;*/
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 300px;
  }

  .el-footer {
    background-color: #B3C0D1;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }


  body > .el-container {
    margin-bottom: 40px;
  }

/*  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }*/
</style>



<!-- Add "scoped" attribute to limit CSS to this component only -->
