<template>
  <a-layout id="components-layout-demo-top" class="layout">
    <a-layout-header>
      <a-dropdown style="float: center">
        <a-menu slot="overlay">
          <a-menu-item key="1">
            <a-icon type="user" />Logout
          </a-menu-item>
        </a-menu>
        <a-button type="primary" style="margin-left: 8px">
          Welcome {{ profile.name }}
          <a-icon type="down" />
        </a-button>
      </a-dropdown>
    </a-layout-header>
    <a-layout-content style="padding: 0 50px">
      <a-breadcrumb style="margin: 16px 0"></a-breadcrumb>
      <div :style="{ background: '#fff', padding: '24px', minHeight: '800px' }">
        <p>You chose {{ profile }}</p>

        <div style="background-color: #ececec; padding: 20px;">
          <a-row :gutter="16">
            <a-col :span="8">
              <a-card title="Card title" :bordered="false">
                <p>card content</p>
              </a-card>
            </a-col>
            <a-col :span="8">
              <a-card title="Card title" :bordered="false">
                <p>card content</p>
              </a-card>
            </a-col>
            <a-col :span="8">
              <a-card title="Card title" :bordered="false">
                <p>card content</p>
              </a-card>
            </a-col>
          </a-row>
        </div>
      </div>
    </a-layout-content>
    <a-layout-footer style="text-align: center">Ant Design ©2018 Created by Ant UED</a-layout-footer>
  </a-layout>
</template>
<style>
#components-layout-demo-top .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
</style>

<script>
export default {
  data() {
    return {
      profile: this.$auth.profile
    };
  },
  methods: {
    handleLoginEvent(data) {
      this.profile = data.profile;
    }
  }
};
</script>