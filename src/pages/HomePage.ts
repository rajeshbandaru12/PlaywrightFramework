import { Page , expect} from "@playwright/test";

export default class HomePage {

    private readonly homePageTitleLocator = 'Welcome Rajesh B';
    private readonly openaccountSelector = 'Open New Account';
    private readonly accountOverviewGetbyrole="link', { name: 'Accounts Overview' }";
    

    constructor(private page:Page){}

async expectPageTitleVisible(){
    await expect.soft(this.page.getByText(this.homePageTitleLocator)).toBeVisible();
}
async openNewAccount(){
    const openAccount = this.page.getByText(this.openaccountSelector);
    await expect.soft( openAccount).toBeVisible();
    if(await openAccount.isVisible()){
        await openAccount.click();
    }

}
}