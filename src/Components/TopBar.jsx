import { SquareX } from 'lucide-react';
import { useState } from 'react';

function TopBar() {

  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className='bg-navy flex justify-center items-center md:gap-4 gap-5  md:py-4 pt-10 pb-4 relative'>
        <span className='lg:text-3xl md:text-2xl text-xl'>🔥</span><h2 className='text-white lg:text-2xl md:text-xl text-[14px] md:w-auto w-[350px] text-center'>Use code TRADE10 for 10% + BOGO off your challenge!</h2>
        <SquareX onClick={() => setVisible(false)} className='text-white size-7 absolute right-10 top-4 cursor-pointer' />
    </div>
  )
}

export default TopBar