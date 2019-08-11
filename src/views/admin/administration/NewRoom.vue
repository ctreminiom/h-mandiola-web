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
                      v-decorator="['number',{ rules: [{ required: true, message: 'Please input your number!' }] }]"
                      placeholder="number"
                    >
                      <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
                    </a-input>
                  </a-form-item>

                  <a-form-item>
                    <a-select defaultValue="3" style="width: 100%" @change="handleChange">
                      <a-select-option value="2">Suite Presidencial</a-select-option>
                      <a-select-option value="1">Suite Junior</a-select-option>
                      <a-select-option value="3">Suite Familiar</a-select-option>
                    </a-select>
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
                    <a-select defaultValue="true" style="width: 100%" @change="handleChangeAvailable">
                      <a-select-option value="true">true</a-select-option>
                      <a-select-option value="false">false</a-select-option>
                    </a-select>
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
      options: [],
      roomType: "",
      available: ""
    };
  },

  mounted() {
    this.fetchRoomTypes();
  },

  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  methods: {
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },
    handleChange(value) {
      console.log(`selected ${value}`);
      this.roomType = value
    },
    handleChangeAvailable(value) {
      console.log(`selected ${value}`);
      this.available = value
    },
    fetchRoomTypes() {
      this.$store.dispatch("RoomsTypes").then(
        response => {
          console.log(response.body);
          this.options = response.body;
        },
        error => {
          this.$message.error(error);
        }
      );
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          let formData = new FormData();

          formData.append("consecutive", "21");
          formData.append("room_type_ID", this.roomType);
          formData.append("number", this.form.fieldsStore.fields.number["value"]);
          formData.append("description",this.form.fieldsStore.fields.description["value"]);
          formData.append("available", this.available);
          formData.append("image_path", this.file);


          this.$store.dispatch("createRoom", formData).then(
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

              this.$router.push("/admin/dashboard/administration/rooms");
            },
            error => {
              console.log(error);
              this.$message.error(error);
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