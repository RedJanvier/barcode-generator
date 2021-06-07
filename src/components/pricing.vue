<template>
  <div>
    <h1>Choose the plan that’s right for you.</h1>
    <b-container class="bv-example-row cardDiv">
      <b-row>
        <b-col cols="12" sm="4">
          <b-card title="Free" sub-title="Barcode" class="testCard ">
            <b-card-text>
              <p>✅ 3-trial barcode</p>
              <p>Sample picture</p>
              <img class="w-100" src="../assets/trial.png" alt="Image 1" />
            </b-card-text>

            <b-card-text class="textFreecard"
              ><span id="num">$0</span> / per barcode</b-card-text
            >

            <b-button variant="outline-primary">Get started</b-button>
          </b-card>
        </b-col>
        <b-col cols="12" sm="4">
          <b-card title="Most Popular" sub-title="Barcode" class="mostPopular">
            <b-card-text class="textCard">
              ✅ 1000 > barcodes
              <p>Sample picture</p>
              <img class="w-100" src="../assets/mostP.png" alt="Image 1" />
            </b-card-text>

            <b-card-text class="priceCard"
              ><span id="num">$0.06</span> / per barcode</b-card-text
            >

            <b-button variant="outline-primary" class="btn-most"
              >Get started</b-button
            >
          </b-card>
        </b-col>
        <b-col cols="12" sm="4">
          <b-card title="Premium" sub-title="Barcode" class="testCard">
            <b-card-text>
              ✅ 1000 > barcodes
              <p>Sample picture</p>
              <img class="w-100" src="../assets/premium.png" alt="Image 1" />
            </b-card-text>

            <b-card-text>
              <span id="num">$0.12</span> / per barcode</b-card-text
            >

            <b-button variant="outline-primary">Get started</b-button>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// import free from "../assets/trial.png";
// import most from "../assets/trial.png";
// import pre from "../assets/trial.png";
export default {};
</script>

<style scoped>
#num {
  font-size: 50px;
  font-weight: bolder;
}
.cardDiv {
  margin-top: 50px;
  text-align: start;
}
.btn {
  width: 100%;
}
.mostPopular {
  background-color: rgb(21, 21, 21);
  color: white;
  /* height: 35rem; */
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

.priceCard {
  margin-top: 9rem;
}
.testCard {
  margin-top: 2rem;
  background-color: #f4f4f4;
}
.freeCard {
  height: 20px;
}
.textFreecard {
  margin-top: 4rem;
}
</style>
