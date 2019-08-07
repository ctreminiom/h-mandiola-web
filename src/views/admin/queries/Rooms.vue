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
        <a-breadcrumb-item>Rooms Status</a-breadcrumb-item>
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
          title: "Room Number", 
          dataIndex: "roomnumber", //Check the name
          key: "roomnumber" //Check the name
        },
        {
          title: "Status",
          dataIndex: "status",//Check the name
          key: "status"//Check the name
        }
      ]
    };
  },
  methods: {
    fetch() {
      this.$store.dispatch("Rooms").then(
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