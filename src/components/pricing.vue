<template>
  <div id="pricing">
    <h1 class="title">Choose the plan that’s right for you.</h1>
    <b-container class="bv-example-row cardDiv mb-5">
      <b-row>
        <b-col cols="12" sm="4">
          <b-card title="Free" sub-title="Barcode" class="testCard ">
            <b-card-text>
              <p>✅ Specify referee</p>
              <p>✅ 3-trial barcode</p>
              <p class="mt-3">Sample picture</p>
              <img class="w-100" src="../assets/trial.png" alt="Image 1" />
            </b-card-text>

            <b-card-text class="textFreecard">
              <span id="num">$0</span> / per barcode
            </b-card-text>

            <b-button variant="outline-primary">
              <router-link to="/downloads?n=3&token=token&name=trial">
                Get Started
              </router-link>
            </b-button>
          </b-card>
        </b-col>
        <b-col cols="12" sm="4">
          <b-card title="Most Popular" sub-title="Barcode" class="mostPopular">
            <b-card-text class="textCard">
              <p>✅ Specify referee</p>
              <p>✅ 90 barcodes</p>
              <p class="mt-3">Sample picture</p>
              <img class="w-100" src="../assets/mostP.png" alt="Image 1" />
            </b-card-text>

            <b-card-text class="priceCard">
              <span id="num">$0.06</span> / per barcode
            </b-card-text>

            <b-button variant="outline-primary" class="btn-most">
              Get started
            </b-button>
          </b-card>
        </b-col>
        <b-col cols="12" sm="4">
          <b-card title="Premium" sub-title="Barcode" class="testCard">
            <b-card-text>
              <p>✅ No specify referee</p>
              <p>✅ +90 barcodes</p>
              <p class="mt-3">Sample picture</p>
              <img class="w-100" src="../assets/premium.png" alt="Image 1" />
            </b-card-text>

            <b-card-text>
              <span id="num">$0.12</span> / per barcode
            </b-card-text>

            <b-button variant="outline-primary">Get started</b-button>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    <div class="bg-light py-5 pt-1">
      <h1 class="title my-5">Pricing details</h1>
      <b-container>
        <b-table
          responsive
          :striped="striped"
          :bordered="bordered"
          :borderless="borderless"
          :outlined="outlined"
          :small="small"
          :hover="hover"
          :dark="dark"
          :fixed="fixed"
          :foot-clone="footClone"
          :no-border-collapse="noCollapse"
          :items="items"
          :fields="fields"
          table-variant="light"
          :head-variant="headVariant"
          :tbody-tr-class="rowClass"
        ></b-table>
      </b-container>
    </div>
    <footer class="bg-dark mb-0 pb-0">
      <p class="text-center text-light mb-0">Copyright &copy;2021 UzakuraHub</p>
    </footer>
  </div>
</template>

<script>
// import free from "../assets/trial.png";
// import most from "../assets/trial.png";
// import pre from "../assets/trial.png";
export default {
  data() {
    return {
      fields: [' ', 'Free', { key: 'Popular', variant: 'warning' }, 'Premium'],
      items: [
        {
          ' ': 'Custom Company Name',
          Free: '❌',
          Popular: '✅',
          Premium: '✅',
        },
        {
          ' ': 'Code Preview',
          Free: '❌',
          Popular: '✅',
          Premium: '✅',
        },
        {
          ' ': 'Custom Number',
          Free: '❌',
          Popular: '❌',
          Premium: '✅',
        },
        {
          ' ': 'Limit Number',
          Free: '3',
          Popular: '90',
          Premium: '+90',
        },
        {
          ' ': 'Amount',
          Free: '$0.00',
          Popular: '$0.06',
          Premium: '$0.12',
          status: 'awesome',
        },
      ],
      striped: false,
      bordered: false,
      borderless: true,
      outlined: false,
      small: false,
      hover: true,
      dark: false,
      fixed: false,
      footClone: false,
      headVariant: 'dark',
      noCollapse: true,
    };
  },
  methods: {
    rowClass(item, type) {
      if (!item || type !== 'row') return;
      if (item.status === 'awesome') return 'table-danger font-weight-bold';
    },
  },
};
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
.title {
  margin-top: 20px;
}
</style>
