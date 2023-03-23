import { Card } from "../Card";

function Form({ children }) {
  return (
    <Card
      style={{
        width: "400px",
        border: "2px solid gray",
      }}
    >
      {children}
    </Card>
  );
}

export default Form;
