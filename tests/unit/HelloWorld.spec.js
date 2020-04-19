import {
  shallowMount
} from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: {
        msg
      }
    })
    expect(wrapper.text()).toMatch(msg)
  })
  it('component has input dom', () => {
    const wrapper = shallowMount(HelloWorld)
    expect(wrapper.find('[data-test="input"]').exists()).toBe(true)
  })
  it('input init value is empty', () => {
    const wrapper = shallowMount(HelloWorld)
    expect(wrapper.vm.value).toEqual('')
  })

  it('input chang value is component data value is change', () => {
    const wrapper = shallowMount(HelloWorld)
    wrapper.find('[data-test="input"]').setValue('123')
    expect(wrapper.vm.value).toEqual('123')
  })


  it('input chang value click event', () => {
    const wrapper = shallowMount(HelloWorld)
    const input = wrapper.find('[data-test="input"]')
    input.setValue('')
    input.trigger('keyup.enter')
    expect(wrapper.emitted().add).toBeFalsy()
  })

  it('input chang value click event true', () => {
    const wrapper = shallowMount(HelloWorld)
    const input = wrapper.find('[data-test="input"]')
    input.setValue('123')
    input.trigger('keyup.enter')
    expect(wrapper.emitted().add).toBeTruthy
  })

  it('input click enter && value is empty', () => {
    const wrapper = shallowMount(HelloWorld)
    const input = wrapper.find('[data-test="input"]')
    input.setValue('123')
    input.trigger('keyup.enter')
    expect(wrapper.vm.value).toBe('')
  })


  // it('if style has change and totast me', () => {
  //   const wrapper = shallowMount(HelloWorld)
  //   expect(wrapper).toMatchSnapshot()
  // })


})
