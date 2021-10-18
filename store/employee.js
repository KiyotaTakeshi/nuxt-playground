export const state = () => ({
  employees: [
    {
      id: 0,
      name: 'sample',
      department: 'president',
    },
  ],
})

export const mutations = {
  setEmployees(state, payload) {
    state.employees = payload
  },
  setId(state, payload) {
    state.employees[payload.index].id = payload.id
  },
  setName(state, payload) {
    state.employees[payload.index].name = payload.name
  },
  setDepartment(state, payload) {
    state.employees[payload.index].department = payload.department
  },
}

export const actions = {
  async registerEmployee({ commit }, payload) {
    await commit('setEmployees', payload)
  },
  async fetchEmployees({ commit }) {
    const res = await this.$axios.get('http://localhost:8080/employees')
    await commit('setEmployees', res.data)
  },
  async fetchEmployee({ commit }, id) {
    const res = await this.$axios.get(`http://localhost:8080/employees/${id}`)
    await commit('setId', {
      index: res.data.id,
      id: res.data.id
    })
    await commit('setName', {
      index: res.data.id,
      name: res.data.name
    })
    await commit('setDepartment', {
      index: res.data.id,
      department: res.data.department
    })
  },
}

export const getters = {
  employees(state) {
    return state.employees
  }
}
