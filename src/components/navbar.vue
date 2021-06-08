<template>
  <div>
    <b-navbar toggleable="lg" type="dark" class="navBar">
      <b-navbar-brand href="#">UzakuraBarcode</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <!-- <b-nav-item href="#">Product</b-nav-item> -->
            <b-nav-item href="#"
              ><router-link to="/">Home</router-link></b-nav-item
            >
            <b-nav-item href="#pricing">Pricing</b-nav-item>
            <!-- <b-nav-item href="#">Register</b-nav-item> -->
            <!-- <b-nav-item href="#">
              <b-button class="btn-most">Login</b-button>
            </b-nav-item> -->
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navBar {
  background-color: rgb(21, 21, 21);
}
.btn-most {
  background-color: rgb(160, 26, 26);
  border: 0.2px rgb(160, 26, 26) solid;
  color: white;
}
.btn-most:hover {
  background-color: rgb(121, 18, 18);
  color: white;
  border: 0.2px rgb(121, 18, 18) solid;
}
</style>
