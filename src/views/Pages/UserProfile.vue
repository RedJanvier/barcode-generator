<template>
  <div>
    <div
      class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center profile-header"
      style="min-height: 600px; background-image: url(img/theme/profile-cover.jpg); background-size: cover; background-position: center top;"
    >
      <b-container fluid>
        <!-- Mask -->
        <span class="mask bg-gradient-danger opacity-8"></span>
        <!-- Header container -->
        <b-container fluid class="d-flex align-items-center">
          <b-row>
            <b-col lg="7" md="10">
              <h1 class="display-2 text-white">Hello {{ user.username }}</h1>
              <p class="text-white mt-0 mb-5">
                This is your profile page. You can see the progress you've made
                with your work and manage your projects or assigned tasks
              </p>
              <!-- <a href="#!" class="btn btn-info">Edit profile</a> -->
            </b-col>
          </b-row>
        </b-container>
      </b-container>
    </div>

    <b-container fluid class="mt--6">
      <b-row>
        <b-col xl="4" class="order-xl-2 mb-5">
          <user-card :user="user"></user-card>
        </b-col>
        <b-col xl="8" class="order-xl-1">
          <edit-profile-form :user="user"></edit-profile-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import EditProfileForm from "./UserProfile/EditProfileForm.vue";
import UserCard from "./UserProfile/UserCard.vue";

export default {
  data() {
    return {
      user: {
        description: "An UzakuraBarcode lover and supporter.",
        company: "Creative Code Inc.",
        username: "michael23",
        email: "michael23@gmail.com",
        photo:
          "https://firebasestorage.googleapis.com/v0/b/uzakurahub.appspot.com/o/team-4.jpg?alt=media&token=ad5c8d15-50f9-416f-acc0-916aa2855406",
        age: "27",
        firstName: "Mike",
        lastName: "Andrew",
        address: "Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09",
        city: "New York",
        country: "USA",
        postalCode: "",
        barcodes: [{ count: 2, price: 0.06 }],
        aboutMe: `Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.`
      }
    };
  },
  components: {
    EditProfileForm,
    UserCard
  }
};
</script>
<style></style>
