import useSWR from "swr";
import axios from "axios";
import { Button, Table, Spin, SideSheet } from "@douyinfe/semi-ui";
import { useState } from 'react';
import { AttendenceModal, statusToString } from '@/pages/AttendenceModal';

export const CourseDemo = () => {
    const [visible, setVisible] = useState(false);
    const { data, isLoading, mutate } = useSWR(
        'http://localhost:3000/attences',
        url => axios.get(url).then(res => res.data),
    );

    const change = () => {
        
    };
