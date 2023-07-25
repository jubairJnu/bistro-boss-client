import  { useState, } from 'react';
import Cover from '../cover/Cover';
import orderImg from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/useMenu';
import OrderTabs from './OrderTabs';
import { useParams } from 'react-router-dom';

const Order = () => {
const categories = ['salad','soup', 'pizza', 'dessert', 'drinks'];
const {category}=useParams();
const initialIndex = categories.indexOf(category)
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] =useMenu();
   const soup = menu.filter(item=> item.category === 'soup');
  const salad = menu.filter(item=> item.category === 'salad');
  const dessert = menu.filter(item=> item.category === 'dessert');
  const pizza = menu.filter(item=> item.category === 'pizza');
  const drinks = menu.filter(item=> item.category === 'drinks');
  
console.log(category)
  
  return (
    <div className='mb-10'>
      <Cover
      picture={orderImg}
      title={"our shop"}
      subtitle={"Would you like to try a dish?"}></Cover>
       <section className='my-10'>
       <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab>Salad</Tab>
        <Tab>Soup</Tab>
        <Tab>Pizza</Tab>
        <Tab>Dessert</Tab>
        <Tab>Drink</Tab>
      </TabList>
      <TabPanel>
        <OrderTabs items={salad}></OrderTabs>
      </TabPanel>
      <TabPanel>
      <OrderTabs items={soup}></OrderTabs>
      </TabPanel>
      <TabPanel>
      <OrderTabs items={pizza}></OrderTabs>
      </TabPanel>
      <TabPanel>
      <OrderTabs items={dessert}></OrderTabs>
      </TabPanel>
      <TabPanel>
      <OrderTabs items={drinks}></OrderTabs>
      </TabPanel>
    </Tabs>
       </section>
    </div>
  );
};

export default Order;