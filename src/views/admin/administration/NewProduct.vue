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
                    <a-select defaultValue="4" style="width: 100%" @change="handleChange">
                      <a-select-option value="4">Licores</a-select-option>
                      <a-select-option value="6">Golosinas</a-select-option>
                      <a-select-option value="5">Gaseosas</a-select-option>
                    </a-select>
                  </a-form-item>

                  <a-form-item>
                    <a-input
                      v-decorator="['price',{ rules: [{ required: true, message: 'Please input your price!' }] }]"
                      placeholder="price"
                    >
                      <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
                    </a-input>
                  </a-form-item>

                  <a-form-item>
                    <a-input
                      v-decorator="['inventory',{ rules: [{ required: true, message: 'Please input your inventory!' }] }]"
                      placeholder="inventory"
                    >
                      <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
                    </a-input>
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
      productType: ""
    };
  },

  beforeCreate() {
    this.form = this.$form.createForm(this);
  },
  methods: {
    
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {

          let product = {
            consecutive: "20",
            product_type_ID: this.productType,
            name: this.form.fieldsStore.fields.name["value"],
            description: this.form.fieldsStore.fields.description["value"],
            price: this.form.fieldsStore.fields.price["value"],
            inventory: this.form.fieldsStore.fields.inventory["value"],
          }
          

          this.$store.dispatch("createProduct", product).then(
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

              this.$router.push("/admin/dashboard/administration/products");
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
    },
    handleChange(value) {
      console.log(`selected ${value}`);
      this.productType = value
    },
  }
};
</script>