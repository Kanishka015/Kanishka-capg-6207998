import{test} from '@playwright/test';

//get
test('API Testing', async ({request}) => {
    const response = await request.get('https://www.shopperstack.com/users/login',{
        data: {
            email: 'rutu@gmail.com',
            password: 'SHOPPER'
        },ignoreHTTPSErrors:true
    });
    const responseBody = await response.json();
    console.log(responseBody);
})