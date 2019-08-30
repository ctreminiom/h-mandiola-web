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
import Moment from "moment";
import { extendMoment } from "moment-range";

const moment = extendMoment(Moment);

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
              var start = moment(item.StartDate, "DD/MM/YYYY");
              var end = moment(item.EndDate, "DD/MM/YYYY");

              var ActualStart = moment(this.range[0], "DD/MM/YYYY");
              var ActualEnd = moment(this.range[1], "DD/MM/YYYY");

              var isAvailable = moment.range(start, end);

              var range = moment.range(ActualStart, ActualEnd);
              var diff = range.diff("days");

              if (
                isAvailable.contains(ActualStart) ||
                isAvailable.contains(ActualEnd)
              ) {
                this.$message.error(
                  "There's a reservation between those dates"
                );
              } else {
                this.$router.push({
                  name: "dates-checkout",
                  params: {
                    id: this.id,
                    startDate: this.range[0],
                    endDate: this.range[1],
                    adults: this.adults,
                    children: this.children,
                    days: diff
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