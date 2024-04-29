import { useEffect, useState } from 'react';
import axios from 'axios';
import { List, Button } from '@douyinfe/semi-ui';

const Callroll = () => {
  const [students, setStudents] = useState();
  useEffect(() => {
    axios
      .get('http://localhost:4000/students')
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => {
        console.log(error); // 输出错误信息
      });
    // axios
    //   .post('http://localhost:4000/students', { name: '测试学生', points: 100 })
    //   .then(response => {
    //     console.log(response.data); // 输出获取到的学生信息
    //   })
    //   .catch(error => {
    //     console.error(error); // 输出错误信息
    //   });
  }, []);
  // return <div>{students && students.map(x => <div>{x.name}</div>)}</div>;
  return (
    <>
      <List
        dataSource={students}
        grid={{
          gutter: 12,
          span: 3,
        }}
        renderItem={item => (
          <List.Item>
            <Button style={{ width: 168 }}>
              {item.name} {item.points}
            </Button>
          </List.Item>
        )}
      ></List>
      <Button theme="solid">回答问题</Button>
    </>
  );
};
export default Callroll;
