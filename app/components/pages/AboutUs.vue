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
        <Label :text="aboutUs" class="about-us" textWrap="true" returnKeyType="done" row="2"></Label>
      </GridLayout>
    </RadSideDrawer>
  </Page>
</template>

<script lang="ts">
import Vue from "nativescript-vue";
export default {
  data() {
    return {
      heading: "ABOUT US",
      aboutUs:
        "Bazebo is East Africa’s premier online retail shopping and selling brand. Bazebo was started by Mseed Venture Capital in Uganda and is currently moving into the rest of East Africa. Bazebo believes that online shopping must be as seamless as possible, to allow trust, safety and enjoyment amongst our customers. From clothing to medications and supplements; technology to home furnishings; almost anything imaginable can be bought online on Bazebo, and shipped right to our customer’s preferred location. Our unique selling proposition includes real-time tracking, delivery via drones for areas in rural & remote places, personal assistant (Echo), physical payments for small businesses, inventory management among others. Even better, our online platform allows sellers to fulfill orders on items they do not have in their inventory or are unable to access locally or regionally. All this can be done at the click of a button. Our primary mandate is to give our customers the best deals, solutions and support for the ultimate online shopping and selling experience. We will guarantee you quality brands, affordable prices and the best online shopping experience you can get. Our customer’s success is the measure of our success."
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
  width: 10%;
  height: 5;
  background-color: #f58936;
  margin-top: 2%;
}

.about-us {
  width: 90%;
  margin-top: 2%;
  color: #777777;
  font-size: 16%;
  text-align: left;
}

</style>
