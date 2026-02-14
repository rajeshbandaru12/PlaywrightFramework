import { Page } from "@playwright/test";
import HomePage from "./HomePage";
import logger from "../utils/LoggerUtil";


export default class LoginPage {

    private readonly LoginlinkGetByText = 'Log in';
    private readonly userNameInputGetByRole = "textbox";
    private readonly passwordInputGetByRole = "textbox";
    private readonly loginButtonLocator =  "//button[normalize-space()='Login']";
   


    constructor(private page:Page){
    }
    async openLoginpage(){
        await this.page.getByText(this.LoginlinkGetByText).click();
        logger.info("Click on login lonk");
    }
    async fillUserNmae(userName : string){
        //await this.page.locator(this.userNameInputLocator).waitFor({state:"visible"});
        await this.page.getByRole(this.userNameInputGetByRole,{ name: 'Email' }).fill(userName);
        logger.info("Enter userName");
    }
    async fillPassword(password:string){
        await this.page.getByRole(this.passwordInputGetByRole, { name: 'Password' }).fill(password);
        logger.info("Enter Password");
    }
    
    async clickLoginButton() {
        await this.page
        .locator(this.loginButtonLocator)
        .click()
        .catch ((error) =>{
        logger.error(`Error getting on login button: ${error}`)
        console.error('Login button click failed:', error.message);
        throw error; // re-throw so test fails properly
    }).then(()=>logger.info("Click on login button"));
     const homePage = new HomePage(this.page);
     return homePage;
}


}   







