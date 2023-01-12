import { ChatEngine } from "react-chat-engine";
import "./app.css";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

function App() {
  if (!localStorage.getItem("username")) {
    return <LoginForm />;
  }
  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID="dbac1c2c-603e-4087-a199-0406ec15d549"
        userName={localStorage.getItem("username")}
        userSecret={localStorage.getItem("password")}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    </div>
  );
}

export default App;
