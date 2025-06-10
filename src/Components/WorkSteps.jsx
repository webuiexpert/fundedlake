import graphImg from '../assets/steps-graph.png';
import dollarImg from '../assets/steps-dollar-icon.png';
import rightArrow from '../assets/icons/right-arrow.svg';

function WorkSteps() {

  return (
    <div className="bg-black  py-12 text-white flex flex-col md:flex-row justify-center items-stretch gap-6 md:px-4">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 w-[80%] mx-auto">
        <div className="col relative bg-gradient-to-b from-[#000] to-[#000c15] md:p-4 w-[100%] flex flex-col items-start gap-3">
            <span className="stepNum text-primary w-fit text-1xl py-1 px-4 rounded-lg border border-2-primary">STEP 1</span>
            <h3 className='text-primary text-2xl font-bold mt-4'>EVALUATION PHASE</h3>
            <p className='text-3xl font-bold'>Choose Your Program</p>
            <ul className='text-[24px] list-disc'>
                <li>Reach Profit Target</li>
                <li>Dont Not Violate Max And Daily Drawdown</li>
            </ul>
            <span className='text-primary font-medium text-3xl'>Evalution phase</span>
                        <img className='rightArrow lg:w-[100px] w-[70px] absolute md:-right-5 md:bottom-[20%] right-10 -bottom-10 md:rotate-0 rotate-90' src={rightArrow} alt="" />

        </div>
        <div className="col relative bg-gradient-to-b from-[#000] to-[#000c15] md:p-4 w-[100%] flex flex-col items-start gap-3">
            <span className="stepNum text-primary w-fit text-1xl py-1 px-4 rounded-lg border border-2-primary">STEP 2</span>
            <h3 className='text-primary text-2xl font-bold mt-4'>FUNDED PHASE</h3>
            <p className='text-3xl font-bold'>Earn as a Funded Trader</p>
            <span className='amount text-[36px] text-white'>$109.200</span>
            <img className='md:w-[160px] w-[100px]' src={graphImg} alt="" />
            <span className='text-primary font-medium text-3xl'>Funded</span>
            <img className='rightArrow lg:w-[100px] w-[70px] absolute md:-right-5 md:bottom-[20%] right-10 -bottom-10 md:rotate-0 rotate-90' src={rightArrow} alt="" />
        </div>
        <div className="col relative bg-gradient-to-b from-[#000] to-[#000c15] md:p-4 w-[100%] flex flex-col items-start gap-3">
            <span className="stepNum text-primary w-fit text-1xl py-1 px-4 rounded-lg border border-2-primary">STEP 3</span>
            <p className='text-3xl font-bold mt-4'>Recieve Your Payout</p>
            <img className='w-[100px]' src={dollarImg} alt="" />
            <ul className='text-[24px]'>
                <li>Withdraw as soon as you get funded</li>
                <li>First payout is instant</li>
            </ul>
            <span className='text-primary font-medium text-3xl'>Payout</span>
            
            
        </div>
      </div>
    </div>
  );
}

export default WorkSteps;
