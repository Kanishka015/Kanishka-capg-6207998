import { test } from '@playwright/test';

test('Amazon Jobs Student Internship Flow', async ({ page }) => {
  // 1. Open Amazon Jobs
  await page.goto('https://www.amazon.jobs/en/');

  // 2. Click "Find your role" specifically under Student Opportunities
  await page.getByRole('link', {name: 'Student opportunities'})

  // 3. Click "Internships for students"
  await page.getByRole('link', { name : 'Internships for students'})

  // 4. Click "Find open internships"
  await page.getByRole('link', { name: 'Find open internships' })

  // 5. Apply filters (ticking first three available checkboxes)
  // Amazon uses buttons that look like checkboxes; we wait for results between clicks
  await page.locator('button.checkbox-input').nth(0).click();
  await page.waitForTimeout(1500); 
  
  await page.locator('button.checkbox-input').nth(1).click();
  await page.waitForTimeout(1500);

  await page.locator('button.checkbox-input').nth(2).click();
  await page.waitForTimeout(1500);

  // 6. Click on the first Job Title
  await page.locator('h3.job-title').first().click();

  // 7. Click Apply Now
  await page.locator("//button[contains(., 'Apply now')]").first().click();

  // 8. Final Screenshot
  await page.screenshot({ path: 'amazon_intern_apply.png', fullPage: true });
  
  console.log("Successfully navigated to the application page.");
});