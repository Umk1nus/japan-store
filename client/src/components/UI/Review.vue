<template>
  <div class="review">
    <div class="review__content">
      <div class="review__content-img">
        <slot></slot>
      </div>
      <div class="review__content-info">
        <h2 class="review__content-info-title">{{name}}, <span>{{age}}</span></h2>
        <div class="review__content-info-description">
          {{description}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    age: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
  }
}
</script>

<style>

</style>