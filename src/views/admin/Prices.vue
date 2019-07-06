<template>


  <div class="main-content-container container-fluid px-4">
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle">Overview</span>
        <h3 class="page-title">Price</h3>
      </div>
    </div>

    <div class="col-12 col-sm-12 text-center text-sm-center mb-2"> 
      <button type="button" class="btn btn-secondary btn-lg btn-block">Enter a new price</button>
    </div>


    <!-- Default Light Table -->
    <div class="row">
      <div class="col">
        <div class="card card-small mb-4">
          <div class="card-header border-bottom">
            <h6 class="m-0">Price table</h6>
          </div>
          <div class="card-body p-0 pb-3 text-center">
            <table class="table mb-0">
              <thead class="bg-light">
                <tr>
                  <th scope="col" class="border-0">Code</th>
                  <th scope="col" class="border-0">Type</th>
                  <th scope="col" class="border-0">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>123</td>
                  <td>[Normal || Deluxe || Condominio]</td>
                  <td>1000</td>
                </tr>
                <tr>
                  <td>456</td>
                  <td>[Normal || Deluxe || Condominio]</td>
                  <td>2000</td>
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
