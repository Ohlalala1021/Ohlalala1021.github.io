export const categoryMap = {"category":{"/":{"path":"/category/","map":{"小导图":{"path":"/category/%E5%B0%8F%E5%AF%BC%E5%9B%BE/","keys":["v-315fef65"]},"小目标":{"path":"/category/%E5%B0%8F%E7%9B%AE%E6%A0%87/","keys":["v-0014b6d1","v-61ed2ca1"]},"小笔记":{"path":"/category/%E5%B0%8F%E7%AC%94%E8%AE%B0/","keys":["v-135ba9df","v-05997c16"]},"小美文":{"path":"/category/%E5%B0%8F%E7%BE%8E%E6%96%87/","keys":["v-1939cf1e","v-71c3455a","v-2aef503c","v-29cfdf5c","v-44a42a29","v-acfca3c6"]},"小随笔":{"path":"/category/%E5%B0%8F%E9%9A%8F%E7%AC%94/","keys":["v-20f1a2ba","v-040d328c","v-00a3814e","v-0317f097","v-09810bfc","v-151da8c2","v-11b3f784"]},"小论文":{"path":"/category/%E5%B0%8F%E8%AE%BA%E6%96%87/","keys":["v-084b679e"]}}}},"tag":{"/":{"path":"/tag/","map":{"导图":{"path":"/tag/%E5%AF%BC%E5%9B%BE/","keys":["v-315fef65"]},"目标":{"path":"/tag/%E7%9B%AE%E6%A0%87/","keys":["v-0014b6d1","v-61ed2ca1"]},"note":{"path":"/tag/note/","keys":["v-135ba9df","v-05997c16"]},"美文":{"path":"/tag/%E7%BE%8E%E6%96%87/","keys":["v-1939cf1e","v-71c3455a","v-2aef503c","v-29cfdf5c","v-44a42a29","v-acfca3c6"]},"随笔":{"path":"/tag/%E9%9A%8F%E7%AC%94/","keys":["v-20f1a2ba","v-040d328c","v-00a3814e","v-0317f097","v-09810bfc","v-151da8c2","v-11b3f784"]},"论文":{"path":"/tag/%E8%AE%BA%E6%96%87/","keys":["v-084b679e"]}}}}}

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
