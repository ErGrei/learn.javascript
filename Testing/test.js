const { Builder, By, Key, until } = require("selenium-webdriver");
let driver = new Builder().forBrowser("chrome").build();
async function newFunction_1() {

  await driver.get("file:///G:/01_Обучение/6SE/learn.javascript/Testing/index.html");
  return driver;
}
newFunction_1();
async function test() {
  try {

    await driver.wait(until.elementLocated(By.id("usernameInput")), 5000);
    await driver.findElement(By.id("usernameInput")).sendKeys("Иван");
    console.log("Инпут работает");
    await driver.findElement(By.id("passwordInput")).sendKeys("secret");
    console.log("Пароль работает");
    await driver.findElement(By.id("submitButton")).click();
    console.log("Кнопка нажымается");
    await driver.findElement(By.id("rememberInput")).click();
    console.log("Чекбокс выбран");
      setTimeout(() => {
      newFunction(driver);
    }, 4000); 
  } catch (error) {
    console.error(error);
    throw error;
  }
  async function newFunction(driver) {
    await driver.findElement(By.id("resetButton")).click();
    console.log("Поля сброшены");
  }
}
setTimeout(() => {
  test()
}, 6000); 


