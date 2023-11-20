import React, { useState } from "react";
import ModalComponent from "../Modal";

const HeaderComponent = ({ setDataList }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex items-center justify-between mb-5">
      <h1 className="text-blue-500 font-bold text-2xl">
        Tabel Nama Siswa Yayasan LMAP Peduli
      </h1>
      <button
        className="bg-blue-500 p-3 rounded-lg text-white font-medium"
        onClick={() => setToggle(true)}
      >
        + Tambah Siswa
      </button>
      <ModalComponent
        isOpen={toggle}
        setIsOpen={setToggle}
        setDataList={setDataList}
      />
    </div>
  );
};

export default HeaderComponent;
