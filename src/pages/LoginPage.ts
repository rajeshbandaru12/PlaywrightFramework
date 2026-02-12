import { Page } from "@playwright/test";
import HomePage from "./HomePage";

export default class LoginPage {

    private readonly userNameInputSelector = '[name="username"]';
    private readonly passwordInputSelector = '[name="password"]';
    private readonly loginButtonSelector =  "//input[@value='Log In']";
    private readonly remeberMwCheckLocator = '#rememberUn';


    constructor(private page:Page){

    }
    async navigateToLoginPage(){
        // Alternative way with a predicate. Note no await.
// const responsePromise = this.page.waitForResponse(response =>
//   response.url() === 'https://parabank.parasoft.com/parabank/register.htm' && response.status() === 200
//       && response.request().method() === 'GET'
//         )           
        await this.page.goto("/");
    }
    async fillUserNmae(userName : string){
        await this.page.locator(this.userNameInputSelector).fill(userName);

    }
    async fillPassword(password:string){
        await this.page.locator(this.passwordInputSelector).fill(password);
    }
    async checkRememberMe(){
        await this.page.locator(this.remeberMwCheckLocator).click();
    }
    async clickLoginButton() {
        await this.page
        .locator(this.loginButtonSelector)
        .click()
        .catch ((error) =>{
        console.error('Login button click failed:', error.message);
        throw error; // re-throw so test fails properly
    });
     const homePage = new HomePage(this.page);
     return homePage;
}


}   







