<script>
import axios from 'axios'
export default {
  data() {
    return {
      cars: [],
      selected: '',
    }
  },

  methods: {
    async getData() {
      try {
        const response = await axios.get('http://localhost:4444/api/cars')
        // JSON responses are automatically parsed.
        this.cars = response.data
      } catch (error) {
        console.log(error)
      }
    },
  },
  created() {
    this.getData()
  },
}
</script>

<template>
  <div>Selected: {{ selected }}</div>

  <select v-model="selected">
    <option disabled value="">Please select one</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <div>
    <div v-for="car in cars" v-bind:key="car.id">
      <h2>{{ car.make }}</h2>
      <p>{{ car.model }}</p>
      <p>{{ car._id }}</p>
    </div>
  </div>
</template>
