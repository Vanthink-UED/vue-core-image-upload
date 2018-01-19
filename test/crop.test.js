// test src/crop.vue
import { mount } from 'vue-test-utils'
import Crop from '../src/crop.vue'

describe('crop.vue', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(Crop)

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('image-aside')
  })

})
