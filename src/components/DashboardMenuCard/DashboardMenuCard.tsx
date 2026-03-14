import "../ui/Card/Card.css";
import "./DashboardMenuCard.css";
import Button from "../ui/Button/Button";
import { Plus, Hourglass, Search, BarChart3 } from "lucide-react";

export default function DashboardMenuCard() {
    return (
        <section className="menuCard uiCard">

            <h2 className="uiSubtitle menuTitle">
                Choose action
            </h2>

            <div className="menuActions">

                <Button>
          <span className="menuRow">
            <Plus size={20} className="menuIcon" />
            Create order
          </span>
                </Button>

                <button className="menuSecondary">
          <span className="menuRow">
            <Hourglass size={20} className="menuIcon" />
            Active orders
          </span>
                </button>

                <button className="menuSecondary">
          <span className="menuRow">
            <Search size={20} className="menuIcon" />
            Search orders
          </span>
                </button>

                <button className="menuSecondary">
          <span className="menuRow">
            <BarChart3 size={20} className="menuIcon" />
            Statistics
          </span>
                </button>

            </div>

            <div className="menuFooter">
                Version 1.0 &nbsp; IKA Labs
            </div>

        </section>
    );
}