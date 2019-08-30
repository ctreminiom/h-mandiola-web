<template>
  <div class="gutter-example">
    <a-row :gutter="16">
      <a-col class="gutter-row" :span="6">
        <div class="gutter-box">
          <a-card hoverable style="width: 100%" @click="goToSecurity()">
            <img alt="example" src="../../assets/security.png" slot="cover" />
            <a-card-meta
              title="Security"
              description="This module is enabled for administration for users. Roles change/setting up, password set up and change"
            >
              <a-avatar slot="avatar" style="color: #46324E; backgroundColor: #fde3cf">S</a-avatar>
            </a-card-meta>
          </a-card>
        </div>
      </a-col>
      <a-col class="gutter-row" :span="6">
        <div class="gutter-box">
          <a-card hoverable style="width: 100%" @click="goToAdministration()">
            <img alt="example" src="../../assets/administration.png" slot="cover" />
            <a-card-meta
              title="Administration"
              description="Module for administration of rooms, products, activities, consecutives and active clients"
            >
              <a-avatar slot="avatar" style="color: #46324E; backgroundColor: #fde3cf">A</a-avatar>
            </a-card-meta>
          </a-card>
        </div>
      </a-col>
      <a-col class="gutter-row" :span="6">
        <div class="gutter-box">
          <a-card hoverable style="width: 100%" @click="goToQueries()">
            <img alt="example" src="../../assets/queries.png" slot="cover" />
            <a-card-meta
              title="Queries"
              description="Module to see all kind of queries for diferent active modules and see all transactions on it"
            >
              <a-avatar slot="avatar" style="color: #46324E; backgroundColor: #fde3cf">Q</a-avatar>
            </a-card-meta>
          </a-card>
        </div>
      </a-col>
      <a-col class="gutter-row" :span="6">
        <div class="gutter-box">
          <a-card hoverable style="width: 100%" @click="goToTransactions()">
            <img alt="example" src="../../assets/transations.png" slot="cover" />
            <a-card-meta
              title="Transactions"
              description="All transactions executed can be seen on reservations and some of other modules"
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
    goToSecurity() {
      this.$router.push({ name: "admin-users" });
    },
    goToAdministration() {
      this.$router.push({ name: "admin-administrator" });
    },
    goToQueries() {
      this.$router.push({ name: "admin-queries" });
    },
    goToTransactions() {
      this.$router.push({name: "admin-transactions"})
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