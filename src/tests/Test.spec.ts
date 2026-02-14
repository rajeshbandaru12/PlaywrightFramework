import {test, expect} from '@playwright/test';

test ('Test', async({page})=>{
    console.log(process.env.NODE_ENV);
    console.log(process.env.URL);
    console.log(process.env.username1);
    console.log(process.env.password);

    
});