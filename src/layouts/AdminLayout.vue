<template>
  <d-container fluid>
    <d-row>
      <!-- Main Sidebar -->
      <main-sidebar :items="sidebarItems" />

      <d-col class="main-content offset-lg-2 offset-md-3 p-0" tag="main" lg="10" md="9" sm="12">

        <!-- Main Navbar -->
        <main-navbar />

        <!-- Content -->
        <main-content />

        <!-- Main Footer -->
        <main-footer />
      </d-col>

    </d-row>
  </d-container>
</template>

<script>
import getSidebarItems from '@/data/sidebar-nav-items';
// Main layout components
import MainNavbar from '@/components/admin/layout/navbar.vue';
import MainSidebar from '@/components/admin/layout/sidebar.vue';
import MainFooter from '@/components/admin/layout/footer.vue';

import MainContent from '@/components/admin/layout/content.vue';

export default {
  name: 'analytics',
  components: {
    MainNavbar,
    MainSidebar,
    MainFooter,
    MainContent,
  },
  data() {
    return {
      sidebarItems: getSidebarItems(),
    };
  },
};
</script>