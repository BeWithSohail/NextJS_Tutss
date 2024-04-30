// `app/page.js` is the UI for the `/` URL;
import Learnlink from "@/components/Learnlink";
import LearnRouter from "@/components/LearnRouter";
import LearnServerRendering from "@/components/LearnServerRendering";
// import Learnmodule from "@/components/learnmodulecss/Learnmodule";
// import Learnuseimage from "@/components/Learnuseimage";
import Learndatafetching from "@/components/Learndatafetching";
export default function Page() {
  return(
    <>
      <Learnlink />
      {/* <h1>Hello, Home page!</h1> */}
      {/* <LearnRouter /> */}
      {/* <LearnServerRendering />  */}
      {/* <Learnuseimage /> */}
      {/* <Learnmodule /> */}
      <Learndatafetching />

  </>
)
}