import { useState } from "react";
import Logo from "../assets/logo.png"; 
import { BiPlusMedical } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useColorMode } from "@chakra-ui/react";




export default function NavPage() {
    const [scroll, setScroll] = useState(true);
  document.addEventListener("wheel", (e) => {
    // 마우스 휠 내릴 때
    // 네비게이션을 감추기 위해 scroll에 false
    if(e.deltaY > 0){
      setScroll(false);

    } else if(e.deltaY < 0) {
      // 마우스 휠 올릴 때
      // 네비게이션을 보이기 위해 scroll에 true
      setScroll(true)
    }
  })

  const {colorMode, toggleColorMode} = useColorMode()

  return (
    <div className={`sticky top-0 z-20 ${scroll ? "translate-y-0" : "-translate-y-[60px]"} duration-300 w-full h-[60px] bg-[#032541] flex justify-center`}>
        {/* 중앙정렬된 네비게이션 컨테이너 */}
        <div className="max-w-[1300px] w-full h-full flex justify-between px-8">
            {/* 1.왼쪽: 로고+메뉴 */}
            <div className="h-full flex space-x-8">
                {/* 로고 */}
                <div className="h-full w-[200px] flex items-center">
                    <Link to = "/"><img src={Logo} alt="main logo" /></Link>
                </div>
                {/* 메뉴영역 */}
                <div className="h-full flex items-center text-white font-bold space-x-6">
                    <Link to = "/movies"><p>Movies</p></Link>
                    <Link to = "/tv"><p>TV Shows</p></Link>
                    <p>People</p>
                    <p>more</p>
                </div>
            </div>
            {/* 2.오른쪽: 아이콘 영역 */}
            <div className="flex h-full items-center space-x-6">
                
                {/* 플러스버튼 */}
                <div className="text-white">
                    <BiPlusMedical />
                </div>
                {/* 랭귀지 선택 */}
                <div className="border border-white text-white p-1 text-xs hover:bg-white hover:text-[#032541]">
                    EN
                </div>
                {/* 벨 아이콘 */}
                <div onClick={toggleColorMode} className="text-white cursor-pointer">
                    {colorMode === "light" ? <MdDarkMode /> : <MdLightMode/>}                   
                </div>
                {/* 아바타 */}
                <div className="w-8 h-8 bg-green-700 rounded-full text-white flex justify-center items-center">
                    L
                </div>
                {/* 검색 아이콘 */}
                <div className="text-[#01b4e4]">
                    <FaSearch />
                </div>
                <div></div>
            </div>
        </div>
    </div>
  )
}