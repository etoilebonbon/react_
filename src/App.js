// import NavPage from "./components/NavPage";

import Layout from "./components/Layout";
import SearchPage from "./components/SearchPage";
// import TrendingPage from "./components/TrendingPage";


function App() {
  
  return (
    <div className="h-[2000px">
      {/* 네비게이션 */}
      {/* <NavPage /> */}
      {/* Layout -> children */}
      <Layout> 
        {/* 검색 영역 */}
        <SearchPage />
        {/* Trending */}
        {/* <TrendingPage /> */}
      </Layout>

    </div>
  );
}

export default App;
