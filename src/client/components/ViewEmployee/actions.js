import { ViewEmployeeActionsConstants } from './constants.js';

function saveReportAction(first_name, last_name, manager, report_text) {
    return {
        type: ViewEmployeeActionsConstants.SAVE_REPORT,
        payload: {
            first_name,
            last_name,
            manager,
            report_text
        }
    }
}

let ViewEmployeeActions = {
    saveReportAction
}

export default ViewEmployeeActions