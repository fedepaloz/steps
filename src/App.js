import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
const steps = 0;
const isOpen = true;
export default function App() {
  const [step, setStep] = useState(steps);
  function handleNext() {
    if (step < 2) {
      setStep((curStep) => curStep + 1);
    }
    return;
  }
  function handlePrevious() {
    if (step > 0) {
      setStep(step - 1);
    }
    return;
  }
  const [close, setClose] = useState(isOpen);
  function handleClose() {
    setClose(false);
  }
  return (
    <div>
      {close && (
        <div className="steps">
          <button onClick={handleClose}>X</button>
          <div className="numbers">
            <div className={`${step >= 0 ? "active" : ""}`}>1</div>
            <div className={`${step >= 1 ? "active" : ""}`}>2</div>
            <div className={`${step >= 2 ? "active" : ""}`}>3</div>
          </div>
          <p className="message">
            step {step + 1}:{messages[step]}
          </p>
          <div className="buttons">
            <button
              onClick={handlePrevious}
              style={{ backgroundColor: "#7590f2", color: "#fff" }}
            >
              previous
            </button>
            <button
              onClick={handleNext}
              style={{ backgroundColor: "#7590f2", color: "#fff" }}
            >
              next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
