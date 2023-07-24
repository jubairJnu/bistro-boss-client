
import SectionTitle from '../../component/SectionTitle';
import MenuCard from '../MenuCard/MenuCard';
import useMenu from '../../hooks/useMenu';

const PopularMenu = () => {
  const [menu] = useMenu() ;
  const popular = menu.filter(item=> item.category === 'popular');
  // useEffect(() => {
  //   fetch('menu.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       const popularMenu = data.filter(item => item.category === 'popular')
  //       setMenu(popularMenu);
  //       console.log(data);
  //     })
  // }, [])
  return (
    <div>
      <SectionTitle
      heading={'from our menu'}
      sunmHeading={'check it out'}></SectionTitle>
      <div className='grid md:grid-cols-2 gap-16 my-12'>
        {
          popular.map(item=><MenuCard
          key={item._id}
          item={item}></MenuCard>)
        }
      </div>

    </div>
  );
};

export default PopularMenu;