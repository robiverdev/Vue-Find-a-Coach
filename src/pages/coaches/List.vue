<template>
  <section><Filter @change-filter="setFilter"></Filter></section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button v-if="!isCoach" link to="/register">Register as a Coach</base-button>
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
  import Filter from '../../components/coaches/Filter.vue';
  export default {
    components: {
      Item,
      Filter,
    },
    data() {
      return {
        activeFilters: {
          frontend: true,
          backend: true,
          career: true,
        },
      };
    },
    computed: {
      isCoach() {
        return this.$store.getters['coaches/isCoach'];
      },
      filteredCoaches() {
        const coaches = this.$store.getters['coaches/coaches'];
        return coaches.filter(coach => {
          if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
            return true;
          }
          if (this.activeFilters.backend && coach.areas.includes('backend')) {
            return true;
          }
          if (this.activeFilters.career && coach.areas.includes('career')) {
            return true;
          }
          return false;
        });
      },
      hasCoaches() {
        return this.$store.getters['coaches/hasCoaches'];
      },
    },
    methods: {
      setFilter(updatedFilters) {
        this.activeFilters = updatedFilters;
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
