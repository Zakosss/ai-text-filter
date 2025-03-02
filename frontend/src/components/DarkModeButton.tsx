import React from 'react';

type buttonParams = {
    onPress: () => void;
};

const Button: React.FC<buttonParams> = ({ onPress }) => {
    return (
        <button 
            className="px-4 py-2 bg-primary rounded-md text-black hover:bg-buttonDown mb-4"
            onClick={onPress}>Add word to db
        </button>
    )
}

export default Button;