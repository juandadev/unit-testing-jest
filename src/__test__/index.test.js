const randomStrings = require("../index");

describe("Testing functionalities", () => {
  test("Testing the random function", () => {
    expect(typeof randomStrings()).toBe("string");
  });

  test("Testing that an animal doesn't exists", () => {
    expect(randomStrings()).not.toMatch(/🐔/);
  });
});
