import { memo } from 'react';

const languages = ["All", "Javascript", "Ruby", "Java", "CSS", "Python"];

const SelectedLanguage = memo(({ selectedLanguage, setSelectedLanguage, loading }) => {
    return (
      <ul className="languages">
        {languages.map((language, index) => (
          <li
            key={index}
            style={{
              color: language === selectedLanguage ? "#d0021b" : "#fff",
              pointerEvents: loading ? 'none' : 'auto'
            }}
            onClick={() => setSelectedLanguage(language)}
          >
            {language}
          </li>
        ))}
      </ul>
    );
  });
  
  
export default SelectedLanguage;


