<template>
  <div class="gutter-example">
    <a-row :gutter="16">
      <div class="gutter-box">
        <a-row>
          <a-col :span="24">
            <a-card title="Reservation Details" hoverable style>
              <b><span>ROOM ID: {{this.id}}</span></b></br>
              <b><span>Start Date: {{this.startDate}}</span></b></br>
              <b><span>End Date: {{this.endDate}}</span></b></br>
              <b><span>Adults: {{this.adults}}</span></b></br>
              <b><span>Children: {{this.children}}</span></b></br>

              <b><span>Client ID: {{this.dataSource.ID}}</span></b></br>
              <b><span>Days: {{this.days}}</span></b></br>

              <b><span>Total: 1000</span></b></br>
            </a-card>
          </a-col>
        </a-row>

        <a-row :gutter="16">
          <a-col class="gutter-row" :span="8">
            <div class="gutter-box">
              <a-card hoverable style="width: 100%">
                <img alt="example" src="../../assets/credit-card.png" slot="cover" />
                <a-card-meta
                  title="Credit Card"
                  description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. "
                >
                  <a-avatar slot="avatar" style="color: #46324E; backgroundColor: #fde3cf">S</a-avatar>
                </a-card-meta>

                <br />

                <a-form class="login-form" @submit.prevent="processPaymentWithCreditCard">
                  <a-form-item>
                    <a-input placeholder="Card Number" v-model="card">
                      <a-icon slot="prefix" type="credit-card" style="color: rgba(0,0,0,.25)" />
                    </a-input>
                  </a-form-item>

                  <a-form-item>
                    <a-select
                      defaultValue
                      v-model="month"
                      style="width: 120px"
                      @change="handleChange"
                    >
                      <a-select-option value="january">January</a-select-option>
                      <a-select-option value="february">February</a-select-option>
                      <a-select-option value="march">March</a-select-option>
                      <a-select-option value="april">April</a-select-option>
                      <a-select-option value="may">May</a-select-option>
                      <a-select-option value="june">June</a-select-option>
                      <a-select-option value="july">July</a-select-option>
                      <a-select-option value="august">August</a-select-option>
                      <a-select-option value="september">September</a-select-option>
                      <a-select-option value="october">October</a-select-option>
                      <a-select-option value="november">November</a-select-option>
                      <a-select-option value="december">December</a-select-option>
                    </a-select>
                  </a-form-item>

                  <a-form-item>
                    <a-select
                      defaultValue
                      v-model="year"
                      style="width: 120px"
                      @change="handleChange"
                    >
                      <a-select-option value="2016">2016</a-select-option>
                      <a-select-option value="2017">2017</a-select-option>
                      <a-select-option value="2018">2018</a-select-option>
                      <a-select-option value="2019">2019</a-select-option>
                      <a-select-option value="2020">2020</a-select-option>
                      <a-select-option value="2021">2021</a-select-option>
                      <a-select-option value="2022">2022</a-select-option>
                      <a-select-option value="2023">2023</a-select-option>
                      <a-select-option value="2024">2024</a-select-option>
                    </a-select>
                  </a-form-item>

                  <a-form-item>
                    <a-input placeholder="CVV" v-model="cvv">
                      <a-icon slot="prefix" type="credit-card" style="color: rgba(0,0,0,.25)" />
                    </a-input>
                  </a-form-item>

                  <a-form-item>
                    <a-button
                      block
                      type="primary"
                      html-type="submit"
                      class="login-form-button"
                    >Process</a-button>
                  </a-form-item>
                </a-form>
              </a-card>
            </div>
          </a-col>
          <a-col class="gutter-row" :span="8">
            <div class="gutter-box">
              <a-card hoverable style="width: 100%">
                <img alt="example" src="../../assets/easy-pay.png" slot="cover" />
                <a-card-meta
                  title="Easy Pay"
                  description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. "
                >
                  <a-avatar slot="avatar" style="color: #46324E; backgroundColor: #fde3cf">A</a-avatar>
                </a-card-meta>

                <br />

                <a-form class="login-form" @submit.prevent="processPayment">
                  <a-form-item>
                    <a-input placeholder="Username" v-model="username">
                      <a-icon slot="prefix" type="credit-card" style="color: rgba(0,0,0,.25)" />
                    </a-input>
                  </a-form-item>

                  <a-form-item>
                    <a-input placeholder="Password" v-model="password" type="password">
                      <a-icon slot="prefix" type="credit-card" style="color: rgba(0,0,0,.25)" />
                    </a-input>
                  </a-form-item>

                  <a-form-item>
                    <a-input placeholder="Code" v-model="code">
                      <a-icon slot="prefix" type="credit-card" style="color: rgba(0,0,0,.25)" />
                    </a-input>
                  </a-form-item>

                  <a-form-item>
                    <a-button
                      block
                      type="primary"
                      html-type="submit"
                      class="login-form-button"
                    >Process</a-button>
                  </a-form-item>
                </a-form>
              </a-card>
            </div>
          </a-col>
          <a-col class="gutter-row" :span="8">
            <div class="gutter-box">
              <a-card hoverable style="width: 100%">
                <img alt="example" src="../../assets/reserva.png" slot="cover" />
                <a-card-meta
                  title="Hold the reservation"
                  description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. "
                >
                  <a-avatar slot="avatar" style="color: #46324E; backgroundColor: #fde3cf">Q</a-avatar>
                </a-card-meta>

                <br />

                <a-form class="login-form" @submit.prevent="reservate">
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <a-form-item>
                    <a-button
                      block
                      type="primary"
                      html-type="submit"
                      class="login-form-button"
                    >Confirm the reservation</a-button>
                  </a-form-item>
                </a-form>
              </a-card>
            </div>
          </a-col>
        </a-row>
      </div>
    </a-row>
  </div>
</template>

<script>
export default {
  props: ["id", "startDate", "endDate", "adults", "children", "days", "number"],
  data() {
    return {
      dataSource: "",
      cvv: "",
      year: "",
      month: "",
      card: ""
    };
  },
  mounted() {
    this.checkout();
    this.checkCard();
  },
  methods: {
    checkout() {
      var ID = localStorage.getItem("sub");
      this.$store.dispatch("getClientInfo", ID).then(
        response => {
          this.dataSource = response;
        },
        error => {
          this.$message.error(error);
        }
      );
    },

    checkCard() {
      this.$store.dispatch("getCards").then(
        response => {
          var yourCards = [];

          for (let item of response) {
            console.log(item.Username);
            console.log("-----------------------");
            console.log(this.dataSource.Sub);

            if (item.Username == this.dataSource.Sub) {
              var card = {
                ID: item.ID,
                Card: item.Card,
                Month: item.Month,
                Year: item.Year,
                CVV: item.CVV,
                Type: item.Type,
                Amount: item.Amount,
                Username: item.Username
              };

              yourCards.push(card);
            }
          }

          if (yourCards.length != 0) {
            this.$message.info(
              "The system founded a credit card linked to this username"
            );

            this.card = yourCards[0].Card;
            this.cvv = yourCards[0].CVV;
            this.year = yourCards[0].Year;
            this.month = yourCards[0].Month;
          } else {
            this.$message.info(
              "The system did not founded a credit card linked to this username"
            );
          }
        },
        error => {
          this.$message.error(error);
        }
      );
    },
    reservate() {
      var requestBody = {
        consecutive: "8",
        client: this.dataSource.ID,
        room: this.id,
        startDate: this.startDate,
        endDate: this.endDate,
        hasPaid: "false",
        adults: this.adults,
        children: this.children
      };

      console.log(requestBody);

      this.$store.dispatch("reservate", requestBody).then(
        response => {
          this.dataSource = response;
          this.$message.error(response);
        },
        error => {
          this.$message.error(error);
        }
      );
    },
    processPaymentWithCreditCard() {
      var days = this.days;

      var finalPrice = 10000 * days;

      var finalAsString = finalPrice.toString();

      var body = {
        card: this.card,
        cvv: this.cvv,
        month: this.month,
        year: this.year,
        type: "M",
        price: finalAsString
      };

      console.log(body);

      this.$store.dispatch("processPaymentWithCreditCard", body).then(
        response => {
          this.$message.error(response);

          var requestBody = {
            consecutive: "6",
            client: this.dataSource.ID,
            room: this.id,
            startDate: this.startDate,
            endDate: this.endDate,
            hasPaid: "true",
            adults: this.adults,
            children: this.children
          };

          console.log(requestBody);

          this.$store.dispatch("reservate", requestBody).then(
            response => {
              this.dataSource = response;
              this.$message.error(response);
            },
            error => {
              this.$message.error(error);
            }
          );
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

 dataSource: "",
      cvv: "",
      year: "",
      month: "",
      card: ""