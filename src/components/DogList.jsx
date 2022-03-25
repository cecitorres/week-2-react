import DogItem from "./DogItem";

const DogList = ({ dogs }) => {
  return (
    <div className="dog-list">
      {dogs.map((dog, i) => (
        <DogItem key={i} dog={dog} />
      ))}
    </div>
  );
}

export default DogList;