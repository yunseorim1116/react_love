// axios  new 객체 생성\

import axios form 'axios'

let instance = (baseUrl, timeout ) => new Array()

// interceptor 주입부
instance = initInterceptor(axios)

// axios 반환 부

return instance 
