import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

const Controls = () => {
  let counterValue = useSelector((store) => store.counter);
  const counterInputElement = useRef();
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handleReset = () => {
    dispatch({ type: "RESET" });
  };

  const handlePrivacy = () => {
    dispatch({ type: "PRIVACY" });
  };

  const handleAdd = () => {
    dispatch({
      type: "ADD",
      payload: { number: counterInputElement.current.value },
    });
    counterInputElement.current.value = "";
  };

  const handleSubstract = () => {
    dispatch({
      type: "SUBSTRACT",
      payload: { number: counterInputElement.current.value },
    });
    counterInputElement.current.value = "";
  };

  const handleStartCounter = () => {
    let id = setInterval(() => {
      dispatch({ type: "DECREMENT" });
      counterValue--;
      if (counterValue <= 0) {
        clearInterval(id);
      }
    }, 1000);
  };

  return (
    <div className="col-lg-6 mx-auto w-100">
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
          fdprocessedid="yi9o"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          type="button"
          className="btn btn-danger btn-lg px-4"
          fdprocessedid="qm8ene"
          onClick={handleDecrement}
        >
          Decrement
        </button>
        <button
          type="button"
          className="btn btn-secondary btn-lg px-4"
          fdprocessedid="qm8ene"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center my-3">
        <input
          type="number"
          placeholder="Enter Number"
          className="counter-input"
          ref={counterInputElement}
        />
        <button
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
          fdprocessedid="yi9o"
          onClick={handleAdd}
        >
          Add
        </button>
        <button
          type="button"
          className="btn btn-danger btn-lg px-4"
          fdprocessedid="qm8ene"
          onClick={handleSubstract}
        >
          Substract
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center my-3">
        <button
          type="button"
          className="btn btn-success btn-lg px-4"
          fdprocessedid="qm8ene"
          onClick={handleStartCounter}
        >
          Start
        </button>
        <button
          type="button"
          className="btn btn-warning btn-lg px-4"
          fdprocessedid="qm8ene"
          onClick={handlePrivacy}
        >
          Privacy Toggle
        </button>
      </div>
    </div>
  );
};

export default Controls;
