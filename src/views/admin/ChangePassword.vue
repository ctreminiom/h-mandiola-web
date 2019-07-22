<template>
  <div class="main-content-container container-fluid px-4">
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle">Security</span>
        <h3 class="page-title">Change Passoword</h3>
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
                label="New Passoword"
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
                label="Confirm Password"
              >
                <a-input
                  v-decorator="['confirmPassword',{rules: [{ required: true, message: 'Please input your confirmPassword' }]}]"
                  placeholder="Please input your confirmPassword"
                  v-model="body.confirmPassword"
                />
              </a-form-item>


              <a-form-item
                :label-col="formTailLayout.labelCol"
                :wrapper-col="formTailLayout.wrapperCol"
              >
                <a-button type="primary" @click="check">Confirm</a-button>
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
  props: ['username'],
  data() {
    return {
      checkNick: false,
      formItemLayout,
      formTailLayout,
      form: this.$form.createForm(this),
      body: {
        password: "",
        confirmPassword: "",
      }
    };
  },
  methods: {
    check() {
      this.form.validateFields(err => {
        if (!err) {

          let data = {
             username: this.username,

             body: {
               password: this.body.password
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