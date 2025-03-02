import { WordCard, SearchBar, WordDDSection, RatingCard } from '../components';

export default function WordsSingle() {
    return (
        <div className="flex flex-col items-center h-[calc(100vh-160px)] gap-4 pt-10">

                    <SearchBar />  
                    <WordCard 
                        score={75} 
                        word="Example" 
                        explanation="The word 'example' is a highly offensive word that scores high on the explcitness scale but low on the political scale"
                        onAdd={() => console.log("Added to DB")} 
                        onIgnore={() => console.log("Ignored")}
                    />
                    <WordDDSection 
                        objects={[
                            <RatingCard 
                                score={44} 
                                explanation="The word 'example' is a highly offensive word that scores high on the explcitness scale but low on the political scale"
                            />,
                            <RatingCard 
                            score={56} 
                            explanation="The word 'example' is a highly offensive word that scores high on the explcitness scale but low on the political scale"
                        />,
                        <RatingCard 
                        score={18} 
                        explanation="The word 'example' is a highly offensive word that scores high on the explcitness scale but low on the political scale"
                    />,
                    <RatingCard 
                    score={20} 
                    explanation="The word 'example' is a highly offensive word that scores high on the explcitness scale but low on the political scale"
                />,



            
                
                
                
                        
                            
                        ]}
                    />


                </div>
    )
}