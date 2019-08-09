<template>
  <a-layout id="components-layout-demo-fixed">
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      <a-menu
        theme="dark"
        mode="horizontal"
        :defaultSelectedKeys="['2']"
        :style="{ lineHeight: '64px' }"
      ></a-menu>
    </a-layout-header>
    <a-layout-content :style="{ padding: '0 50px', marginTop: '64px' }">
      <a-breadcrumb :style="{ margin: '16px 0' }"></a-breadcrumb>
      <div :style="{ background: '#fff', padding: '24px', minHeight: '500px' }">
        <h1>Please select one of the options</h1>

        <template>
          <div style="background-color: #ececec; padding: 20px;">
            <a-row :gutter="16">
              <a-col :span="12">
                <a-card title="Check the Rooms" :bordered="false">
                  <router-link to="rooms">
                  
                    <a-button
                      type="primary"
                      html-type="submit"
                      class="login-form-button"
                      @click="handleCheckArticles"
                    >Reserve a room</a-button>
                  </router-link>
                </a-card>
              </a-col>

              <a-col :span="12">
                <a-card title="Check the Articles" :bordered="false">
                  <router-link to="/client/dashboard/activities">
                
                    <a-button
                      type="primary"
                      html-type="submit"
                      class="login-form-button"
                      @click="handleCheckArticles"
                    >Buy an article</a-button>
                  </router-link>
                </a-card>
              </a-col>
            </a-row>
          </div>
          
        </template>
      </div>
    </a-layout-content>
    <a-layout-footer :style="{ textAlign: 'center' }"></a-layout-footer>
  </a-layout>
</template>


<style>
#components-layout-demo-fixed .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
}
</style>

<script>
export default {
  methods: {
    handleCheckRooms() {
      this.$router.push({ name: "client-rooms" });
    },
    handleCheckArticles() {
      this.$router.push({ name: "client-article" });
    }
  }
};
</script>

