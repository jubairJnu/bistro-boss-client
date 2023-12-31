import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../hooks/useCart";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const MyCart = () => {
  const [cart,refetch] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0)
  const handleItemDelete = item => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`http://localhost:5000/carts/${item._id}`,{
          method:"DELETE"
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              refetch()
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })

      }
    })
  }

  return (
    <div className="w-full ml-10 ">
      <div className="uppercase flex justify-between h-16">
        <h1 className='text-xl'>total order: {cart.length}</h1>
        <h1 className='text-xl'>total Price: ${total}</h1>
       <Link to ='/dashboard/payment'> <button className="btn btn-warning btn-sm">Pay</button></Link>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead >
            <tr>
              <th> # </th>
              <th >Food image</th>
              <th>Food Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              cart.map((item, index) => <tr
                key={item._id}>
                <th>
                  {index + 1}
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>

                  </div>
                </td>
                <td>
                  {item.name}
                </td>
                <td>{item.price}</td>
                <th>
                  <button onClick={() => handleItemDelete(item)} className="btn  btn-xs bg-red-600 text-white"><FaTrashAlt /></button>
                </th>
              </tr>)
            }


          </tbody>
          {/* foot */}


        </table>
      </div>
    </div>
  );
};

export default MyCart;