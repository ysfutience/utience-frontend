import { useState } from "react";

const Avatar = ({ image, alt, size, bg = "orange" }) => {
  let [state, setState] = useState(5);


  return (
    <div style={{backgroundColor: bg}}>
      <img
        src={image}
        alt={alt}
        style={{
          borderRadius: "50%",
          width: size,
          height: size,
        }}
      />
      <div style={{ fontSize: "44px" }}>{state}</div>
    </div>
  );
};

export default Avatar;
