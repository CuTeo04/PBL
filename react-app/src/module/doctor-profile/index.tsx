import React from 'react';
import { Descriptions } from 'antd';
import type { DescriptionsProps } from 'antd';
import { ScheduleTiming } from '@/component';

const items: DescriptionsProps['items'] = [
    {
        key: 'name',
        label: 'Name',
        children: 'Zhou Maomao',
    },
    {
        key: 'email',
        label: 'Email',
        children: '1810000000',
    },
    {
        key: 'address',
        label: 'Address',
        children: 'Hangzhou, Zhejiang',
    },
    {
        key: 'position',
        label: 'Position',
        children: 'empty',
    },
    {
        key: 'hospital',
        label: 'Hospital',
        children: 'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China',
    },
    {
        key: 'department',
        label: 'Department',
        children: 'No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China',
    },
    {
        key: 'point',
        label: 'Evaluate',
        children: '44'
    },
    {
        key: 'medical_practice_certificate',
        label: 'Medical Practice Certificate',
        children: 'dfgdfg'
    }
];

export const DoctorProfilePanel = () => {
    return <div>
        <Descriptions title="Doctor Profile" items={items} />
        <ScheduleTiming />
    </div>;
}

