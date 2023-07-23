
import img from '../../assets/home/featured.jpg'
import SectionTitle from '../../component/SectionTitle';
import './Features.css'
const Features = () => {
  return (
    <div className='featerues bg-fixed my-10'>
      <SectionTitle 
      heading={'FROM OUR MENU'}
      sunmHeading={'check it out'}
      ></SectionTitle>
      <div className='md:flex justify-center items-center py-10 px-20 bg-slate-800 bg-opacity-50 text-white'>
      <div className='w-5/6 '>
        <img src={img} alt="" />
      </div>
      <div className='md: ml-5'>
        <h4 className='text-xl'>
          March 20, 2023 <br />
          WHERE CAN I GET SOME?
        </h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
        <button className="btn btn-outline border-0 border-b-4 mt-5">Read More</button>
      </div>
    </div>
    </div>
  );
};

export default Features;