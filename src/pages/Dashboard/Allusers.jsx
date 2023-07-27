import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Allusers = () => {
  const {data:users = [], refetch} = useQuery(['users'], async()=>{
    const res = await fetch('http://localhost:5000/users');
    return res.json();
  })
  return (
    <div>
      <h1 className='text-3xl'>Total Users:{users.length} </h1>
    </div>
  );
};

export default Allusers;