const Option = ({ option, onOptionClick, selected }) => {
    return (
      <button 
        onClick={() => onOptionClick(option)} 
        className={`mt-2 px-4 py-2 border rounded ${selected ? 'bg-green-400' : 'bg-gray-200'} hover:bg-gray-400`}
      >
        {option}
      </button>
    );
  };
  
  export default Option;
  