import {
  shallowMount
} from '@vue/test-utils'
import list from '@/components/list.vue'

describe('list component', () => {
  it('list is [] and count is 0', () => {
    const wrapper = shallowMount(list, {
      propsData: {
        list: []
      }
    })
    expect(wrapper.findAll('[data-test="count"]').at(0).text()).toEqual('0')
    expect(wrapper.findAll('[data-test="item"]').length).toEqual(0)
  })

  it('list is [1，2，3] and count is 3, 且存在删除按钮', () => {
    const wrapper = shallowMount(list, {
      propsData: {
        list: [1, 2, 3]
      }
    })
    expect(wrapper.findAll('[data-test="count"]').at(0).text()).toEqual('3')
    expect(wrapper.findAll('[data-test="item"]').length).toEqual(3)
    expect(wrapper.findAll('[data-test="dele"]').length).toEqual(3)
  })

  it('删除按钮 点击时 触发删除事件', () => {
    const wrapper = shallowMount(list, {
      propsData: {
        list: [1, 2, 3]
      }
    })
    const delBtn = wrapper.findAll('[data-test="dele"]').at(1)
    delBtn.trigger('click')
    expect(wrapper.emitted().handleDel).toBeTruthy()
  })

  it('item按钮 点击时 触发status事件', () => {
    const wrapper = shallowMount(list, {
      propsData: {
        list: [1, 2, 3]
      }
    })
    const delBtn = wrapper.findAll('[data-test="item"]').at(1)
    delBtn.trigger('click')
    expect(wrapper.emitted().status).toBeTruthy()
  })


  it('input 失去焦点事件', () => {
    const wrapper = shallowMount(list, {
      propsData: {
        list: [{value: '123', status: 'input'}]
      }
    })
    const inputElm = wrapper.findAll('[data-test="input"]').at(0)
    inputElm.trigger('blur.prevent')
    expect(wrapper.emitted().blur).toBeTruthy()
  })


  it('input change 事件', () => {
    const wrapper = shallowMount(list, {
      propsData: {
        list: [{value: '123', status: 'input'}]
      }
    })
    const inputElm = wrapper.findAll('[data-test="input"]').at(0)
    inputElm.trigger('input')
    expect(wrapper.emitted().edit).toBeTruthy()
  })

  // it('样式dom快照', () => {
  //   const wrapper = shallowMount(HelloWorld)
  //   expect(wrapper).toMatchSnapshot()
  // })
})
