const CounterContainer = ({ children }) => {
  return (
    <div className="px-4 py-5 m-auto text-center w-75 counter-container">
      <div className="text-center">
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
};

export default CounterContainer;
