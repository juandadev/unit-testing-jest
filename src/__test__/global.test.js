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

// Test for Promises
const reverseString2 = (str) => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(Error("Error: there's no text"));
    }

    resolve(str.split("").reverse().join(""));
  });
};

test("Testing a promise", () => {
  return reverseString2(text).then((string) => {
    expect(string).toBe("dlroW olleH");
  });
});

// Test for Async / Await
test("Testing Async / Await", async () => {
  const string = await reverseString2(text);

  expect(string).toBe("dlroW olleH");
});

// Runs code after tests
afterEach(() => console.log("After each test"));
afterAll(() => console.log("After all tests"));

// Same way before tests
beforeEach(() => console.log("Before each test"));
beforeAll(() => console.log("Before all tests"));
