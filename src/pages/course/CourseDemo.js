import useSWR from "swr";
import axios from "axios";
import { Button, Table, Spin, SideSheet } from "@douyinfe/semi-ui";
import { useState } from 'react';
import { AttendenceModal, statusToString } from '@/pages/AttendenceModal';
import { Title } from "@douyinfe/semi-ui/lib/es/skeleton/item";

export const CourseDemo = () => {
    const [visible, setVisible] = useState(false);
    const { data, isLoading, mutate } = useSWR(
        'http://localhost:3000/attences',
        url => axios.get(url).then(res => res.data),
    );

    const change = () => {
        setVisible(!visible);
    };

    if (isLoading) {
        return <Spin />;
    }
    const columns = [
        {
            title: '日期',
            dataIndex: 'data',
        },
        {
            title: '考勤详情',
            dataIndex: 'details',
        },
    ];

    const processedData = data.map(item => {
        const details = item.records
            .filter(record => record.attence !== 0)
            .map(record => `${record.name} ${statusToString[record.attence]}`)
            .join(', ');

    return {
        data: item.data,
        details: details || '全勤',
        };
    });

    return (
        <>
            <Button onClick={change}>Open SideSheet</Button>
            <SideSheet
                title="滑动侧边栏"
                visible={visible}
                onCancel={() => {
                    setVisible(false);
                }}
            >
                <AttendenceModal />
                <Table
                    columns={columns}
                    dataSource={processedData}
                    pagination={false}
                />
            </SideSheet>
        </>
    );
};