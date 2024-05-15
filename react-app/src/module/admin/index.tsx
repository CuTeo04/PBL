import { DoctorTable, PatientTable } from "@/component";
import { Button } from "antd";
import { useState } from "react";

export const Admin = () => {
    const [type, setType] = useState<'doctor' | 'patient'>('doctor');
    return <div>
        <div className="flex gap-2">
            <Button onClick={() => setType('doctor')}>Doctor</Button>
            <Button onClick={() => setType('patient')}>Patient</Button>
        </div>
        {
            type === 'doctor'
                ? <DoctorTable />
                : <PatientTable />
        }

    </div>;
};