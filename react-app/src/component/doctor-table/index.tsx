import { Doctor } from "@/model";
import { Button, Table, TableProps } from "antd";
import { SearchOutlined } from '@ant-design/icons';

const dataSource: Doctor[] = [
    {
        name: 'Mike',
        address: '10 Downing Street',
        id: '23432'
    },
    {
        name: 'John',
        address: '10 Downing Street',
    },
    {
        name: 'John',
        address: '10 Downing Street',
    },
    {
        name: 'John',
        address: '10 Downing Street',
    },
    {
        name: 'John',
        address: '10 Downing Street',
    },
    {
        name: 'John',
        address: '10 Downing Street',
    },
    {
        name: 'John',
        address: '10 Downing Street',
    },
    {
        name: 'John',
        address: '10 Downing Street',
    },
    {
        name: 'John',
        address: '10 Downing Street',
    },
    {
        name: 'John',
        address: '10 Downing Street',
    },
    {
        name: 'John',
        address: '10 Downing Street',
    },
    {
        name: 'John',
        address: '10 Downing Street',
    },
];

const columns: TableProps['columns'] = [
    {
        title: 'Doctor ID',
        dataIndex: 'id',
        key: 'doctor_id',
        render(value, record) {
            return <span>
                <Button icon={<SearchOutlined />}></Button>  {value}
            </span>;
        }
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',

    },
    {
        title: 'Position',
        dataIndex: 'position',
        key: 'position',
    },
    {
        title: 'Hospital',
        dataIndex: 'position',
        key: 'position',
    },
    {
        title: 'Department',
        dataIndex: 'department',
        key: 'department',
    },
    {
        title: 'Point',
        dataIndex: 'evaluate',
        key: 'evaluate',
    },
];

export const DoctorTable = () => {
    return <Table dataSource={dataSource} columns={columns} size="small" />;
};

