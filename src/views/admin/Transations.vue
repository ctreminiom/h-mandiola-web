<template>
  <div class="gutter-example">
    <a-row :gutter="16">
      <a-col class="gutter-row" :span="6">
        <div class="gutter-box">
          <a-card hoverable style="width: 100%" @click="goToReservations()">
            <img alt="example" src="../../assets/reservations.png" slot="cover" />
            <a-card-meta
              title="Reservations"
              description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. "
            >
              <a-avatar slot="avatar" style="color: #46324E; backgroundColor: #fde3cf">R</a-avatar>
            </a-card-meta>
          </a-card>
        </div>
      </a-col>
      <a-col class="gutter-row" :span="6">
        <div class="gutter-box">
          <a-card hoverable style="width: 100%" @click="goToATransactions()">
            <img alt="example" src="../../assets/transactions-api.png" slot="cover" />
            <a-card-meta
              title="Transactions"
              description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. "
            >
              <a-avatar slot="avatar" style="color: #46324E; backgroundColor: #fde3cf">T</a-avatar>
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
    goToReservations() {
      this.$router.push({ name: "admin-reservations" });
    },

    goToATransactions() {
      this.$router.push({ name: "admin-transaction-api" });
    },

    goToRooms() {
      this.$router.push({ name: "admin-rooms" });
    },

    goToProducts() {
      this.$router.push({ name: "admin-products" });
    },

    goToActiveClients() {
      this.$router.push({ name: "admin-clients-active" });
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