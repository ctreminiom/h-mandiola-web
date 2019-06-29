<template>
  <div class="about">
    <d-navbar toggleable="md" type="dark" theme="primary">
      <d-navbar-toggle target="nav-collapse"></d-navbar-toggle>
      <d-navbar-brand>
        <h6 class="text-white my-auto mr-4">H-Mandiola - Admin </h6>
      </d-navbar-brand>

      <d-collapse is-nav id="nav-collapse">
        <d-navbar-nav>
          <d-nav-item href="#">Client Site</d-nav-item>
        </d-navbar-nav>
      </d-collapse>
    </d-navbar>

    <d-container class="form-container">
      <d-row>
        <d-col cols="12" md="4" lg="6" offset-lg="3">
          <d-card>
            <d-card-body align="left" title="Admin">
              <d-form inline class="login-form">
                <label class="sr-only" for="f1_Username">Username</label>
                <d-input id="f1_Username" class="mb-2 mr-sm-2 mb-sm-0" placeholder="Username" />

                <label class="sr-only" for="f1_Password">Password</label>
                <d-input id="f2_Password" class="mr-2" type="password" placeholder="Password" />

                <d-button theme="primary">Login</d-button>
              </d-form>
            </d-card-body>
          </d-card>
        </d-col>
      </d-row>
    </d-container>
  </div>
</template>

<style scoped>
.login-form {
  margin-top: 20px;
  margin-bottom: 20px;
}

.form-container {
    margin-top: 100px;
}
</style>
