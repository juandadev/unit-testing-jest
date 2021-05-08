const text = "Hello World";
const fruits = ["🍎", "🍈", "🍌"];
const num = 10;
const bool = true;

// Test fro Strings
test("Must contain a text", () => {
  expect(text).toMatch(/World/);
});

// Test for Arrays
test("Are there a banana?", () => {
  expect(fruits).toContain("🍌");
});

// Test for Numbers
test("Greater than", () => {
  expect(num).toBeGreaterThan(9);
});

// Test for Booleans
test("True", () => {
  expect(bool).toBeTruthy();
});

// Test for Callbacks
const reverseString = (str, callback) => {
  callback(str.split("").reverse().join(""));
};

test("Testing a callback", () => {
  reverseString(text, (str) => {
    expect(str).toBe("dlroW olleH");
  });
});
