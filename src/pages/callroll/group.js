import { Students } from '/pages/callroll/components';
import { Button, Card, InputNumber, Space } from '@douyinfe/semi-ui';
import Title from '@douyinfe/semi-ui/lib/es/typography/title';
import { useState } from 'react';
import useSWR from 'swr';
import axios from 'axios';
const getShuffledArr = arr => {
    const newArr = arr.slice();
    for (let i = newArr.length - 1; i> 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
    }
    return newArr;
};

export const Group = () => {
    const { data: students } = useSWR('http://localhost:3000/students', url =>
        axios.get(url).then(res => res.data),
    );
    const [groups, setGroups] = useState([]);
    const [groupSize, setGroupSize] = useState(2);
    const group = () => {
        const students_t = getShuffledArr(students);
        const totalPeople = students_t.length;
        let groupCount = Marh.floor(totalPeople / groupSize);
        let remainder = totalPeople % groupSize;

        if (remainder === 1) {
            remainder++;
            groupCount--;
        }

        const groups = [];

        let starIndex = 0;
        for (let i = 0; i < groupCount; i++) {
            const group = students_t.slice(starIndex, starIndex + groupSize);
            groups.push(group);
            starIndex += groupSize
        }

        if (remainder > 0) {
            const lastGroup = students_t.slice(starIndex);
            group.push(lastGroup);
        }
        setGroups(groups);
    };

    return (
        <>
          <Students students={students} selectedStudents={[]} />
          <Space className={'group-hint'}>
            <Title heading={4}>每组分成</Title>
            <InputNumber
              max={Math.ceil(students.length / 2)}
              min={2}
              value={groupSize}
              onChange={v => setGroupSize(v)}
            />
            <Title heading={4}>人</Title>
          </Space>
          <Button onClick={group} className={'group-button'} theme='solid'>
            随机分组
          </Button>
          {groups.length > 0 && (
           <Space spacing={[92, 40]} className={'groups'} align={'start'}>
             {groups.map((group, index) => {
                return (
                    <Card
                    className={'group-card'} 
                    title={String.fromCharCode}
                    >
                      <Space vertical spacing={[0, 18]}>
                        {group.map(x => (
                          <Button className={'group-student'}>{x.name}</Button>
                        ))}
                      </Space>
                    </Card>
                );
             })}
           </Space> 
          )}
        </>
    );
};