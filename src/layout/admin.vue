<template>
  <a-layout id="components-layout-demo-top" class="layout">
    <a-layout-header>
      <div class="logo"></div>

      <a-menu v-model="current" mode="horizontal" theme="dark" :style="{ lineHeight: '64px' }">
        <a-menu-item key="home">
          <router-link to="/admin/dashboard/home">
            <a-icon type="mail" />Home
          </router-link>
        </a-menu-item>

        <a-menu-item key="security">
          <router-link to="/admin/dashboard/security/users">
            <a-icon type="mail" />Security
          </router-link>
        </a-menu-item>

        <a-menu-item key="administration">
          <router-link to="/admin/dashboard/administration">
            <a-icon type="mail" />Administration
          </router-link>
        </a-menu-item>

        <a-menu-item key="queries">
          <router-link to="/admin/dashboard/queries">
            <a-icon type="mail" />Queries
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <br />
      <br />

      <div :style="{ background: '#fff', padding: '24px', minHeight: '790px' }">
        <router-view />
        <router-view name="helper" />
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">Ant Design ©2018 Created by Ant UED</a-layout-footer>
  </a-layout>
</template>

<script>
export default {
  methods: {
    onCollapse(collapsed, type) {
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {
      console.log(broken);
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