<template>


  <div class="main-content-container container-fluid px-4">
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle">Overview</span>
        <h3 class="page-title">Errors</h3>
      </div>
    </div>

    <!-- Default Light Table -->
    <div class="row">
      <div class="col">
        <div class="card card-small mb-4">
          <div class="card-header border-bottom">
            <h6 class="m-0">Error details table</h6>
          </div>
          <div class="card-body p-0 pb-3 text-center">
            <table class="table mb-0">
              <thead class="bg-light">
                <tr>
                  <th scope="col" class="border-0">Error code</th>
                  <th scope="col" class="border-0">Date</th>
                  <th scope="col" class="border-0">Description</th>
                </tr>
              </thead>

                  <tbody v-for="item in data" :key="item.ID">
                      <tr>
                            <td>{{item.ID}}</td>
                            <td>{{item.date}}</td>
                            <td>{{item.detail}}</td>
                      </tr>
                  </tbody>

              <!--<tbody>
                <tr>
                  <td>12/02/1996</td>
                  <td>404</td>
                  <td>Not Found</td>
                </tr>
                <tr>
                  <td>12/05/2005</td>
                  <td>403</td>
                  <td>Server Busy</td>
                </tr>

              </tbody>-->
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


<script>
export default {
    data() {
        return {

        }
    },

    computed: {

        data() {
            return this.$store.getters.errors//REVISAR
        }

    },
    created() {

        this.$store.dispatch('errors').then(response => {
            this.data = this.$store.getters.errors //REVISAR
        }, error => {
            alert("ERROR PIDIENDO LOS errors")
        })

    },
  
}
</script>