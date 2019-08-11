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

        <a-breadcrumb-item href>
          <router-link to="/admin/dashboard/security/users">
            <span>Users</span>
          </router-link>
        </a-breadcrumb-item>

        <a-breadcrumb-item>New</a-breadcrumb-item>
      </a-breadcrumb>

      <br />

      <a-col :span="24">
        <a-card title="New User">
          <a-row>
            <a-col :span="20" :offset="2">
              <a-card hoverable style>
                <a-form
                  id="components-form-demo-normal-login"
                  :form="form"
                  class="login-form"
                  @submit="handleSubmit"
                >
                  <a-form-item>
                    <a-input
                      v-decorator="['name',{ rules: [{ required: true, message: 'Please input your name!' }] }]"
                      placeholder="name"
                    >
                      <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
                    </a-input>
                  </a-form-item>

                  <a-form-item>
                    <a-input
                      v-decorator="['description',{ rules: [{ required: true, message: 'Please input your description!' }] }]"
                      placeholder="Description"
                    >
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
      file: ""
    };
  },

  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  methods: {
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          let formData = new FormData();

          formData.append("name", this.form.fieldsStore.fields.name["value"]);
          formData.append(
            "description",
            this.form.fieldsStore.fields.description["value"]
          );
          formData.append("consecutive", "19");
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
                description: response.body,
                icon: <a-icon type="smile" style="color: #36B37E" />
              });

              this.$router.push("/admin/dashboard/administration/activities");
            },
            error => {
              console.log(error);
              this.$message.error("Invalid username or password");
            }
          );
        }
      });
    },
    handleLink() {
      this.$router.push({ name: "client-login" });
    }
  }
};
</script>