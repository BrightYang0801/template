// import { observable, action } from 'mobx';
// import Cookies from "js-cookie";

// class ChangeFileUpload {
//     @observable fileUploadProgress
//     @observable fileListData
//     @observable breadListArr
//     @observable currentPath
//     @observable selectedRowKeys
//     @observable selectedRows
//     @observable loaddingFile
//     constructor() {
//         const local = Cookies.get('lang')
//         this.fileUploadProgress = false;
//         this.fileListData = []
//         this.breadListArr = [
//             {
//                 name:local === "en-US" ?"All Files":"全部文件",path:"/"
//             }
//         ]
//         this.currentPath = "/"
//         this.selectedRowKeys = []
//         this.selectedRows = []
//         this.loaddingFile = []
//     }
//     @action changefileUploadProgress (status) {
//         this.fileUploadProgress = status;
//     }

//     @action changefileUploadingList (status) {
//         this.fileListData.length = 0
//         for (let i = 0; i < status.length; i++) {
//             this.fileListData.push(status[i])
//         }

//     }

//     @action deleteLoaddingFile (status) {
//         for(let i=0;i<this.loaddingFile.length;i++){
//             if(this.loaddingFile[i] === status){
//                 this.loaddingFile.splice(i,1)
//             }
//         }
//     }

//     @action changeLoaddingFile (status) {
//         this.loaddingFile.push(status)

//     }

//     @action changeSelectedRows (status) {
//         this.selectedRows.length = 0
//         for (let i = 0; i < status.length; i++) {
//             this.selectedRows.push(status[i])
//         }
//     }

//     @action changeSelectedRowKeys (status) {
//         this.selectedRowKeys.length = 0
//         for (let i = 0; i < status.length; i++) {
//             this.selectedRowKeys.push(status[i])
//         }
//     }

//     @action changeBreadListArr (status) {
//         this.breadListArr.length = 0
//         for (let i = 0; i < status.length; i++) {
//             this.breadListArr.push(status[i])
//         }
//     }

//     @action changeCurrentPath (status) {
//         this.currentPath = status;
//     }

// }

// export default new ChangeFileUpload();