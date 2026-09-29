const { Builder, By } = require("selenium-webdriver");

jest.setTimeout(30000);

describe("Home Page E2E Test", () => {
  let driver;

  beforeAll(async () => {
    driver = await new Builder()
      .forBrowser("chrome")
      .usingServer(process.env.SELENIUM_URL || "http://localhost:4444/wd/hub")
      .build();
  });

  afterAll(async () => {
    if (driver) {
      await driver.quit();
    }
  });

  test("should display Hello DevOps", async () => {
    await driver.get("http://jenkins:3000");

    const heading = await driver.findElement(By.css("h1"));
    const text = await heading.getText();

    expect(text).toBe("Hello DevOps");
  });
});
```;
