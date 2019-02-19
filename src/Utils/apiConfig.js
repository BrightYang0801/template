
const solutionAPI = "https://solution-baas.zhigui.com/api/";
const format = require('string-format');
format.extend(String.prototype);

module.exports = {

    solution: {
        solutionAPI: "https://solution-baas.zhigui.com",
        orgList: `${solutionAPI}org/list`,
        orgInfo: `${solutionAPI}data/info?orgName=`,
        chainInfo: `${solutionAPI}chain/info`,
        transactions: `${solutionAPI}chain/transactions`,
        transactionDetail: `${solutionAPI}chain/transaction`,
        blockDetail: `${solutionAPI}chain/block`,
        blocks: `${solutionAPI}chain/blocks`,
        dataList: `${solutionAPI}data/list/`,
        dataDetail: `${solutionAPI}data/{id}/detail`,
        download: `${solutionAPI}data/download?file={file}&orgName={orgName}`,
        checkDownload: `${solutionAPI}data/download/check?file={file}&orgName={orgName}`,
        apply: `${solutionAPI}data/apply/`,
        approve: `${solutionAPI}data/review/{id}?action={action}&applicant={applicant}&orgName={orgName}`,
        dataService: {
            dataServiceInfo: `${solutionAPI}data-service/info`,
            dataServiceInfoList: `${solutionAPI}data-service/list`,
            compute: `${solutionAPI}data-service/{id}/compute?orgName={orgName}`,
            upload: `${solutionAPI}data-service/upload`,
            validate: `${solutionAPI}data-service/verify/{fileName}`

        },
        log: {
            logsList: `${solutionAPI}log/list`,
        },
        types: {
            typeList: `${solutionAPI}data/types`,
        },
        point: `${solutionAPI}org/point?orgName={orgName}`,
        addData: `${solutionAPI}data/save`,
        upload: `${solutionAPI}data/upload`,
        update: `${solutionAPI}data/update/{id}`,
        oracle: {
            upload: `${solutionAPI}oracle/proof/upload`,
            validate: `${solutionAPI}oracle/proof/validate/{fileName}`
        }
    },

}
