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

            <div
              slot="filterDropdown"
              slot-scope="{ setSelectedKeys, selectedKeys, confirm, clearFilters, column }"
              class="custom-filter-dropdown"
            >
              <a-input
                v-ant-ref="c => searchInput = c"
                :placeholder="`Search ${column.dataIndex}`"
                :value="selectedKeys[0]"
                @change="e => setSelectedKeys(e.target.value ? [e.target.value] : [])"
                @pressEnter="() => handleSearch(selectedKeys, confirm)"
                style="width: 188px; margin-bottom: 8px; display: block;"
              />
              <a-button
                type="primary"
                @click="() => handleSearch(selectedKeys, confirm)"
                icon="search"
                size="small"
                style="width: 90px; margin-right: 8px"
              >Search</a-button>
              <a-button
                @click="() => handleReset(clearFilters)"
                size="small"
                style="width: 90px"
              >Reset</a-button>
            </div>
            <a-icon
              slot="filterIcon"
              slot-scope="filtered"
              type="search"
              :style="{ color: filtered ? '#108ee9' : undefined }"
            />
            <template slot="customRender" slot-scope="text">
              <span v-if="searchText">
                <template
                  v-for="(fragment, i) in text.toString().split(new RegExp(`(?<=${searchText})|(?=${searchText})`, 'i'))"
                >
                  <mark
                    v-if="fragment.toLowerCase() === searchText.toLowerCase()"
                    :key="i"
                    class="highlight"
                  >{{fragment}}</mark>
                  <template v-else>{{fragment}}</template>
                </template>
              </span>
              <template v-else>{{text}}</template>
            </template>

            <span slot="customTitle">ID</span>
            <a slot="username" slot-scope="text" href="javascript:;">
              <a-icon type="smile-o" />
              {{text}}
            </a>

            <template slot="action" slot-scope="text, record">
              <a href="javascript:;" @click="goToChangeRoles(record.id ,record.username)">Roles</a>

              <a-divider type="vertical" />

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
      searchText: "",
      searchInput: null,
      columns: [
        {
          title: "ID",
          dataIndex: "id",
          key: "id",
          scopedSlots: {
            filterDropdown: "filterDropdown",
            filterIcon: "filterIcon",
            customRender: "customRender"
          },
          onFilter: (value, record) =>
            record.name.toLowerCase().includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                this.searchInput.focus();
              }, 0);
            }
          }
        },
        {
          title: "Username",
          dataIndex: "username",
          key: "username",
          scopedSlots: {
            filterDropdown: "filterDropdown",
            filterIcon: "filterIcon",
            customRender: "customRender"
          },
          onFilter: (value, record) =>
            record.name.toLowerCase().includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                this.searchInput.focus();
              }, 0);
            }
          }
        },
        {
          title: "Email",
          dataIndex: "email",
          key: "email",
          scopedSlots: {
            filterDropdown: "filterDropdown",
            filterIcon: "filterIcon",
            customRender: "customRender"
          },
          onFilter: (value, record) =>
            record.name.toLowerCase().includes(value.toLowerCase()),
          onFilterDropdownVisibleChange: visible => {
            if (visible) {
              setTimeout(() => {
                this.searchInput.focus();
              }, 0);
            }
          }
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
      this.$router.push("/admin/dashboard/security/users/new");
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
    goToChangePassword(id, username) {
      this.$router.push({
        name: "security-users-change-password",
        params: { id: id, username: username }
      });
    },
    goToChangeRoles(id, username) {
      this.$router.push({
        name: "security-users-change-roles",
        params: { id: id, username: username }
      });
    },

    handleSearch(selectedKeys, confirm) {
      confirm();
      this.searchText = selectedKeys[0];
    },

    handleReset(clearFilters) {
      clearFilters();
      this.searchText = "";
    }
  }
};
</script>