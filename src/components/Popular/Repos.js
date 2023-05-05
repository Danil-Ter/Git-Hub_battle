import { useSelector } from "react-redux";
import Error from "../../utils/Error";
import Loader from "../../utils/Loader";

const Repos = () => {
    const loading = useSelector((state) => state.popularReducer.loading);
    const repos = useSelector((state) => state.popularReducer.repos);
    const error = useSelector((state) => state.popularReducer.error);

    if (loading) {
        return <Loader/>;
    }

    if (error) {
        return <h1 className='home-container'>{error}</h1>;
    }

    if (!repos || repos.length === 0) {
        return <Error />;
    }

    return (
        <ul className='popular-list'>
            {repos.map((repo, index) => {
                return (
                    <li
                        key={repo.id}
                        className='popular-item'>
                        <div className='popular-rank'>#{index + 1}</div>
                        <ul className='space-list-items'>
                            <li>
                                <img
                                    className='avatar'
                                    src={repo.owner.avatar_url}
                                    alt='Avatar'
                                />
                            </li>
                            <li>
                                <a
                                    href={repo.html_url}
                                    target='_blank'
                                    rel='noreferrer'>
                                    {repo.name}
                                </a>
                            </li>
                            <li>@{repo.owner.login}</li>
                            <li>{repo.stargazers_count} stars</li>
                        </ul>
                    </li>
                );
            })}
        </ul>
    );
};

export default Repos;
