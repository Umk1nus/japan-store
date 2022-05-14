<template>
  <div class="reviews">
    <div class="review-wrapper" v-for="review in reviews" :key="review.id">
      <Review :name="review.name" :age="String(review.age)" :description="review.description">
        <img src="@/assets/img/avatar/crocodile.svg" alt="" class="review__content-img-avatar">
      </Review>
    </div>
  </div>
</template>

<script>
import Review from "@/components/UI/Review.vue"
import reviews from "@/seeders/reviews.js"
export default {
  components:{Review},
  data() {
    return {
      reviews: reviews
    }
  },
}
</script>

<style>

</style>
