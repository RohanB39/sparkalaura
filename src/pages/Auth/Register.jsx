import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import logo from "../../assets/Navlogo.png";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    pinCode: "",
    name: "",
    email: "",
    password: "",
    mobile: "",
    flatNo: "",
    street: "",
    city: "",
    taluka: "",
    district: "",
    state: "",
    country: "",
  });

  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (e.target.name === "pinCode" && e.target.value.length === 6) {
      fetchLocationData(e.target.value);
    }
  };

  const fetchLocationData = async (pinCode) => {
    try {
      const response = await axios.get(`https://api.postalpincode.in/pincode/${pinCode}`);
      const data = response.data;

      if (data && data[0].Status === "Success") {
        setCities(data[0].PostOffice);
        setFormData((prev) => ({
          ...prev,
          district: data[0].PostOffice[0].District,
          state: data[0].PostOffice[0].State,
          country: data[0].PostOffice[0].Country,
          taluka: "",
        }));
        setSelectedCity("");
      } else {
        setCities([]);
        setFormData((prev) => ({
          ...prev,
          district: "",
          state: "",
          country: "",
          taluka: "",
        }));
      }
    } catch (error) {
      console.error("Error fetching location:", error);
      setCities([]);
    }
  };

  const handleCityChange = (e) => {
    const selectedName = e.target.value;
    setSelectedCity(selectedName);
    const selectedLocation = cities.find((city) => city.Name === selectedName);

    if (selectedLocation) {
      setFormData((prev) => ({
        ...prev,
        city: selectedName,
        taluka: selectedLocation.Block || selectedLocation.Name,
      }));
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const fullAddress = `${formData.flatNo}, ${formData.street}, ${formData.city}, ${formData.taluka}, ${formData.district}, ${formData.state}, ${formData.country} - ${formData.pinCode}`;
    const formattedData = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      mobile: formData.mobile,
      fullAddress,
    };
    console.log("Form Data:", formattedData);
  };
  
  
  

  return (
    <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8">
      <motion.div
        className="sm:mx-auto sm:w-full sm:max-w-md"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <img src={logo} alt="Logo" className="filter invert grayscale contrast-200 mx-auto" />
        <motion.h2
          className="mt-2 text-center text-2xl font-medium text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.3 }}
        >
          Create an Account
        </motion.h2>
      </motion.div>

      <motion.div
        className="mt-1 sm:mx-auto sm:w-full sm:max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.5 }}
      >
        <motion.form className="space-y-6" onSubmit={handleRegister}>
          {/* Pin Code at the top */}
          <div>
            <label className="block text-sm font-medium text-gray-900">Pin Code</label>
            <input
              type="text"
              name="pinCode"
              value={formData.pinCode}
              onChange={handleChange}
              placeholder="Enter pin code to get address details"
              required
              className="mt-2 block w-full outline-none border bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-indigo-600"
            />
          </div>

          {/* 3-column grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div>
              <label className="block text-sm font-medium text-gray-900">Full Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Jonh Doe" required className="mt-2 block w-full outline-none border bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-indigo-600" />
            </motion.div>

            <motion.div>
              <label className="block text-sm font-medium text-gray-900">Email Address</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="johndoe@gmail.com" required className="mt-2 block w-full outline-none border bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-indigo-600" />
            </motion.div>

            <motion.div>
              <label className="block text-sm font-medium text-gray-900">Password</label>
              <input type="password" name="password" value={formData.password} placeholder="******" onChange={handleChange} required className="mt-2 block w-full outline-none border bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-indigo-600" />
            </motion.div>

            <motion.div>
              <label className="block text-sm font-medium text-gray-900">Mobile Number</label>
              <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="7028494950" required className="mt-2 block w-full outline-none border bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-indigo-600" />
            </motion.div>

            <motion.div>
              <label className="block text-sm font-medium text-gray-900">Flat No/Building Name</label>
              <input type="text" name="flatNo" value={formData.flatNo} onChange={handleChange} placeholder="Flat no -3, Sunshine Corner" required className="mt-2 block w-full outline-none border bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-indigo-600" />
            </motion.div>

            <motion.div>
              <label className="block text-sm font-medium text-gray-900">Street</label>
              <input type="text" name="street" value={formData.street} onChange={handleChange} placeholder="Sawatamali nagar bhujbal mala" required className="mt-2 block w-full outline-none border bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-indigo-600" />
            </motion.div>

            {/* Auto-filled fields */}
            <motion.div>
              <label className="block text-sm font-medium text-gray-900">City/Village</label>
              <select name="city" value={selectedCity} onChange={handleCityChange} className="mt-2 block w-full outline-none border bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 focus:outline-indigo-600">
                <option value="">Select City/Village</option>
                {cities.map((city, index) => (
                  <option key={index} value={city.Name}>
                    {city.Name}
                  </option>
                ))}
              </select>
            </motion.div>

            <motion.div>
              <label className="block text-sm font-medium text-gray-900">Taluka</label>
              <input type="text" name="taluka" value={formData.taluka} readOnly className="mt-2 block w-full bg-gray-200 px-3 py-1.5 outline-none border text-gray-900" />
            </motion.div>

            <motion.div>
              <label className="block text-sm font-medium text-gray-900">District</label>
              <input type="text" name="district" value={formData.district} readOnly className="mt-2 block w-full bg-gray-200 px-3 py-1.5 outline-none border text-gray-900" />
            </motion.div>

            <motion.div>
              <label className="block text-sm font-medium text-gray-900">State</label>
              <input type="text" name="state" value={formData.state} readOnly className="mt-2 block w-full bg-gray-200 px-3 py-1.5 outline-none border text-gray-900" />
            </motion.div>

            <motion.div>
              <label className="block text-sm font-medium text-gray-900">Country</label>
              <input type="text" name="country" value={formData.country} readOnly className="mt-2 block w-full bg-gray-200 px-3 py-1.5 outline-none border text-gray-900" />
            </motion.div>
          </div>

          <motion.button type="submit" className="w-full cursor-pointer bg-indigo-600 text-white font-semibold py-2 outline-none border hover:bg-indigo-500">
            Register
          </motion.button>
        </motion.form>
        <motion.p 
                    className="mt-10 text-center text-sm text-gray-500 cursor-pointer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, delay: 1.5 }}
                >
                    Alredy have a account? <Link to={"/login"} className="font-semibold text-indigo-600 hover:text-indigo-500">Log In</Link>
                </motion.p>
      </motion.div>
    </div>
  );
};

export default Register;
