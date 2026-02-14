import { Page , expect} from "@playwright/test";

export default class HomePage {

    private readonly LogoLocator = "//img[@src='/assets/sanctora_horizontal_logo.png']";
   
    

    constructor(private page:Page){}

async expectPageLogoVisible(){
   
     await expect(this.page.locator(this.LogoLocator)).toBeVisible({ timeout: 10000 });
    }
}
// async openNewAccount(){
//     const openAccount = this.page.getByText(this.openaccountSelector);
//     await expect.soft( openAccount).toBeVisible();
//     if(await openAccount.isVisible()){
//         await openAccount.click();
//     }

// }
