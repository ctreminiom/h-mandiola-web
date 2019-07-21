<template>
  <div class="main-content-container container-fluid px-4">
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle">Security</span>
        <h3 class="page-title">New User</h3>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <div class="card card-small mb-4">
          <div class="card-header border-bottom"></div>
          <div class="card-body p-0 pb-3 text-center">
            <br />
            <a-form :form="form">
              <a-form-item
                :label-col="formItemLayout.labelCol"
                :wrapper-col="formItemLayout.wrapperCol"
                label="Username"
              >
                <a-input
                  v-decorator="['username',{rules: [{ required: true, message: 'Please input your username' }]}]"
                  placeholder="Please input your username"
                  v-model="body.username"
                />
              </a-form-item>

              <a-form-item
                :label-col="formItemLayout.labelCol"
                :wrapper-col="formItemLayout.wrapperCol"
                label="Email"
              >
                <a-input
                  v-decorator="['email',{rules: [{ required: true, message: 'Please input your email' }]}]"
                  placeholder="Please input your email"
                  v-model="body.email"
                />
              </a-form-item>

              <a-form-item
                :label-col="formItemLayout.labelCol"
                :wrapper-col="formItemLayout.wrapperCol"
                label="Password"
              >
                <a-input
                  v-decorator="['password',{rules: [{ required: true, message: 'Please input your password' }]}]"
                  placeholder="Please input your password"
                  v-model="body.password"
                />
              </a-form-item>

              <a-form-item
                :label-col="formItemLayout.labelCol"
                :wrapper-col="formItemLayout.wrapperCol"
                label="Security Question"
              >
                <a-input
                  v-decorator="['security_question',{rules: [{ required: true, message: 'Please input your security_question' }]}]"
                  placeholder="Please input your security_question"
                  v-model="body.security_question"
                />
              </a-form-item>

              <a-form-item
                :label-col="formItemLayout.labelCol"
                :wrapper-col="formItemLayout.wrapperCol"
                label="Security Answer"
              >
                <a-input
                  v-decorator="['security_answer',{rules: [{ required: true, message: 'Please input your security_answer' }]}]"
                  placeholder="Please input your security_answer"
                  v-model="body.security_answer"
                />
              </a-form-item>

              <a-form-item
                :label-col="formTailLayout.labelCol"
                :wrapper-col="formTailLayout.wrapperCol"
              >
                <a-button type="primary" @click="check">Check</a-button>
              </a-form-item>
            </a-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 }
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 }
};
export default {
  data() {
    return {
      checkNick: false,
      formItemLayout,
      formTailLayout,
      form: this.$form.createForm(this),
      body: {
        username: "",
        email: "",
        password: "",
        security_question: "",
        security_answer: ""
      }
    };
  },
  methods: {
    check() {
      this.form.validateFields(err => {
        if (!err) {
          console.info("success");
          console.info(this.body);

          this.$store.dispatch("createUser", this.body).then(
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

              this.$router.push("/dashboard/security");
            },
            error => {
              this.$message.error("Invalid username or password");
            }
          );
        }
      });
    },
    handleChange(e) {
      this.checkNick = e.target.checked;
      this.$nextTick(() => {
        this.form.validateFields(["username"], { force: true });
      });
    }
  }
};
</script>




