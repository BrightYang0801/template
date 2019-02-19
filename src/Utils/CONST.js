
export const APP_DATE_FORMAT = "YYYY-MM-DD HH:mm";
export const APP_TIMESTAMP_FORMAT = "YYYY-MM-DD HH:mm:ss";
export const APP_LOCAL_DATE_FORMAT = "DD/MM/YYYY";
export const APP_LOCAL_DATETIME_FORMAT = "YYYY-MM-DDThh:mm";
export const APP_WHOLE_NUMBER_FORMAT = "0,0";
export const APP_TWO_DIGITS_AFTER_POINT_NUMBER_FORMAT = "0,0.[00]";
export const APP_DAY_FORMAT = "YYYY-MM-DD";

export const ROUTERLIST = {
    // '/home': {
    //     title: '首页',
    // },
    '/home/:type/:typeId/proof': {
        title: '验证证书',
    },
    '/home/chain/5c40826b9d19/transactionDetail/:id': {
        title: '交易详情'
    },
    '/home/chain/5c40826b9d19/blockDetail/:id': {
        title: '区块详情'
    },
    '/home/:type/:typeId/detail/:orgName/:id': {
        title: '数据详情',
        // component: 'detail'
    },
};
