export interface ListInt {
    userId: number;
    id: number;
    title: string;
    body: string;
}
interface selectDataInt {
    title: string;
    body: string;
    page: number;
    count: number;
}

export class InitData {
    selectData: selectDataInt = {
        title: '',
        body: '',
        page: 0,
        count: 0,
    };
    list: ListInt[] = [];
}
