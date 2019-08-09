<template>
  <a-layout id="components-layout-demo-fixed">
    <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
      
      <a-menu
        theme="dark"
        mode="horizontal"
        :defaultSelectedKeys="['2']"
        :style="{ lineHeight: '64px' }"
      >

      </a-menu>
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
                  <a-button type="warning" html-type="submit" class="login-form-button" @click="handleCheckRooms">Reserve a room</a-button>
                </a-card>
              </a-col>
              <a-col :span="12">
                <a-card title="Check the Articles" :bordered="false">
                  <a-button type="warning" html-type="submit" class="login-form-button" @click="handleCheckArticles">Buy an article</a-button>
                </a-card>
              </a-col>
           
            </a-row>
          </div>
        </template>

      </div>
    </a-layout-content>
        <a-layout-footer :style="{ textAlign: 'center' }">
     
    </a-layout-footer>
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
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  methods: {
    handleCheckRooms(){
      this.$router.push( {name: 'client-rooms'})
    },
    handleCheckArticles(){
       this.$router.push( {name: 'client-article'})
    }
  }
};

</script>

