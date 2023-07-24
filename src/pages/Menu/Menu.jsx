import { Helmet } from 'react-helmet-async';
import Cover from '../cover/Cover';
import imgMenu from '../../assets/menu/banner3.jpg'
import imgsalad from '../../assets/menu/salad-bg.jpg'
import imgpizza from '../../assets/menu/pizza-bg.jpg'
import imgsoup from '../../assets/menu/soup-bg.jpg'
import imgDessert from '../../assets/menu/dessert-bg.jpeg'
import SectionTitle from '../../component/SectionTitle';
import useMenu from '../../hooks/useMenu';
import MenuCategory from './MenuCategory';


const Menu = () => {
  const [menu] =useMenu();
  const offered = menu.filter(item=> item.category === 'offered');
  const soup = menu.filter(item=> item.category === 'soup');
  const salad = menu.filter(item=> item.category === 'salad');
  const dessert = menu.filter(item=> item.category === 'dessert');
  const pizza = menu.filter(item=> item.category === 'pizza');
  return (
    <div >
      <Helmet>
        <title>Bistro Boss | Menu</title>       
      </Helmet>
      <div className="mb-20">
        <Cover
        picture={imgMenu}
        title={'our menu'}
        subtitle={'Would you like to try a dish?'}></Cover>
        <section>
          <SectionTitle
          sunmHeading={"Don't miss"}
          heading={"today's Offer"}></SectionTitle>
          <MenuCategory items={offered}></MenuCategory>
          <MenuCategory items={dessert}
          title={'dessert'}
          picture={imgDessert}
          subtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></MenuCategory>
          <MenuCategory items={pizza}
          title={'pizza'}
          picture={imgpizza}
          subtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></MenuCategory>
          <MenuCategory items={salad}
          title={'salad'}
          picture={imgsalad}
          subtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}>

          </MenuCategory>
          <MenuCategory items={soup}
          title={'soup'}
          picture={imgsoup}
          subtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}>

          </MenuCategory>

        </section>
     
      <h1>this is menu</h1>
      </div>
    </div>
  );
};

export default Menu;