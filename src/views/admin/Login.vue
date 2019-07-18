<template>
  <div class="about">
    <d-navbar toggleable="md" type="dark" theme="primary">
      <d-navbar-toggle target="nav-collapse"></d-navbar-toggle>
      <d-navbar-brand>
        <h6 class="text-white my-auto mr-4">H-Mandiola - Admin</h6>
      </d-navbar-brand>

      <d-collapse is-nav id="nav-collapse">
        <d-navbar-nav>
          <d-nav-item href="#">Client Site</d-nav-item>
        </d-navbar-nav>
      </d-collapse>
    </d-navbar>

    <d-container class="form-container">
      <d-row>
        <d-col cols="12" md="4" lg="6" offset-lg="3">
          <d-card>
            <d-card-body align="left" title="Admin">
              <d-form inline class="login-form">
                <label class="sr-only" for="f1_Username">Username</label>
                <d-input
                  class="mb-2 mr-sm-2 mb-sm-0"
                  placeholder="Username"
                  v-model="username"
                />

                <label class="sr-only" for="f1_Password">Password</label>
                <d-input
                  class="mr-2"
                  type="password"
                  placeholder="Password"
                  v-model="password"
                />

                <d-button theme="primary" @click="login">Login</d-button>
              </d-form>
            </d-card-body>
          </d-card>
        </d-col>
      </d-row>
    </d-container>
  </div>
</template>

<style scoped>
.login-form {
  margin-top: 20px;
  margin-bottom: 20px;
}

.form-container {
  margin-top: 100px;
}
</style>


<script>
export default {
  data() {
    return {
      title: "Welcome to the system",
      username: "",
      password: ""
    };
  },

  methods: {
    login() {

      let user = {
        username: this.username, //Check
        password: this.password //Check
      };

      this.$store.dispatch("loginUser", user).then(
        response => {
          console.log(response)

          this.$notify({
            group: "foo",
            type: "success",
            text: "Login successuffly!"
          });
          
          this.$router.push("/dashboard");



        }, error => {
          console.log(error)
        }
      )
    }
  }
};
</script>

