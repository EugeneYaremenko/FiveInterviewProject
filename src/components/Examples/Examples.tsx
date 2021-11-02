import { MDBBtn } from "mdb-react-ui-kit";
import { useEffect, useMemo, useState, useCallback } from "react";
import Count from "../Count";
import Title from "../Title";

const Examples: React.FC = () => {
  //useMemo
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);

  const complexCompute = (num: number) => {
    console.log("complexCompute");
    let i = 0;
    while (i < 1000000000) i++;
    return num * 2;
  };

  const handleIncrementNumber = () => {
    setNumber((prev) => prev + 1);
  };

  const handleDecrementNumber = () => {
    setNumber((prev) => prev - 1);
  };

  const styles = useMemo(
    () => ({
      color: colored ? "darkred" : "black",
    }),
    [colored]
  );

  const computed = useMemo(() => {
    return complexCompute(number);
  }, [number]);

  useEffect(() => {
    console.log("Styles changed");
  }, [styles]);

  // useCallback
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(5000);

  const handleIncrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const handleIncrementSalary = useCallback(() => {
    setSalary(salary + 1);
  }, [salary]);

  return (
    <div className="examples">
      <Title title="useMemo" />
      <div style={styles}>Result: {computed}</div>
      <MDBBtn onClick={handleIncrementNumber} color="primary">
        Increment
      </MDBBtn>

      <MDBBtn onClick={handleDecrementNumber} color="secondary">
        Decrement
      </MDBBtn>

      <MDBBtn onClick={() => setColored((prev) => !prev)} color="warning">
        Edit
      </MDBBtn>
      <hr />

      <Title title="useCallback" />
      <Count text="Age" count={age} />
      <MDBBtn onClick={handleIncrementAge} color="secondary">
        Increment
      </MDBBtn>

      <Count text="Salary" count={salary} />
      <MDBBtn onClick={handleIncrementSalary} color="secondary">
        Decrement
      </MDBBtn>
    </div>
  );
};

export default Examples;
