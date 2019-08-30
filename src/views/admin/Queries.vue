<template>
  <div class="gutter-example">
    <a-row :gutter="16">
      <a-col class="gutter-row" :span="6">
        <div class="gutter-box">
          <a-card hoverable style="width: 100%" @click="goToErrors()">
            <img alt="example" src="../../assets/errors.png" slot="cover" />
            <a-card-meta
              title="Errors"
              description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. "
            >
              <a-avatar slot="avatar" style="color: #46324E; backgroundColor: #fde3cf">E</a-avatar>
            </a-card-meta>
          </a-card>
        </div>
      </a-col>
      <a-col class="gutter-row" :span="6" @click="goToLogs()">
        <div class="gutter-box">
          <a-card hoverable style="width: 100%">
            <img alt="example" src="../../assets/logs.png" slot="cover" />
            <a-card-meta
              title="Logs"
              description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. "
            >
              <a-avatar slot="avatar" style="color: #46324E; backgroundColor: #fde3cf">L</a-avatar>
            </a-card-meta>
          </a-card>
        </div>
      </a-col>
      <a-col class="gutter-row" :span="6">
        <div class="gutter-box">
          <a-card hoverable style="width: 100%" @click="goToRoomsReady()">
            <img alt="example" src="../../assets/rooms-ready.png" slot="cover" />
            <a-card-meta
              title="Rooms Ready"
              description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. "
            >
              <a-avatar slot="avatar" style="color: #46324E; backgroundColor: #fde3cf">RR</a-avatar>
            </a-card-meta>
          </a-card>
        </div>
      </a-col>

      <a-col class="gutter-row" :span="6">
        <div class="gutter-box">
          <a-card hoverable style="width: 100%" @click="goToActiveClients()">
            <img alt="example" src="../../assets/active-clients.png" slot="cover" />
            <a-card-meta
              title="Active Clients"
              description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. "
            >
              <a-avatar slot="avatar" style="color: #46324E; backgroundColor: #fde3cf">AC</a-avatar>
            </a-card-meta>
          </a-card>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  methods: {
    goToConsecutives() {
      this.$router.push({ name: "admin-consecutives" });
    },

    goToErrors() {
      this.$router.push({ name: "admin-queries-errors" });
    },

    goToLogs() {
      this.$router.push({ name: "admin-queries-logs" });
    },

    goToRoomsReady() {
      this.$router.push({ name: "admin-queries-active-rooms" });
    },

    goToActiveClients() {
      this.$router.push({ name: "admin-queries-clients-active" });
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