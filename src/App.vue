<template>
  <router-view></router-view>
</template>

<script>
  export default {
    data: function () {
      return {
        msg: 'hello',
        links: ['/page1', '/page2', '/page3']
      }
    }
  }
</script>

<style>
  .a {
    font-size: 100px;
  }
</style>
