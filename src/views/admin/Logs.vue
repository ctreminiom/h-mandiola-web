<template>
  <div class="main-content-container container-fluid px-4">
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle">Overview</span>
        <h3 class="page-title">Logs</h3>
      </div>
    </div>

    <div class="col-12 col-sm-12 text-center text-sm-center mb-2">
      <div class="input-group input-group-seamless ml-2">
        <div class="input-group-prepend">
          <div class="input-group-text">
            <i class="fas fa-search"></i>
            <br />
            <br />
          </div>
        </div>
        <input
          class="navbar-search form-control"
          type="text"
          placeholder="Search for something..."
          aria-label="Search"
        />
      </div>
    </div>

    <!-- Default Light Table -->
    <div class="row">
      <div class="col">
        <div class="card card-small mb-4">
          <div class="card-header border-bottom">
            <h6 class="m-0">Log details table</h6>
          </div>
          <div class="card-body p-0 pb-3 text-center">
            <a-table
              :columns="columns"
              :dataSource="dataSource"
              @change="handleTableChange"
              :customRow="customRow"
            >
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
    this.$message.info("Loaded");
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
          title: "Code",
          dataIndex: "code",
          key: "code"
        },
        {
          title: "Username",
          dataIndex: "username",
          key: "username"
        },
        {
          title: "Date",
          dataIndex: "date",
          key: "date"
        },
        {
          title: "Detail",
          dataIndex: "detail",
          key: "detail"
        }
      ]
    };
  },
  methods: {
    handleTableChange() {
    },
    fetch() {
      this.$store.dispatch("Logs").then(
        response => {
          this.dataSource = response.body
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
            $message.info(`点了第${index}行`);
          }
        }
      };
    }
  }
};
</script>
