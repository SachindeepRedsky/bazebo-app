<template>
  <Page>
    <ActionBar>
      <GridLayout width="100%" columns="auto, *">
        <Image class="menu" src="res://menu" @tap="$refs.drawer.nativeView.showDrawer()" col="0" />
        <Label class="title" text="Bazebo" col="1" />
      </GridLayout>
    </ActionBar>

    <RadSideDrawer ref="drawer">
      <StackLayout ~drawerContent backgroundColor="#ffffff">
        <Image class="drawer-icon" src="res://icon" />
        <Label class="drawer-header" text="Bazebo" />
        <Label class="drawer-item" text="HOME" />
        <Label class="drawer-item" text="TESTIMONIALS" />
        <Label class="drawer-item" text="HOW IT WORKS" />
        <Label class="drawer-item" text="SUBMIT LINK" />
        <Label class="drawer-item" text="ABOUT US" />
        <Label class="drawer-item" text="CONTACT US" />
        <Label class="drawer-item" text="FAQS" />
      </StackLayout>

      <GridLayout ~mainContent rows="auto,auto,auto,auto,auto">
        <Label class="heading" :text="heading" row="0" />
        <StackLayout class="underline" row="1"></StackLayout>
        <Label class="reset-password" :text="resetPassword" row="2" />
        <TextField
          :hint="emailHint"
          class="input"
          returnKeyType="done"
          keyboardType="email"
          row="3"
        ></TextField>
        <Button class="submit-button" :text="submitButton" row="4" @tap="onSubmit()"></Button>
      </GridLayout>
    </RadSideDrawer>
  </Page>
</template>

<script lang="ts">
// import Vue from "nativescript-vue";
import Login from "./Login.vue";
export default {
  data() {
    return {
      heading: "RESET PASSWORD",
      emailHint: "Email Address *",
      submitButton: "Submit",
      resetPassword: "Reset password"
    };
  },
  methods: {
    onSubmit() {
      alert("submit clicked");
      this.$navigateTo(Login);
    }
  }
};
</script>

<style scoped>
ActionBar {
  background-color: #f58936;
  color: #ffffff;
}

.menu {
  width: 30;
}

.title {
  text-align: left;
  padding-left: 16;
  font-size: 20%;
  color: #ffffff;
}

.message {
  vertical-align: center;
  text-align: center;
  font-size: 20;
  color: #333333;
}

.drawer-icon {
  padding: 16 16 0 16;
  width: 60;
  margin-top: 10;
}

.drawer-header {
  padding: 0 16 16 16;
  margin-bottom: 10;
  background-color: #ffffff;
  color: #f58936;
  font-size: 24;
  border-bottom-color: #f58936;
  border-bottom-width: 1;
  text-align: center;
}

.drawer-item {
  padding: 8 16;
  color: #333333;
  font-size: 16;
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

.reset-password {
  width: 90%;
  font-size: 18%;
  color: #f58936;
  text-align: left;
  margin-top: 5%;
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
  border-width: 1;
  color: #f58936;
}
</style>
