import { FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../component/SectionTitle";
import useMenu from "../../hooks/useMenu";


const ManageItem = () => {
  const [menu] = useMenu();

// ***handle ***--
const handleUpdate=item=>{
  console.log(item)
}

const handleDelete=item=>{
  console.log(item);
}

  return (
    <div className="w-full">
      <SectionTitle  heading="Manage All Items" sunmHeading="Hurry Up"></SectionTitle>

{/* --------manage tabel */}

<div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead >
            <tr>
              <th> # </th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              menu?.map((item, index) => <tr
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
                <td>
                  {item.email}
                </td>
                <td>{
                  item.role == 'admin' ? 'admin' :
                    <button onClick={() => handleUpdate(item)} className="btn  btn-xs bg-orange-600 text-white">Update</button>
                }</td>
                <th>
                  <button onClick={() => handleDelete(item)} className="btn  btn-xs bg-red-600 text-white"><FaTrashAlt /></button>
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

export default ManageItem;