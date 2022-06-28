<template>
  <swiper
    :slides-per-view="1"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide>
      <img src="https://img.catpre.com/web/catpre/event/main_banner/sno_top1_back_202206101435571.png" alt="sample1" />
    </swiper-slide>
    <swiper-slide>
      <img src="https://img.catpre.com/web/catpre/event/main_banner/sno_top1_back_202206101534581.png" alt="sample2" />
    </swiper-slide>
    <swiper-slide>
      <img src="https://img.catpre.com/web/catpre/event/main_banner/sno_top1_back_202206201537341.png" alt="sample3" />
    </swiper-slide>
    ...
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
export default {
  components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
      };
  }
}
</script>