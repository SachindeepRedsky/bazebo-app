<template>
  <Page>
    <ActionBar>
      <GridLayout width="100%" columns="auto, *">
        <!-- <Image class="menu" src="res://menu" @tap="$refs.drawer.nativeView.showDrawer()" col="0" /> -->
        <Label class="title" text="Bazebo" col="1" />
      </GridLayout>
    </ActionBar>

    <GridLayout
      class="main-container"
      rows="auto,auto,auto,auto,auto,auto,auto,auto,auto,auto,auto,auto"
    >
      <Label class="heading" :text="heading" row="0" />
      <StackLayout class="underline" row="1"></StackLayout>
      <TextField :hint="nameHint" class="input" returnKeyType="done" row="2"></TextField>
      <TextField :hint="emailHint" class="input" returnKeyType="done" keyboardType="email" row="3"></TextField>
      <TextField :hint="messageHint" class="input" returnKeyType="done" row="4"></TextField>
      <Button class="submit-button" :text="submitButton" row="5" @tap="onSubmit()"></Button>
    </GridLayout>

  </Page>
</template>

<script lang="ts">
import Vue from "nativescript-vue";
export default {
  data() {
    return {
      heading: "CONTACT US",
      nameHint: "Name *",
      emailHint: "Email address *",
      messageHint: "Message *",
      submitButton: "Submit"
    };
  },
  methods: {
    onSubmit() {
      alert("submit clicked");
    }
  }
};
</script>

<style scoped>
ActionBar {
  background-color: #f58936;
  color: #ffffff;
}

.title {
  text-align: left;
  padding-left: 16;
  font-size: 20%;
  color: #ffffff;
}

.main-container {
  width: 100%;
  height: auto;
}

.heading {
  width: 95%;
  font-size: 20%;
  color: #333333;
  text-align: center;
  margin-top: 10%;
}

.underline {
  width: 15%;
  height: 5;
  background-color: #f58936;
  margin-top: 2%;
}

.input {
  width: 90%;
  border-width: 1;
  border-color: #f58936;
  color: #333333;
  height: 40;
  border-radius: 5;
  margin-top: 2%;
  placeholder-color: #777777;
  text-align: left;
  padding-left: 10;
  padding-right: 10;
  background-color: #ffffff;
  font-size: 14%;
}

.submit-button {
  width: 90%;
  height: 50;
  margin-top: 2%;
  color: #ffffff;
  background-color: #f58936;
  font-size: 16%;
  font-weight: 500;
  padding: 0;
}

.submit-button:highlighted {
  background-color: #ffffff;
  border-color: #f58936;
  color: #f58936;
}

.reset-password {
  font-size: 16%;
  color: #f58936;
  text-align: left;
  width: 90%;
  margin-top: 2%;
  text-decoration: underline;
  text-decoration-color: #f58936;
}

.already-account-container {
  width: 95%;
  height: auto;
  margin-top: 2%;
  horizontal-align: center;
}

.already-account {
  color: #777777;
  font-size: 16%;
}

.click-here {
  color: #f58936;
  font-size: 16%;
}

.login {
  color: #777777;
  font-size: 16%;
}
</style>
