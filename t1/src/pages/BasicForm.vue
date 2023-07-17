<script setup>
import axios from "axios";
import { ref } from "vue";
import swal from "sweetalert";
const basicInfo = ref({
  name: "",
  age: "",
  address: "",
});
const infoSubmitted = ref(false);
const handleInfo = async () => {
  await axios
    .post("http://localhost:8000/api/infos", basicInfo.value)
    .then((res) => {
      console.log(res);
      swal({
        title: "Success",
        text: res.data,
        icon: "success",
      });
      infoSubmitted.value = !infoSubmitted.value;
    })
    .catch((err) => {
      console.log(err.response.data);
      swal({
        title: "Failed",
        text: err.response.data,
        icon: "error",
      });
    });
};
const againInfo = () => {
  infoSubmitted.value = !infoSubmitted.value;
  basicInfo.value.name = "";
  basicInfo.value.age = "";
  basicInfo.value.address = "";
};
</script>

<template>
  <div>
    <form class="form-style-7">
      <h1>
        {{
          !infoSubmitted
            ? "Enter your information here"
            : "Your basic information is"
        }}
      </h1>
      <ul>
        <li>
          <label for="name">Name</label>
          <input
            v-model="basicInfo.name"
            type="text"
            name="name"
            maxlength="100"
            :disabled="infoSubmitted"
          />
          <span v-if="!infoSubmitted">Enter your full name here</span>
          <span v-else>Your full name</span>
        </li>
        <li>
          <label for="age">Age</label>
          <input
            v-model="basicInfo.age"
            type="number"
            name="age"
            maxlength="100"
            :disabled="infoSubmitted"
          />
          <span v-if="!infoSubmitted">Enter your age here</span>
          <span v-else>Your age</span>
        </li>
        <li>
          <label for="address">Address</label>
          <input
            v-model="basicInfo.address"
            type="text"
            name="address"
            maxlength="100"
            :disabled="infoSubmitted"
          />
          <span v-if="!infoSubmitted"
            >Enter your address here (eg: Basak, Lapu-Lapu City)</span
          >
          <span v-else>Your address</span>
        </li>
        <li>
          <input
            type="submit"
            :value="
              !infoSubmitted ? 'Send this information' : 'Send new information'
            "
            :disabled="!basicInfo.name || !basicInfo.age || !basicInfo.address"
            @click.prevent="!infoSubmitted ? handleInfo() : againInfo()"
          />
        </li>
      </ul>
    </form>
    <div v-if="infoSubmitted" class="copy">
      <p>
        Thank you for submitting your personal information.<br />
        Your information is now stored in our database as:<br />
        {{ basicInfo }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../styles/basicForm.scss'
</style>
