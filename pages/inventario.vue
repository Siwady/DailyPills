<template>
  <v-layout>
    <v-flex class="text-center">
      <img
        src="/pills-inventory-icon.png"
        alt="Vuetify.js"
        class="mb-5"
      >
      <v-toolbar
        class="mb-2"
        color="blue darken-2"
        dark
        flat
      >
        <v-toolbar-title>Inventario</v-toolbar-title>
      </v-toolbar>
      <v-data-table
        :headers="headers"
        :items="pills"
        :items-per-page="10"
        class="elevation-1"
      />
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      headers: [
        { text: 'Nombre', value: 'name', align: 'center' },
        { text: 'Cantidad Disponible', value: 'count', align: 'center' }
      ]
    }
  },
  computed: {
    ...mapState([
      'pills'
    ])
  },
  mounted () {
    this.getPillsInventory()
  },
  methods: {
    ...mapActions({
      getPillsInventory: 'getPillsInventory'
    })
  }
}
</script>
