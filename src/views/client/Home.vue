<template>
  <div class="gutter-example">
    <a-row :gutter="16">
      <a-col class="gutter-row" :span="6" :offset="9">
        <div class="gutter-box">
          <a-card hoverable style="width: 100%" @click="go()">
            <img alt="example" src="../../assets/reservation.png" slot="cover" />
            <a-card-meta
              title="Reserve Room"
              description="In this section you will be able to reserve a room and set the desired dates for your trip. Feel free to set your preferences as you whish and place the reservation accordingly "
            >
              <a-avatar slot="avatar" style="color: #46324E; backgroundColor: #fde3cf">R</a-avatar>
            </a-card-meta>
          </a-card>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataSource: null
    };
  },
  methods: {
    go() {
      this.$router.push({ name: "client-rooms" });
    }
  }
};
</script>


<style lang="css">
gutter-example >>> .ant-row > div {
  background: transparent;
  border: 0;
}
.gutter-box {
  padding: 5px 0;
}
</style>