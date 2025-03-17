import Styles from "./page.module.css";
import AboutMe, { AboutMeLoading } from "./Components/aboutMe";
import AllProjects from "./Components/allProjects";
import { Suspense } from "react";
import Fade from "@/lib/UIComponents/fadeIn";

export default function Home() {
  return (
    <>
      <div className={Styles.pageWrapper}>
        <div className={Styles.page}>
          <div className={Styles.leftSidePanel}>
            <Suspense fallback={<AboutMeLoading/>}>
              <Fade style={{height: "100%"}}>
                <AboutMe style={{position: "sticky", top: "20px"}}/>
              </Fade>
            </Suspense>
          </div>
          <div className={Styles.mainPanel}>
                {/* 
                // TODO: make the featured ptojects work
                <FeaturedProjects style={{flexShrink: "0"}}/> 
                */}
                <AllProjects/>
          </div>
        </div>
      </div>
    </>
  );
}
