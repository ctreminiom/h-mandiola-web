<template>
  <div>
    <a-row>
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>Dashboard</a-breadcrumb-item>
        <a-breadcrumb-item>Administration</a-breadcrumb-item>
        <a-breadcrumb-item>Activities</a-breadcrumb-item>
        <a-breadcrumb-item>New</a-breadcrumb-item>
      </a-breadcrumb>

      <br />

      <a-col :span="24">
        <a-card title="New Activity">
          <a-row>
            <a-col :span="20" :offset="2">
              <a-card hoverable style>
                <a-form class="login-form" @submit.prevent="createActivity">
                  <a-form-item>
                    <a-input placeholder="Enter the new name" v-model="name">
                      <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
                    </a-input>
                  </a-form-item>

                  <a-form-item>
                    <a-input placeholder="Enter the new description" v-model="description">
                      <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
                    </a-input>
                  </a-form-item>

                  <a-form-item>
                    <label>
                      File
                      <input type="file" id="file" ref="file" v-on:change="handleFileUpload()" />
                    </label>
                  </a-form-item>

                  <a-form-item>
                    <a-button type="primary" html-type="submit" class="login-form-button">Create</a-button>
                  </a-form-item>
                </a-form>
              </a-card>
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
  data() {
    return {
      file: "",
      name: "",
      description: ""
    };
  },
  methods: {
    createActivity() {
      let formData = new FormData();
      formData.append("name", this.name);
      formData.append("consecutive", "4");
      formData.append("description", this.description);
      formData.append("image", this.file);
      this.$store.dispatch("createActivity", formData).then(
        response => {
          this.$notification.config({
            placement: "bottomRight",
            bottom: "50px",
            duration: 3
          });
          this.$notification.open({
            message: "User Module",
            description: "The activity has been created!!",
            icon: <a-icon type="smile" style="color: #108ee9" />
          });
          this.$router.push("/admin/dashboard/administration/activities");
        },
        error => {
          this.$message.error("error creating the activity");
        }
      );
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    }
  }
};
</script>