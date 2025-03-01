import React from "react";


const SearchBar: React.FC = () => {

    const [search, setSearch] = React.useState<string>("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            console.log("Search for: ", search);
        }
    }

    return (
        <div className='h-10 flex items-center justify-center border-1 rounded-full border-[#9b9b9b] shadow-[inset_0_4px_8px_rgba(0,0,0,0.12)] pl-1 pr-1'>
            <input 
                type="text" 
                placeholder="Search for a word" 
                className="h-full w-full pl-2 pr-2 text-black rounded-full focus:outline-none focus:bg-[#F0F0F0]"
                value={search}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
            />
        </div>
    )
}


export default SearchBar;