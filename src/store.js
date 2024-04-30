import { reactive } from 'vue'
import data from './data/mock-data.json'

export const store = reactive({
  data: data,
  searchVehicle: {
    term: '',
    filter: null,
    sort: null,
    results: []
  },
  searchDriver: {
    term: '',
    filter: null,
    sort: null,
    results: []
  },
  mapModal: {
    active: false,
    content: null,
    type: null,
    open(item, type) {
      this.active = true;
      this.content = item;
      this.type = type;
    }
  }
})