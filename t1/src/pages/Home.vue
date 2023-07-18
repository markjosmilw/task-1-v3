<script setup>
import axios from "axios";
import { ref } from "vue";
const names = ref("");
const emails = ref("");
const phoneNos = ref("");
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
const getEmails = async () => {
  await axios
    .get("http://localhost:8000/api/contacts")
    .then((res) => {
      const allEmails = res.data.map((each) => each.email);
      emails.value = allEmails;
      emails.value = emails.value.join(", ");
    })
    .catch(function (error) {
      console.log(error);
    });
};
const getNumbers = async () => {
  await axios
    .get("http://localhost:8000/api/contacts")
    .then((res) => {
      const all = res.data.map((each) => each.phone);
      phoneNos.value = all;
      phoneNos.value = phoneNos.value.join(", ");
    })
    .catch(function (error) {
      console.log(error);
    });
};
handleNames();
getEmails();
getNumbers();
</script>

<template>
  <div class="homePage">
    <div class="header">This is the Homepage</div>
    <p class="indentedP">
      {{ !names ? "No names yet" : "Registered names: " + names }}
    </p>
    <p class="indentedP">
      {{ !emails ? "No emails yet" : "Registered emails: " + emails }}
    </p>
    <p class="indentedP">
      {{
        !phoneNos ? "No phone # yet" : "Registered contacts: " + phoneNos
      }}
    </p>
  </div>
</template>

<style scoped lang="scss">
@import "../styles/home.scss";
</style>
