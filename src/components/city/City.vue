<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
  </div>
</template>

<script>
  import CitySearch from './Search'
  import CityHeader from './Header'
  export default {
    name: 'City',
    components: {
      CityHeader,
      CitySearch
    }
  }
</script>

