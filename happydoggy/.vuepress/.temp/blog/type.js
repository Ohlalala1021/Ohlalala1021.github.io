export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-1939cf1e","v-71c3455a","v-2aef503c","v-0014b6d1","v-29cfdf5c","v-acfca3c6","v-135ba9df","v-61ed2ca1","v-315fef65","v-084b679e","v-09810bfc","v-151da8c2","v-11b3f784"]}},"encrypted":{"/":{"path":"/encrypted/","keys":[]}},"slide":{"/":{"path":"/slide/","keys":[]}},"star":{"/":{"path":"/star/","keys":[]}},"timeline":{"/":{"path":"/timeline/","keys":["v-1939cf1e","v-71c3455a","v-2aef503c","v-0014b6d1","v-29cfdf5c","v-acfca3c6","v-135ba9df","v-61ed2ca1","v-315fef65","v-084b679e","v-09810bfc","v-151da8c2","v-11b3f784"]}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogType) {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  })
}
