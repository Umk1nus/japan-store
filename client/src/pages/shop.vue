<template>
  <div class="shop">
    <div class="category">
      <p>Категории</p>
    </div>
    <Store />
  </div>
  
</template>

<script>
import Store from '@/components/Store.vue'

export default {
  components: {Store},
  data() {
    return {

    }
  }
}
</script>