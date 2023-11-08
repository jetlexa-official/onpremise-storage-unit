"use strict";
/* MONGODB CONNECTION CALLING */
//import mongoose, { ConnectOptions } from 'mongoose';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLGdDQUFnQztBQUNoQyxzREFBc0Q7Ozs7O0FBRXRELDRCQUE0QjtBQUM1QiwrQ0FBNkM7QUFDN0MsNkJBQTZCO0FBQzdCLGdEQUF1QjtBQUN2QiwrQkFBK0I7QUFDL0Isd0VBQTBDO0FBQzFDLDRDQUFvQjtBQUNwQixnREFBd0I7QUFDeEIsMkVBQTZDO0FBQzdDLDBEQUE2QjtBQUM3QixrRUFBK0I7QUFFL0IsMEJBQTBCO0FBQzFCLElBQUksQ0FBQyxZQUFFLENBQUMsVUFBVSxDQUFDLGNBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQyxFQUFFO0lBQ3RELFlBQUUsQ0FBQyxTQUFTLENBQUMsY0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7Q0FDdEQ7QUFFRCx3Q0FBd0M7QUFDeEMsSUFBSSxDQUFDLFlBQUUsQ0FBQyxVQUFVLENBQUMsY0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxzQkFBTSxhQUFOLHNCQUFNLHVCQUFOLHNCQUFNLENBQUUsT0FBTyxDQUFDLENBQUMsRUFBRTtJQUN2RSxZQUFFLENBQUMsU0FBUyxDQUFDLGNBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsc0JBQU0sYUFBTixzQkFBTSx1QkFBTixzQkFBTSxDQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7Q0FDdkU7QUFFRCw4QkFBOEI7QUFDOUIsSUFBSSxDQUFDLFlBQUUsQ0FBQyxVQUFVLENBQUMsY0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxzQkFBTSxhQUFOLHNCQUFNLHVCQUFOLHNCQUFNLENBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLEVBQUU7SUFDOUUsWUFBRSxDQUFDLFNBQVMsQ0FBQyxjQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLHNCQUFNLGFBQU4sc0JBQU0sdUJBQU4sc0JBQU0sQ0FBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztDQUM5RTtBQUdELG1CQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUU7SUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO0lBQ3JELHVCQUFFLENBQUMsUUFBUSxDQUFDLDJCQUEyQixFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFFL0QsdUJBQUUsQ0FBQyxJQUFJLENBQUMsY0FBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLFVBQVUsR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNO1FBQ25FLDZCQUE2QjtRQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDckMsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQztBQUdILGNBQUcsQ0FBQyxNQUFNLENBQUMsc0JBQU0sYUFBTixzQkFBTSx1QkFBTixzQkFBTSxDQUFFLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBTSxhQUFOLHNCQUFNLHVCQUFOLHNCQUFNLENBQUUsSUFBSSxDQUFDLENBQUE7SUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUMxQyxDQUFDLENBQUMsQ0FBQTtBQUVGLGtCQUFlLGNBQUcsQ0FBQyJ9