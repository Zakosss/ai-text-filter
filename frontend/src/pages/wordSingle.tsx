import { WordCard, SearchBar, WordDDSection, RatingCard } from '../components';

export default function WordsSingle() {

    const word = "Example"
    const explaination = "The word 'example' is a highly offensive word that scores high on the explcitness scale but low on the political scale"
    const explainationTable = ["explicit","cutesy","politics","spamming stuff"]
    // explicit, sentiment, political and spam ratings
    const scoreTable = [1,0.2,0.6,0]
    const overallScore = Math.max(...scoreTable)

    return (
        <div className="flex flex-col items-center h-[calc(100vh-160px)] gap-4 pt-10">

                    <SearchBar 
                        /* onEnter={() => console.log("Added to DB")} */
                    />  
                    <WordCard 
                        score={overallScore} 
                        word={word} 
                        explanation={explaination}
                        onAdd={() => console.log("Added to DB")} 
                        onIgnore={() => console.log("Ignored")}
                    />
                    <WordDDSection 
                        objects={[
                            <RatingCard 
                                ratingType='Explicit Rating'
                                score={scoreTable[0]} 
                                explanation={explainationTable[0]}
                            />,
                            <RatingCard 
                                ratingType='Sentiment Rating'
                                score={scoreTable[1]} 
                                explanation={explainationTable[1]}
                            />,
                            <RatingCard 
                                ratingType='Political Rating'
                                score={scoreTable[2]} 
                                explanation={explainationTable[2]}
                            />,
                            <RatingCard 
                                ratingType='Spam Rating'
                                score={scoreTable[3]} 
                                explanation={explainationTable[3]}
                            />,
                        ]}
                    />


                </div>
    )
}