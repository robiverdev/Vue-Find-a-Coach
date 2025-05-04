<template>
  <section>FILTER</section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button link to="/register">Register as a Coach</base-button>
      </div>
      <ul v-if="hasCoaches">
        <Item
          v-for="coach in filteredCoaches"
          :key="coach.id"
          :id="coach.id"
          :first-name="coach.firstName"
          :last-name="coach.lastName"
          :rate="coach.hourlyRate"
          :areas="coach.areas"
        ></Item>
      </ul>
      <h3 v-else>No Coaches found</h3>
    </base-card>
  </section>
</template>

<script>
  import Item from '../../components/coaches/Item.vue';
  export default {
    components: {
      Item,
    },
    computed: {
      filteredCoaches() {
        return this.$store.getters['coaches/coaches'];
      },
      hasCoaches() {
        return this.$store.getters['coaches/hasCoaches'];
      },
    },
  };
</script>

<style scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .controls {
    display: flex;
    justify-content: space-between;
  }
</style>
