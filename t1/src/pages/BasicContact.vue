<script setup>
import axios from "axios";
import { ref } from "vue";
import swal from "sweetalert";
const basicContact = ref({
  email: "",
  phone: "",
});
const infoSubmitted = ref(false);
const handleInfo = async () => {
  await axios
    .post("http://localhost:8000/api/contacts", basicContact.value)
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
  basicContact.value.email = "";
  basicContact.value.phone = "";
};
</script>

<template>
  <div>
    <form class="form-style-7">
      <h1>
        {{
          !infoSubmitted
            ? "Enter your contact information here"
            : "Your contact information is"
        }}
      </h1>
      <ul>
        <li>
          <label for="email">Email</label>
          <input
            v-model="basicContact.email"
            type="email"
            name="email"
            maxlength="100"
            :disabled="infoSubmitted"
          />
          <span v-if="!infoSubmitted">Enter your email address here</span>
          <span v-else>Your email address</span>
        </li>
        <li>
          <label for="phone#">Phone#</label>
          <input
            v-model="basicContact.phone"
            type="tel"
            name="phone"
            maxlength="100"
            :disabled="infoSubmitted"
          />
          <span v-if="!infoSubmitted">Enter phone# here</span>
          <span v-else>Your phone#</span>
        </li>
        <li>
          <input
            type="submit"
            :value="
              !infoSubmitted ? 'Send this information' : 'Send new information'
            "
            :disabled="!basicContact.email || !basicContact.phone"
            @click.prevent="!infoSubmitted ? handleInfo() : againInfo()"
          />
        </li>
      </ul>
    </form>
    <div v-if="infoSubmitted" class="copy">
      <p>
        Thank you for submitting your personal information.<br />
        Your information is now stored in our database as:<br />
        {{ basicContact }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../styles/basicContact.scss'
</style>
