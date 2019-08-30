<template>
  <div>
    <a-row>
      <br />

      <a-col :span="24">
        <a-card title="Rooms">
          <a-row>
            <a-col
              :span="5"
              style="padding: 5px;"
              v-for="(room) in dataSource"
              v-bind:key="room.ID"
            >
              <a-card hoverable style="width: 300px">
                <img alt="example" :src="room.Image" slot="cover" height="200" width="200" />
                <template class="ant-card-actions" slot="actions">
                  <a-icon type="shopping-cart" @click="go(room.ID, room.Number)"></a-icon>
                </template>
                <a-card-meta :title="room.Number"></a-card-meta>

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
              </a-card>
            </a-col>
          </a-row>
        </a-card>
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
    go(ID,Number) {
      this.$router.push({
        name: "dates-room",
        params: { id: ID, number: Number }
      });
    }
  }
};
</script>


<style scoped>
#carlos {
  margin-left: 200px;
}
</style>