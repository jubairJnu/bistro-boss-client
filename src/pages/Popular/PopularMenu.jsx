import  { useEffect, useState } from 'react';
import SectionTitle from '../../component/SectionTitle';
import MenuCard from '../MenuCard/MenuCard';

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch('menu.json')
      .then(res => res.json())
      .then(data => {
        const popularMenu = data.filter(item => item.category === 'popular')
        setMenu(popularMenu);
        console.log(data);
      })
  }, [])
  return (
    <div>
      <SectionTitle
      heading={'from our menu'}
      sunmHeading={'check it out'}></SectionTitle>
      <div className='grid md:grid-cols-2 gap-16 my-12'>
        {
          menu.map(item=><MenuCard
          key={item._id}
          item={item}></MenuCard>)
        }
      </div>

    </div>
  );
};

export default PopularMenu;