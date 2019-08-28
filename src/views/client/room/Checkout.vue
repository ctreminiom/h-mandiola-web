<template>
  <div>
    <a-row>
      <br />
      <a-col :span="24">
        <a-card title="Process the payment">
          <a-row>
            <a-col :span="20" :offset="2">
              <a-card hoverable style>

                <p>ROOM ID -> {{this.id}}</p>
                <p>Start Date -> {{this.startDate}}</p>
                <p>End Date -> {{this.endDate}}</p>
                <p>Adults -> {{this.adults}}</p>
                <p>Children -> {{this.children}}</p>
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
  props: ["id", "startDate", "endDate", "adults", "children"],

  data() {
    return {
      adults: "",
      children: "",
      range: ["01/09/2018", "01/10/2018"]
    };
  },

  methods: {
    checkout() {}
  }
};
</script>


<style scoped>
#carlos {
  margin-left: 200px;
}
</style>