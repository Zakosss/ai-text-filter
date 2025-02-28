import { WordCard } from '../components';

export default function WordsSingle() {
    return (
        <div className="flex justify-center items-center h-screen">
                    <WordCard 
                        score={75} 
                        word="Example" 
                        explanation="The word 'example' is a highly offensive work that scores high on the explcitness scale but low on the political scale"
                        onAdd={() => console.log("Added to DB")} 
                        onIgnore={() => console.log("Ignored")}
                    />
                </div>
    )
}