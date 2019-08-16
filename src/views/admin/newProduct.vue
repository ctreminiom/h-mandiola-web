<template>
  <div>
    <a-row>
      <a-breadcrumb>
        <a-breadcrumb-item href>
          <a-icon type="home" />
        </a-breadcrumb-item>
        <a-breadcrumb-item href>
          <a-icon type="safety" />
          <span>Administration</span>
        </a-breadcrumb-item>

        <a-breadcrumb-item href>
          <router-link to="/admin/dashboard/products">
            <span>Products</span>
          </router-link>
        </a-breadcrumb-item>

        <a-breadcrumb-item>New</a-breadcrumb-item>
      </a-breadcrumb>

      <br />

      <a-col :span="24">
        <a-card title="New Product">
          <a-row>
            <a-col :span="20" :offset="2">
              <a-card hoverable style>
                <a-form class="login-form" @submit.prevent="createProduct">
                  <a-form-item>
                    <a-input placeholder="Enter the new name" v-model="name">
                      <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
                    </a-input>
                  </a-form-item>

                  <a-form-item>
                    <a-select
                      v-model="type"
                      defaultValue="3"
                      style="width: 120px"
                      @change="handleChange"
                    >
                      <a-select-option value="3">Golosinas</a-select-option>
                      <a-select-option value="8">Bebidas</a-select-option>
                      <a-select-option value="2">Licores</a-select-option>
                    </a-select>
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
      name: "",
      type: "3"
    };
  },
  methods: {
    createProduct() {
      let body = {
          consecutive: "5",
          name: this.name,
          type: this.type
      };

      console.log(body)

      this.$store.dispatch("createProduct", body).then(
        response => {
          this.$notification.config({
            placement: "bottomRight",
            bottom: "50px",
            duration: 3
          });

          this.$notification.open({
            message: "User Module",
            description: response,
            icon: <a-icon type="smile" style="color: #108ee9" />
          });

          this.$router.push("/admin/dashboard/products");
        },
        error => {
          this.$message.error("error creating the user");
        }
      );
    }
  }
};
</script>