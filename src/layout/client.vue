<template>
  <a-layout id="components-layout-demo-top" class="layout">
    <a-layout-header>
      <div class="logo"></div>

      <a-menu v-model="current" mode="horizontal" theme="dark" :style="{ lineHeight: '64px' }">
        <a-menu-item key="Home">
          <router-link to="/admin/client/home">
            <a-icon type="mail" />Home
          </router-link>
        </a-menu-item>

        <a-menu-item key="Cards">
          <router-link to="/admin/client/credit/cards">
            <a-icon type="credit-card" />Credit Cards
          </router-link>
        </a-menu-item>

        <a-menu-item key="Easy">
          <router-link to="/admin/client/easy/pay/account">
            <a-icon type="credit-card" />EasyPay account
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
     <br>
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