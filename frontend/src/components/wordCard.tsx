import React from "react";

type WordCardProps = {
    score: number;
    word: string;
    explanation: string;
    onAdd: () => void;
    onIgnore: () => void;
};

const WordCard: React.FC<WordCardProps> = ({ score, word, explanation, onAdd, onIgnore }) => {
    return (
        <div className="flex w-full min-h-[220px] max-w-2xl bg-white rounded-2xl border shadow-lg border-border">
            {/* Left side */}
            <div className="w-1/3 bg-background flex flex-wrap items-center justify-center rounded-l-2xl ">
                <h1 className="text-4xl font-bold">{score}</h1>
            </div>

            {/* Right side */}
            <div className="flex-1 w-2/3 px-6 pt-3">
                <h2 className="text-2xl font-bold">{word}</h2>
                <h3 className="mt-2 font-semibold">Why</h3>
                <p className="text-gray-700">{explanation}</p>

                {/* Buttons */}
                <div className="flex mt-4 gap-4">
                    <button 
                        className="px-4 py-2 bg-primary rounded-md text-black hover:bg-buttonDown mb-4"
                        onClick={onAdd}>Add word to db
                    </button>
                    <button 
                        className="px-4 py-2 bg-primary rounded-md text-black hover:bg-buttonDown mb-4"
                        onClick={onIgnore}>Ignore Word
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WordCard;
