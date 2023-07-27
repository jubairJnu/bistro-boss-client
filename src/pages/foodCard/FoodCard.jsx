import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";


const FoodCard = ({ item }) => {
  const { name, recipe, image, price, _id } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] =useCart();
  const handleAddToCart = item => {
    console.log(item);
    if (user && user.email) {
      const cartItem = {foodItemId:_id,name, image, price, email: user.email}
      fetch('http://localhost:5000/carts',{
        method:'POST',
        headers:{
          'content-type': 'application/json'
        },
        body:JSON.stringify(cartItem)
      })
      .then(res => res.json())
      .then(data => {
        if(data.insertedId){
          refetch();
                  Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Added to Cart',
            showConfirmButton: false,
            timer: 1500
          })
        }
      }
       
        )
    }
    else{
      Swal.fire({
        title: 'Please log in to add cart',
               icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Log In'
      }).then((result) => {
        if (result.isConfirmed) {
         navigate('/login',{state:{from:location}})
        }
      })
      
    }
  }
  


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
          <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 border-orange-500 border-b-4 mt-5">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;