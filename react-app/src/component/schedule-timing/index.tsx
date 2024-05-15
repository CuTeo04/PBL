import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { Timeslot } from './timeslot';

const onChange = (key: string) => {
    console.log(key);
};

const items: TabsProps['items'] = [
    {
        key: 'sunday',
        label: 'Sunday',
        children: <Timeslot />,
    },
    {
        key: 'monday',
        label: 'Monday',
        children: <Timeslot />,
    },
    {
        key: 'tuesday',
        label: 'Tuesday',
        children: <Timeslot />,
    },
    {
        key: 'wednesday',
        label: 'Wednesday',
        children: <Timeslot />,
    },
    {
        key: 'thursday',
        label: 'Thursday',
        children: <Timeslot />,
    },
    {
        key: 'friday',
        label: 'Friday',
        children: <Timeslot />,
    },
    {
        key: 'saturday',
        label: 'Saturday',
        children: <Timeslot />,
    },

];

export const ScheduleTiming = () => {
    return <div>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>;
};

