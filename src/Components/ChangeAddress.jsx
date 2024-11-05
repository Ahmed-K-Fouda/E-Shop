import { useState } from "react";

function ChangeAddress({ setIsModalOpen, setAddress }) {
  const [newAddress, setNewAddress] = useState("");

  function handleSaveAddress() {
    if (newAddress === "") return alert("please enter your address");
    setAddress(newAddress);
    setIsModalOpen(false);
  }

  return (
    <div>
      <label className="text-lg">Change your address</label>
      <input
        type="text"
        name=""
        className="border p-2 w-full mb-4 mt-3"
        value={newAddress}
        onChange={(e) => setNewAddress(e.target.value)}
      />
      <div className="flex justify-end">
        <button
          className="bg-gray-500 text-white py-2 px-4 rounded mr-2"
          onClick={() => setIsModalOpen(false)}
        >
          Cancel
        </button>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          onClick={handleSaveAddress}
        >
          Save Address
        </button>
      </div>
    </div>
  );
}

export default ChangeAddress;
