import { Link } from "react-router-dom";
import { ToolsIcon } from "../../components/Icons";
import "./UnderDevelopmentPage.scss";

export default function UnderDevelopmentPage() {
  return (
    <main className="under-development">
      <div className="under-development__content">
        <ToolsIcon />
        <div className="under-development__text-content">
          <p>We're working hard to bring this page to you. Stay tuned!</p>
          <Link className="under-development__home-link" to="/">Go back to main page</Link>
        </div>
      </div>
    </main>
  );
}
