<template>


  <div class="main-content-container container-fluid px-4">
    <!-- Page Header -->
    <div class="page-header row no-gutters py-4">
      <div class="col-12 col-sm-4 text-center text-sm-left mb-0">
        <span class="text-uppercase page-subtitle">Overview</span>
        <h3 class="page-title">Rooms</h3>
      </div>
    </div>

    <div class="col-12 col-sm-12 text-center text-sm-center mb-2"> 
      <button type="button" class="btn btn-secondary btn-lg btn-block">Create a new room</button>
    </div>


    <!-- Default Light Table -->
    <div class="row">
      <div class="col">
        <div class="card card-small mb-4">
          <div class="card-header border-bottom">
            <h6 class="m-0">Room table</h6>
          </div>
          <div class="card-body p-0 pb-3 text-center">
            <table class="table mb-0">
              <thead class="bg-light">
                <tr>
                  <th scope="col" class="border-0">Code</th>
                  <th scope="col" class="border-0">Room Number</th>
                  <th scope="col" class="border-0">Description </th>
                  <th scope="col" class="border-0">Image</th>
                </tr>
              </thead>
                  <tbody v-for="item in data" :key="item.ID">
                      <tr>
                            <td>{{item.ID}}</td>
                            <td>{{item.Consecutive}}</td>
                            <td>{{item.name}}</td>
                            <td>{{item.image_path}}</td>
                      </tr>
                  </tbody>
              <!--<tbody>
                
                <tr>
                  <td>123</td>
                  <td>1</td>
                  <td>[Drop down with only 3 possible options]</td>
                  <td>[Load image]</td>
                </tr>
                <tr>
                  <td>456</td>
                  <td>2</td>
                  <td>[Drop down with only 3 possible options]</td>
                  <td>[Load image]</td>
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
            return this.$store.getters.rooms//REVISAR
        }

    },
    created() {

        this.$store.dispatch('rooms').then(response => {
            this.data = this.$store.getters.rooms //REVISAR
        }, error => {
            alert("ERROR PIDIENDO LOS ROOMS")
        })

    },
  
}
</script>