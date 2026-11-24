import {
  BarChart3,
  CalendarDays,
  Check,
  Circle,
  Clock3,
  Heart,
  LayoutDashboard,
  Search,
  Sparkles,
  Users,
} from "lucide-react";
import type { Project } from "@/data/portfolio";

export function ProjectVisual({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) {
  return (
    <div
      className={`project-visual ${project.theme} ${large ? "visual-large" : ""}`}
      aria-hidden="true"
    >
      <div className="mock-window">
        <div className="mock-toolbar">
          <div className="window-dots">
            <i />
            <i />
            <i />
          </div>
          <span>{project.name.toLowerCase()} / workspace</span>
          <div className="mock-avatar">JP</div>
        </div>
        <div className="mock-body">
          <div className="mock-sidebar">
            <div className="mock-brand">
              {project.name.slice(0, 1).toLowerCase()}
              <span>.</span>
            </div>
            <LayoutDashboard size={15} />
            <Users size={15} />
            <CalendarDays size={15} />
            <BarChart3 size={15} />
          </div>
          <div className="mock-main">
            <div className="mock-heading">
              <div>
                <span className="mock-eyebrow">YOUR WORKSPACE, CONNECTED</span>
                <h4>{visualTitles[project.visual]}</h4>
              </div>
              <Search size={14} />
            </div>
            {project.visual === "crm" ? (
              <Crm />
            ) : project.visual === "booking" ? (
              <Booking />
            ) : project.visual === "insights" ? (
              <Insights />
            ) : project.visual === "exchange" ? (
              <Exchange />
            ) : (
              <Health />
            )}
          </div>
        </div>
      </div>
      <span className="preview-caption">
        CONCEPT PREVIEW · ACTUAL SCREENSHOTS TO FOLLOW
      </span>
    </div>
  );
}
const visualTitles = {
  crm: "Your next opportunity.",
  booking: "Every stay, in sync.",
  insights: "Clarity starts here.",
  exchange: "Good things take time.",
  health: "A little better, every day.",
};
function Crm() {
  return (
    <>
      <div className="mock-stats">
        {["Contacts", "Active deals", "Workflows"].map((item, i) => (
          <div key={item}>
            <span>{item}</span>
            <strong>{["1,248", "32", "18"][i]}</strong>
            <div className="mini-line" />
          </div>
        ))}
      </div>
      <div className="kanban">
        {["New leads", "In conversation", "Ready to close"].map((column, i) => (
          <div className="kanban-column" key={column}>
            <span className="kanban-label">
              <Circle size={7} fill="currentColor" />
              {column}
            </span>
            {[0, 1].map((row) => (
              <div className="kanban-card" key={row}>
                <span className="tiny-label">
                  {
                    ["Northstar Studio", "Forma Design", "Atlas & Co."][
                      (i + row) % 3
                    ]
                  }
                </span>
                <div className="skeleton-line" />
                <div className="kanban-foot">
                  <span className="tiny-avatar">
                    {["NS", "FD", "AC"][(i + row) % 3]}
                  </span>
                  <span className="mini-tag">Follow-up</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
function Booking() {
  return (
    <>
      <div className="booking-meta">
        <span>
          <CalendarDays size={12} /> Reservation calendar
        </span>
        <span>Mon — Sun</span>
      </div>
      <div className="calendar-grid">
        <div className="calendar-days">
          {["ROOM", "M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
            <span key={i}>{d}</span>
          ))}
        </div>
        {["Suite 01", "Suite 02", "Suite 03", "Suite 04"].map((room, i) => (
          <div className="calendar-row" key={room}>
            <span>{room}</span>
            <div className="calendar-track">
              <div className={`reservation reservation-${i}`}>
                {
                  [
                    "A peaceful weekend",
                    "Checked in",
                    "Upcoming stay",
                    "Confirmed",
                  ][i]
                }
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="booking-footer">
        <Check size={12} /> All reservations up to date
      </div>
    </>
  );
}
function Insights() {
  return (
    <>
      <div className="insight-banner">
        <Sparkles size={17} />
        <div>
          <strong>A clearer view of your experience</strong>
          <span>Explore patterns. Discover opportunities.</span>
        </div>
      </div>
      <div className="insights-chart">
        <div className="chart-bars">
          {[35, 55, 46, 69, 58, 82, 72, 94, 85, 105].map((height, i) => (
            <i key={i} style={{ height }} />
          ))}
        </div>
        <div className="chart-side">
          <span>Experience overview</span>
          <strong>
            Find the
            <br />
            next opportunity.
          </strong>
          <div className="skeleton-line" />
          <div className="skeleton-line short" />
        </div>
      </div>
    </>
  );
}
function Exchange() {
  return (
    <div className="exchange-grid">
      {[
        "Share your expertise",
        "Learn something new",
        "Make a connection",
        "Give a little time",
      ].map((text, i) => (
        <div key={text}>
          <span className="exchange-icon">
            {i % 2 ? <Users size={16} /> : <Clock3 size={16} />}
          </span>
          <strong>{text}</strong>
          <span>Knowledge goes further together.</span>
          <div className="skeleton-line" />
        </div>
      ))}
    </div>
  );
}
function Health() {
  return (
    <>
      <div className="health-banner">
        <Heart size={18} />
        <div>
          <strong>Your daily check-in</strong>
          <span>Small steps. Consistent care.</span>
        </div>
        <span className="health-check">
          <Check size={14} />
        </span>
      </div>
      <div className="health-days">
        {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
          <div key={i}>
            <span>{day}</span>
            <i className={i < 5 ? "complete" : ""}>
              {i < 5 ? <Check size={14} /> : <Circle size={12} />}
            </i>
          </div>
        ))}
      </div>
      <div className="health-bottom">
        <span>Building a healthier routine</span>
        <div className="health-progress">
          <i />
        </div>
      </div>
    </>
  );
}
