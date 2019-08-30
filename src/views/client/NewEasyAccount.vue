<template>
  <div>
    <a-row>
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>Dashboard</a-breadcrumb-item>
        <a-breadcrumb-item>Client</a-breadcrumb-item>
        <a-breadcrumb-item>Easy Pay</a-breadcrumb-item>
        <a-breadcrumb-item>New</a-breadcrumb-item>
      </a-breadcrumb>

      <br />

      <a-col class="gutter-row" :span="8" :offset="7">
        <div class="gutter-box">
          <a-card hoverable style="width: 100%">
            <img alt="example" src="../../assets/easy-pay.png" slot="cover" />
            <a-card-meta title="New Easy Pay account"></a-card-meta>

            <br />

            <a-form class="login-form" @submit.prevent="createAccount">
              <a-form-item>
                <a-input placeholder="Code" v-model="code">
                  <a-icon slot="prefix" style="color: rgba(0,0,0,.25)" />
                </a-input>
              </a-form-item>

              <a-form-item>
                <a-input placeholder="Password" v-model="pass">
                  <a-icon slot="prefix" type="password" style="color: rgba(0,0,0,.25)" />
                </a-input>
              </a-form-item>

              <a-form-item>
                <a-input placeholder="amount" v-model="amount">
                  <a-icon slot="prefix" style="color: rgba(0,0,0,.25)" />
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
      username: "",
      code: "",
      pass: "",
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
    createAccount() {
      let body = {
        username: this.dataSource.Sub,
        Password: this.pass,
        code: this.code,
        amount: this.amount
      };

      console.log(body);
      this.$store.dispatch("addEasyAccount", body).then(
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
          this.$router.push("/admin/client/easy/pay/account");
        },
        error => {
          this.$message.error("error creating the user");
        }
      );
    }
  }
};
</script>