<template>
  <div class="spinner">
  </div>
</template>

<script>
export default {
  methods: {
    handleLoginEvent(data) {
      if (!data.error) {
        console.log("------------------------------------");
        console.log(data.profile);
        console.log("------------------------------------");


        let body = {
          consecutive: "3",
          first: data.profile.given_name,
          last: data.profile.family_name,
          username: data.profile.nickname,
          email: data.profile.email,
          sub: data.profile.sub,
          aud: data.profile.aud
        };

        this.$store.dispatch("createClient", body).then(
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
          },
          error => {
            this.$message.error("error creating the user");
          }
        );

        localStorage.setItem("sub", data.profile.sub);

        this.$router.push("/admin/client/home");
      }
    }
  },
  async created() {
    try {
      await this.$auth.handleAuthentication();
    } catch (e) {
      this.$router.push("/");
      console.error(e);
    }
  }
};
</script>

<style scoped>
.spinner {
  position: absolute;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: white;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
