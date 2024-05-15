export const getDefaultDoctor = () => ({
    id: '',
    name: '',
    gender: '',
    address: '',
    phone: '',
    email: '',
    position: '',
    evaludate: '',
});
export type Doctor = Partial<ReturnType<typeof getDefaultDoctor>>;