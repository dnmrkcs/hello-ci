const { Builder, By } = require("selenium-webdriver");

test("homepage displays Welcome to CI/CD", async () => {
  let driver = await new Builder()
    .forBrowser("chrome")
    .usingServer(process.env.SELENIUM_URL)
    .build();

  try {
    await driver.get("http://jenkins:3000");

    const heading = await driver.findElement(By.css("h1"));
    const text = await heading.getText();

    expect(text).toBe("Welcome to CI/CD");
  } finally {
    await driver.quit();
  }
});
