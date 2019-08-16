<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider collapsible v-model="collapsed">
      <div class="logo" />
      <a-menu theme="dark" :defaultSelectedKeys="['1']" mode="inline">
        <a-sub-menu key="sub1">
          <span slot="title">
            <a-icon type="safety" />
            <span>Security</span>
          </span>
          <a-menu-item key="3">
            <router-link to="/admin/dashboard/users">
              <a-icon type="usergroup-delete" />Users
            </router-link>
          </a-menu-item>
        </a-sub-menu>

        <a-sub-menu key="sub2">
          <span slot="title">
            <a-icon type="dot-chart" />
            <span>Administration</span>
          </span>

          <a-menu-item key="6">
            <router-link to="/admin/dashboard/consecutives">
            <a-icon type="folder" />Consecutives
            </router-link>
          </a-menu-item>
          <a-menu-item key="333">
            <router-link to="/admin/dashboard/activities">
              <a-icon type="shop" />Activities
            </router-link>
          </a-menu-item>
          <a-menu-item key="7">
            <router-link to="/admin/dashboard/rooms">
              <a-icon type="home" />Rooms
            </router-link>
          </a-menu-item>
          <a-menu-item key="8">
            <router-link to="/admin/dashboard/products">
              <a-icon type="shopping-cart" />Products
            </router-link>
          </a-menu-item>
        </a-sub-menu>

        <a-sub-menu key="sub3">
          <span slot="title">
            <a-icon type="code" />
            <span>Queries</span>
          </span>

          <a-menu-item key="44">
            <router-link to="/admin/dashboard/logs">
              <a-icon type="database" />Logs
            </router-link>
          </a-menu-item>
          <a-menu-item key="23">
            <router-link to="/admin/dashboard/errors">
              <a-icon type="qrcode" />Errors
            </router-link>
          </a-menu-item>
          <a-menu-item key="1312">
            <router-link to="/admin/dashboard/clients">
              <a-icon type="contacts" />Clients
            </router-link>
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>

    <a-layout>
      <a-layout-content style="margin: 0 16px">

        <br />

        <div :style="{ padding: '14px', background: '#fff', minHeight: '800px' }">
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
  name: "admin-dashboar",
  data() {
    return {
      collapsed: true
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

<style>
#components-layout-demo-side .logo {
  height: 25px;
  background: #3c4f65;
  margin: 16px;
}
</style>