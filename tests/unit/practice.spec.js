import {
  getDataFromCallback,
  getDataFromPromise,
  myMap,
} from '@/assets/js/jest'
import {fetchList,fetchUser, getList} from '@/assets/js/api'
import HelloWorld from '@/components/HelloWorld.vue'

import axios from 'axios';
import { getData, getTimer } from '../../src/assets/js/api';
// jest.mock('axios');
jest.useFakeTimers();

// describe('jset.js test', () => {

//   it('getDataFromCallback has called', (done) => {
//     getDataFromCallback((str) => {
//       expect(str).toBe('jeremy')
//       done()
//     })
//   })

//   it('getDataFromPromise has called', async() => {
//     const result = await getDataFromPromise()
//     expect(result).toBe('jeremy-promise')
//   })

//   it('getDataFromPromise has called another', () => {
//     expect(getDataFromPromise()).resolves.toBe('jeremy-promise')
//   })


//   it('myMay has called', () => {
//     const fn = jest.fn(item => item * 2)
//     expect(myMap([1,2,3], fn)).toEqual([2,4,6])
//     expect(fn.mock.calls.length).toBe(3)
//     expect(fn.mock.results[0].value).toBe(2)
//   })
// })



describe('api.js test', () => {
  // it('fetchList has called', () => {
  //   const users = [{name: 'Bob'}];
  //   const resp = {data: users};
  //   axios.get.mockResolvedValue(resp)
  //   return fetchList().then(data => {
  //     expect(data.data).toEqual(users)
  //   })
  // })
  // it('fetchUser has called', async() => {
  //   const result = await fetchUser()
  //   expect(result).toEqual(['香蕉','苹果'])
  // })
  // it('getList has called', () => {
  //   axios.get.mockResolvedValue({
  //     data: {
  //       result: 0
  //     }
  //   })
  //   getList()
  // })

  // it.only('getData has called', async() => {
  //   axios.get.mockResolvedValue({
  //     data: 'hello world'
  //   })
  //   const data = await getData()
  //   console.log(data)
  //   expect(data).toEqual('hello world')
  // })

  it('getTimer has called', () => {
    const fn = jest.fn()
    getTimer(fn)
    jest.runAllTimers()
    expect(fn).toHaveBeenCalledTimes(1)
  })
})