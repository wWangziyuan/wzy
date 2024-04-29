import { useState } from 'react';
import axios from 'axios';
import { List, Button, Spin, Modal } from '@douyinfe/semi-ui';
import './style.scss';
import useSWR from 'swr';

const Callroll = () => {
  const [currentStudent, setCurrentStudent] = useState();
  const [selectedStudents, setSelectedStudents] = useState([]);
  const {
    data: students,
    error,
    loading,
  } = useSWR('http://localhost:4000/students', url =>
    axios.get(url).then(res => res.data),
  );
  const [visible, setVisible] = useState(false);

  if (loading) {
    return <Spin />;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  const showDialog = () => {
    setVisible(true);
  };
  const handleOk = () => {
    setVisible(false);
    console.log('Ok button clicked');
  };
  const handleCancel = () => {
    setVisible(false);
    console.log('Cancel button clicked');
  };
  return (
    <div className={'callroll'}>
      <List
        dataSource={students}
        grid={{
          gutter: 12,
          span: 3,
        }}
        renderItem={(item, index) => {
          if (item.name === '付子豪') {
            return (
              <List.Item>
                <Button style={{ width: 168 }}>
                  👑{item.name} {item.points} {index}
                </Button>
              </List.Item>
            );
          } else {
            return (
              <List.Item>
                <Button style={{ width: 168 }}>
                  {item.name} {item.points} {index}
                </Button>
              </List.Item>
            );
          }
        }}
      ></List>
      <Button onClick={showDialog} className={'answer'} theme="solid">
        回答问题
      </Button>
      <Modal
        title="幸运儿"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        closeOnEsc={true}
      >
        我
      </Modal>
    </div>
  );
};
export default Callroll;
