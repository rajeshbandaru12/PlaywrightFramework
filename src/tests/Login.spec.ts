import{test} from '@playwright/test';
import LoginPage from "../pages/LoginPage";


test('Login',async({page})=>{

    const loginpage = new LoginPage(page);

    await loginpage.navigateToLoginPage();
    await loginpage.fillUserNmae("Rajesh");
    await loginpage.fillPassword("Test@123");
    

    const homePage= await loginpage.clickLoginButton();

    homePage.expectPageTitleVisible();


});


