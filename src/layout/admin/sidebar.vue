<template>
  <a-layout-sider collapsible v-model="collapsed">
    <div class="logo" />
    <a-menu theme="dark" :defaultSelectedKeys="['1']" mode="inline">
      <a-sub-menu key="sub1">
        <span slot="title">
          <a-icon type="safety" />
          <span>Security</span>
        </span>
        <a-menu-item key="3">
          <router-link to="/admin/dasboard/security/users">
           <a-icon type="usergroup-delete" />Users
          </router-link>
        </a-menu-item>
        <a-menu-item key="4">
           <router-link to="/admin/dasboard/security/roles">
            <a-icon type="audit" />Roles
          </router-link>
        </a-menu-item>
      </a-sub-menu>

      <a-sub-menu key="sub2">
        <span slot="title">
          <a-icon type="dot-chart" />
          <span>Administration</span>
        </span>

        <a-menu-item key="6">
          <a-icon type="folder" />Consecutives
        </a-menu-item>
        <a-menu-item key="333">
           <router-link to="/admin/dasboard/administration/actities">
          <a-icon type="shop" />Activities
          </router-link>
        </a-menu-item>
        <a-menu-item key="7">
          <a-icon type="home" />Rooms
        </a-menu-item>
        <a-menu-item key="8">
          <a-icon type="shopping-cart" />Products
        </a-menu-item>
        <a-menu-item key="9">
          <a-icon type="cloud" />Clients
        </a-menu-item>
      </a-sub-menu>

      <a-sub-menu key="sub3">
        <span slot="title">
          <a-icon type="code" />
          <span>Queries</span>
        </span>

        <a-menu-item key="44">
          <router-link to="/admin/dasboard/queries/logs">
          <a-icon type="database" />Logs
          </router-link>
        </a-menu-item>
        <a-menu-item key="23">
          <router-link to="/admin/dasboard/queries/errors">
          <a-icon type="qrcode" />Errors
          </router-link>
        </a-menu-item>
        <a-menu-item key="1312">
          <a-icon type="contacts" />Clients
        </a-menu-item>
        <a-menu-item key="768">
          <a-icon type="schedule" />Rooms
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>

<script>
export default {
  name: "admin-sidebar",
  data() {
    return {
      collapsed: true
    };
  }
};
</script>