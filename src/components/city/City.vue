<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list 
      :cities="cities" 
      :hotCities="hotCities"
      :letter="letter"
      >
    </city-list>
    <city-alphabet
      :cities="cities"
      @change="change"
    >
    </city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CitySearch from './Search'
import CityHeader from './Header'
import CityList from './List'
import CityAlphabet from './Alphabet'

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: '',
    }
  },
  mounted () {
    axios.get('/api/city.json').then((response)=>{
      response = response.data
      if(response.errno  === 0) {
        const data = response.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    })  
  },
  methods: {
    change (letter) {
      this.letter = letter
    }
  }
}
</script>

