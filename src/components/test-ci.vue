<template>
  <div class="block">
    <span class="demonstration">默认</span>
    <el-slider v-model="value1"></el-slider>
  	<router-view></router-view>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        value1: 0
      }
    },
    methods: {
      formatTooltip(val) {
        return val / 100;
      }
    }
  }
</script>