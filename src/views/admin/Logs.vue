<template>



  <div class="main-content-container container-fluid px-4">
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle">Overview</span>
        <h3 class="page-title">Logs</h3>
      </div>
    </div>

    <div class="col-12 col-sm-12 text-center text-sm-center mb-2"> 
              <div class="input-group input-group-seamless ml-2">
          <div class="input-group-prepend">
            <div class="input-group-text">
              <i class="fas fa-search"></i>
              <br>
              <br>
            </div>
          </div>
          <input class="navbar-search form-control" type="text" placeholder="Search for something..." aria-label="Search">
        </div>
    </div>

    <!-- Default Light Table -->
    <div class="row">


      <div class="col">
        <div class="card card-small mb-4">
          <div class="card-header border-bottom">
            <h6 class="m-0">Log details table</h6>
          </div>
          <div class="card-body p-0 pb-3 text-center">
            <table class="table mb-0">
              <thead class="bg-light">
                <tr>
                  <th scope="col" class="border-0">ID</th>
                  <th scope="col" class="border-0">Actor</th>
                  <th scope="col" class="border-0">View Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>123</td>
                  <td>Carlos</td>
                  <td>
                      <d-button class="boton" theme="info">Details</d-button>
                  </td>
                </tr>
                <tr>
                  <td>123</td>
                  <td>Carlos</td>
                  <td>
                      <d-button class="boton" theme="info">Details</d-button>
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
