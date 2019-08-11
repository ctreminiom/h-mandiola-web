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
        <a-breadcrumb-item>Roles</a-breadcrumb-item>
      </a-breadcrumb>

      <br />

      <a-col :span="24">
        <a-card title="Roles">
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
          title: "Name",
          dataIndex: "name",
          key: "name",
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
    go() {
      this.$router.push("/admin/dasboard/security/user/new");
    },
    handleTableChange() {},
    fetch() {
      this.$store.dispatch("Roles").then(
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