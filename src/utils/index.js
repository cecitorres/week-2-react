// Function to pick 5 random breeds from the list of breeds
async function getFiveRandomBreeds(breeds, dogImage) {
  const randomBreeds = [];
  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * breeds.length);
    // Get a random dog image for each breed
    const image = await dogImage(breeds[randomIndex]);
    const dogInfo = {
      breed: breeds[randomIndex],
      image
    };
    randomBreeds.push(dogInfo);
  }
  return randomBreeds;
}

export {
  getFiveRandomBreeds
}