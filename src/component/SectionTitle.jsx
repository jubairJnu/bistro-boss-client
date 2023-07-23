

const SectionTitle = ({heading, sunmHeading}) => {
  return (
    <div className='md:w-4/12 text-center mx-auto'>
      <p className='text-yellow-600 pb-4'>---{sunmHeading}---</p>
      <h3 className='text-4xl py-4 border-y-4 uppercase'>{heading}</h3>
    </div>
  );
};

export default SectionTitle;