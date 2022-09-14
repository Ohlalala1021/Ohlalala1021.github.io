export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-8ac7b57c","v-040d328c","v-00a3814e","v-0317f097","v-0014b6d1","v-1939cf1e","v-71c3455a","v-2aef503c","v-29cfdf5c","v-61ed2ca1","v-315fef65","v-084b679e","v-135ba9df","v-44a42a29","v-acfca3c6","v-151da8c2","v-11b3f784","v-09810bfc","v-05997c16"]}},"encrypted":{"/":{"path":"/encrypted/","keys":["v-8ac7b57c","v-040d328c","v-00a3814e","v-0317f097","v-135ba9df","v-151da8c2","v-11b3f784","v-09810bfc","v-05997c16"]}},"slide":{"/":{"path":"/slide/","keys":[]}},"star":{"/":{"path":"/star/","keys":[]}},"timeline":{"/":{"path":"/timeline/","keys":["v-8ac7b57c","v-040d328c","v-00a3814e","v-0317f097","v-0014b6d1","v-1939cf1e","v-71c3455a","v-2aef503c","v-29cfdf5c","v-61ed2ca1","v-315fef65","v-084b679e","v-135ba9df","v-44a42a29","v-acfca3c6","v-151da8c2","v-11b3f784","v-09810bfc","v-05997c16"]}}}

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
