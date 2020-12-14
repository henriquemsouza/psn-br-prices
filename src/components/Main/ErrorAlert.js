import React from "react";
import { Alert } from "reactstrap";

function ErrorAlert(props) {
  const { errors } = props;
  return (
    <div>
      {errors.length > 0 && (
        <div>
          {errors.map((errorMessage, i) => (
            <Alert color="danger" key={errorMessage + i}>
              <strong>Error:</strong> {errorMessage}
            </Alert>
          ))}
        </div>
      )}
    </div>
  );
}

export default ErrorAlert;
