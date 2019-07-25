<template>
  <a-layout>
    <a-layout-content style="margin: 0 16px">
      <a-layout-header style="background: white;">
        <a-dropdown style="float: right">
          <a class="ant-dropdown-link">
            <a-avatar style="color: #e6f5ff; backgroundColor: #1c2938">CT</a-avatar>ctreminio
          </a>
          <a-menu slot="overlay">
            <a-menu-item>
              <a>Logout</a>
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
    <a-layout-footer style="text-align: center">Ant Design ©2018 Created by Ant UED</a-layout-footer>
  </a-layout>
</template>


<script>
export default {
  name: "admin-page"
};
</script>
