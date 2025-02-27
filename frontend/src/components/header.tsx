//import headerPages from '@/util/headerPages'

import HeaderButton from './headerButton';

export default function header () {
    return (
        <div className='w-full h-10 flex items-center justify-center p-10'>
            <div className='h-10 flex items-center justify-center border-1 rounded-full border-[#9b9b9b] shadow-[inset_0_4px_8px_rgba(0,0,0,0.12)] pl-1 pr-1'>
                <HeaderButton name="List Check" path="" />
                <HeaderButton name="Word Check" path="/word-check" />
                <HeaderButton name="About" path="/about" />
            </div>
        </div>
    )
}