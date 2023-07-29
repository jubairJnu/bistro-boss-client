import { useQuery } from '@tanstack/react-query';


const useMenu = () => {
 
  // useEffect(() => {
  //   fetch('http://localhost:5000/menu')
  //     .then(res => res.json())
  //     .then(data => {
  //       setMenu(data);
  //       setLoading(false);
  //       // console.log(data);
  //     })
  // }, [])

  const {data: menu =[], isLoading: loading} = useQuery({
    queryKey:['menu'],
    queryFn: async()=>{
      const res =await fetch('http://localhost:5000/menu')
      return res.json();
    }
  })

  return [menu,loading]
};

export default useMenu;