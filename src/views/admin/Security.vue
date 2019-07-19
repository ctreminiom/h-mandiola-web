<template>
  <div class="main-content-container container-fluid px-4">
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle">Overview</span>
        <h3 class="page-title">Security</h3>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div class="card card-small mb-4">
          <div class="card-header border-bottom"></div>
          <div class="card-body p-0 pb-3 text-center">

            <a-button type="primary" @click="go" block>New</a-button>


            <a-table
              :columns="columns"
              :dataSource="dataSource"
              @change="handleTableChange"
              :customRow="customRow"
            >
              <a slot="action" slot-scope="text" href="javascript:;">Ver</a>
              <template slot="name" slot-scope="name">{{ name.first }} {{ name.last }}</template>
            </a-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.boton {
  margin-right: 10px;
}
</style>

<script>
export default {
  mounted() {
    this.fetch();
  },
  data() {
    return {
      dataSource: null,
      columns: [
        {
          title: "ID",
          dataIndex: "id",
          key: "id"
        },
        {
          title: "Username",
          dataIndex: "username",
          key: "username"
        },
        {
          title: "Action",
          dataIndex: "",
          key: "x",
          scopedSlots: { customRender: "action" }
        }
      ]
    };
  },
  methods: {
    go() {
      this.$router.push("/dashboard/security/newUser");
    },
    handleTableChange() {},
    fetch() {
      this.$store.dispatch("getUsers").then(
        response => {
          this.dataSource = response.body;
        },
        error => {
          this.$message.error(error);
        }
      );
    },
    customRow(record, index) {
      const { $message } = this;
      return {
        on: {
          click: () => {
            $message.info(index);
          }
        }
      };
    }
  }
};
</script>
