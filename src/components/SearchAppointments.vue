<template>
  <div class="search-appointments">
    <div class="input-group">
      <input
        id="SearchApts"
        placeholder="Search"
        type="text"
        class="form-control"
        aria-label="Search Appointments"
        v-model="searchTerm"
      />
      <button
        class="btn btn-primary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Sort by
      </button>
      <div class="dropdown-menu dropdown-menu-end">
        <a
          id="petName"
          class="dropdown-item"
          :class="{ active: myKey == 'petName' }"
          @click="$emit('reqKey', 'petName')"
          href="#"
          >Pet Name</a
        >
        <a
          id="aptDate"
          class="dropdown-item"
          :class="{ active: myKey == 'aptDate' }"
          @click="$emit('reqKey', 'aptDate')"
          href="#"
          >Date</a
        >
        <a
          id="ownerName"
          class="dropdown-item"
          :class="{ active: myKey == 'ownerName' }"
          @click="$emit('reqKey', 'ownerName')"
          href="#"
          >Owner</a
        >
        <hr class="dropdown-divider" role="separator" />
        <a
          id="asc"
          class="dropdown-item"
          :class="{ active: myDir == 'asc' }"
          @click="$emit('reqDir', 'asc')"
          href="#"
          >Asc</a
        >
        <a
          id="desc"
          class="dropdown-item"
          :class="{ active: myDir == 'desc' }"
          @click="$emit('reqDir', 'desc')"
          href="#"
          >Desc</a
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SearchAppointments',
  data() {
    return {
      searchTerm: '',
    }
  },
  watch: {
    searchTerm: function () {
      this.$emit('searchRecords', this.searchTerm)
    },
  },
  props: ['myKey', 'myDir'],
}
</script>
