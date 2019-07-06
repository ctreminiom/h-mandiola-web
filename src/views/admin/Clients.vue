<template>


  <div class="main-content-container container-fluid px-4">
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle">Overview</span>
        <h3 class="page-title">Client Status</h3>
      </div>
    </div>



    <!-- Default Light Table -->
    <div class="row">
      <div class="col">
        <div class="card card-small mb-4">
          <div class="card-header border-bottom">
            <h6 class="m-0">Client table</h6>
          </div>
          <div class="card-body p-0 pb-3 text-center">
            <table class="table mb-0">
              <thead class="bg-light">
                <tr>
                  <th scope="col" class="border-0">Room type</th>
                  <th scope="col" class="border-0">Total amount of days </th>
                  <th scope="col" class="border-0">View customer</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Classic</td>
                  <td>5</td>
                  <td><d-button class="boton" theme="warning">View</d-button></td>
                </tr>
                <tr>
                  <td>Deluxe</td>
                  <td>5</td>
                  <td><d-button class="boton" theme="warning">View</d-button></td>
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
