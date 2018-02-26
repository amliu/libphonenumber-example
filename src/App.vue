<template>
  <div id="app">
    <h1>Phone validation example</h1>

    <p>
      Use JS lib ruimarinho/google-libphonenumber to validate phone numbers.
    </p>

    <p>
      The "CHECK FORMAT RESULT" button will be enabled only when the phone number is valid. Otherwise, disabled.
    </p>

    <md-field>
      <label for="countries">Country</label>
      <md-select v-model="countryISO" name="countries" id="countries">
        <md-option
          v-for="c in countries"
          :key="c.region_code"
          :value="c.region_code"
        >
          {{ c.label }}
        </md-option>
      </md-select>
    </md-field>

    <md-field>
      <label for="phone">Phone number</label>
      <md-input
        id="phone"
        v-model.lazy="phone"
        placeholder="Input mobile phone number"
        type="tel"
      />
    </md-field>

    <md-button
      class="md-raised md-primary"
      :disabled="!validFormat"
    >
      CHECK FORMAT RESULT
    </md-button>
  </div>
</template>

<script>
import countries from './region_code';
import * as phoneValidator from './phoneValidator';

export default {
  name: 'app',
  data () {
    return {
      phone: '',
      countries,
      validFormat: false,
      countryISO: null,
    }
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 10% auto;
  width: 100%;
  max-width: 500px;
}

html, body {
  width: 100%;
  height: 100%;
  font-size: 16px;
}

</style>
