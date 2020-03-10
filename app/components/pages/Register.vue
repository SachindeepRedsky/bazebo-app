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

      <GridLayout ~mainContent rows="auto,auto,auto,auto,auto,auto,auto,auto,auto,auto,auto,auto">
        <Label class="heading" :text="heading" row="0" />
        <StackLayout class="underline" row="1"></StackLayout>
        <Label class="register-here" :text="registerHere" row="2" />
        <TextField :hint="firstNameHint" class="input" returnKeyType="done" row="3"></TextField>
        <TextField :hint="lastNameHint" class="input" returnKeyType="done" row="4"></TextField>
        <TextField
          :hint="emailHint"
          class="input"
          returnKeyType="done"
          keyboardType="email"
          row="5"
        ></TextField>
        <TextField :hint="passwordHint" class="input" returnKeyType="done" secure="true" row="6"></TextField>
        <TextField
          :hint="confirmPasswordHint"
          class="input"
          returnKeyType="done"
          secure="true"
          row="7"
        ></TextField>
        <TextField
          :hint="phoneHint"
          class="input"
          returnKeyType="done"
          keyboardType="number"
          row="8"
        ></TextField>
        <Button class="submit-button" :text="submitButton" row="9" @tap="onSubmit()"></Button>
        <Label class="reset-password" :text="resetPassword" row="10" @tap="onResetPassword()" />
        <StackLayout
          class="already-account-container"
          orientation="horizontal"
          row="11"
          @tap="onLogin()"
        >
          <Label class="already-account" :text="alreadyAccount"></Label>
          <Label class="click-here" :text="clickHere"></Label>
          <Label class="already-account" :text="login"></Label>
        </StackLayout>
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
      heading: "CREATE AN ACCOUNT",
      registerHere:"New to Bazebo? Register here",
      firstNameHint: "First Name *",
      lastNameHint: "Last Name *",
      emailHint: "Email Address *",
      passwordHint: "Password *",
      confirmPasswordHint: "Confirm Password *",
      phoneHint: "Phone Number *",
      submitButton: "Submit",
      resetPassword: "Reset Your Password?",
      alreadyAccount: "Already have an account?",
      clickHere: " Click here",
      login: " to login"
    };
  },
  methods: {
    onSubmit() {
      alert("submit clicked");
    },

    onResetPassword() {
      alert("reset password clicked");
    },

    onLogin() {
      // alert("login clicked");
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

.register-here {
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
