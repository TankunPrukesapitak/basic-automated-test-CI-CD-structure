import type { Page, Locator } from '@playwright/test';
import { data, locator } from '../testdata/import';


// export async function login(request, yourusername: string, yourpassword: string) {
//     const body = new URLSearchParams();
//     const login = await request.post(
//       `${data.BaseURL}${data.loginAPI_path}`,
//       {
//         headers: {
//           'Content-Type': "application/x-www-form-urlencoded",
//         },
//         form: {
//           username: yourusername,
//           password: yourpassword,
//         }
//       }
//     );
    
//     expect(login.status()).toBe(200);
//     const authFile = 'playwright/.auth/UserPlaywright_prod.json';
//     await request.storageState({ path: authFile });
// }