<template>
  <div class="main-content-container container-fluid px-4">
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle">Overview</span>
        <h3 class="page-title">Security</h3>
      </div>
    </div>

    <!-- Default Light Table -->
    <div class="row">
      <div class="col">
        <div class="card card-small mb-4">
          <div class="card-header border-bottom"></div>
          <div class="card-body p-0 pb-3 text-center">
            <table class="table mb-0">
              <thead class="bg-light">
                <tr>
                  <th scope="col" class="border-0">#</th>
                  <th scope="col" class="border-0">Consecutive</th>
                  <th scope="col" class="border-0">Username</th>
                  <th scope="col" class="border-0">Email</th>
                  <th scope="col" class="border-0">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>USER-20</td>
                  <td>ctreminio</td>
                  <td>ctreminiom079@gmail.com</td>
                  <td>
                    <d-button class="boton" theme="info">View</d-button>
                    <d-button class="boton" theme="warning">Change password</d-button>
                    <d-button theme="danger">Delete</d-button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.boton {
  margin-right: 10px;
}
</style>
