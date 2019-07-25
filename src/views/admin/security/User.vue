<template>
  <div>
    <a-row>
      <a-breadcrumb>
        <a-breadcrumb-item href>
          <a-icon type="home" />
        </a-breadcrumb-item>
        <a-breadcrumb-item href>
          <a-icon type="safety" />
          <span>Security</span>
        </a-breadcrumb-item>
        <a-breadcrumb-item>Users</a-breadcrumb-item>
      </a-breadcrumb>

      <br />

      <a-col :span="24">
        <a-card title="Users">
          <a-button slot="extra" @click="go" type="primary">New User</a-button>
          <a-table :columns="columns" :dataSource="dataSource">
            <span slot="customTitle">ID</span>
            <a slot="username" slot-scope="text" href="javascript:;">
              <a-icon type="smile-o" />
              {{text}}
            </a>

            <template slot="action" slot-scope="text, record">
              <a
                href="javascript:;"
                @click="goToChangePassword(record.id ,record.username)"
              >Change password</a>

              <a-divider type="vertical" />
              <a-popconfirm
                v-if="dataSource.length"
                title="Sure to delete?"
                @confirm="() => onDelete(record.username)"
              >
                <a href="javascript:;">Delete</a>
              </a-popconfirm>
            </template>
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
          title: "Username",
          dataIndex: "username",
          key: "username"
        },
        {
          title: "Email",
          dataIndex: "email",
          key: "email"
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
      this.$router.push("/admin/dasboard/security/user/new");
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
    },
    onDelete(key) {
      this.$store.dispatch("deleteUser", key).then(
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
    },
    goToChangePassword(id, key) {
      this.$router.push({
        name: "changePassword",
        params: { id: id, username: key }
      });
    }
  }
};
</script>