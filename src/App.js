import './App.css';
import { Button, Input } from '@douyinfe/semi-ui';
import { Title } from '@douyinfe/semi-ui/lib/es/skeleton/item';
import Text from '@douyinfe/semi-ui/lib/es/typography/text';
import { useState } from 'react';

function App() {
  const [accountName, setAccountName] = useState('请输入账号');
  return (
    <>
      <Title>欢迎登录教师点名系统</Title>
      <Input
        value={accountName}
        onChange={changeValue => {
          setAccountName(changeValue);
          console.log(accountName);
        }}
      />
      <Input value={'请输入密码'} />
      <Button>登录</Button>
      <Text>如果还没有账号请点击这里注册</Text>
      <button>hi</button>
    </>
  );
}

export default App;
