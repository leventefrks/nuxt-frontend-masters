<template>
  <div>
    <app-header />
    <app-restaurants-info />
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader.vue'
import AppRestaurantsInfo from '../components/AppRestaurantsInfo.vue'

export default {
  components: { AppHeader, AppRestaurantsInfo },
}
</script>
