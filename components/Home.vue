<template>
  <div>
    <div v-for="employee in employees" :key="employee.id">
      {{ employee }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  created() {
    this.$store.dispatch('employee/fetchEmployees')
  },
  // eslint-disable-next-line vue/order-in-components
  computed: {
    ...mapGetters({
      employees: 'employee/employees',
    }),
  },
}
</script>
