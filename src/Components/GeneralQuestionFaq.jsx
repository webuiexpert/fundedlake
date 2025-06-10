import { useState } from "react";
import { ChevronDown } from "lucide-react"; // or any icon
import clsx from "clsx"; // optional for conditional class

function GeneralQuestionFaq() {

    const faqs = [
  {
    question: "What is 1 lot equal to on the Trading Platform?",
    answer: `● Forex: 1 lot = $100k notional

● Index: 1 lot = 1 Contract

Exceptions: SPX500: 1 lot = 10 contracts, JPN225: 1 lot = 500 contracts

● Cryptos: 1 lot = 1 coin

● Silver: 1 lot = 5000 ounces

● Gold: 1 lot = 100 ounces

● Oil: 1 lot = 100 barrels`
  },
  {
    question: "What is the policy on Prohibited Trading Activity?",
    answer: "Any form of arbitrage, latency abuse, or use of prohibited EAs/scripts is not allowed. Violations may result in account termination."
  },
  // Add 8 more below
  {
    question: "Can I hold trades over the weekend?",
    answer: "No, weekend holding is not allowed unless explicitly stated for your account type."
  },
  {
    question: "Do you allow news trading?",
    answer: "Yes, we allow news trading unless it results in system abuse or platform exploitation."
  },
  {
    question: "What leverage is offered?",
    answer: "We offer leverage up to 1:50 depending on the asset class and evaluation stage."
  },
  {
    question: "When are payouts processed?",
    answer: "First payout is instant upon hitting profit target. Recurring payouts follow a bi-weekly schedule."
  },
  {
    question: "What platforms are supported?",
    answer: "We support MetaTrader 4 and MetaTrader 5 for trading."
  },
  {
    question: "What happens if I hit the daily drawdown?",
    answer: "If you breach the daily loss limit, the challenge/account is considered failed."
  },
  {
    question: "Can I reset my challenge?",
    answer: "Yes, you can reset your challenge at any time from your dashboard."
  },
  {
    question: "Is there a consistency rule?",
    answer: "No, we have no consistency rules. Trade freely to reach your profit target."
  }
];


  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto py-10">
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-lg bg-[#181818] text-white"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left"
            >
              <span className="font-medium text-lg">{faq.question}</span>
              <ChevronDown
                className={clsx("w-5 h-5 transition-transform duration-300", {
                  "rotate-180": openIndex === index,
                })}
              />
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-sm whitespace-pre-line text-gray-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GeneralQuestionFaq;
