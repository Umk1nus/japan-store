<template>
  <div class="reviews">
    <div class="review-main">
      <carousel :items-to-show="1.5" :settings="settings">
        <slide class="review-wrapper" v-for="review in reviews" :key="review.id">
          <Review :name="review.name" :age="String(review.age)" :description="review.description">
            <img src="@/assets/img/avatar/crocodile.svg" alt="" class="review__content-img-avatar">
          </Review>
        </slide>
        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
    </div>

  </div>
</template>

<script>
import Review from "@/components/UI/Review.vue"
import reviews from "@/seeders/reviews.js"
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
export default {
  components:{
    Review,
    Carousel,
    Slide,
    Pagination,
    Navigation,
    },
  data() {
    return {
      reviews: reviews,
      settings: {
        itemsToShow: 2,
        wrapAround: true,
        transition: 600,
        // autoplay: 5000,
        snapAlign: 'center'
      }
    }
  },
}
</script>

<style>

</style>
