import { expect, test } from "@playwright/test";

test.describe("Home Page", () => {
  test("should display the hero section", async ({ page }) => {
    await page.goto("/");

    // Check for main heading
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

    // Check for CTA button
    await expect(
      page.getByRole("link", { name: /enter the protocol/i })
    ).toBeVisible();
  });

  test("should navigate to dashboard when clicking CTA", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("link", { name: /enter the protocol/i }).click();

    await expect(page).toHaveURL(/dashboard/);
  });

  test("should display protocol phases", async ({ page }) => {
    await page.goto("/");

    // Check for protocol phases
    await expect(page.getByText("Sense")).toBeVisible();
    await expect(page.getByText("See")).toBeVisible();
    await expect(page.getByText("Flow")).toBeVisible();
    await expect(page.getByText("Celebrate")).toBeVisible();
    await expect(page.getByText("Regenerate")).toBeVisible();
  });
});

