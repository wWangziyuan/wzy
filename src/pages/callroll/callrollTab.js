import { Students } from '@/pages/callroll/coomponents';
import { Button, Modal, TabPane } from '@douyinfe/semi-ui';
import useSWR from 'swr';
import axios from 'axios';
import { updateStudent } from '@/pages/callroll/requests';
import { useEffect, useState } from 'react';

export const CallrollTab = () => {
  const [visible, setVisible] = useState(false);
  const [currentStudent, setCurrentStudent] = useState({});
  const { data: students, mutate } = useSWR(
    'http://localhost:3000/students',
    url => axios.get(url).then(res => res.data),
  );
  useEffect(() => {
    if (students) {
      const unselectStudents = students.filter(dataItem => !dataItem.selected);
      if (unselectStudents.length === 0) {
        const updatePromises = students.map(student =>
          updateStudents({
            id: student.id,
            data: { selected: false },
          }),
        );
        Promise.all(updatePromises).then(() => {
          mutate();
        });
      }
    }
  }, [students]);
  const showDialog = () => {
    const unselectStudents = students.filter(dataItem => !dataItem.selected);
    let randomIndex = Math.floor(Math.random() * unselectStudents.length);
    let randomPerson = unselectStudents[randomIndex];
    setCurrentStudent(randomPerson);
    setVisible(false);
  };
  const handleOK = async () => {
    setVisible(false);
    await updateStudent({
      id: currentStudent.id,
      data: { points: currentStudent.points + 1, selected: true },
    }).then(() => mutate());
    setCurrentStudent({});
  };

  const handleCancel = async () => {
    setVisible(false);
    await updateStudent({
      id: currentStudent.id,
      data: { selected: true },
    }).then(() => mutate());
    setCurrentStudent({});
  };

  return (
    <div className={'callroll'}>
      <Students 
        students={students}
        selectedStudent={students.filter(s => s.selected)}
      />
      <Button onClick={showDialog} className={'answer'} theme="solid">
        回答问题
      </Button>
      <Modal
        title="幸运儿"
        visible={visible}
        onOk={handleOK}
        onCancel={handleCancel}
        closeOnEsc={true}
      >
        {currentStudent.name}
      </Modal>
    </div>
  );
};