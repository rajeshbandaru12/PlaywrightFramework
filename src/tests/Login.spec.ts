import{test} from '@playwright/test';
import LoginPage from "../pages/LoginPage";


test('Login',async({page})=>{

    const loginpage = new LoginPage(page);

    await loginpage.navigateToLoginPage();
    await loginpage.openLoginpage();
    await loginpage.fillUserNmae(process.env.username1!);
    await loginpage.fillPassword(process.env.password!);
    

    const homePage= await loginpage.clickLoginButton();

    homePage.expectPageLogoVisible();


});


