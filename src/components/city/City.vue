<template>
  <div>
    <city-header></city-header>
    <city-search 
      :cities="cities"
    >
    </city-search>
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
import { mapState } from 'vuex'

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  computed: {
    ...mapState(['city'])
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: '',
      lastCity: '',

    }
  },
  methods: {
    change (letter) {
      this.letter = letter
    }
  },
  mounted () {
    console.log('挂在完成')
    axios.get('/api/city.json?city=' + this.city).then((response)=>{
      response = response.data
      if(response.errno  === 0) {
        const data = response.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    })  
  },
  activated () {
    if(this.lastCity !== this.city) {
      console.log(1)
      this.lastCity = this.city
      axios.get('/api/city.json?city=' + this.city).then((response)=>{
        response = response.data
        if(response.errno  === 0) {
          const data = response.data
          this.cities = data.cities
          this.hotCities = data.hotCities
        }
      })  
    }
  }
}
</script>

