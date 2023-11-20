import { useState } from "react";
import { data } from "./content/data.json";
import HeaderComponent from "./components/Header";
import TableComponent from "./components/Table";

function App() {
  const [dataList, setDataList] = useState([...data]);

  return (
    <div className="w-full p-36 ">
      {/* Code here */}

      <div className="bg-white rounded-xl w-full h-full p-5">
        <HeaderComponent setDataList={setDataList} />
        <TableComponent dataList={dataList} setDataList={setDataList} />
      </div>
    </div>
  );
}

export default App;
