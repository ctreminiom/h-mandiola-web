
<template>
<carousel :perPage=1 :autoplay="true">
  <slide>
    <img style="height:100%; width:100%;" src="../../assets/hotel1.jpg" />
  </slide>
  <slide>
    <img style="height:100%; width:100%;" src="../../assets/hotel2.jpg" />
  </slide>
  <slide>
    <img style="height:100%; width:100%;" src="../../assets/hotel3.jpg" />
  </slide>
</carousel>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  components: {
    Carousel,
    Slide
  }
};
</script>