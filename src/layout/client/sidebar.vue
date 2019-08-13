<template>
  <a-layout-sider collapsible v-model="collapsed">
    <a-menu theme="dark" :defaultSelectedKeys="['1']" mode="inline"> <!--Theme can be dark too-->
      
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
</template>

<script>
export default {
  name: "client-sidebar",
  data() {
    return {
      collapsed: true
    };
  }
};
</script>