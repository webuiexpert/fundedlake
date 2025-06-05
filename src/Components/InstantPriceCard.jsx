import { Info } from "lucide-react";

function InstantPriceCard() {
  const evaluationSteps = [
    { label: "Profit Target", value: "-" },
    { label: "Daily Loss Limit", value: "5%" },
    { label: "Max Drawdown", value: "8%" },
    { label: "Inactivity Period", value: "30 Days" },
    { label: "Leverage", value: "1:50" },
    { label: "Max Time", value: "-" },
    { label: "Flat for Weekend", value: "-" },
    { label: "Max Time", value: "-" },
  ];


  return (
    <div>
      <div className="mt-12 lg:w-[50%] md:w-[70%] mx-auto">
        <div className="evalution-phase flex flex-col justify-start items-start bg-dark group hover:bg-primary duration-300 rounded-md md:px-8 md:py-12 px-6 py-10">
          <h3 className=" lg:text-4xl font-extrabold mb-4 uppercase">
            INSTANT Phase
          </h3>
          <hr className="bg-white h-[1px] w-full my-8" />
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
      </div>
      
    </div>
  );
}

export default InstantPriceCard;
