import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { FaCheckSquare } from "react-icons/fa";

function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  const fileRef = useRef(null);
  const [file, setFile] = useState(undefined);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {
    //setFormData({ ...formData, avatar: `${URL.createObjectURL(file)}` });
    // const data = new FormData();
    // data.append("file", file);
    // data.append("upload_preset", "evwzn4c8");
    // data.append("cloud_name", "ndeshpande");
    // fetch("https://api.cloudinary.com/v1_1/ndeshpande/image/upload", {
    //   method: "POST",
    //   body: data,
    // })
    //   .then((res) => res.json())
    //   .then((data) => setFormData({ ...formData, avatar: data?.url }))
    //   .catch((err) => console.log(err));
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <input
          type="file"
          ref={fileRef}
          hidden
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <img
          onClick={() => fileRef.current.click()}
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"
          src={file ? URL.createObjectURL(file) : currentUser.avatar}
          alt="profile"
        />
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg"
          id="username"
        />
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg"
          id="email"
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
        />
        <button className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80">
          Update
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer">Delete account</span>
        <span className="text-red-700 cursor-pointer">Sign out</span>
      </div>
    </div>
  );
}
export default Profile;
