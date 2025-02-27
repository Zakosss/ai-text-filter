export default function WordList() {
    return (
        <div className = "flex h-[calc(100vh-160px)]">
            {/* Word List Container */}
            <div className='w-1/3 flex items-center justify-center p-4 border-2 border-[#313131]'>
                <div className="w-2/3 p-4 overflow-y-auto h-full">
                    <ul className="space-y-2">
                        {Array.from({ length: 50 }).map((_, i) => (
                            <li key={i} className="p-2 text-black rounded-md">
                                Bad Word {i + 1}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* Word Desc Container */}
            <div className='w-2/3 flex items-center justify-center p-4 border-2 border-[#313131]'>
                
            </div>
        </div>
    )
}