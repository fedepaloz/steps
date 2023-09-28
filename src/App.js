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
          <div className="numbers">
            <div className={`${step >= 0 ? "active" : ""}`}>1</div>
            <div className={`${step >= 1 ? "active" : ""}`}>2</div>
            <div className={`${step >= 2 ? "active" : ""}`}>3</div>
          </div>
          <StepMessage step={step}>{messages[step]}</StepMessage>
          <div className="buttons">
            <Button bgColor="#7590f2" textColor="#fff" onClick={handlePrevious}>
              <span>{"<--"}</span>previous
            </Button>
            <Button bgColor="#7590f2" textColor="#fff" onClick={handleNext}>
              next<span>{"-->"}</span>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h4>Step {step + 1}</h4>
      {children}
    </div>
  );
}
function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {children}
    </button>
  );
}
