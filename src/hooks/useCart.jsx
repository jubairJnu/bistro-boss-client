import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
const useCart = () =>{
  const {user} =useContext(AuthContext);
  // const token = localStorage.getItem('access-token')
  const [axiosSecure] = useAxiosSecure();

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ['cart', user?.email],
  //   queryFn:async () =>{
  //     const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`,{
  //       headers:{
  //         authorization: `bearer ${token}`
  //       }
  //     })
  //     return res.json()
  //   },
  // })
    queryFn:async () =>{
      const res = await axiosSecure(`/carts?email=${user?.email}`)
      return res.data;
    },
  })
  return [cart, refetch];

}
export default useCart;