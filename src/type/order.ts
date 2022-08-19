export interface ListInt {
    // userId: number;
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
    tableData: ListInt[] = [];
    // tableData: ListInt[] = [
    //     {
    //         id: 1,
    //         title: 'iphone',
    //         body: '苹果手机',
    //     },
    //     {
    //         id: 2,
    //         title: 'redmi',
    //         body: '红米手机',
    //     },
    //     {
    //         id: 3,
    //         title: 'huawei',
    //         body: '华为手机',
    //     },
    //     {
    //         id: 4,
    //         title: 'yjia',
    //         body: '一加手机',
    //     },
    //     {
    //         id: 5,
    //         title: 'mac',
    //         body: '苹果电脑',
    //     },
    //     {
    //         id: 6,
    //         title: 'OPPO Reno8 ',
    //         body: 'OPPO Reno8 ',
    //     },
    //     {
    //         id: 7,
    //         title: '荣耀X30',
    //         body: '荣耀X30',
    //     },
    //     {
    //         id: 8,
    //         title: 'vivo iQOO',
    //         body: 'vivo iQOO',
    //     },
    //     {
    //         id: 9,
    //         title: '摩托罗拉moto',
    //         body: '摩托罗拉moto',
    //     },
    //     {
    //         id: 10,
    //         title: '华为畅享',
    //         body: '华为畅享',
    //     },
    // ];
}
