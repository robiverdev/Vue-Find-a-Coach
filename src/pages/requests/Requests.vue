<template>
  <section>
    <base-card>
      <header><h2>Request Recieved</h2></header>
      <ul v-if="hasRequests">
        <Request
          v-for="req in recievedRequests"
          :key="req.id"
          :email="req.userEmail"
          :message="req.message"
        ></Request>
      </ul>
      <h3 v-else>You haven't recieved any requests yet!</h3>
    </base-card>
  </section>
</template>

<script>
  import Request from '../../components/requests/Item.vue';
  export default {
    components: {
      Request,
    },
    computed: {
      recievedRequests() {
        return this.$store.getters['requests/requests'];
      },
      hasRequests() {
        return this.$store.getters['requests/hasRequests'];
      },
    },
  };
</script>

<style scoped>
  header {
    text-align: center;
  }

  ul {
    list-style: none;
    margin: 2rem auto;
    padding: 0;
    max-width: 30rem;
  }

  h3 {
    text-align: center;
  }
</style>
