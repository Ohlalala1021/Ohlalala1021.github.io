export const categoryMap = {"category":{"/":{"path":"/category/","map":{"小目标":{"path":"/category/%E5%B0%8F%E7%9B%AE%E6%A0%87/","keys":["v-0014b6d1","v-61ed2ca1"]},"小美文":{"path":"/category/%E5%B0%8F%E7%BE%8E%E6%96%87/","keys":["v-2aef503c","v-29cfdf5c","v-acfca3c6"]},"小导图":{"path":"/category/%E5%B0%8F%E5%AF%BC%E5%9B%BE/","keys":["v-315fef65"]},"小论文":{"path":"/category/%E5%B0%8F%E8%AE%BA%E6%96%87/","keys":["v-084b679e"]},"小随笔":{"path":"/category/%E5%B0%8F%E9%9A%8F%E7%AC%94/","keys":["v-09810bfc","v-151da8c2","v-11b3f784"]}}}},"tag":{"/":{"path":"/tag/","map":{"学期目标":{"path":"/tag/%E5%AD%A6%E6%9C%9F%E7%9B%AE%E6%A0%87/","keys":["v-61ed2ca1"]},"目标1":{"path":"/tag/%E7%9B%AE%E6%A0%871/","keys":["v-0014b6d1"]},"美文3":{"path":"/tag/%E7%BE%8E%E6%96%873/","keys":["v-acfca3c6"]},"美文1":{"path":"/tag/%E7%BE%8E%E6%96%871/","keys":["v-29cfdf5c"]},"美文2":{"path":"/tag/%E7%BE%8E%E6%96%872/","keys":["v-2aef503c"]},"导图1":{"path":"/tag/%E5%AF%BC%E5%9B%BE1/","keys":["v-315fef65"]},"论文1":{"path":"/tag/%E8%AE%BA%E6%96%871/","keys":["v-084b679e"]},"随笔1":{"path":"/tag/%E9%9A%8F%E7%AC%941/","keys":["v-09810bfc"]},"随笔2":{"path":"/tag/%E9%9A%8F%E7%AC%942/","keys":["v-151da8c2"]},"随笔3":{"path":"/tag/%E9%9A%8F%E7%AC%943/","keys":["v-11b3f784"]}}}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogCategory) {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  })
}
