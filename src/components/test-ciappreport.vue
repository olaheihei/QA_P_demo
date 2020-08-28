<template>
  <el-row>
	  <el-button round @click="home">回首页
	  </el-button>
	  <el-button type="primary" round @click="postdata">主要按钮</el-button>
	  <el-button type="success" round>成功按钮</el-button>
	  <el-button type="info" round>信息按钮</el-button>
	  <el-button type="warning" round>警告按钮</el-button>
	  <el-button type="danger" round>危险按钮</el-button>
	  <div class="haha">{{ info }}</div>
  </el-row>
</template>
<script>
  export default {
	data() {
	      return {  
	      info: this.info
	      }
	    },
	    methods: {
	      home() {
	        this.$router.push('/')
	      },
	      postdata(){
	      	this.$axios.post('/api/testpost', {
					 firstName: 'Fred',
					 lastName: 'Flintstone'
				}).then(response => ( this.info = response.data))
				.catch(function (error) {console.log(error)});
	      }
	    }
	  }

</script>

