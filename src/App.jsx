import SearchBtn from "./components/SearchBar";
import ImageGallery from "./components/ImageGallery";
import fetchImagesWithQuery from "./images-api";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import { Toaster } from "react-hot-toast";
import { useState } from "react";
import LoadMoreBtn from "./components/LoadMoreBtn";

function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]); 
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearchSubmit = async (newQuery) => {
    setQuery(newQuery);
    setImages([]);  
    setPage(1); 
    setLoading(true);
    setError(false);

    try {
      const fetchedImages = await fetchImagesWithQuery(newQuery, 1);
      setImages(fetchedImages); 
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const loadMoreImages = async () => {
    setLoading(true);
    try {
      const nextPage = page + 1;
      const fetchedImages = await fetchImagesWithQuery(query, nextPage);
      setImages(prevImages => [...prevImages, ...fetchedImages]); 
      setPage(nextPage);  
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchBtn onSubmit={handleSearchSubmit} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && <ImageGallery images={images.slice(0, page * 12)} />} 
      {images.length > 0 && images.length >= page * 12 && !loading && (
        <LoadMoreBtn onLoadMore={loadMoreImages} />  
      )}
    </div>
  );
}

export default App;
