<template>
<div>
  <app-menu />
    <Nuxt />
  <app-footer />
</div>
</template>

<script>
import AppMenu from '~/components/AppMenu.vue';
import AppFooter from '~/components/AppFooter.vue';

export default {
  components: {
    AppMenu,
    AppFooter
  },
}
