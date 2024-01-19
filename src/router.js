// 경로 설정에 대한 부분만.

import { Outlet, createBrowserRouter } from "react-router-dom";
import App from "./App"
import NotFound from "./routes/NotFound";
import Movies from "./routes/Movies";
import TV from "./routes/TV";
import Detail from "./routes/Detail";
import Search from "./routes/Search";
import Chakra from "./routes/Chakra";
import Mui from "./routes/Mui";


// 브라우저 이동
const router = createBrowserRouter([
  {
    path: "",
    element: <Outlet />,
    errorElement: <NotFound />, //에러처리 하는 부분
    children: [
      {
        path: "/",
        element: <App />
      },  
      {
        path: "/movies",
        element: <Movies />
      },
      {
        path: "/tv",
        element: <TV />
      }, 
      {
        path: "/detail/:id", //:는 변수라는 뜻. 변수명이 id
        element: <Detail />
      },
      {
        path: "/search",
        element: <Search />
      }, 
      {
        path: "/chakra",
        element: <Chakra />
      },
      {
        path: "/mui",
        element: <Mui />
      }



      // {
      //   path: "/a",
      //   element: <NotFound />
      // }    
    ]
  }
  // {
  //   path: "/a",
  //   element: <NotFound />,
  // }

]);

export default router;