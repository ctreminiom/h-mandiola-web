<template>
  <div>
    <a-row>
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item>Home</a-breadcrumb-item>
        <a-breadcrumb-item>Dashboard</a-breadcrumb-item>
        <a-breadcrumb-item>Administration</a-breadcrumb-item>
        <a-breadcrumb-item>Room</a-breadcrumb-item>
        <a-breadcrumb-item>New</a-breadcrumb-item>

      </a-breadcrumb>

      <br />

      <a-col :span="24">
        <a-card title="New Room">
          <a-row>
            <a-col :span="20" :offset="2">
              <a-card hoverable style>
                <a-form class="login-form" @submit.prevent="createRoom">
                  <a-form-item>
                    <a-input placeholder="Enter the new number" v-model="number">
                      <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
                    </a-input>
                  </a-form-item>

                  <a-form-item>
                    <a-input placeholder="Enter the new description" v-model="description">
                      <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
                    </a-input>
                  </a-form-item>

                  <a-form-item>
                    <a-select v-model="type" defaultValue="4" style="width: 120px">
                      <a-select-option value="4">Deluxe</a-select-option>
                      <a-select-option value="5">Familiar</a-select-option>
                      <a-select-option value="7">Presidencial</a-select-option>
                      <a-select-option value="6">Semi-Deluxe</a-select-option>
                    </a-select>
                  </a-form-item>

                  <a-form-item>
                    <a-select v-model="available" defaultValue="true" style="width: 120px">
                      <a-select-option value="true">True</a-select-option>
                      <a-select-option value="false">False</a-select-option>
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
      number: "",
      description: "",
      type: "4",
      available: "true"
    };
  },
  methods: {
    createRoom() {
      let formData = new FormData();
      formData.append("number", this.number);
      formData.append("type", this.type);
      formData.append("consecutive", "6");
      formData.append("available", this.available);
      formData.append("description", this.description);
      formData.append("image", this.file);
      this.$store.dispatch("createRoom", formData).then(
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
          this.$router.push("/admin/dashboard/rooms");
        },
        error => {
          this.$message.error("error creating the rooom");
        }
      );
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    }
  }
};
</script>