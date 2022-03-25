async function getDogBreeds() {
  try {
    const response = await fetch('https://dog.ceo/api/breeds/list/all');
    const { message } = await response.json();
    return Object.keys(message);
  } catch (error) {
    console.log(error);
  }
}

async function getDogImage(breed) {
  try {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
    const { message } = await response.json();
    return message;
  } catch (error) {
    console.log(error);
  }
}

export {
  getDogBreeds,
  getDogImage
}