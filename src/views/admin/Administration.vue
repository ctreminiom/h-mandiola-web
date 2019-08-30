<template>
  <div class="gutter-example">
    <a-row :gutter="16">
      <a-col class="gutter-row" :span="6">
        <div class="gutter-box">
          <a-card hoverable style="width: 100%" @click="goToConsecutives()">
            <img alt="example" src="../../assets/consecutives.png" slot="cover" />
            <a-card-meta
              title="Consecutives"
              description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. "
            >
              <a-avatar slot="avatar" style="color: #46324E; backgroundColor: #fde3cf">C</a-avatar>
            </a-card-meta>
          </a-card>
        </div>
      </a-col>
      <a-col class="gutter-row" :span="6">
        <div class="gutter-box">
          <a-card hoverable style="width: 100%" @click="goToActivities()">
            <img alt="example" src="../../assets/activities.png" slot="cover" />
            <a-card-meta
              title="Activities"
              description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. "
            >
              <a-avatar slot="avatar" style="color: #46324E; backgroundColor: #fde3cf">A</a-avatar>
            </a-card-meta>
          </a-card>
        </div>
      </a-col>
      <a-col class="gutter-row" :span="6" @click="goToRooms()">
        <div class="gutter-box">
          <a-card hoverable style="width: 100%">
            <img alt="example" src="../../assets/rooms.png" slot="cover" />
            <a-card-meta
              title="Rooms"
              description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. "
            >
              <a-avatar slot="avatar" style="color: #46324E; backgroundColor: #fde3cf">R</a-avatar>
            </a-card-meta>
          </a-card>
        </div>
      </a-col>
      <a-col class="gutter-row" :span="6">
        <div class="gutter-box">
          <a-card hoverable style="width: 100%" @click="goToProducts()">
            <img alt="example" src="../../assets/products.png" slot="cover" />
            <a-card-meta
              title="Products"
              description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. "
            >
              <a-avatar slot="avatar" style="color: #46324E; backgroundColor: #fde3cf">P</a-avatar>
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

    goToActivities() {
      this.$router.push({ name: "admin-activities" });
    },

    goToRooms() {
        this.$router.push({name: "admin-rooms"})
    },

    goToProducts() {
      this.$router.push({name: "admin-products"})
    },

    goToActiveClients() {
      this.$router.push({name: "admin-clients-active"})
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