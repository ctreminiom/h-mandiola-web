<template>
  <div>
    <a-menu mode="horizontal">
      <a-menu-item key="mail" @click="handleLink">
        <a-icon type="mail" />Client
      </a-menu-item>
    </a-menu>

    <br />

    <a-row>
      <a-col :span="12" :offset="8">
        <br />
        <a-card hoverable style="width: 500px">
          <a-form
            id="components-form-demo-normal-login"
            :form="form"
            class="login-form"
            @submit="handleSubmit"
          >
            <a-form-item>
              <a-input
                v-decorator="[
          'userName',
          { rules: [{ required: true, message: 'Please input your username!' }] }
        ]"
                placeholder="Username"
              >
                <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-input
                v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] }
        ]"
                type="password"
                placeholder="Password"
              >
                <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
              </a-input>
            </a-form-item>
            <a-form-item>
              <a-button block type="primary" html-type="submit" class="login-form-button">Log in</a-button>
            </a-form-item>
          </a-form>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          let user = {
            username: this.form.fieldsStore.fields.userName["value"], //Check
            password: this.form.fieldsStore.fields.password["value"] //Check
          };

          this.$store.dispatch("loginUser", user).then(
            response => {
              this.$notification.config({
                placement: "bottomRight"
              });

              this.$notification.open({
                message: "User Module",
                description:
                  "YeahhhhhhhhhhhHH!",
                icon: <a-icon type="smile" style="color: #108ee9" />
              });

              this.$router.push("/admin/dashboard");
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