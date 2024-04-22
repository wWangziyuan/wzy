import { useEffect } from 'react';
import axios from 'axios';

const Callroll = () => {
  useEffect(() => {
    axios
      .post('http://localhost:4000/students', { name: '测试学生', points: 100 })
      .then(response => {
        console.log(response.data); // 输出获取到的学生信息
      })
      .catch(error => {
        console.error(error); // 输出错误信息
      });
  }, []);
  return <div>点名页</div>;
};
export default Callroll;
