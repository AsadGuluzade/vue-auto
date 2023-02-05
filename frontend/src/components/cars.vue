<script>
import axios from 'axios'
export default {
  data() {
    return {
      cars: [],
      selectedMake: '',
      selectedFuel: '',
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
    async searchFilter(e) {
      e.preventDefault()

      try {
        const response = await axios.get(
          'http://localhost:4444/api/cars/filter?make=' + this.selectedMake + '&fuel=' + this.selectedFuel
        )
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
  <form v-on:submit="searchFilter">
    <select v-model="selectedMake">
      <option disabled value="">Select Make</option>
      <option>Toyota</option>
      <option>Chevrolet</option>
      <option>Honda</option>
      <option>Mitsubishi</option>
      <option>BMW</option>
      <option></option>
    </select>
    <select v-model="selectedFuel">
      <option disabled value="">Select Fuel</option>
      <option>diesel</option>
      <option>petrol</option>
      <option>electric</option>
      <option></option>
    </select>
    <button type="submit">Search</button>
  </form>
  <div>
    <div v-for="car in cars" v-bind:key="car.id">
      <h2>{{ car.make }}</h2>
      <p>{{ car.model }}</p>
      <p>{{ car._id }}</p>
      <p>{{ car.fuel }}</p>
    </div>
  </div>
</template>
