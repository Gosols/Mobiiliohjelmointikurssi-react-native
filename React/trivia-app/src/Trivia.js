import React from "react";

export default function TriviaApp() {
  const [data, setData] = React.useState([]);
  const [isReady, setReady] = React.useState(false);

  const func = async () => {
    await fetch("https://opentdb.com/api.php?amount=1").then((res) =>
      res.json().then((data) => setData(data.results))
    );
    setReady(true);
  };

  React.useEffect(() => {
    func();
  }, []);

  if (!isReady) {
    return <div></div>;
  } else {
    return <div>{data[0].question}</div>;
  }
}
