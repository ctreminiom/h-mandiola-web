<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider collapsible v-model="collapsed">
      <div class="logo" />
      <a-menu theme="dark" :defaultSelectedKeys="['1']" mode="inline">
        <a-menu-item key="1">
          <router-link to="/client/dashboard/rooms">
            <a-icon type="home" />
            <span>Room</span>
          </router-link>
        </a-menu-item>

        <a-menu-item key="2">
          <router-link to="/client/dashboard/activities">
            <a-icon type="coffee" />
            <span>Articles</span>
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>

    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-dropdown style="float: right">
          <a class="ant-dropdown-link">
            <a-avatar style="color: #e6f5ff; backgroundColor: #1c2938"></a-avatar>
          </a>
          <a-menu slot="overlay">
            <a-menu-item>
              <a @click="logout">Logout</a>
            </a-menu-item>
            <a-menu-item>
              <a>Checkout</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </a-layout-header>
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0"></a-breadcrumb>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          <div>
            <router-view />
            <router-view name="helper" />
          </div>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center"></a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
      range: ["01/09/2018", "01/10/2018"]
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      localStorage.removeItem("avatar");
      this.$router.push({ name: "admin-login" });
    }
  }
};
</script>
