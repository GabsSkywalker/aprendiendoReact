import "./app.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  const format = (Username) => `@${Username}`;
  return (
    <section>
      <TwitterFollowCard formatUserName={format} IsFollowing userName="midudev" initialIsfollowing={true}>
        Miguel Angel Duran
      </TwitterFollowCard>
      <TwitterFollowCard
        formatUserName={format}
        IsFollowing={false}
        userName="pheralb"
      >
        Pablo Hernandez
      </TwitterFollowCard>

      <TwitterFollowCard
        formatUserName={format}
        IsFollowing
        userName="elonmusk"
      >
        Elon Musk
      </TwitterFollowCard>
    </section>
  );
}
