<script setup lang="js">
import {ref} from 'vue';
const firstName = ref('');
const lastName = ref('');
const errorMessage = ref('');

const emit = defineEmits(['developer-registered','registration-deferred']);

function submitRegistrationRequest() {
  let submittedFirstName = firstName.value.toString().trim();
  let submittedLastName = lastName.value.toString().trim();
  if(submittedFirstName && submittedLastName){
    console.log("Registration developer");
    emit('developer-registered', {
      firstName: submittedFirstName,
      lastName: submittedLastName
    });
    clearFields();

  }else{
    console.log("Cannot register: Both fields are required");
    errorMessage.value = 'Please provide at least first name and lastname. Both are required for a successful registration.';
  }

}

function deferRegistration() {
  console.log("Defer registration");
  emit('registration-deferred', {
    firstName:"",
    lastName:""
  });
  errorMessage.value = '';
}

function clearFields() {
  firstName.value = '';
  lastName.value = '';
  errorMessage.value = '';
}
</script>

<template>
  <!-- Developer Registration Form -->
  <div>
    <h2>New Developer</h2>
    <div>
      <form method="post" @submit.prevent="submitRegistrationRequest">
        <div class="field">
          <label for="first-name">First Name:</label>
          <input id="first-name" v-model="firstName" type="text"  />
        </div>
        <div class="field">
          <label for="last-name">Last Name:</label>
          <input id="last-name" v-model="lastName" type="text"  />
        </div>
        <div class="actions">
          <button type="submit">Register</button>
          <button type="button" v-on:click="deferRegistration">Later</button>
          <button type="button" v-on:click="clearFields">Clear</button>

        </div>
      </form>
      <p v-if="errorMessage" class="error" role="alert">{{errorMessage}}</p>

    </div>

  </div>

</template>

<style scoped>
button {
  margin-right: 10px;
  padding: 8px 16px;
  cursor: pointer;
}

.error {
  color: red;
  margin-top: 10px;
  font-size: 14px;
}
.field {
  margin-bottom: 10px;
}
.actions {
  margin-bottom: 10px;
}
label{
  margin-right: 5px;

}

</style>