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
          <router-link to="/admin/dasboard/security/users">
            <span>Users</span>
          </router-link>
        </a-breadcrumb-item>

        <a-breadcrumb-item>Change</a-breadcrumb-item>
        <a-breadcrumb-item>Password</a-breadcrumb-item>
      </a-breadcrumb>

      <br />

      <a-col :span="24">
        <a-card title="User Management">
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
                      v-decorator="['password',{ rules: [{ required: true, message: 'Please input your Password!' }] }]"
                      type="password"
                      placeholder="Password"
                    >
                      <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
                    </a-input>
                  </a-form-item>

                  <a-form-item>
                    <a-input
                      v-decorator="['confirm_password',{ rules: [{ required: true, message: 'Please input your confirm_password!' }] }]"
                      type="confirm_password"
                      placeholder="confirm_password"
                    >
                      <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
                    </a-input>
                  </a-form-item>

                  <a-form-item>
                    <a-button type="primary" html-type="submit" class="login-form-button">Change</a-button>
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
  props: ['username'],
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {

         let data = {
             username: this.username,
             body: {
               password: this.form.fieldsStore.fields.password["value"]
             }
          }

          this.$store.dispatch("updatePassword", data).then(
            response => {
              this.$notification.config({
                placement: "bottomRight",
                bottom: "50px",
                duration: 3
              });

              this.$notification.open({
                message: "User Module",
                description: response.body,
                icon: <a-icon type="smile" style="color: #108ee9" />
              });

              this.$router.push("/admin/dasboard/security/users");
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