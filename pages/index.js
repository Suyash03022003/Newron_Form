import React, { useState, useRef } from 'react';
import { Inter } from 'next/font/google'
import sendDataToApi from './sendData';
import logo from './images/logo.png';
import aside from './images/aside.avif';
import Image from 'next/image';
import selectCities from './state';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: '',
    line1: '',
    line2: '',
    pin: '',
    state: '',
    city: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const selectStateChange = (event) => {
    handleInputChange(event);
    var option = selectCities(event.target.value);
    console.log(option);
    var city = document.getElementById("city");
    city.innerHTML = "<option>Select City</option>";
    for(let i = 0; i < option.length; i++) {
      city.innerHTML += "<option value = " + option[i] + ">" + option[i] + "</option>";
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    sendDataToApi(formData)
      .then((response) => {
        if (response) {
          console.log('Data sent successfully:', response);
          setFormData({});
          formRef.current.innerHTML = "<p class='text-4xl'>Thank you!<br />Your Info has<br />been updated.</p>";
        }
      })
      .catch((error) => {
        console.error('Error sending data:', error);
      });
  };
  
  return (
    <div className="container">
      <div className="container flex items-center gap-7 mt-5 pl-5">
        <Image
          src={logo}
          width={40}
          height={40}
          alt="Picture of the author"
        />
        <h2 className='text-xl'>Newron AI</h2>
      </div>
      <div className="container mt-14 flex gap-16 items-center justify-center mb-20">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col w-1/3 gap-4"
        >
          <input
            required
            placeholder="Email Address*"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="border-[1px] border-black rounded-lg px-5 py-3 text-gray-400"
          />
          <input
            required
            placeholder="Name*"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="border-[1px] border-black rounded-lg px-5 py-3 text-gray-400"
          />
          <input
            required
            placeholder="Phone Number*"
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="border-[1px] border-black rounded-lg px-5 py-3 text-gray-400"
          />
          <h3 className="mt-5">Address</h3>
          <input
            required
            placeholder="Line 1*"
            type="text"
            name="line1"
            value={formData.line1}
            onChange={handleInputChange}
            className="border-[1px] border-black rounded-lg px-5 py-3 text-gray-400"
          />
          <input
            required
            placeholder="Line 2*"
            type="text"
            name="line2"
            value={formData.line2}
            onChange={handleInputChange}
            className="border-[1px] border-black rounded-lg px-5 py-3 text-gray-400"
          />
          <input
            required
            placeholder="PINCODE / ZIP*"
            type="number"
            name="pin"
            value={formData.pin}
            onChange={handleInputChange}
            className="border-[1px] border-black rounded-lg px-5 py-3 text-gray-400"
          />
          <div className="flex gap-5">
            <select
              required
              placeholder="State*"
              type="text"
              name="state"
              value={formData.state}
              onChange={selectStateChange}
              className="w-1/2 border-[1px] border-black rounded-lg px-5 py-3 text-gray-400 appearance-none"
            >
              <option>Select State</option>
              <option value="Andra Pradesh">Andra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jammu and Kashmir">Jammu and Kashmir</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madya Pradesh">Madya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Orissa">Orissa</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttaranchal">Uttaranchal</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="West Bengal">West Bengal</option>
              <option disabled className="bg-[#aaa] text-white">UNION Territories</option>
              <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
              <option value="Daman and Diu">Daman and Diu</option>
              <option value="Delhi">Delhi</option>
              <option value="Lakshadeep">Lakshadeep</option>
              <option value="Pondicherry">Pondicherry</option>
            </select>
            <select
              required
              placeholder="City*"
              type="text"
              name="city"
              id="city"
              value={formData.city}
              onChange={handleInputChange}
              className="w-1/2 border-[1px] border-black rounded-lg px-5 py-3 text-gray-400 appearance-none"
            >
              <option>Select City</option>
            </select>
          </div>
          <button
            type="submit"
            className="mt-4 border-[1px] border-black rounded-lg px-5 py-3"
          >
            Send
          </button>
        </form>
        <div className="w-1/3">
          <Image
            src={aside}
            className="w-full h-auto"
            alt="Picture of the author"
          />
        </div>
      </div>
    </div>
  );
};