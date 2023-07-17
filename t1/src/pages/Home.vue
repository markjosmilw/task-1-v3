<script setup>
import axios from "axios";
import { ref } from "vue";
const names = ref("");
const handleNames = async () => {
  await axios
    .get("http://localhost:8000/api/infos")
    .then((res) => {
      const allNames = res.data.map((each) => each.name);
      names.value = allNames;
      names.value = names.value.join(", ");
    })
    .catch(function (error) {
      console.log(error);
    });
};
handleNames();
</script>

<template>
  <div>
    <div class="header">This is the Homepage</div>
    <p class="indentedP">
      Big shoutouts to
      {{ names }}
    </p>
  </div>
</template>

<style scoped lang="scss">
@import '../styles/home.scss'
</style>
