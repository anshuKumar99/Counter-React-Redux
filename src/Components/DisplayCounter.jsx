import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const counter = useSelector((store) => store.counter);
  return (
    <p className="lead m-5 fs-1 text-success">
      Counter Current Value : {counter}
    </p>
  );
};

export default DisplayCounter;
