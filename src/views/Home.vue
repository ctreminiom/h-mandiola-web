<template>
  <div>
    <a-menu mode="horizontal">
      <a-menu-item key="mail">
        <a-button @click.prevent="loginClient" type="primary">Client</a-button>
      </a-menu-item>
    </a-menu>

    <a-row>
      <a-col :span="12" :offset="8">
        <br />
        <a-card hoverable style="width: 500px">

          <a-form class="login-form" @submit.prevent="loginAdmin">

            <a-form-item>
              <a-input placeholder="Username" v-model="username" v-validate="'required|username'" name="username">
                <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
              </a-input>
            </a-form-item>

            <a-form-item>
              <a-input placeholder="Password" v-model="password" type="password" v-validate="'required|password'" name="password">
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
</template>

<script>

/* eslint-disable */
export default {
  
  data() {
    return {
      username : "",
      password : ""
    };
  },
  methods: {
    
    loginClient() {
      this.$auth.login();
    },

    loginAdmin() {

      let user = {
        username : this.username,
        password : this.password
      }


      this.$store.dispatch('login', user)
       .then(response => {
         this.$router.push("/admin/dashboard");
       }, error => {
         this.$message.error("Invalid username or password");
       })
    }
    
    
  }
};
</script>