<template>
  <div class="appointment-list">
    <div
      class="card shadow-sm mb-3"
      v-for="item in appointments"
      :key="item.id"
    >
      <div class="card-header d-flex justify-content-between">
        <span
          class="h4 card-title fw-bold m-0"
          contenteditable="contenteditable"
          @blur="$emit('edit', item.id, 'petName', $event.target.innerText)"
          >{{ item.petName }}</span
        >
        <button
          class="btn btn-sm btn-outline-danger"
          @click="$emit('remove', item)"
        >
          <font-awesome-icon icon="trash" />
        </button>
      </div>
      <div class="card-body">
        <div class="owner-name">
          <span class="font-weight-bold fw-bold">Owner: </span>
          <span
            contenteditable="contenteditable"
            @blur="$emit('edit', item.id, 'petOwner', $event.target.innerText)"
            >{{ item.ownerName }}</span
          >
        </div>
        <div
          contenteditable="contenteditable"
          @blur="$emit('edit', item.id, 'aptNotes', $event.target.innerText)"
        >
          {{ item.aptNotes }}
        </div>
      </div>
      <div class="card-footer">
        <span>{{ formatDate(item.aptDate) }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
  name: 'AppointmentList',
  components: { FontAwesomeIcon },
  props: ['appointments'],
  methods: {
    formatDate: (date) => {
      return moment(new Date(date)).format('llll')
    },
  },
}
</script>
