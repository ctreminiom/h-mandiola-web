<template>
  <div>
    <a-row>
      <a-breadcrumb>
        <a-breadcrumb-item href>
          <a-icon type="home" />
        </a-breadcrumb-item>
        <a-breadcrumb-item href>
          <a-icon type="dot-chart" />
          <span>Administration</span>
        </a-breadcrumb-item>
        <a-breadcrumb-item>Rooms</a-breadcrumb-item>
      </a-breadcrumb>

      <br />

      <a-col :span="24">
        <a-card title="Rooms">
          <a-button slot="extra" @click="go" type="primary">New Room</a-button>
          <a-table :columns="columns" :dataSource="dataSource">
            <template slot="action" slot-scope="text, record">
              <a-popconfirm
                v-if="dataSource.length"
                title="Sure to delete?"
                @confirm="() => onDelete(record.id)"
              >
                <a href="javascript:;">Delete</a>
              </a-popconfirm>
            </template>

            <img
              id="carlos"
              slot="expandedRowRender"
              slot-scope="record"
              :src="record.image_path"
              height="800px"
              width="800px"
            />
          </a-table>
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
          title: "Consecutive",
          dataIndex: "consecutive",
          key: "consecutive"
        },
        {
          title: "Code",
          dataIndex: "prefix",
          key: "prefix"
        },
        {
          title: "Number",
          dataIndex: "number",
          key: "number"
        },
        {
          title: "Room Type",
          dataIndex: "room_type_name",
          key: "room_type_name"
        },
        {
          title: "Description",
          dataIndex: "description",
          key: "description"
        },
        {
          title: "Available",
          dataIndex: "available",
          key: "available"
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
      this.$router.push("/admin/dashboard/administation/rooms/new");
    },
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
    onDelete(key) {
      this.$store.dispatch("deleteRoom", key).then(
        response => {
          this.$notification.config({
            placement: "bottomRight",
            bottom: "50px",
            duration: 3
          });
          this.$notification["info"]({
            message: "User Module",
            description: response.body
          });
          this.fetch();
        },
        error => {
          this.$notification["error"]({
            message: "User Module",
            description: error
          });
        }
      );
    }
  }
};
</script>


<style scoped>
#carlos {
  margin-left: 200px;
}
</style>
