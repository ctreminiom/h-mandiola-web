<template>
     <a-layout id="components-layout-demo-fixed">

    <clientSideBar/>
    <clientPage/>

      


  </a-layout>
</template>
<script>


import clientSideBar from "@/layout/client/sidebar"
import clientPage from "@/layout/client/page"

export default {
  name: 'client-dashboar',
  components: {
    clientSideBar, 
    clientPage,
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