export const resolver = (times, generator) => {
  const data = [];

  for (let i = 0; i < times; i++) {
    data.push(generator());
  }

  console.log(JSON.stringify(data));
};
