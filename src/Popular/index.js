import { useEffect, useState } from "react";
import { fetchPopularRepos } from "../utils/Api";
import SelectedLanguage from "./SelectedLanguage";
import Repos from "./Repos";
import Loader from "../utils/Loader";
import { useSearchParams } from "react-router-dom"; 

const languages = ["All", "Javascript", "Ruby", "Java", "CSS", "Python"];

const Popular = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedLanguage, setSelectedLanguage] = useState(
    searchParams.get("language") || "All" 
  );
  const [loading, setLoading] = useState(false);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchPopularRepos(selectedLanguage)
      .then((data) => setRepos(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
    if (selectedLanguage === "All") {
      setSearchParams({});
    } else {
      setSearchParams({ language: selectedLanguage }); 
    }
  }, [selectedLanguage, setSearchParams]);

  if (error) {
    return "Error";
  }

  return (
    <>
      <SelectedLanguage
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
        languages={languages}
        loading={loading}
      />
      {!loading ? (
        <Repos repos={repos} />
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Popular;


