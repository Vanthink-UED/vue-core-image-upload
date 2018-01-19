// test src/vue-core-image-upload.vue
import { mount } from 'vue-test-utils'
import VueCoreImageUpload from '../src/vue-core-image-upload.vue'

describe('vue-core-image-upload.vue', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(VueCoreImageUpload)

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('g-core-image-upload-btn')
  })

  // it's also easy to check for the existence of elements
  it('contains input', () => {
    expect(wrapper.contains('input')).toBe(true)
  })

})
