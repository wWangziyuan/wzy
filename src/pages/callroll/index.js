<<<<<<< HEAD
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Spin, TabPane, Tabs } from '@douyinfe/semi-ui';
import './index.css';
import useSWR from 'swr';
import { CallrollTab } from '@/pages/callroll/CallrollTab';
import { Group } from '@/pages/callroll/Group';

const Callroll = () => {
  const { error, isLoading } = useSWR('http://localhost:3000/students', url =>
    axios.get(url).then(res => res.data),
  );

  if (isLoading) {
    return <Spin/>;
=======
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
>>>>>>> 378a321d4070a4f9b84a77956da2ca5f9cc69341
  }
  if (error) {
    return <div>{error.message}</div>;
  }

<<<<<<< HEAD
  return (
    <Tabs type="line">
      <TabPane tap="点名" itemKey='1'>
        <CallrollTab />
      </TabPane>
      <TabPane tab='分组' itemKey='2'>
        <Group />
      </TabPane>
    </Tabs>
=======
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
>>>>>>> 378a321d4070a4f9b84a77956da2ca5f9cc69341
  );
};
export default Callroll;
