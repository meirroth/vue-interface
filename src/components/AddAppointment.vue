<template>
  <div class="add-appointment">
    <button
      class="btn btn-primary w-100"
      :class="{ 'd-none': !hidePanel }"
      @click="hidePanel = !hidePanel"
      :aria-expanded="!hidePanel"
      aria-controls="aptForm"
    >
      <font-awesome-icon icon="plus" class="me-3" />Add Appointment
    </button>
    <form
      id="aptForm"
      :class="{ 'd-none': hidePanel }"
      class="card card-body"
      @submit.prevent="requestAdd"
    >
      <div class="row g-3">
        <div class="col-12">
          <label for="petName" class="form-label">Pet Name</label>
          <input
            type="text"
            class="form-control"
            name="petName"
            id="petName"
            placeholder="Pet's Name"
            v-model="formData.petName"
            required
          />
        </div>
        <div class="col-12">
          <label for="ownerName" class="form-label">Pet Owner</label>
          <input
            type="text"
            class="form-control"
            name="ownerName"
            id="ownerName"
            placeholder="Owner's Name"
            v-model="formData.ownerName"
            required
          />
        </div>
        <div class="col-md-6">
          <label for="aptDate" class="form-label">Date</label>
          <input
            type="date"
            class="form-control"
            name="aptDate"
            id="aptDate"
            v-model="formData.aptDate"
            required
          />
        </div>
        <div class="col-md-6">
          <label for="aptTime" class="form-label">Time</label>
          <input
            type="time"
            class="form-control"
            name="aptTime"
            id="aptTime"
            v-model="formData.aptTime"
            required
          />
        </div>
        <div class="col-12">
          <label for="aptNotes" class="form-label">Apt. Notes</label>
          <textarea
            class="form-control"
            rows="4"
            cols="50"
            name="aptNotes"
            id="aptNotes"
            placeholder="Appointment Notes"
            v-model="formData.aptNotes"
          ></textarea>
        </div>

        <div class="col-12 d-flex justify-content-end">
          <button
            type="reset"
            class="btn btn-secondary d-block"
            @click="hidePanel = !hidePanel"
          >
            Cancel
          </button>
          <button type="submit" class="btn btn-primary d-block ms-2">
            Add Appointment
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
export default {
  name: 'AddAppointment',
  data() {
    return {
      formData: [],
      hidePanel: true,
    }
  },
  components: { FontAwesomeIcon },
  props: [],
  methods: {
    requestAdd: function () {
      this.formData = {
        petName: this.formData.petName,
        ownerName: this.formData.ownerName,
        aptDate: this.formData.aptDate + ' ' + this.formData.aptTime,
        aptNotes: this.formData.aptNotes,
      }
      this.$emit('add', this.formData)
      this.formData = []
      this.hidePanel = true
    },
  },
}
</script>
