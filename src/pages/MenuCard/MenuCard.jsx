

const MenuCard = ({item}) => {
  const {name,recipe,image,price}=item;
  return (
    <div className="flex justify-center items-center">
      <img className="w-20 h-20 mr-2 " style={{borderRadius:'0 200px 200px 200px'}} src={image} alt="" />
      <div>
        <h4>{name}--------</h4>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-600">${price}</p>
    </div>
  );
};

export default MenuCard;