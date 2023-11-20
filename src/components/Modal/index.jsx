import { Button, Form, Input, Modal } from "antd";
import React, { useState } from "react";

const ModalComponent = ({ isOpen, setIsOpen, setDataList }) => {
  const [formData, setFomData] = useState({
    name: "",
    address: "",
    age: "",
  });

  const onChangeData = (e) => {
    setFomData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = () => {
    setDataList((prevData) => [...prevData, formData]);
    setIsOpen(false);
  };
  return (
    <Modal
      title={<div className="text-xl text-blue-600">Tambah Data Siswa</div>}
      centered
      open={isOpen}
      onOk={() => {}}
      onCancel={() => setIsOpen(false)}
      footer={
        <div className="flex items-center justify-center">
          <Button onClick={() => setIsOpen(false)}>Kembali</Button>
          <Button type="primary" onClick={onSubmit}>
            Simpan
          </Button>
        </div>
      }
    >
      <Form className="py-4" onFinish={() => {}}>
        <div>
          <label htmlFor="name">Nama</label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={onChangeData}
          />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <Input
            id="address"
            name="address"
            value={formData.address}
            onChange={onChangeData}
          />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <Input
            id="age"
            name="age"
            value={formData.age}
            onChange={onChangeData}
          />
        </div>
      </Form>
    </Modal>
  );
};

export default ModalComponent;
