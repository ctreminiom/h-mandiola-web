<template>
  <a-layout id="components-layout-demo-top" class="layout">
    <a-layout-header>
      <div class="logo"></div>

      <a-menu mode="horizontal" theme="dark" :style="{ lineHeight: '64px' }">
        <a-menu-item key="security" @click="loginClient">
          <a-icon type="ant-design" />Client
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <br />

      <div :style="{ background: '#fff', padding: '24px', minHeight: '790px' }">
        <a-row>
          <a-col :span="6" :offset="9">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

            <a-card hoverable style="width: 300px">
              <a-form class="login-form" @submit.prevent="loginAdmin">
                <a-form-item>
                  <a-input
                    placeholder="Username"
                    v-model="username"
                    v-validate="'required|username'"
                    name="username"
                  >
                    <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
                  </a-input>
                </a-form-item>

                <a-form-item>
                  <a-input
                    placeholder="Password"
                    v-model="password"
                    type="password"
                    v-validate="'required|password'"
                    name="password"
                  >
                    <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
                  </a-input>
                </a-form-item>

                <a-form-item>
                  <a-button block type="primary" html-type="submit" class="login-form-button">Log in</a-button>
                </a-form-item>
              </a-form>
            </a-card>
          </a-col>
        </a-row>
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">Ant Design ©2018 Created by Ant UED</a-layout-footer>
  </a-layout>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    loginClient() {
      this.$auth.login();
    },
    loginAdmin() {
      let user = {
        username: this.username,
        password: this.password
      };

      this.$store.dispatch("login", user).then(
        response => {
          this.$router.push("/admin/dashboard/home");
        },
        error => {
          this.$message.error("Invalid username or password");
        }
      );
    }
  }
};
</script>

<style>
#components-layout-demo-top .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
</style>