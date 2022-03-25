import React from "react";
import DogList from "../components/DogList";
import { getDogBreeds, getDogImage } from "../api/index.js";
import { getFiveRandomBreeds } from "../utils/index.js";

class Home extends React.Component {
  state = {
    dogs: [],
    isLoading: true
  }

  async componentDidMount() {
    const breeds = await getDogBreeds();
    const randomBreeds = await getFiveRandomBreeds(breeds, getDogImage);
    this.setState({
      dogs: randomBreeds,
      isLoading: false
    });
  }

  render() {
    const { dogs, isLoading } = this.state;
    return (
      <div className={`home flex flex-col justify-center
        ${isLoading ? 'h-screen' : ''}`}
      >
        <h1 className="m-5 text-2xl text-center font-bold">Dogs 🐶</h1>
        {/* if loading show message */}
        {isLoading
          && <p className="align-center content-center">Hold on, fetching data may take some time :)</p>
        }
        {/* if not loading show dog list */}
        {!isLoading
          && <DogList dogs={dogs} />
        }
      </div>
    );
  }
}

export default Home;
