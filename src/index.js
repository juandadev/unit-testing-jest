const animals = [
  "🐶",
  "🐱",
  "🐭",
  "🐹",
  "🐰",
  "🐻",
  "🐼",
  "🐨",
  "🐯",
  "🦁",
  "🐮",
  "🐷",
];

const randomString = () => {
  const string = animals[Math.floor(Math.random() * animals.length)];

  return string;
};

module.exports = randomString;
