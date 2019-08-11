<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">

    <adminSideBar/>


    <adminPage/>

      


  </a-layout>
</template>
<script>


import adminSideBar from "@/layout/admin/sidebar"
import adminPage from "@/layout/admin/page"

export default {
  name: 'admin-dashboar',
  components: {
    adminSideBar, 
    adminPage,
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