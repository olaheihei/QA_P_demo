<template>
  <div class="menu-left">
    <div style="height:80px" href="http://www.360che.com/#pvareaid=1010101" target="_blank">
    </div>
    <el-menu router 
      class="el-menu-vertical-demo"

      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      >
      <div v-for="(v, k, s) in menu"
      :key="s">
        <el-submenu :index="s+''">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span >{{ k }}</span>
          </template>
            <el-menu-item v-for="(url, name, i) in v" :key="i" :index="url" >{{ name }}</el-menu-item>
        </el-submenu>
      </div>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'menu-left',
    data () {
        return {
            menu: this.menu
        }
    },
    mounted () {
        this.getData()
    },
    methods: {
        getData () {
            this.$axios.get('/api/menu')
            .then(response => ( this.menu = response.data.menu))
            , response => { console.log('error')
            }
        },
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        }
      }
    }
</script>

<style scoped>
  .over-hide{
    overflow: hidden;
  }
  .el-submenu{
    text-align: left
  }

  .menu-left {
  display: block;
  position: relative;
  background-color: #545c64 ;
  height: 100%
  }
</style>