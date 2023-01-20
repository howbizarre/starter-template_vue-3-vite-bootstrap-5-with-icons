<template>
  <component :is="layout" />
</template>

<script>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import MainLayout from "@/layouts/MainLayout.vue";

export default {
  components: {
    DefaultLayout,
    MainLayout,
  },
  data() {
    return {
      layout: null,
    };
  },
  watch: {
    $route(to) {
      this.layout = to.meta.layout !== undefined ? to.meta.layout : "DefaultLayout";
    },
  },
};
</script>
