import Mail from "./Mail";
import Github from "./Github";
import LinkedIn from "./LinkedIn";

export default function ContactNav() {
  function jumpTab(Links: string) {
    window.open(Links);
  }
  return (
    <>
      <div
        onClick={() => jumpTab("mailto:surajgupt880@gmail.com")}
        className="cursor-pointer"
      >
        <Mail></Mail>
      </div>
      <div
        onClick={() =>
          jumpTab("https://www.linkedin.com/in/suraj-gupta-1894051ba/")
        }
        className="cursor-pointer"
      >
        <LinkedIn />
      </div>
      <div
        onClick={() => jumpTab("https://github.com/surajgupt01")}
        className="cursor-pointer"
      >
        <Github />
      </div>
    </>
  );
}
