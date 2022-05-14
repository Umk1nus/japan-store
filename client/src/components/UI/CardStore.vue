<template>
  <div class="card">
    <router-link v-if="link" :to="link"><img :src="img" alt="" class="card__img"></router-link>
    <h3 class="card__title">{{title}}</h3>
    <div class="card__subblock">
      <div class="card__subblock-price">{{price}}</div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    link: {
      type: String,
    },
  }
}
</script>

<style>

</style>