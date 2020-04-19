import '@/plugins/element.js'
import { shallowMount } from '@vue/test-utils'
import About from '@/views/about'


describe('About vue', () => {
    
    it('el-button', () => {
        const wrapper = shallowMount(About)
        expect(wrapper.find('h1').exists()).toBeTruthy()
        expect(wrapper.find('h1').text()).toEqual('This is an about page!!!w')
    })
})