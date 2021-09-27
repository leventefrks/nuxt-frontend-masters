<template>
  <nav class="bg-white shadow dark:bg-gray-800">
    <div class="container px-6 py-4 mx-auto">
      <div class="lg:flex lg:items-center lg:justify-between">
        <div class="flex items-center">
          <!-- Mobile menu button -->
          <div class="flex lg:hidden">
            <button
              type="button"
              class="
                text-gray-500
                dark:text-gray-200
                hover:text-gray-600
                dark:hover:text-gray-400
                focus:outline-none focus:text-gray-600
                dark:focus:text-gray-400
              "
              aria-label="toggle menu"
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <div class="hidden -mx-4 lg:flex lg:items-center">
          <nuxt-link
            exact
            to="/"
            class="
              block
              mx-4
              mt-2
              text-sm text-gray-700
              capitalize
              lg:mt-0
              dark:text-gray-200
              hover:text-blue-600
              dark:hover:text-indigo-400
            "
            >Home</nuxt-link
          >
          <nuxt-link
            exact
            to="/restaurants"
            class="
              block
              mx-4
              mt-2
              text-sm text-gray-700
              capitalize
              lg:mt-0
              dark:text-gray-200
              hover:text-blue-600
              dark:hover:text-indigo-400
            "
            >Restaurants</nuxt-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {}
</script>
