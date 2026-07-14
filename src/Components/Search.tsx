import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useProdcut from "../zustand/prodcutSlice";

export default function Search() {
  const [search, setSearch] = useState("");

  const fetchProdcutsData = useProdcut((s) => s.fetchProdcutsData);
  const handleChangePage = useProdcut((s) => s.handleChangePage);

  const handleSearch = async () => {
    handleChangePage(1);

    const value = search.trim();

    await fetchProdcutsData(value === "" ? undefined : value  );
  };

  return (
    <div className="flex items-center gap-3">
      <input
        type="search"
        placeholder="Search Category..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-80 p-3 rounded-xl border border-orange-500 outline-none"
      />

      <button
        onClick={handleSearch}
        className="bg-orange-500 hover:bg-orange-600 duration-300 px-5 py-3 rounded-xl text-white"
      >
        <FaSearch />
      </button>
    </div>
  );
}