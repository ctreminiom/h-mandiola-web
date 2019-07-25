<template>
  <div>
    <a-row>
      <a-breadcrumb>
        <a-breadcrumb-item href>
          <a-icon type="home" />
        </a-breadcrumb-item>
        <a-breadcrumb-item href>
          <a-icon type="code" />
          <span>Queries</span>
        </a-breadcrumb-item>
        <a-breadcrumb-item>Logs</a-breadcrumb-item>
      </a-breadcrumb>

      <br />

      <a-col :span="24">
        <a-card title="Roles">
          <a-table :columns="columns" :dataSource="dataSource"></a-table>
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
    fetch() {
      this.$store.dispatch("Logs").then(
        response => {
          this.dataSource = response.body;
        },
        error => {
          this.$message.error(error);
        }
      );
    },
  }
};
</script>