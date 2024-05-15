import { Button, Table, TableProps } from "antd";
import { SearchOutlined } from '@ant-design/icons';

const dataSource = [
    {
        patient: 'Mike',
        address: '10 Downing Street',
        id: '23432',
        action: <div className="flex gap-2">
            <Button danger>Cancel</Button>
            <Button type="primary">Accept</Button>
        </div>
    },
    {
        patient: 'John',
        address: '10 Downing Street',
    },
    {
        patient: 'John',
        address: '10 Downing Street',
    },
    {
        patient: 'John',
        address: '10 Downing Street',
    },
    {
        patient: 'John',
        address: '10 Downing Street',
    },
    {
        patient: 'John',
        address: '10 Downing Street',
    },
    {
        patient: 'John',
        address: '10 Downing Street',
    },
    {
        patient: 'John',
        address: '10 Downing Street',
    },
    {
        patient: 'John',
        address: '10 Downing Street',
    },
    {
        patient: 'John',
        address: '10 Downing Street',
    },
    {
        patient: 'John',
        address: '10 Downing Street',
    },
    {
        patient: 'John',
        address: '10 Downing Street',
    },
];

const columns: TableProps['columns'] = [
    {
        title: 'Calender ID',
        dataIndex: 'calender_id',
        key: 'calender_id',
    },

    {
        title: 'Patient',
        dataIndex: 'patient',
        key: 'patient',
    },
    {
        title: 'Doctor ID',
        dataIndex: 'id',
        key: 'doctor_id',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',

    },
    {
        title: 'Start Time',
        dataIndex: 'start_time',
        key: 'startstart_time_date',
    },
    {
        title: 'End Time',
        dataIndex: 'end_time',
        key: 'end_time',
    },
    {
        title: 'Action',
        dataIndex: 'action'
    }
];

export const CalenderTable = () => {
    return <div>
        <div className="flex gap-2">
            <Button>Pending</Button>
            <Button>Up comming</Button>
            <Button>Today</Button>
        </div>
        <br />
        <div>
            <Table dataSource={dataSource} columns={columns} size="small" />
        </div>
    </div>;
};

