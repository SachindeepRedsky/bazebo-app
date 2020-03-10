<template>
  <Page>
    <ActionBar>
      <GridLayout width="100%" columns="auto, *">
        <!-- <Image class="menu" src="res://menu" @tap="$refs.drawer.nativeView.showDrawer()" col="0" /> -->
        <Label class="title" text="Bazebo" col="1" />
      </GridLayout>
    </ActionBar>

    <!-- <RadSideDrawer ref="drawer">
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
    </StackLayout>-->
    <!-- <GridLayout ~mainContent rows="auto,auto,auto,auto,auto,auto,auto,auto,auto,auto,auto"> -->
    <GridLayout
      class="main-container"
      rows="auto,auto,auto,auto,auto,auto,auto,auto,auto,auto,auto"
    >
      <Label class="heading" :text="heading" row="0" />
      <StackLayout class="underline" row="1"></StackLayout>
      <Label class="customer-type" :text="returningCustomer" row="2" />
      <Label class="login-heading" textWrap="true" :text="loginHeading" row="3" />
      <TextField :hint="emailHint" class="input" returnKeyType="done" keyboardType="email" row="4"></TextField>
      <TextField :hint="passwordHint" class="input" returnKeyType="done" secure="true" row="5"></TextField>
      <Button class="login-button" :text="loginButton" row="6" @tap="onLogin()"></Button>
      <Label class="forgot-password" :text="forgotPassword" row="7" @tap="onForgotPassword()" />
      <Label class="customer-type" :text="newCustomer" row="8" />
      <Label class="login-heading" textWrap="true" :text="registerHeading" row="9" />
      <GridLayout class="create-account-container" row="10" @tap="onCreateAccount()">
        <StackLayout class="create-button-container" orientation="horizontal">
          <Image class="create-button-icon" src="res://add_person" />
          <Label class="create-button-heading" :text="createAccount"></Label>
        </StackLayout>
      </GridLayout>
    </GridLayout>
    <!-- </RadSideDrawer> -->
  </Page>
</template>

<script lang="ts">
import Vue from "nativescript-vue";
import EventBus from "../helpers/EventBus";
import Register from "./Register.vue";
import ResetPassword from "./ResetPassword.vue";
export default {
  data() {
    return {
      heading: "LOGIN OR CREATE AN ACCOUNT",
      returningCustomer: "RETURNING CUSTOMER",
      loginHeading: "If you have an account with us, please log in.",
      emailHint: "Email Address *",
      passwordHint: "Password *",
      forgotPassword: "Forgot Your Password?",
      newCustomer: "NEW CUSTOMER",
      registerHeading:
        "By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.",
      loginButton: "LOGIN",
      createAccount: "CREATE AN ACCOUNT"
    };
  },
  methods: {
    onForgotPassword() {
      // alert("forgot password clicked");
      this.$navigateTo(ResetPassword);
    },
    onLogin() {
      alert("login successfully");
    },
    onCreateAccount() {
      // alert("create account clicked");
      this.$navigateTo(Register);
    }
  }
};
</script>

<style scoped>
ActionBar {
  background-color: #f58936;
  color: #ffffff;
}

/* .menu {
  width: 30;
} */

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

/* .message {
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
} */

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

.customer-type {
  width: 90%;
  font-size: 18%;
  color: #f58936;
  text-align: left;
  margin-top: 5%;
}

.login-heading {
  width: 90%;
  margin-top: 2%;
  color: #777777;
  font-size: 16%;
  text-align: left;
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

.login-button {
  width: 90%;
  height: 50;
  margin-top: 2%;
  color: #ffffff;
  background-color: #f58936;
  font-size: 16%;
  font-weight: 500;
  padding: 0;
}

.login-button:highlighted {
  background-color: #ffffff;
  border-color: #f58936;
  color: #f58936;
}

.forgot-password {
  font-size: 16%;
  color: #f58936;
  text-align: left;
  width: 90%;
  margin-top: 2%;
  text-decoration: underline;
  text-decoration-color: #f58936;
}

.create-account-container {
  height: 50;
  width: 90%;
  background-color: #f58936;
  margin-top: 2%;
  horizontal-align: center;
}

.create-button-container {
  width: auto;
  height: 100%;
  vertical-align: middle;
  horizontal-align: center;
}

.create-button-icon {
  height: 60%;
  margin-right: 5;
}

.create-button-heading {
  font-size: 16%;
  color: #ffffff;
  font-weight: 500;
  vertical-align: middle;
  margin-left: 5;
}
</style>
