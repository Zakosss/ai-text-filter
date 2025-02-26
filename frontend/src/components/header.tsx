//import headerPages from '@/util/headerPages'

import HeaderButton from './headerButton';

export default function header () {
    return (
        <div className='w-full h-20 flex'>
            <HeaderButton name="Word List" path="" />
            <HeaderButton name="Words Blocked" path="/blocked" />
            <HeaderButton name="About" path="/about" />
        </div>
    )
}