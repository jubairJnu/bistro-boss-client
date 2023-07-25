

const FoodCard = ({item}) => {
  const {name,recipe,image,price}=item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
    <figure className="px-10 pt-10">
      <img src={image} alt="Product image" className="rounded-xl" />
    </figure>
    <p className="absolute right-0 mr-5 mt-5 text-white p-3 bg-slate-900">${price}</p>
    <div className="card-body items-center text-center">
      <h2 className="card-title">{name}</h2>
      <p>{recipe}</p>
      <div className="card-actions">
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
  );
};

export default FoodCard;