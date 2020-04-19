export const getDataFromCallback = (fn) => {
  setTimeout(function () {
    fn && fn('jeremy')
  }, 1000)
}

export const getDataFromPromise = () => {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve('jeremy-promise')
    },1000)
  })
}

export const myMap = (arr,fn) =>{
  return arr.map(fn)
}