function Hello() {
  //  let myName = "varun";
  let hNo = "150";
  let fullName = () => {
    return "Varun";
  };
  return (
    <h3>
      This is the Future Speaking. My name is {fullName()} and my House no. is
      {hNo}
    </h3>
  );
}

export default Hello;
