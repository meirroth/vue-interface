<template>
  <div id="main-app" class="container mt-5">
    <div class="row gy-4 justify-content-center">
      <h1 class="col-12 col-md-10 col-lg-7 text-center pb-4">
        Veterinary Appointments
      </h1>
      <search-appointments
        class="col-12 col-md-10 col-lg-7"
        @searchRecords="searchAppointments"
        :myKey="filterKey"
        :myDir="filterDir"
        @reqKey="setKey"
        @reqDir="setDir"
      />
      <add-appointment class="col-12 col-md-10 col-lg-7" @add="addApt" />
      <appointment-list
        class="col-12 col-md-10 col-lg-7"
        :appointments="filteredApts"
        @remove="removeApt"
        @edit="editApt"
      />
    </div>
  </div>
</template>

<script>
import AddAppointment from './components/AddAppointment'
import AppointmentList from './components/AppointmentList'
import SearchAppointments from './components/SearchAppointments'
import _ from 'lodash'
import axios from 'axios'
export default {
  name: 'MainApp',
  data: function () {
    return {
      appointments: [],
      searchTerms: '',
      filterKey: 'petName',
      filterDir: 'asc',
      aptIndex: 0,
    }
  },

  mounted() {
    axios.get('./data/appointments.json').then(
      (response) =>
        (this.appointments = response.data.map((item) => {
          item.id = this.aptIndex
          this.aptIndex++
          return item
        }))
    )
  },
  computed: {
    searchApts: function () {
      return this.appointments.filter((item) => {
        return (
          item.petName.toLowerCase().match(this.searchTerms.toLowerCase()) ||
          item.ownerName.toLowerCase().match(this.searchTerms.toLowerCase()) ||
          item.aptNotes.toLowerCase().match(this.searchTerms.toLowerCase())
        )
      })
    },
    filteredApts: function () {
      return _.orderBy(
        this.searchApts,
        (item) => {
          return item[this.filterKey].toLowerCase()
        },
        this.filterDir
      )
    },
  },
  methods: {
    searchAppointments: function (terms) {
      this.searchTerms = terms
    },
    setKey(key) {
      this.filterKey = key
    },
    setDir(dir) {
      this.filterDir = dir
    },
    addApt: function (apt) {
      apt.id = this.aptIndex
      this.aptIndex++
      this.appointments.push(apt)
    },
    removeApt: function (apt) {
      this.appointments = _.without(this.appointments, apt)
    },
    editApt: function (id, field, text) {
      const aptIndex = _.findIndex(this.appointments, { id: id })
      this.appointments[aptIndex][field] = text
    },
  },
  components: {
    AddAppointment,
    AppointmentList,
    SearchAppointments,
  },
}
</script>
