<template>
  <a-layout>
    <a-layout-content style="margin: 0 16px">
      <a-layout-header style="background: white;">
        <a-dropdown style="float: right">
          <a class="ant-dropdown-link">
            <a-avatar style="color: #e6f5ff; backgroundColor: #1c2938">{{this.$store.state.user.avatar}}</a-avatar>
            {{this.$store.state.user.username}}
          </a>
          <a-menu slot="overlay">
            <a-menu-item>
              <a @click="logout">Logout</a>
            </a-menu-item>
            <a-menu-item>
              <a @click="Checkout">Checkout</a>
              </a-menu-item>
          </a-menu>
        </a-dropdown>
      </a-layout-header>
      <br />

      <div :style="{ padding: '14px', background: '#fff', minHeight: '800px' }">
        <div>
          <router-view />
          <router-view name="helper" />
        </div>
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center"> </a-layout-footer>
  </a-layout>
</template>


<script>
export default {
  name: "client-page", //revisar este path o.o
 
  methods: {
    logout() {
      localStorage.removeItem('token')
      localStorage.removeItem('username')
      localStorage.removeItem('avatar')
      this.$router.push({ name: "client-login" }); //revisar este path o.o
    }
  },

  computed: {
    
  }


  
};
</script>
