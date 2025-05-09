import { useReducer } from "react";

const initialSearchState = {
  searchQuery: "",
  selectedCategory: "",
  sortOrder: "",
};

function searchReducer(state, action) {
  switch (action.type) {
    case "SET_SEARCH_QUERY":
      return { ...state, searchQuery: action.payload };
    case "SET_SELECTED_CATEGORY":
      return { ...state, selectedCategory: action.payload };
    case "SET_SORT_ORDER":
      return { ...state, sortOrder: action.payload };
    default:
      return state;
  }
}

export default function useSearch(products, categories) {
  const [state, dispatch] = useReducer(searchReducer, initialSearchState);

  const filteredProducts = products
    .filter((product) =>
      product.productName
        ?.toLowerCase()
        .includes(state.searchQuery.toLowerCase())
    )
    .filter((product) =>
      state.selectedCategory
        ? product.category === state.selectedCategory
        : true
    )
    .sort((a, b) => {
      if (state.sortOrder === "latest") {
        return new Date(b.date) - new Date(a.date);
      } else if (state.sortOrder === "earliest") {
        return new Date(a.date) - new Date(b.date);
      }
      return 0;
    });

  return {
    searchQuery: state.searchQuery,
    selectedCategory: state.selectedCategory,
    sortOrder: state.sortOrder,
    setSearchQuery: (val) =>
      dispatch({ type: "SET_SEARCH_QUERY", payload: val }),
    setSelectedCategory: (val) =>
      dispatch({ type: "SET_SELECTED_CATEGORY", payload: val }),
    setSortOrder: (val) => dispatch({ type: "SET_SORT_ORDER", payload: val }),
    filteredProducts,
  };
}
