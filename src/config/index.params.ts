import { SwitcherType } from '@config/interfaces/index.interfaces';

const Switcher: SwitcherType = {
    PRODUCTION: process.argv[2] === "PRODUCTION",
    STAGING: process.argv[2] === "STAGING",
    DEVELOPMENT: process.argv[2] === "DEVELOPMENT"
}
export default Switcher;