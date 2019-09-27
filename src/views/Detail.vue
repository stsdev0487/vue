<template>
  <div class="home">
    <v-card
          max-width="344"
          class="mx-auto"
        >
          <v-card-title>{{name}}</v-card-title>
          <v-card-text v-for="(item, id) in stateRegistrations" v-bind:key="id">
            {{item.state}}
            {{item.registrationNumber}}
          </v-card-text>
        </v-card>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Detail',
  components: {

  },
  data() {
    return {
      name: '',
      stateRegistrations: []      
    }
  },
  mounted() {
    this.$store.dispatch('loadBrandById', this.$route.params.entity_id);
  },
  computed: mapState([
    'brand'
  ]),
  watch: {
    brand: function(val) {
      this.name = val.name;
      this.stateRegistrations = val.state_registrations
    }
  }
  
};
</script>

<style lang="scss" scoped>
  
</style>
