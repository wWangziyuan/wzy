import useSwR from 'swr';
import axios from 'axios';
import {
    Button,
    ButtonGroup,
    Spin,
    Space,
    List,
    Modal,
} from '@douyinfe/semi-ui';
import { useEffect } from 'react';
import Text from '@douyinfe/semi-ui/lib/es/typography/text';

export const AttenceStatus = {
    LATE: 1,
    LEAVE: 2,
    ABSENT: 3,
};

export const statusToString = {
    [AttenceStatus.LAVE]: '迟到',
    [AttenceStatus.LEAVE]: '请假',
    [AttenceStatus.ABSENT]: '缺席',
};

const AbsenceButtons = ({ detail }) => {
    const [attence, setAttence] = uswState(detail.attence);
    const [isFir]
}