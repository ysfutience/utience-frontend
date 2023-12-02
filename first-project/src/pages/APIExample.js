import { Button, Input, List } from "antd";
import { useEffect, useState, useContext } from "react";
import { DataContext } from "..";
import Block from "../components/Block";

export default function APIExample() {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");
  const [isProblemOccured, setIsProblemOccured] = useState(false);

  const myData = useContext(DataContext);

  console.log(myData)

  const handleInputChange = (event) => {
    setSearch(event.target.value);
  };

  async function fetchApiHandler() {
    try {
      const response = await fetch(
        `https://swapi.dev/api/pople/?search=${search}`
      );
      const data = await response.json();
      setResults(data);
    } catch (err) {
      console.log(err);
      setIsProblemOccured(true);
    }
  }


  function searchQuery() {
    fetchApiHandler();
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <Input onChange={handleInputChange} />
      <div className="my-4">
        <Button onClick={() => searchQuery()}>Search</Button>
      </div>

      <Block />

      <div className="w-full">
        {isProblemOccured ? (
          <div>Problem Occured</div>
        ) : (
          <List
            size="small"
            bordered
            dataSource={results.results}
            renderItem={(item) => <List.Item>{item.name}</List.Item>}
          />
        )}
      </div>
    </div>
  );
}
