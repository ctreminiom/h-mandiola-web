<template>
  <div class="gutter-example">
    <a-row :gutter="16">
      <a-col class="gutter-row" :span="6" v-for="(room) in dataSource" v-bind:key="room.ID">
        <div class="gutter-box">
          <a-card hoverable style="width: 100%" @click="go(room.ID, room.Number)">
            <img alt="example" :src="room.Image" slot="cover" height="300" width="350" />
            <a-card-meta :title="room.Number" :description="room.Description">
              <br />
              Type: {{room.Type}}
              <br />
              Number: {{room.Number}}
              <br />
              Description: {{room.Description}}
              <br />
              Consecutive: {{room.Consecutive}}
              <br />
              ID: {{room.ID}}
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
  mounted() {
    this.fetch();
  },
  data() {
    return {
      dataSource: null
    };
  },
  methods: {
    fetch() {
      this.$store.dispatch("getPublicRooms").then(
        response => {
          this.dataSource = response;
        },
        error => {
          this.$message.error(error);
        }
      );
    },
    go(ID, Number) {
      this.$router.push({
        name: "rooms-dates",
        params: { id: ID, number: Number }
      });
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