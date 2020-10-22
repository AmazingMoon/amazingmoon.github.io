<template>
  <div class="home-layout">
    <h1>星河滚烫，烫死人间理想。</h1>
    <router-link to="/posts">: )</router-link>
  </div>
</template>

<script>
export default {
  name: "HomeLayout"
}
</script>

<style scoped>
.home-layout {
  position: relative;
  display: inline-block;
  font-size: 36px;
}

.home-layout > a {
  position: absolute;
  right: 0;
  margin-top: 30px;
  margin-right: 16px;
  text-decoration: blink;
}
</style>
