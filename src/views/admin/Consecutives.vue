<template>
  <div>
    <a-row>
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>Dashboard</a-breadcrumb-item>
        <a-breadcrumb-item>Administration</a-breadcrumb-item>
        <a-breadcrumb-item>Consecutives</a-breadcrumb-item>
      </a-breadcrumb>

      <br />

      <a-col :span="24">
        <a-card title="Consecutives">
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
          </a-table>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>



<script>
export default {
  data() {
    return {
      dataSource: null,
      searchText: "",
      searchInput: null,
      columns: [
        {
          title: "ID",
          dataIndex: "ID",
          key: "ID",
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
          title: "Type",
          dataIndex: "Type",
          key: "Type",
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
          title: "Description",
          dataIndex: "Description",
          key: "Description",
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
          title: "HasPrefix",
          dataIndex: "HasPrefix",
          key: "HasPrefix",
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
          title: "Prefix",
          dataIndex: "Prefix",
          key: "Prefix",
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
          title: "HasRange",
          dataIndex: "HasRange",
          key: "HasRange",
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
          title: "Initial",
          dataIndex: "Initial",
          key: "Initial",
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
          title: "Final",
          dataIndex: "Final",
          key: "Final",
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
        }
      ]
    };
  },
  methods: {
    fetchConsecutives() {
      this.$store.dispatch("getConsecutives").then(
        response => {
          this.dataSource = response;
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
      console.log(key);
      this.$store.dispatch("deleteUser", key).then(
        response => {
          this.$notification.config({
            placement: "bottomRight",
            bottom: "50px",
            duration: 3
          });
          this.$notification["info"]({
            message: "User Module",
            description: response
          });
          this.fetchConsecutives();
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
      console.log(id, username);
      this.$router.push({
        name: "admin-user-password",
        params: { id: id, username: username }
      });
    },
    goToChangeRoles(id, username) {
      this.$router.push({
        name: "admin-user-grant",
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
  },
  mounted() {
    this.fetchConsecutives();
  }
};
</script>