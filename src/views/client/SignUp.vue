<template>
  <div>
    <a-row>
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
                      v-decorator="['userName',{ rules: [{ required: true, message: 'Please input your username!' }] }]"
                      placeholder="Username"
                    >
                      <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
                    </a-input>
                  </a-form-item>

                  <a-form-item>
                    <a-input
                      v-decorator="['email',{ rules: [{ required: true, message: 'Please input your email!' }] }]"
                      placeholder="Email"
                    >
                      <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
                    </a-input>
                  </a-form-item>

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
                      v-decorator="['security_question',{ rules: [{ required: true, message: 'Please input your security_question!' }] }]"
                      placeholder="security_question"
                    >
                      <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
                    </a-input>
                  </a-form-item>

                  <a-form-item>
                    <a-input
                      v-decorator="['security_answer',{ rules: [{ required: true, message: 'Please input your security_answer!' }] }]"
                      placeholder="security_answer"
                    >
                      <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
                    </a-input>
                  </a-form-item>

                  <a-form-item>
                    <a-button type="primary" html-type="submit" class="login-form-button">Create</a-button>
                    
                  </a-form-item>
                  <a-button type="danger" html-type="submit" class="login-form-button" @click="handleGoBack">Go to main page</a-button>
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
            password: this.form.fieldsStore.fields.password["value"], //Check
            email: this.form.fieldsStore.fields.email["value"], //Check
            security_question: this.form.fieldsStore.fields.security_question[
              "value"
            ], //Check
            security_answer: this.form.fieldsStore.fields.security_answer[
              "value"
            ] //Check
          };

          this.$store.dispatch("createUser", user).then(
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

              this.$router.push("/admin/dashboard/security/users");
            },
            error => {
              console.log(error);
              this.$message.error("Invalid username or password");
            }
          );
        }
      });
    },

    handleGoBack(){
      this.$router.push( {name: 'admin-login'})
    }
  }
};
</script>