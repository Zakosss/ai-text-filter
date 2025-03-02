import React from "react";

type RatingCardProps = {
    score: number;
    explanation: string;
};

const RatingCard: React.FC<RatingCardProps> = ({ score, explanation}) => {
    return (
        <div className="flex w-full min-h-[220px] max-w-2xl bg-white rounded-2xl border shadow-lg border-border">
            {/* Left side */}
            <div className="w-1/3 bg-primary flex flex-wrap items-center justify-center rounded-l-2xl ">
                <h1 className="text-4xl font-bold">{score}</h1>
            </div>

            {/* Right side */}
            <div className="flex-1 w-2/3 px-6 pt-3">
                
            </div>
        </div>
    );
};

export default RatingCard;
