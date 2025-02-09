import { useRouteError } from "react-router-dom";

const Error = () => {
  const err: any = useRouteError();
  return (
    <>
      <div>
        <h1>Directed to error page </h1>
        <h2>
          details : {err.status} : {err.statusText}
        </h2>
      </div>
    </>
  );
};

export default Error;
