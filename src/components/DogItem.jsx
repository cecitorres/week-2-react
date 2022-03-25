const DogItem = ({ dog }) => {
  return (
    <div className="dog-item my-6">
      <div className="dog-image">
        <img className="object-cover h-48 w-full" src={dog.image} alt={dog.breed} />
      </div>
      <div className="mt-2 text-base text-center">{dog.breed}</div>
    </div>
  );
}

export default DogItem;
