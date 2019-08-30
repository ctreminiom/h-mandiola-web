<template>
  <div>
    <a-row>
      <br />
      <a-col :span="24">
        <a-card title="Process the payment">
          <br />

          <a-row>
            <a-col :span="24">
              <a-card hoverable style>
                <p>ROOM ID -> {{this.id}}</p>
                <p>Start Date -> {{this.startDate}}</p>
                <p>End Date -> {{this.endDate}}</p>
                <p>Adults -> {{this.adults}}</p>
                <p>Children -> {{this.children}}</p>

                <p>Client ID -> {{this.dataSource}}</p>
                <p>Days -> {{this.days}}</p>


                <p>Total -> 1000</p>

              </a-card>
            </a-col>
          </a-row>

          <br />

          <a-row :gutter="16">
            <a-col :span="8">
              <a-card hoverable style title="Credit card">
                <div class="form-body">
                  <!-- Card Number -->
                  <input type="text" class="card-number" placeholder="Card Number" />

                  <!-- Date Field -->
                  <div class="date-field">
                    <div class="month">
                      <select name="Month">
                        <option value="january">January</option>
                        <option value="february">February</option>
                        <option value="march">March</option>
                        <option value="april">April</option>
                        <option value="may">May</option>
                        <option value="june">June</option>
                        <option value="july">July</option>
                        <option value="august">August</option>
                        <option value="september">September</option>
                        <option value="october">October</option>
                        <option value="november">November</option>
                        <option value="december">December</option>
                      </select>
                    </div>

                    <div class="year">
                      <select name="Year">
                        <option value="2016">2016</option>
                        <option value="2017">2017</option>
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                      </select>
                    </div>
                  </div>

                  <!-- Card Verification Field -->
                  <div class="card-verification">
                    <div class="cvv-input">
                      <input type="text" placeholder="CVV" />
                    </div>
                  </div>

                  <input type="text" class="card-number" placeholder="Coupon Code" />

                  <!-- Buttons -->
                  <button type="submit" class="proceed-btn">
                    <a href="#">Proceed</a>
                  </button>
                </div>
              </a-card>
            </a-col>

            <a-col :span="8">
              <a-card hoverable style title="Easy Pay">
                <div class="form-body">
                  <!-- Card Number -->
                  <input type="text" class="card-number" placeholder="Usersname" />
                  <input type="password" class="card-number" placeholder="Password" />
                  <input type="text" class="card-number" placeholder="Security Code" />

                  <!-- Buttons -->
                  <button type="submit" class="proceed-btn">
                    <a href="#">Proceed</a>
                  </button>
                </div>
              </a-card>
            </a-col>

            <a-col :span="8">
              <a-card hoverable style title="Reservate">
                <div class="form-body">
                  <!-- Buttons -->
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />

                  <button type="submit" class="proceed-btn">
                    <a href="#">Confirm</a>
                  </button>
                </div>
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
  props: ["id", "startDate", "endDate", "adults", "children", "days"],

  data() {
    return {
      dataSource: ""
    };
  },

  mounted() {
    this.checkout();
  },

  methods: {
    checkout() {
      var ID = localStorage.getItem("sub");

      this.$store.dispatch("getClientInfo",ID).then(
        response => {
          this.dataSource = response.ID;

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
* {
  box-sizing: border-box;
}

body,
html {
  height: 100%;
  min-height: 100%;
}

body {
  margin: 0;
  background-color: #e7e7e7;
  font-family: "Roboto", sans-serif;
}

/* Credit Card */

.credit-card {
  width: 360px;
  height: 400px;
  margin: 60px auto 0;
  border: 1px solid #ddd;
  border-radius: 6px;
  background-color: #fff;
  box-shadow: 1px 2px 3px 0px rgba(0, 0, 0, 0.1);
}

.form-header {
  height: 60px;
  padding: 20px 30px 0;
  border-bottom: 1px solid red;
}

.form-body {
  height: 340px;
  padding: 30px 30px 20px;
}

/* Title */

.title {
  margin: 0;
  color: #5e6977;
  font-size: 18px;
}

/* Common */

.card-number,
.cvv-input input,
.month select,
.paypal-btn,
.proceed-btn,
.year select {
  height: 45px;
}

.card-number,
.month select,
.year select {
  font-size: 14px;
  font-weight: 100;
  line-height: 14px;
}

.card-number,
.cvv-details,
.cvv-input input,
.month select,
.year select {
  color: #86939e;
  opacity: 0.7;
}

/* Card Number */

.card-number {
  width: 100%;
  margin-bottom: 20px;
  padding-left: 20px;
  border: 2px solid #e1e8ee;
  border-radius: 6px;
}

/* Date Field */

.month select,
.year select {
  -moz-appearance: none;
  -webkit-appearance: none;
  width: 145px;
  margin-bottom: 20px;
  padding-left: 20px;
  border: 2px solid #e1e8ee;
  border-radius: 6px;
  background-position: 85% 50%;
}

.month select {
  float: left;
}

.year select {
  float: right;
}

/* Card Verification Field */

.cvv-input input {
  width: 145px;
  float: left;
  padding-left: 20px;
  border: 2px solid #e1e8ee;
  border-radius: 6px;
  background: #fff;
}

.cvv-details {
  float: right;
  margin-bottom: 20px;
  font-size: 12px;
  font-weight: 300;
  line-height: 16px;
}

.cvv-details p {
  margin-top: 6px;
}

/* Buttons Section */

.paypal-btn,
.proceed-btn {
  cursor: pointer;
  width: 100%;
  border-color: transparent;
  border-radius: 6px;
  font-size: 16px;
}

.proceed-btn {
  margin-bottom: 10px;
  background: #7dc855;
}

.paypal-btn a,
.proceed-btn a {
  text-decoration: none;
  cursor: pointer;
}

.proceed-btn a {
  color: #fff;
}

.paypal-btn a {
  color: rgba(242, 242, 242, 0.7);
}
</style>