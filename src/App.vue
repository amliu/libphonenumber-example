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
      :disabled="!phoneValid"
    >
      CHECK FORMAT RESULT
    </md-button>

    <section
      id="format-section"
      v-if="phoneValid"
    >
      <h2>Phone number in different formats</h2>
      <div>E164 : {{ formatE164 }}</div>
      <div>INTERNATIONAL : {{ formatInternational }} </div>
      <div>NATIONAL : {{ formatNational }} </div>
      <div>RFC3966 : {{ formatRFC3966 }} </div>
    </section>
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
      countryISO: 'TW',
    }
  },
  computed: {
    phoneValid: function () {
      if (!this.phone.length) {
        return false;
      }
      const numbers = phoneValidator.normalizedPhoneNumber(this.phone, this.countryISO);
      return  phoneValidator.isPhoneNumberValid(numbers);
    },

    formatE164: function () {
      return phoneValidator.formatE164(this.phone, this.countryISO);
    },

    formatInternational: function () {
      return phoneValidator.formatInternational(this.phone, this.countryISO);
    },

    formatNational: function () {
      return phoneValidator.formatNational(this.phone, this.countryISO);
    },

    formatRFC3966: function () {
      return phoneValidator.formatRFC3966(this.phone, this.countryISO);
    },
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

#format-section {
  > div {
    margin-bottom: 1rem;
    font-size: 1.2rem;
    color: cadetblue;
  }
}

html, body {
  width: 100%;
  height: 100%;
  font-size: 16px;
}

</style>
