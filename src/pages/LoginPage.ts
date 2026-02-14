import { Page } from "@playwright/test";
import HomePage from "./HomePage";

export default class LoginPage {

    private readonly LoginlinkGetByText = 'Log in';
    private readonly userNameInputGetByRole = "textbox";
    private readonly passwordInputGetByRole = "textbox";
    private readonly loginButtonLocator =  "//button[normalize-space()='Login']";
   


    constructor(private page:Page){

    }
    async navigateToLoginPage(){
        // Alternative way with a predicate. Note no await.
// const responsePromise = this.page.waitForResponse(response =>
//   response.url() === 'https://parabank.parasoft.com/parabank/register.htm' && response.status() === 200
//       && response.request().method() === 'GET'
//         )           
        await this.page.goto("/",{ waitUntil: "domcontentloaded" });
    }
    async openLoginpage(){
        await this.page.getByText(this.LoginlinkGetByText).click();
    }
    async fillUserNmae(userName : string){
        //await this.page.locator(this.userNameInputLocator).waitFor({state:"visible"});
        await this.page.getByRole(this.userNameInputGetByRole,{ name: 'Email' }).fill(userName);

    }
    async fillPassword(password:string){
        await this.page.getByRole(this.passwordInputGetByRole, { name: 'Password' }).fill(password);
    }
    
    async clickLoginButton() {
        await this.page
        .locator(this.loginButtonLocator)
        .click()
        .catch ((error) =>{
        console.error('Login button click failed:', error.message);
        throw error; // re-throw so test fails properly
    });
     const homePage = new HomePage(this.page);
     return homePage;
}


}   







