import { Link, useRouteError } from "react-router-dom";

function Error() {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center">
      <h2>OOOPS! Error with rendering the page!</h2>
      <Link to="/">Return</Link>
    </section>
  );
}

export default Error;
