<template lang="html">
  <section class="container px-5 py-24 mx-auto max-w-7x1">
    <div class="flex flex-wrap -m-4">
      <div v-for="store in fooddata" :key="store.id" class="w-full">
        <div class="bg-white py-6 rounded-lg">
          <h2
            class="
              tracking-widest
              text-indigo-500 text-3xl
              font-medium
              title-font
            "
          >
            {{ store.name }}
          </h2>
          <p class="leading-relaxed text-gray-400 text-sm">
            Delivery Time {{ store.deliveryTime }} mins
          </p>
          <p class="leading-relaxed text-base text-md">{{ store.rating }}</p>
          <p
            v-if="store.freeDelivery"
            class="
              inline
              leading-relaxed
              text-white text-sm
              rounded-lg
              bg-green-400
              px-2
              py-1
              t
            "
          >
            <span>Free Delivery</span>
          </p>
        </div>
        <div
          class="
            grid grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            grid-rows-1
            gap-8
            p-6
          "
        >
          <div
            v-for="menu in store.menu"
            :key="menu.id"
            :style="`background: url('/${menu.img}') no-repeat center center; background-size: cover;`"
            class="relative shadow-md hover:shadow-lg rounded-lg w-full h-60"
          >
            <div
              class="
                absolute
                bottom-0
                flex
                items-center
                justify-between
                w-full
                p-4
                bg-white
                rounded-bl-lg rounded-br-lg
              "
            >
              <div>
                <h4 class="text-base">{{ menu.item }}</h4>
                <h4 class="text-gray-400 text-sm">
                  {{ formatPrice(menu.price) }}
                </h4>
              </div>
              <nuxt-link
                :to="`item/${menu.id}`"
                class="
                  h-full
                  rounded-lg
                  px-2
                  py-1
                  border-black border-2
                  text-black text-sm
                  bg-white
                  hover:bg-black hover:border-black hover:text-white
                  transition-colors
                  duration-200
                "
              >
                View Item
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

const AppRestaurants = {
  name: 'AppRestaurants',

  computed: {
    ...mapState(['fooddata']),
  },

  methods: {
    formatPrice(price) {
      return `${price.toFixed(2)} $`
    },
  },
}
export default AppRestaurants
</script>

<style></style>
