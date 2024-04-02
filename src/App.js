import './App.css';
import { Button, Input } from '@douyinfe/semi-ui';
import { Title } from '@douyinfe/semi-ui/lib/es/skeleton/item';
import Text from '@douyinfe/semi-ui/lib/es/typography/text';
import { useState } from 'react';

function App() {
  const [accountName, setAccountName] = useState();
  const [password, setPassword] = useState();
  return (
    <>
      <Title>欢迎登录教师点名系统</Title>
      <Input
        value={accountName}
        placeholder={'请输入账号'}
        onChange={changeValue => {
          setAccountName(changeValue);
          console.log(accountName);
        }}
      />
      <Input
        value={password}
        placeholder={'请输入密码'}
        onChange={changeValue => {
          setPassword(changeValue);
          console.log(setPassword);
        }}
      />
      <Button>登录</Button>
      <Text>如果还没有账号请点击这里注册</Text>
      <button>hi</button>
    </>
  );
}

export default App;
