<template>
  <div>
    <a-row>
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>Dashboard</a-breadcrumb-item>
        <a-breadcrumb-item>Client</a-breadcrumb-item>
        <a-breadcrumb-item>Credit Card</a-breadcrumb-item>
        <a-breadcrumb-item>New</a-breadcrumb-item>
      </a-breadcrumb>

      <br />

      <a-col class="gutter-row" :span="8" :offset="7">
        <div class="gutter-box">
          <a-card hoverable style="width: 100%">
            <img alt="example" src="../../assets/credit-card.png" slot="cover" />
            <a-card-meta title="New Credit Card"></a-card-meta>

            <br />

            <a-form class="login-form" @submit.prevent="createUser">
              <a-form-item>
                <a-input placeholder="Card Number" v-model="card">
                  <a-icon slot="prefix" type="credit-card" style="color: rgba(0,0,0,.25)" />
                </a-input>
              </a-form-item>

              <a-form-item>
                <a-select defaultValue v-model="month" style="width: 120px" @change="handleChange">
                  <a-select-option value="01">January</a-select-option>
                  <a-select-option value="02">February</a-select-option>
                  <a-select-option value="03">March</a-select-option>
                  <a-select-option value="04">April</a-select-option>
                  <a-select-option value="05">May</a-select-option>
                  <a-select-option value="06">June</a-select-option>
                  <a-select-option value="07">July</a-select-option>
                  <a-select-option value="08">August</a-select-option>
                  <a-select-option value="09">September</a-select-option>
                  <a-select-option value="10">October</a-select-option>
                  <a-select-option value="11">November</a-select-option>
                  <a-select-option value="12">December</a-select-option>
                </a-select>
              </a-form-item>

              <a-form-item>
                <a-select defaultValue v-model="year" style="width: 120px" @change="handleChange">
                  <a-select-option value="2016">2016</a-select-option>
                  <a-select-option value="2017">2017</a-select-option>
                  <a-select-option value="2018">2018</a-select-option>
                  <a-select-option value="2019">2019</a-select-option>
                  <a-select-option value="2020">2020</a-select-option>
                  <a-select-option value="2021">2021</a-select-option>
                  <a-select-option value="2022">2022</a-select-option>
                  <a-select-option value="2023">2023</a-select-option>
                  <a-select-option value="2024">2024</a-select-option>
                </a-select>
              </a-form-item>

              <a-form-item>
                <a-input placeholder="CVV" v-model="cvv">
                  <a-icon slot="prefix" type="credit-card" style="color: rgba(0,0,0,.25)" />
                </a-input>
              </a-form-item>

              <a-form-item>
                <a-input placeholder="Amount" v-model="amount">
                  <a-icon slot="prefix" type="credit-card" style="color: rgba(0,0,0,.25)" />
                </a-input>
              </a-form-item>

              <a-form-item>
                <a-button block type="primary" html-type="submit" class="login-form-button">Process</a-button>
              </a-form-item>
            </a-form>
          </a-card>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      dataSource: "",
      cvv: "",
      year: "",
      month: "",
      card: "",
      amount: ""
    };
  },
  mounted() {
    this.checkout();
  },
  methods: {
    checkout() {
      var ID = localStorage.getItem("sub");
      this.$store.dispatch("getClientInfo", ID).then(
        response => {
          this.dataSource = response;
        },
        error => {
          this.$message.error(error);
        }
      );
    },
    createUser() {

      let body = {
        card: this.card,
        cvv: this.cvv,
        month: this.month,
        year: this.year,
        type: "M",
        amount: this.amount,
        username: this.dataSource.Sub
      };

      console.log(body)
      this.$store.dispatch("addCard", body).then(
        response => {
          this.$notification.config({
            placement: "bottomRight",
            bottom: "50px",
            duration: 3
          });
          this.$notification.open({
            message: "User Module",
            description: response,
            icon: <a-icon type="smile" style="color: #108ee9" />
          });
          this.$router.push("/admin/client/credit/cards");
        },
        error => {
          this.$message.error("error creating the user");
        }
      );
    }
  }
};
</script>