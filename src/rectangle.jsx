function Rectangle() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100px",
        justifyContent: "center",
        alignItems: "bottom",
        backgroundColor: "lightblue",
        border: "2px solid black",
        borderRadius: "20px"
      }}
    >
      <h2 style={{ textAlign: "center", paddingTop: "20px" }}>
        Hello inside a rectangle
      </h2>
    </div>
  );
}

export default Rectangle;