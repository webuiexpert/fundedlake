import { Info } from "lucide-react";

function OneStepPriceCard() {
  const evaluationSteps = [
    { label: "Profit Target", value: "10%" },
    { label: "Daily Loss Limit", value: "5%" },
    { label: "Max Drawdown", value: "6%" },
    { label: "Inactivity Period", value: "30 Days" },
    { label: "Leverage", value: "1:50" },
    { label: "Max Time", value: "-" },
  ];

  const fundedSteps = [
    { label: "Profit Target", value: "-" },
    { label: "Daily Loss Limit", value: "5%" },
    { label: "Max Drawdown", value: "6%" },
    { label: "Inactivity Period", value: "30 Days" },
    { label: "Leverage", value: "1:50" },
    { label: "Max Time", value: "-" },
  ];

  return (
    <div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-12 lg:w-[80%] mx-auto">
        <div className="evalution-phase flex flex-col justify-start items-start bg-dark group duration-300 md:px-8 md:py-12 px-6 py-10">
          <h3 className=" lg:text-[27px] font-extrabold mb-4 uppercase">
            <span className="text-[#00AEEF]">Evaluation</span> Phase
          </h3>
          <hr className="bg-blue-900 border border-primary h-[1px] w-full my-8" />
          <div className="w-[100%]">
            <ul className="flex w-[100%] flex-col gap-6">
              {evaluationSteps.map((step, idx) => (
                <li
                  className="flex items-start justify-between gap-10"
                  key={idx}
                >
                  <div className="labels flex items-center text-sm gap-3">
                    {step.label} <Info className="w-4" />
                  </div>
                  <div className="values text-sm">{step.value}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="funded flex flex-col justify-start items-start bg-primary duration-300 md:px-8 md:py-12 px-6 py-10">
          <h3 className="lg:text-[27px] font-extrabold mb-4 uppercase">
            <span className="text-[#FFFF]">FUNDED</span>
          </h3>
          <hr className="bg-white border border-white h-[1px] w-full my-8" />
          <div className="w-[100%]">
            <ul className="flex w-[100%] flex-col gap-6">
              {fundedSteps.map((step, idx) => (
                <li
                  className="flex items-start justify-between gap-10"
                  key={idx}
                >
                  <div className="labels flex items-center text-sm gap-3">
                    {step.label} <Info className="w-4" />
                  </div>
                  <div className="values text-sm">{step.value}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default OneStepPriceCard;
