import { Page , expect} from "@playwright/test";
import logger from "../utils/LoggerUtil";

export default class HomePage {

    private readonly LogoLocator = 'link';
   
    

    constructor(private page:Page){}

async expectPageLogoVisible(){
   
     await expect(this.page.getByRole(this.LogoLocator,{ name: 'Logo' })).toBeVisible({ timeout: 30000 });
     logger.info("Logo in home page is visibale")
    }
}
// async openNewAccount(){
//     const openAccount = this.page.getByText(this.openaccountSelector);
//     await expect.soft( openAccount).toBeVisible();
//     if(await openAccount.isVisible()){
//         await openAccount.click();
//     }

// }
