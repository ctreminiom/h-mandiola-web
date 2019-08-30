<template>
  <div class="gutter-example">
    <a-row :gutter="16">
      <a-col class="gutter-row" :span="15" :offset="4">
        <div class="gutter-box">
          <a-card hoverable style="width: 100%" @click="go()">
            <a-form class="login-form" @submit.prevent="checkout">
              <a-form-item>
                <a-input v-model="adults" type="number" placeholder="Select the adults" min="0">
                  <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
                </a-input>
              </a-form-item>

              <a-form-item>
                <a-input
                  v-model="children"
                  type="number"
                  placeholder="Select the childrens"
                  min="0"
                >
                  <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
                </a-input>
              </a-form-item>

              <a-form-item>
                <date-range-picker v-model="range" />
              </a-form-item>

              <a-form-item>
                <a-button type="primary" html-type="submit" class="login-form-button">Process</a-button>
              </a-form-item>
            </a-form>
          </a-card>
        </div>
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
                  name: "client-checkout",
                  params: {
                    number: this.number,
                    id: this.id,
                    startDate: this.range[0],
                    endDate: this.range[1],
                    adults: this.adults,
                    children: this.children,
                    days: diff
                  }
                });
              }
            } else {
              var start = moment(item.StartDate, "DD/MM/YYYY");
              var end = moment(item.EndDate, "DD/MM/YYYY");
              var ActualStart = moment(this.range[0], "DD/MM/YYYY");
              var ActualEnd = moment(this.range[1], "DD/MM/YYYY");
              var isAvailable = moment.range(start, end);
              var range = moment.range(ActualStart, ActualEnd);
              var diff = range.diff("days");

              this.$router.push({
                name: "client-checkout",
                params: {
                  number: this.number,
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
        },
        error => {
          this.$message.error(error);
        }
      );
    }
  }
};
</script>



<style lang="css">
gutter-example >>> .ant-row > div {
  background: transparent;
  border: 0;
}
.gutter-box {
  padding: 5px 0;
}
</style>