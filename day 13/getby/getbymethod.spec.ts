import {test} from "@playwright/test";

test("getbymethod", async ({page}) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    // await page.getbyLabel("Username").fill("student");
    // await page.getbyLabel("Password").fill("Password123");
    // await page.getbytext("Submit").click();

    await page.getByRole("textbox", { name: "Username" , exact: true});
})

