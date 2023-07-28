import { useQuery } from '@tanstack/react-query';

import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Allusers = () => {
  const { data: users = [], refetch } = useQuery(['users'], async () => {
    const res = await fetch('http://localhost:5000/users');
    return res.json();
  });

  const handleMakeAdmin = user => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: 'PATCH'
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            title: `${user.name} is an admin now`,
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
        }
      })
  }

  // handle delete******//
  const handleDelete = user => {
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

        fetch(`http://localhost:5000/users/admin/${user._id}`,{
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
    <div>
      <h1 className='text-3xl'>Total Users:{users.length} </h1>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead >
            <tr>
              <th> # </th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, index) => <tr
                key={user._id}>
                <th>
                  {index + 1}
                </th>
                <td>
                  {user.name}
                </td>
                <td>
                  {user.email}
                </td>
                <td>{
                  user.role == 'admin' ? 'admin' :
                    <button onClick={() => handleMakeAdmin(user)} className="btn  btn-xs bg-orange-600 text-white"><FaUserShield /></button>
                }</td>
                <th>
                  <button onClick={() => handleDelete(user)} className="btn  btn-xs bg-red-600 text-white"><FaTrashAlt /></button>
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

export default Allusers;