let CurrentTime = () => {
  let currentTime = new Date();

  return (
    <p className="text-center p-[2.5rem] bg-green-700 text-white">
      This is the current Date : {currentTime.toLocaleDateString()} and Time :
      {currentTime.toLocaleTimeString()}
    </p>
  );
};
export default CurrentTime;
