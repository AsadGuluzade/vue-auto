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
        if (this.selectedMake || this.selectedFuel) {
          const response = await axios.get(
            'http://localhost:4444/api/cars/filter?make=' + this.selectedMake + '&fuel=' + this.selectedFuel
          )
          // JSON responses are automatically parsed.
          this.cars = response.data
        } else {
          this.getData()
        }
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
      <option value="">Select Make</option>
      <option>Toyota</option>
      <option>Chevrolet</option>
      <option>Honda</option>
      <option>BMW</option>
    </select>
    <select v-model="selectedFuel">
      <option value="">Select Fuel</option>
      <option>Diesel</option>
      <option>Petrol</option>
      <option>Electric</option>
      <option></option>
    </select>
    <button type="submit">Search</button>
  </form>
  <div class="Cars">
    <div v-for="car in cars" v-bind:key="car.id" class="CarsInner">
      <b>
        <figure>
          <img v-bind:src="car.image" alt="Toyota" width="250" height="200" style="width: 100%" />

          <h1>{{ car.make }}</h1>
          <h2>{{ car.model }}</h2>
          <p>Year: {{ car.year }}</p>
          <p>Price: {{ car.price }}&#8364;</p>
        </figure>
      </b>
    </div>
  </div>
</template>

<style>
.Cars::after {
  content: '';
  clear: both;
  display: table;
}
.CarsInner {
  float: left;
  width: 25%;
  padding: 10px;
}
select {
  font-size: 14px;
  width: 15%;
  margin-right: 15px;
  border: 1px solid;
  border-radius: 8px;
}

button {
  background: #4db7fe;
  font-size: 14px;
  width: 15%;
  margin-right: 15px;
  border: 1px solid;
  border-radius: 8px;
}
form {
  text-align: right;
  padding: 1.5rem;
  border: 0rem;
}
</style>
