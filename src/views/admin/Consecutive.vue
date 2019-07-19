<template>


  <div class="main-content-container container-fluid px-4">
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle">Overview</span>
        <h3 class="page-title">Consecutive</h3>
      </div>
    </div>

    <!-- Default Light Table -->
    <div class="row">
      <div class="col">
        <div class="card card-small mb-4">
          <div class="card-header border-bottom">
            <h6 class="m-0">Consecutive</h6>
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
          title: "Type",
          dataIndex: "type",
          key: "type"
        },
        {
          title: "Description",
          dataIndex: "description",
          key: "description"
        },
        {
          title: "has_prefix",
          dataIndex: "has_prefix",
          key: "has_prefix"
        },
        {
          title: "prefix",
          dataIndex: "prefix",
          key: "prefix"
        },
        {
          title: "has_range",
          dataIndex: "has_range",
          key: "has_range"
        },
        {
          title: "initial",
          dataIndex: "initial",
          key: "initial"
        },
        {
          title: "final",
          dataIndex: "final",
          key: "final"
        }
      ]
    };
  },
  methods: {
    handleTableChange() {
    },
    fetch() {
      this.$store.dispatch("Consecutives").then(
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

