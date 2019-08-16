<template>
  <div>
    <a-row>
      <a-breadcrumb>
        <a-breadcrumb-item href>
          <a-icon type="home" />
        </a-breadcrumb-item>
        <a-breadcrumb-item href>
          <a-icon type="safety" />
          <span>Security</span>
        </a-breadcrumb-item>

        <a-breadcrumb-item href>
          <router-link to="/admin/dashboard/users">
            <span>Users</span>
          </router-link>
        </a-breadcrumb-item>

        <a-breadcrumb-item>Change</a-breadcrumb-item>
        <a-breadcrumb-item>Password</a-breadcrumb-item>
      </a-breadcrumb>

      <br />

      <a-col :span="24">
        <a-card title="User Management">
          <a-row>
            <a-col :span="20" :offset="2">
              <a-card hoverable style>
                <a-form class="login-form" @submit.prevent="changePassword">
                  <a-form-item>
                    <a-input placeholder="Password" v-model="password" type="password">
                      <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
                    </a-input>
                  </a-form-item>

                  <a-form-item>
                    <a-input
                      placeholder="Confirm Password"
                      v-model="confirm_password"
                      type="password"
                    >
                      <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
                    </a-input>
                  </a-form-item>

                  <a-form-item>
                    <a-button type="primary" html-type="submit" class="login-form-button">Change</a-button>
                  </a-form-item>
                </a-form>
              </a-card>
            </a-col>
          </a-row>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  props: ["username"],

  data() {
    return {
      password: "",
      confirm_password: ""
    };
  },

  methods: {
    changePassword() {
      if (this.password == this.confirm_password) {
        //Change the password via REST

        let data = {
          username: this.username,

          body: {
            password: this.password
          }
        };

        this.$store.dispatch("updatePassword", data).then(
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

            this.$router.push("/admin/dashboard/users");
          },
          error => {
            this.$message.error("error changing the password");
          }
        );
      } else {
        this.$message.error("The new password must be the same");
        this.confirm_password = "";
        this.password = "";
      }
    }
  }
};
</script>