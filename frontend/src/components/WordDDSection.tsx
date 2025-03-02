import BorderLine from "./BorderLine";

type Constraints = {
    objects: React.ReactNode[];
}

const WordDDSection: React.FC<Constraints> = ({objects}) => {

    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <BorderLine />
            <div className='w-full h-full pl-10 pr-10 pt-5 grid grid-cols-2 gap-4 justify-items-center max-w-7xl mx-auto'>
                    {objects.map((component, index) => (
                        <div key={index} className="w-full h-full">
                            {component}
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default WordDDSection;