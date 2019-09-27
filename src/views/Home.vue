<template>
  <v-container>
    <v-row v-for="(brand, id) in brands" v-bind:key="id">
      <v-col cols="4" v-on:click="goToDetail(brand.entity_id)">
        <v-card
          max-width="344"
          class="mx-auto"
        >
          <v-card-title>{{brand.name}}</v-card-title>
          <v-card-text>Number of registrations : {{brand.state_registrations.length}}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "Home",
  data: () => ({
    
  }),
  mounted() {
    this.$store.dispatch('loadBrands')
  }, 
  computed: mapState([
    'brands'
  ]),
  methods: {
    goToDetail(entity_id) {
      this.$router.push({path: `/detail/${entity_id}`});
    }
  }
};
</script>

<style lang="scss" scoped>
v-container {
  width: 1200px !important;
}

.carousel-area {
  width: 614px !important;
}
</style>