import { Select, Input, Button } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import { DoctorTable } from "@/component";


export const FindDoctorPanel = () => {
    return (
        <div className="flex flex-col">
            <div className="find-title">
                <div className="text-3xl font-bold flex justify-center">Search Doctor, Make an Appointment</div>
                <div className="flex justify-center">Discover the best doctors, clinic & hospital the city nearest to you.</div>
                <br />
            </div>
            <div className="seach-widget flex flex-col gap-4">
                <div className="flex justify-center gap-8">
                    <Select
                        className="w-1/5"
                        placeholder="Select Province"
                    />
                    <Select
                        className="w-1/5"
                        placeholder="Select Hospital"
                    />
                    <Select
                        className="w-1/5"
                        placeholder="Select Department"
                    />
                </div>
                <div className="flex justify-center gap-8">
                    <Input
                        className="w-1/5"
                        placeholder="Doctor Name"
                    />
                    <Button type="primary" icon={<SearchOutlined />}>
                        Search
                    </Button>
                </div>
            </div>
            <div className="doctor-table-wrapper">
                <DoctorTable />
            </div>
        </div>
    );
};