import { Button, Table } from "antd";
import React from "react";

const COLUMNS = [
  {
    title: "Nama",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Alamat",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Umur",
    dataIndex: "age",
    key: "age",
  },
  { title: "Aksi", dataIndex: "action", key: "action" },
];

const TableComponent = ({ dataList, setDataList }) => {
  const onDeleteItem = (index) => {
    setDataList((prev) => {
      const data = prev.toSpliced(index, 1);
      return data;
    });
  };
  const withAction = dataList.map((data, index) => {
    return {
      ...data,
      action: (
        <>
          <Button>Ubah</Button>
          <Button type="primary" danger onClick={() => onDeleteItem(index)}>
            Hapus
          </Button>
        </>
      ),
    };
  });
  return (
    <div className="w-full">
      <Table dataSource={withAction} columns={COLUMNS} />
    </div>
  );
};

export default TableComponent;
