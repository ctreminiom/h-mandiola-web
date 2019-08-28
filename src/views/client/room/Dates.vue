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
                    <a-input v-model="adults">
                      <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
                    </a-input>
                  </a-form-item>

                  <a-form-item>
                    <a-input v-model="children">
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
  props: ["id"],

  data() {
    return {
      adults: "",
      children: "",
      range: ["01/09/2018", "01/10/2018"]
    };
  },

  methods: {
    checkout() {
      this.$router.push({
        name: "dates-checkout",
        params: { id: this.id, startDate: this.range[0], endDate: this.range[1], adults: this.adults, children: this.children }
      });

    }
  }
};
</script>


<style scoped>
#carlos {
  margin-left: 200px;
}
</style>