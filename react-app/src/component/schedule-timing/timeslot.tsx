import { Button, Tag } from "antd";
import { PlusOutlined, CloseOutlined } from '@ant-design/icons';
export const Timeslot = () => {

    const onClose = () => {

    };
    return <div>
        <div className="flex justify-between">
            <div className="font-bold text-lg">Time slot</div>
            <div>
                <Button type="primary" icon={<PlusOutlined />}>Add slot</Button>
            </div>
        </div>
        <div>
            <Tag closeIcon={<span><CloseOutlined className="text-lg" /></span>} onClose={onClose} className="text-lg">
                {'10 - 20'}
            </Tag>
        </div>
    </div>;
};