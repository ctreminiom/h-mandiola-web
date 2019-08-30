<template>
  <div>
    <a-row>
      <br />
      <a-col :span="24">
        <a-card title="Select the Start date, End date, adults and children">
          <a-row>
            <a-col :span="20" :offset="2">
              <a-card hoverable style>
                <a-form class="login-form" @submit.prevent="checkout">
                  <a-form-item>
                    <a-input v-model="adults" type="number">
                      <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
                    </a-input>
                  </a-form-item>

                  <a-form-item>
                    <a-input v-model="children" type="number">
                      <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
                    </a-input>
                  </a-form-item>

                  <a-form-item>
                    <date-range-picker v-model="range" />
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
export default {
  props: ["id", "number"],

  data() {
    return {
      adults: "",
      children: "",
      range: ["01/09/2018", "01/10/2018"],
      dataSource: []
    };
  },

  methods: {
    checkout() {
      //Check the reservations
      this.$store.dispatch("getReservations").then(
        response => {
          this.dataSource = response;
          console.log(this.dataSource);

          console.log(this.number);

          for (let item of this.dataSource) {
            console.log(item.Room);
            if (item.Room == this.number) {
              var minDate = new Date(item.StartDate);
              var maxDate = new Date(item.EndDate);

              var actualStartDate = new Date(this.range[0]);
              var actualEndDate = new Date(this.range[1]);

              if (actualStartDate > minDate && actualEndDate > maxDate) {
                this.$message.error("There's a reservation with that dates");
              } else {
                this.$router.push({
                  name: "dates-checkout",
                  params: {
                    id: this.id,
                    startDate: this.range[0],
                    endDate: this.range[1],
                    adults: this.adults,
                    children: this.children
                  }
                });
              }
            }
          }
        },
        error => {
          this.$message.error(error);
        }
      );
    }
  }
};
</script>


<style scoped>
#carlos {
  margin-left: 200px;
}
</style>