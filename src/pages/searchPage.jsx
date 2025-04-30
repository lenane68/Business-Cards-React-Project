import { useLocation } from "react-router-dom";

function SearchPage() {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get("query");

  return (
    <div className="container mt-4">
      <h1>חיפוש</h1>
      <h3>תוצאה לחיפוש: {query}</h3>
    </div>
  );
}

export default SearchPage;
