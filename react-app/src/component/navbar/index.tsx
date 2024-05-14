import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    {
        label: 'Home',
        key: '/',
        icon: <AppstoreOutlined />,
    },
    {
        label: 'Doctor',
        key: 'doctor',
        children: [
            { key: 'dashboard', label: 'Dashboard' },
            { key: 'doctor-profile', label: 'Doctor Profile' },
        ],
    },
    {
        label: 'Patien',
        key: 'patient',
    },
    {
        label: 'Admin',
        key: 'admin',
    },
    // {
    //     label: 'Navigation Three - Submenu',
    //     key: 'SubMenu',
    //     icon: <SettingOutlined />,
    //     children: [
    //         {
    //             type: 'group',
    //             label: 'Item 1',
    //             children: [
    //                 { label: 'Option 1', key: 'setting:1' },
    //                 { label: 'Option 2', key: 'setting:2' },
    //             ],
    //         },
    //         {
    //             type: 'group',
    //             label: 'Item 2',
    //             children: [
    //                 { label: 'Option 3', key: 'setting:3' },
    //                 { label: 'Option 4', key: 'setting:4' },
    //             ],
    //         },
    //     ],
    // },
];

export const NavBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const layout = location.pathname.split('/')[1];

    const onClick: MenuProps['onClick'] = (e) => {
        navigate(e.key);
    };

    return <div className='flex gap-2'>
        <Menu className='flex-1 border-0' onClick={onClick} selectedKeys={[layout]} mode="horizontal" items={items} />
        <div className='flex gap-2 items-center pr-2'>
            <Button onClick={() => navigate('/sign-in')}>Sign in</Button>
            <Button onClick={() => navigate('/sign-up')}>Sign up</Button>
        </div>
    </div>;
};
