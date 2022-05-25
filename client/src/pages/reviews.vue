<template>
  <div class="reviews">
    <div class="review-main">
      <h1 class="reviews-title">Количество отзывов: {{getReviews.length}}</h1>
      <carousel :items-to-show="1.5" :settings="settings">
        <slide class="review-wrapper" v-for="review in getReviews" :key="review.id">
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
      settings: {
        itemsToShow: 2,
        wrapAround: true,
        transition: 600,
        autoplay: 5000,
        snapAlign: 'center'
      }
    }
  },
  computed: {
    getReviews() {
      return this.$store.getters.getReviews
    }
  }
}
</script>

<style>

</style>
