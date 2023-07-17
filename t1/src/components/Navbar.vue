<script>
</script>

<template>
  <div>
    <ul>
      <li><router-link class="spec" to="/">INFO MINER</router-link></li>
      <li><router-link class="spec" to="/basic">Basic Information</router-link></li>
      <li><router-link class="spec" to="/contact">Contact Information</router-link></li>
    </ul>
  </div>
  <div>
    <router-view class="centerDiv"/>
  </div>
</template>

<style scoped>
.centerDiv {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 150px;
  margin-right: 150px;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
}

li, .spec {
  display: block;
  color: white;
  text-align: center;
  padding: 10px 16px;
  text-decoration: none;
}

li:hover {
  background-color: #111;
}

</style>
