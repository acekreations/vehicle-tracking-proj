import { reactive } from 'vue'
import data from './data/mock-data.json'

export const store = reactive({
  data: data,
  mapModal: {
    active: false,
    content: null,
    open(item) {
      this.active = true;
      this.content = item;
    }
  }
})