<template>
  <div>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Id</th>
              <th class="text-left">Name</th>
              <th class="text-left">Department</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="employee in employees" :key="employee.id">
              <td>{{ employee.id }}</td>
              <td>{{ employee.name }}</td>
              <td>{{ employee.department }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
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
