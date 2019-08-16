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
          <router-link to="/admin/dashboard/users">
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
                <a-form class="login-form" @submit.prevent="createTheUser">
                  <a-form-item>
                    <a-input placeholder="Enter the new username" v-model="username">
                      <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
                    </a-input>
                  </a-form-item>

                  <a-form-item>
                    <a-input placeholder="Enter the new email" v-model="email">
                      <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
                    </a-input>
                  </a-form-item>

                  <a-form-item>
                    <a-input
                      placeholder="Enter the new password"
                      v-model="password"
                      type="password"
                    >
                      <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
                    </a-input>
                  </a-form-item>

                  <a-form-item>
                    <a-input placeholder="Enter the security question" v-model="question">
                      <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
                    </a-input>
                  </a-form-item>

                  <a-form-item>
                    <a-input placeholder="Enter the security answer" v-model="answer">
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
      username: "",
      email: "",
      password: "",
      question: "",
      answer: ""
    };
  },

  methods: {
    createTheUser() {
      let body = {
        username: this.username,
        email: this.email,
        password: this.password,
        question: this.question,
        answer: this.answer
      };

      this.$store.dispatch("createUser", body).then(
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

          this.$router.push("/admin/dashboard/users");
        },
        error => {
          this.$message.error("error creating the user");
        }
      );
    }
  }
};
</script>