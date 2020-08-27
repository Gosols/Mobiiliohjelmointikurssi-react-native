import React from "react";

export default function RepoList() {
  const [repolist, setList] = React.useState([]);
  const [isReady, setReady] = React.useState(false);

  //function to fetch API data and save it in state
  const getRepos = async () => {
    await fetch("https://api.github.com/search/repositories?q=react")
      .then((res) => res.json())
      .then((data) => setList(data.items));

    setReady(true);
  };

  React.useEffect(() => {
    getRepos();
  }, []);

  if (!isReady) {
    return <div></div>;
  } else {
    return (
      <div>
        {repolist.map((repo) => {
          return (
            <li style={{ listStyle: "none" }}>
              {repo.full_name} - {repo.url}
            </li>
          );
        })}
      </div>
    );
  }
}
