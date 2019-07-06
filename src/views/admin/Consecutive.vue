<template>


  <div class="main-content-container container-fluid px-4">
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle">Overview</span>
        <h3 class="page-title">Consecutive</h3>
      </div>
    </div>

    <!-- Default Light Table -->
    <div class="row">
      <div class="col">
        <div class="card card-small mb-4">
          <div class="card-header border-bottom">
            <h6 class="m-0">Consecutive</h6>
          </div>
          <div class="card-body p-0 pb-3 text-center">
            <table class="table mb-0">
              <thead class="bg-light">
                <tr>
                  <th scope="col" class="border-0">Code</th>
                  <th scope="col" class="border-0">Description</th>
                  <th scope="col" class="border-0">Consecutive</th>
                  <th scope="col" class="border-0">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>123</td>
                  <td>Tarifas</td>
                  <td>1</td>
                  <td><d-button class="boton" theme="warning">Edit</d-button></td>
                </tr>
                <tr>
                  <td>456</td>
                  <td>Productos</td>
                  <td>2</td>
                  <td><d-button class="boton" theme="warning">Edit</d-button></td>
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
