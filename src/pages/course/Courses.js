import useSWR from 'swr';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import { Spin, Button, Modal, Input } from 'react-router-dom';
import { useState } from 'react';
import { BaseButton } from '@/pages/course/components';

export const addCourse = name =>
    axios.post(`http://localhost:3000/courses`, {  });

export const Courses = () => {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);
    const [courseName, setCourseName] = useState();     
    const{
        data: courses,
        error,
        isLoading,
        mutate,
    } = useSWR('http://localhost:3000/courses', url =>
        axios.get(url).then(res => res.data),
    );
    const handleOk = async () => {
        setVisible(false);

        setCourseName();
    };
    const handleCancel = async () => {
        setVisible(false);
        setCourseName();
    };
    if (isLoading) {
        return <Spin />;
    }
    if (error) {
        return <div>{error.message}</div>;
    }
    return (
        <div>
            {courses.map(course => (
                <BaseButton
                    onClick={() => }
                    onDelete={() => {

                    }}
                >
                    {course.name}
                </BaseButton>
            ))}
            <Button
                onClick={() => {
                    setVisible(true);
                }}
            >
                新建课程
            </Button>
            <Modal
                title="幸运儿"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                closeOnEsc={true}
            >
                <Input
                    autoFocus
                    value={courseName}
                    placeholder={'输入课程信息'}
                    onChange={changeValue => {
                        setCourseName(changeValue);
                    }}
                />
            </Modal>    ``
        </div>
    );
};