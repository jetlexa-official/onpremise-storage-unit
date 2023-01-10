"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* BUILDS THE ENVRIONMENT */
require("./config/methods/environment.builder");
/* EXPRESS APP FROM App.ts */
const _app_1 = __importDefault(require("./App"));
/* GLOBAL CONFIGURATION FILE */
const index_config_1 = __importDefault(require("./config/index.config"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const company_data_1 = __importDefault(require("./constants/company.data"));
const node_cron_1 = __importDefault(require("node-cron"));
const child_process_1 = __importDefault(require("child_process"));
/* CREATES FILES FOLDER */
if (!fs_1.default.existsSync(path_1.default.join(__dirname, '../', 'files'))) {
    fs_1.default.mkdirSync(path_1.default.join(__dirname, '../', 'files'));
}
/* CREATES COMPANY FOLDER UNDER FILES */
if (!fs_1.default.existsSync(path_1.default.join(__dirname, '../', 'files', company_data_1.default === null || company_data_1.default === void 0 ? void 0 : company_data_1.default.COMPANY))) {
    fs_1.default.mkdirSync(path_1.default.join(__dirname, '../', 'files', company_data_1.default === null || company_data_1.default === void 0 ? void 0 : company_data_1.default.COMPANY));
}
/* CREATES TMP FILES FOLDER */
if (!fs_1.default.existsSync(path_1.default.join(__dirname, '../', 'files', company_data_1.default === null || company_data_1.default === void 0 ? void 0 : company_data_1.default.COMPANY, 'TMP'))) {
    fs_1.default.mkdirSync(path_1.default.join(__dirname, '../', 'files', company_data_1.default === null || company_data_1.default === void 0 ? void 0 : company_data_1.default.COMPANY, 'TMP'));
}
node_cron_1.default.schedule('0 3 * * 5', () => {
    console.log('Update server task at 03:00 at Friday');
    child_process_1.default.execSync('chmod +x server-update.sh', { stdio: 'inherit' });
    child_process_1.default.exec(path_1.default.resolve('server-update.sh'), function (err, stdout, stderr) {
        // handle err, stdout, stderr
        console.log(err, stdout, stderr);
    });
});
_app_1.default.listen(index_config_1.default === null || index_config_1.default === void 0 ? void 0 : index_config_1.default.PORT, () => {
    console.log(index_config_1.default === null || index_config_1.default === void 0 ? void 0 : index_config_1.default.PORT);
    console.log("SERVER RUNNING: ", true);
});
exports.default = _app_1.default;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSw0QkFBNEI7QUFDNUIsK0NBQTZDO0FBQzdDLDZCQUE2QjtBQUM3QixnREFBdUI7QUFDdkIsK0JBQStCO0FBQy9CLHdFQUEwQztBQUMxQyw0Q0FBb0I7QUFDcEIsZ0RBQXdCO0FBQ3hCLDJFQUE2QztBQUM3QywwREFBNkI7QUFDN0Isa0VBQStCO0FBRS9CLDBCQUEwQjtBQUMxQixJQUFJLENBQUMsWUFBRSxDQUFDLFVBQVUsQ0FBQyxjQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUMsRUFBRTtJQUN0RCxZQUFFLENBQUMsU0FBUyxDQUFDLGNBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0NBQ3REO0FBRUQsd0NBQXdDO0FBQ3hDLElBQUksQ0FBQyxZQUFFLENBQUMsVUFBVSxDQUFDLGNBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsc0JBQU0sYUFBTixzQkFBTSx1QkFBTixzQkFBTSxDQUFFLE9BQU8sQ0FBQyxDQUFDLEVBQUU7SUFDdkUsWUFBRSxDQUFDLFNBQVMsQ0FBQyxjQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLHNCQUFNLGFBQU4sc0JBQU0sdUJBQU4sc0JBQU0sQ0FBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0NBQ3ZFO0FBRUQsOEJBQThCO0FBQzlCLElBQUksQ0FBQyxZQUFFLENBQUMsVUFBVSxDQUFDLGNBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsc0JBQU0sYUFBTixzQkFBTSx1QkFBTixzQkFBTSxDQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFO0lBQzlFLFlBQUUsQ0FBQyxTQUFTLENBQUMsY0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxzQkFBTSxhQUFOLHNCQUFNLHVCQUFOLHNCQUFNLENBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7Q0FDOUU7QUFHRCxtQkFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFO0lBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUNBQXVDLENBQUMsQ0FBQztJQUNyRCx1QkFBRSxDQUFDLFFBQVEsQ0FBQywyQkFBMkIsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBRS9ELHVCQUFFLENBQUMsSUFBSSxDQUFDLGNBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsRUFBRSxVQUFVLEdBQUcsRUFBRSxNQUFNLEVBQUUsTUFBTTtRQUNuRSw2QkFBNkI7UUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3JDLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUM7QUFHSCxjQUFHLENBQUMsTUFBTSxDQUFDLHNCQUFNLGFBQU4sc0JBQU0sdUJBQU4sc0JBQU0sQ0FBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO0lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQU0sYUFBTixzQkFBTSx1QkFBTixzQkFBTSxDQUFFLElBQUksQ0FBQyxDQUFBO0lBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDMUMsQ0FBQyxDQUFDLENBQUE7QUFFRixrQkFBZSxjQUFHLENBQUMifQ==