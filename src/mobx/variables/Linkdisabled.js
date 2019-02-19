import { observable, action } from 'mobx';

class changeActionDisAbled {
    @observable actionIngDisabled

    constructor() {
        this.actionIngDisabled = false;
    }
    @action changeInstaniateFn (status) {
        this.actionIngDisabled = status;
    }
}

export default new changeActionDisAbled();