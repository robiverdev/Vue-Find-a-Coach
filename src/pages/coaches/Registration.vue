<template>
  <section>
    <base-card>
      <h2>Register as a Coach</h2>
      <Form @save-data="saveData"></Form>
    </base-card>
  </section>
</template>

<script>
  import Form from '../../components/coaches/Form.vue';
  export default {
    components: {
      Form,
    },
    methods: {
      saveData(data) {
        this.$store.dispatch('coaches/registerCoach', data);
        this.$router.replace('/coaches'); // .replace or .push
      },
    },
  };
</script>
