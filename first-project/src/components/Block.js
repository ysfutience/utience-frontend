import { useContext } from "react";
import { DataContext } from "..";

const Block = ({ children }) => {
    const data = useContext(DataContext)
    return <div>My children is: {children} {data}</div>;
};
  
export default Block;
  