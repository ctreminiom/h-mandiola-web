<template>
  <div>
    <a-row>
     <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>Dashboard</a-breadcrumb-item>
        <a-breadcrumb-item>Security</a-breadcrumb-item>
        <a-breadcrumb-item>User</a-breadcrumb-item>
        <a-breadcrumb-item>Grants</a-breadcrumb-item>
      </a-breadcrumb>

      <br />

      <a-col :span="24">
        <a-card title="User Management">
          <a-row>
            <a-row>
              <a-col :offset="5" :span="5">
                <h2>Roles assigned</h2>
              </a-col>
              <a-col :offset="3" :span="4">
                <h2>Roles availables</h2>
              </a-col>
            </a-row>
            <a-col :offset="4" :span="24">
              <a-transfer
                :dataSource="mockData"
                :targetKeys="targetKeys"
                :listStyle="{width: '500px',height: '300px'}"
                @change="handleChange"
                :render="item=>`${item.title}`"
              ></a-transfer>
            </a-col>
          </a-row>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  props: ["username"],
  data() {
    return {
      mockData: [],
      targetKeys: []
    };
  },
  mounted() {
    this.getMock();
  },
  methods: {
    getMock() {
      let data = [];
      let roles = [];
      this.$store.dispatch("myGrants", this.username).then(
        response => {
          if (response) {
            for (let item of response) {
              let value = {
                key: item.ID,
                title: item.Role,
                context: "user",
                disabled: false
              };
              data.push(value);
            }
          }
          data.push({
            key: "1",
            title: "Administrator",
            context: "role",
            disabled: false
          });
          data.push({
            key: "2",
            title: "Consecutive",
            context: "role",
            disabled: false
          });
          data.push({
            key: "3",
            title: "Security",
            context: "role",
            disabled: false
          });
          data.push({
            key: "4",
            title: "Queries",
            context: "role",
            disabled: false
          });
          data.push({
            key: "5",
            title: "Maintenance",
            context: "role",
            disabled: false
          });
          console.log(response);
          let userRoles = [];
          let systemRoles = [];
          for (let role of data) {
            if (role.context == "user") {
              userRoles.push(role.title);
            }
            if (role.context == "role") {
              systemRoles.push(role.title);
            }
          }
          let allRoles = userRoles.concat(systemRoles);
          var uniq = allRoles
            .map(name => {
              return {
                count: 1,
                name: name
              };
            })
            .reduce((a, b) => {
              a[b.name] = (a[b.name] || 0) + b.count;
              return a;
            }, {});
          var duplicates = Object.keys(uniq).filter(a => uniq[a] > 1);
          let datas = data;
          for (let [position, item] of data.entries()) {
            if (item.context == "role" && !duplicates.includes(item.title)) {
              roles.push(item.key);
            }
            if (item.context == "role" && duplicates.includes(item.title)) {
              delete data[position];
            }
          }
          this.mockData = data;
          this.targetKeys = roles;
        },
        error => {
          this.$message.error(error);
        }
      );
    },
    handleChange(targetKeys, direction, moveKeys) {
      //left --> add grant
      if (direction == "left") {
        let data = { username: this.username, role: moveKeys[0] };
        console.log(data);
        this.$store.dispatch("addGrant", data).then(
          response => {
            this.$notification.config({
              placement: "bottomRight",
              bottom: "50px",
              duration: 3
            });
            this.$notification.open({
              message: "User Module",
              description: response.body,
              icon: <a-icon type="smile" style="color: #36B37E" />
            });
            this.targetKeys = targetKeys;
          },
          error => {
            console.log(error);
            this.$message.error("Invalid username or password");
          }
        );
      }
      //right --> remove grant
      if (direction == "right") {
        let dataTest = this.mockData.filter(obj => obj.key == moveKeys[0]);
        let roleTest;
        switch (dataTest[0].title) {
          case "Administrator":
            roleTest = "1";
            break;
          case "Consecutive":
            roleTest = "2";
            break;
          case "Security":
            roleTest = "3";
            break;
          case "Queries":
            roleTest = "4";
            break;
          case "Maintenance":
            roleTest = "5";
            break;
        }
        let data = {
          username: this.username,
          role: roleTest
        };
        console.log(data);
        this.$store.dispatch("removeGrant", data).then(
          response => {
            this.$notification.config({
              placement: "bottomRight",
              bottom: "50px",
              duration: 3
            });
            this.$notification.open({
              message: "User Module",
              description: response.body,
              icon: <a-icon type="smile" style="color: #36B37E" />
            });
            this.targetKeys = targetKeys;
          },
          error => {
            console.log(error);
            this.$message.error("Invalid username or password");
          }
        );
      }
    }
  }
};
</script>
