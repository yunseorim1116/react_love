import axios from 'axios'


const instance = axios.create({
    baseURL: 'http://52.79.226.246',
    timeout: 1000
  });


instance.interceptors.request.use((config) => {
  // 요청 전 처리 작업 수행
  const token = window.localStorage.getItem('token');
  if(token){
  config.headers.Authorization = `Bearer${token}`;
  }

  return config;
}, (error) => {
  // 요청 에러 처리
  return Promise.reject(error);
});


instance.interceptors.response.use((response) => {
  // 응답 데이터 가공
  return response.data;
}, (error) => {
  // 응답 에러 처리
  if (error.response) {
    if (error.response.status === 401) {
      // 유효하지 않은 토큰 처리
      window.location.href = '/siginin';
    }

    if (error.response.status === 419) {
      //만료된 토큰 처리
      const refreshToekn = window.localStorage.getItem('refreshToekn');
      instance.post('/auth/refresh', refreshToekn)
      window.location.href = '/siginin';
    }


    else {
      // 그 외 오류 처리
      console.error(error.response.data);
    }
  }
  return Promise.reject(error);
});

export default instance;

