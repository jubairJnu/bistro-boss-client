import { useForm } from "react-hook-form";
import SectionTitle from "../../component/SectionTitle";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_IMAGE_HOSTING;

const AddItem = () => {
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

  const onSubmit = data => {

    const formData = new FormData();
    formData.append('image', (data.image[0]));
    fetch(img_hosting_url, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(responseImage => {
        if (responseImage.success) {
          const imgURL = responseImage.data.display_url;
          const { name, price, category, recipe } = data;
          const newMenu = { name, price: parseFloat(price), category, recipe, image: imgURL };
          console.log(newMenu);
          axiosSecure.post('/menu', newMenu)
            .then(data => {
              console.log('afeter posting', data.data);
        if(data.data.insertedId){
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Added Item Successfully',
            showConfirmButton: false,
            timer: 1500
          })
        }
              
            })

        }
      })

  }

  return (
    <div className="w-full pl-10">
      <SectionTitle sunmHeading={"What's New"} heading={"Add An Item"}></SectionTitle>
      {/* ------------ */}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text font-semibold">Recipe Name*</span>
          </label>
          <input  {...register("name", { required: true, maxLength: 120 })} type="text" placeholder="Type here" className="input input-bordered w-full " />
        </div>

        <div className="flex gap-5">

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-semibold">Category*</span>

            </label>
            <select defaultValue="pick One" {...register("category", { required: true })} className="select select-bordered">
              <option disabled >Pick One</option>
              <option>Salad</option>
              <option>Pizza</option>
              <option>Soup</option>
              <option>Dessert</option>
              <option>Drink</option>
            </select>
          </div>

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <input {...register("price", { required: true })} type="number" placeholder="Price" className="input input-bordered w-full " />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Recipe Details</span>
          </label>
          <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>

        </div>
        <input {...register("image", { required: true })} type="file" className="file-input w-full max-w-xs" />
        <div>
          <input className="btn btn-sm mt-9" type="submit" value="Add Item" />
        </div>
      </form>

    </div>
  );
};

export default AddItem;