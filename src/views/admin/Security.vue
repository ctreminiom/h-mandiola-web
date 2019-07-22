<template>
  <div class="main-content-container container-fluid px-4">
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle">Overview</span>
        <h3 class="page-title">Security</h3>
      </div>
    </div>

    <div class="col-12 col-sm-12 text-center mb-2">
      <a-button size="large" @click="go" type="primary" block>Create new user</a-button>
    </div>
    <br />

    <div class="row">
      <div class="col">
        <div class="card card-small mb-4">
          <div class="card-header border-bottom"></div>
          <div class="card-body p-0 pb-3 text-center">
            <a-table :columns="columns" :dataSource="dataSource">
              <span slot="customTitle">ID</span>
              <a slot="username" slot-scope="text" href="javascript:;">
                <a-icon type="smile-o" />
                {{text}}
              </a>

              <template slot="action" slot-scope="text, record">
                <a href="javascript:;">View</a>
                <a-divider type="vertical" />

                <a href="javascript:;" @click="goToChangePassword(record.id ,record.username)" >Change password</a>

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
      this.$router.push("/dashboard/security/user/new");
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

          this.$notification['info']({
          message: "User Module",
          description: response.body,

        });

        this.fetch();

        },
        error => {

          this.$notification['error']({
          message: "User Module",
          description: error,

        });
        }
      );
    },
    goToChangePassword (id, key) {
      this.$router.push({ name: 'changePassword', params: {id: id, username: key }})
    }

  }
};
</script>
