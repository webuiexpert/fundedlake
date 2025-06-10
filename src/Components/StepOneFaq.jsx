import { useState } from "react";
import { ChevronDown } from "lucide-react"; // or any icon
import clsx from "clsx"; // optional for conditional class

function StepOneFaq() {

    const faqs = [
  {
    question: "What is the difference between a Hard Breach and Soft Breach rule?",
    answer: `
● Soft breach means that we will close all trades that have violated the rule. However, you can continue trading in your Assessment or Funded Account.
● Hard breach means that you violated either the Daily Loss Limit or Max Drawdown rule. Both rules constitute a hard breach. In the event you have a hard breach, you will fail the Assessment or have your Funded Account taken away.

Example: if your prior day’s end of day balance (5pm EST) was $100,000, your account would violate the daily stop loss limit if your equity reached $95,000 during the day. If your floating equity is +$5,000 on a $100,000 account, your new- day (5pm EST) max loss is based on your balance from the previous day ($100,000). So, your daily loss limit would still be $95,000.`
  },
  {
    question: "What is the policy on Prohibited Trading Activity?",
    answer: "The Daily Loss Limit is the maximum your account can lose in any given day. Daily Loss Limit is calculated using the previous day balance which resets at 5 PM EST. The Daily Stop compounds with the increase in your account.Example: if your prior day’s end of day balance (5pm EST) was $100,000, your account would violate the daily stop loss limit if your equity reached $95,000 during the day. If your floating equity is +$5,000 on a $100,000 account, your new- day (5pm EST) max loss is based on your balance from the previous day ($100,000). So, your daily loss limit would still be $95,000. <br> Example: if your prior day’s end of day balance (5pm EST) was $100,000, your account would violate the daily stop loss limit if your equity reached $95,000 during the day. If your floating equity is +$5,000 on a $100,000 account, your new- day (5pm EST) max loss is based on your balance from the previous day ($100,000). So, your daily loss limit would still be $95,000."
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

export default StepOneFaq;
