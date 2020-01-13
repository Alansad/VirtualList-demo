import axios from 'axios'
export default function(url){
  return new Promise((resolve, reject) => {
    axios.get(url).then(res => {
      if(res.data.code === 100000){
        if (res.data.data.code === 0) resolve(res.data.data.data);
        else reject(res.data.msg || res.data.data.message);
      }else {
        reject(res.data.msg || res.data.data.message);
      }
      resolve(res.data.data.data)
    }).catch(err =>{
      reject(err);
    })
  })
}
