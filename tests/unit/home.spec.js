import axios from 'axios';
import {
  shallowMount
} from '@vue/test-utils'
import Home from '@/views/home.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import List from '@/components/List.vue'

jest.mock('axios')

describe('test home.vue file', () => {
  it('home has contain hellowword', () => {
    const wrapper = shallowMount(Home)
    expect(wrapper.contains(HelloWorld)).toBe(true)
  })
  it('data.list init is empty', () => {
    const wrapper = shallowMount(Home)
    expect(wrapper.vm.list.length).toBe(0)
  })
  it('methods of handleAdd has called or listen helloworld add event', async () => {
    const wrapper = shallowMount(Home)
    const hello = wrapper.find(HelloWorld)
    hello.vm.$emit('add', 'jeremy')
    expect(wrapper.vm.list.length).toEqual(1)
    // 此算一个集成测试，牵扯到两个组件的交互， 所以应该改为单元测试
    // 不需要hello.vim.$emit,而是直接wrapper.vm.handleAdd('jeremy')
    // expect(wrapper.vm.list.length).toEqual(1)

  })

  it('list组件有list属性值', () => {
    const wrapper = shallowMount(Home)
    const listEle = wrapper.findAll(List).at(0)
    expect(listEle.props('list')).toBeTruthy()
    // 此不算，虽说有两个组件，但是没有交互
  })
  it('list 组件并且执行删除按钮后，内容少1', () => {
    const wrapper = shallowMount(Home)
    wrapper.setData({
      list: [1, 2, 3]
    })
    wrapper.vm.handleDel(1)
    expect(wrapper.vm.list.length).toEqual(2)
  })


  it('list 组件执行 changeStatus', () => {
    const wrapper = shallowMount(Home)
    wrapper.setData({
      list: [{
        value: '123',
        status: 'div'
      }, {
        value: '333',
        status: 'div'
      }]
    })
    wrapper.vm.changeStatus(0)

    expect(wrapper.vm.list[0].status).toEqual('input')
    expect(wrapper.vm.list[1].status).toEqual('div')
  })

  it('list 组件执行 handleEdit', () => {
    const wrapper = shallowMount(Home)
    wrapper.setData({
      list: [{
        value: '123',
        status: 'div'
      }, {
        value: '333',
        status: 'div'
      }]
    })
    wrapper.vm.handleEdit(0, '111')

    expect(wrapper.vm.list[0].value).toEqual('111')
  })

  // it('样式dom快照', () => {
  //   const wrapper = shallowMount(HelloWorld)
  //   expect(wrapper).toMatchSnapshot()
  // })
  it('测试mock 3个功能点', () => {
    const wrapper = shallowMount(Home)
    const func = jest.fn()
    // mockReturnValueOnce 模拟一次
    func.mockReturnValue('hello')
    wrapper.vm.runCall(func)
    expect(func).toHaveBeenCalled()
    expect(func.mock.calls.length).toBe(1)
    expect(func.mock.results[0].value).toBe('hello')
  })

  it.only('测试get data', async() => {
    const wrapper = shallowMount(Home)
    // mockResolvedValueOnce 模拟一次 可以写多个，这样才能多次调用await getData
    axios.get.mockResolvedValue({data: 'hello'})
    await wrapper.vm.getData().then( data => {
      expect(data).toEqual({data: 'hello'})
    })
  })

})
