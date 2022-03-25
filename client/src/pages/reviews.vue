<template>
  <div class="reviews">
    <Review/>
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
