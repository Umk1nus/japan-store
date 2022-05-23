<template>
  <div class="home">
    <Company/>
    <Store/>
  </div>
</template>

<script>

import Company from "@/components/Company.vue"
import Store from "@/components/Store.vue"

export default{
  components: {Company, Store},
  data() {
    return {
      
    }
  }
}
</script>

