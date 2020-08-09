import React from "react";

const Iframe = ({ source }) => {
  if (!source) {
    return <div>Loading...</div>;
  }

  const src = source;
  return (
    // basic bootstrap classes. you can change with yours.
    <div>
      <div className="emdeb-responsive">
        <iframe
          src={src}
          style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            objectFit: "cover",
            height: "100%",
            transform: "translate(-50%,-50%)",
            zIndex: "-1",
          }}
          width="20000"
          height="710"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Iframe;
