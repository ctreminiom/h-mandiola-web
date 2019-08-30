<template>
  <div class="gutter-example">
    <a-row :gutter="16">
      <a-button type="primary" block>Add credit card</a-button>
      <br />
      <br />
      <br />

      <a-col class="gutter-row" :span="6" v-for="(card) in cards" v-bind:key="card.ID">
        <div class="gutter-box">
          <a-card hoverable style="width: 100%">
            <a-card-meta :title="card.Card" :description="card.Amount">
              <br />
              Type: {{card.Type}}
              <br />
              ID: {{card.ID}}
              <a-avatar slot="avatar" style="color: #46324E; backgroundColor: #fde3cf">R</a-avatar>
            </a-card-meta>
          </a-card>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  mounted() {
    this.checkout();
    this.checkCard();
  },
  data() {
    return {
      dataSource: null,
      cards: null
    };
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
    fetch() {
      this.$store.dispatch("getPublicRooms").then(
        response => {
          this.dataSource = response;
        },
        error => {
          this.$message.error(error);
        }
      );
    },
    go(ID, Number) {
      this.$router.push({
        name: "rooms-dates",
        params: { id: ID, number: Number }
      });
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

            this.cards = yourCards;
          }

          if (yourCards.length != 0) {
            this.$message.info(
              "The system founded a credit card linked to this username"
            );
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