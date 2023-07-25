import { Link } from "react-router-dom";
import MenuCard from "../MenuCard/MenuCard";
import Cover from "../cover/Cover";


const MenuCategory = ({ items, title, picture, subtitle }) => {
  return (
    <div className="my-10">
      {title && <Cover
        picture={picture}
        title={title}
        subtitle={subtitle}></Cover>}
      <div className='grid md:grid-cols-2 gap-16 my-12'>
        {
          items.map(item => <MenuCard
            key={item._id}
            item={item}></MenuCard>)
        }
      </div>
      <Link to={`/order/${title}`}> <button className="mx-auto text-center btn-sm btn-outline border-0 border-b-4 mt-5 ">ORDER YOUR FAVOURITE FOOD</button></Link>
    </div>
  );
};

export default MenuCategory;