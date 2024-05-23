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
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Tabs type="line">
      <TabPane tap="点名" itemKey='1'>
        <CallrollTab />
      </TabPane>
      <TabPane tab='分组' itemKey='2'>
        <Group />
      </TabPane>
    </Tabs>
  );
};
export default Callroll;
