<template>
  <div class="gutter-example">
    <a-row :gutter="16">
      <br />
      <br />
      <br />

      <a-col class="gutter-row" :span="6">
        <div class="gutter-box">
          <a-card v-if="this.hasUser" hoverable style="width: 100%">
            <a-card-meta :title="user.Username">
              <a-avatar slot="avatar" style="color: #46324E; backgroundColor: #fde3cf">R</a-avatar>
            </a-card-meta>
          </a-card>

          <a-button v-else type="primary" block @click="go()">Create</a-button>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  mounted() {
    this.checkout();
    this.fetch();
  },
  data() {
    return {
      dataSource: null,
      hasUser: false,
      user: null
    };
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
    fetch() {
      this.$store.dispatch("getEasyAccounts").then(
        response => {
          var user = null;

          for (let item of response) {
            if (item.Username == this.dataSource.Sub) {
              user = item;
            }
          }

          if (user == null) {
            this.hasUser = false;
          } else {
            this.hasUser = true;
          }

          console.log(this.hasUser);

          console.log(user);
          this.user = user;
        },
        error => {
          this.$message.error(error);
        }
      );
    },
    go() {
      this.$router.push({
        name: "easy-pay-new"
      });
    }
  }
};
</script>



<style lang="css">
gutter-example >>> .ant-row > div {
  background: transparent;
  border: 0;
}
.gutter-box {
  padding: 5px 0;
}
</style>