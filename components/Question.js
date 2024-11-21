import Option from './Option';

const Question = ({ question, options, onOptionClick, selectedOption }) => {
  return (
    <div className="question-container">
      <h2 className="text-xl font-semibold">{question}</h2>
      <div className="options-container mt-4">
        {options.map((option) => (
          <Option 
            key={option} 
            option={option} 
            onOptionClick={onOptionClick} 
            selected={selectedOption === option} 
          />
        ))}
      </div>
    </div>
  );
};

export default Question;
