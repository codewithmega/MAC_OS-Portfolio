import { ReactTerminal } from "react-terminal";
import { techStack } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import { Check } from "lucide-react";
import React, { useRef } from "react";
import WindowControls from "#components/WindowControls";

const TerminalBox = () => {

  let customTitle = "MEGA";

  const ref = useRef(null);

  // Define commands here
  const commands = {
    funfact: () => (
      <>
        <div>
          Fun Fact: btw this is my First React JS Project (tutorial from
          JavaScript Mastery)
        </div>
        <div>&nbsp;</div>
        <div>Link: </div>
        <div>
          <a href="https://www.youtube.com/watch?v=j9ZD_hlyHOA" target="_blank">
            <u>
              Build and Deploy a MacOS style Portfolio with React, GSAP &
              Tailwind - JavaScript Mastery on YouTube
            </u>
          </a>
        </div>
        <div>&nbsp;</div>
        <div>
          My Journey doesn't stop here... I will be releasing my own self-built
          ReactJS Project soon.
        </div>
      </>
    ),
    bio: () => (
      <>
        <div>
          Hi, I'm Timothy also know was CodeWithMEGA, a Beginner software
          developer.
        </div>

        {/* <div>I'm currently a student at a University in Nigeria. I'm an all-round technology enthusiast. </div><div>My core competence is full-stack development, but I also have a fair bit of Computer Hardware, Graphics Design, Video Editing and Competitive E-Sport. My Esoe with 5+ years of experience in web development, app development, computer hardware, cloud computing, and game development. I specialize in building robust applications, cloud platforms, and cutting-edge robotics solutions.</div> */}
      </>
    ),
    cd: (directory) => (
      <div className="flex flex-col">
        <span>changed path to:</span>
        <span>{directory}</span>
      </div>
    ),
    help: () => (
      <>
        <div>
          <span>
            Hi There 👋, you seem interested! Here are the available commands in
            the terminal. Please note that they are case-sensitive
          </span>
        </div>
        <div>
          <pre>{String.raw`
          bio           Displays information about me.
          fun           Lists my technical skills.
          projects      Provides links to my projects.
          resume        Provides a link to my resume.
          clear         Clears the terminal screen.
          help          Displays this help message.
          `}</pre>
        </div>
        <div>&#8595; Scroll Down</div>
      </>
    ),
  };

  return (
    <div
      className="w-full h-full mb-0 gap-0 grid grid-flow-row auto-rows-max"
      style={{ backgroundColor: "#111", overflowY: "auto" }}
    >
      <div
        ref={ref}
        className="border-b border-gray-300 flex flex-row window-header p-0 mb-0 w-full fixed top-0 left-0"
      >
        <div><WindowControls target="terminal"/></div>
        <h2 className="window-title">Terminal</h2>
      </div>

      <div
        style={{ display: "block", height: "100%", backgroundColor: "#111" }}
        className="block w-full mt-25"
      >
        <ReactTerminal
          showControlBar={false}
          prompt="CodeWithMEGA: ~$"
          commands={commands}
          enableInput={true}
          welcomeMessage={
            <>
              <pre
                style={{
                  fontSize: "10px",
                  lineHeight: "10px",
                  cursor: "auto",
                  userSelect: "none",
                  WebkitUserSelect: "none",
                  MozUserSelect: "none",
                  msUserSelect: "none",
                  background: "#111", // dark background
                  color: "white", // default text color
                  padding: "10px",
                }}
              >
                {/* Your Name ASCII */}
                <span style={{ color: "#00ff00" }}>
                  {
                    "  /$$$$$$                  /$$           /$$      /$$ /$$   /$$     /$$       /$$      /$$ /$$$$$$$$  /$$$$$$   /$$$$$$ "
                  }
                </span>
                {"\n"}
                <span style={{ color: "#7fff00" }}>
                  {
                    " /$$__  $$                | $$          | $$  /$ | $$|__/  | $$    | $$      | $$$    /$$$| $$_____/ /$$__  $$ /$$__  $$"
                  }
                </span>
                {"\n"}
                <span style={{ color: "#00ff7f" }}>
                  {
                    "| $$  \\__/  /$$$$$$   /$$$$$$$  /$$$$$$ | $$ /$$$| $$ /$$ /$$$$$$  | $$$$$$$ | $$$$  /$$$$| $$      | $$  \\__/| $$  \\ $$"
                  }
                </span>
                {"\n"}
                <span style={{ color: "#00ffff" }}>
                  {
                    "| $$       /$$__  $$ /$$__  $$ /$$__  $$| $$/$$ $$ $$| $$|_  $$_/  | $$__  $$| $$ $$/$$ $$| $$$$$   | $$ /$$$$| $$$$$$$$"
                  }
                </span>
                {"\n"}
                <span style={{ color: "#007fff" }}>
                  {
                    "| $$      | $$  \\ $$| $$  | $$| $$$$$$$$| $$$$_  $$$$| $$  | $$    | $$  \\ $$| $$  $$$| $$| $$__/   | $$|_  $$| $$__  $$"
                  }
                </span>
                {"\n"}
                <span style={{ color: "#7f00ff" }}>
                  {
                    "| $$    $$| $$  | $$| $$  | $$| $$_____/| $$$/ \\  $$$| $$  | $$ /$$| $$  | $$| $$\\  $ | $$| $$      | $$  \\ $$| $$  | $$"
                  }
                </span>
                {"\n"}
                <span style={{ color: "#ff00ff" }}>
                  {
                    "|  $$$$$$/|  $$$$$$/|  $$$$$$$|  $$$$$$$| $$/   \\  $$| $$  |  $$$$/| $$  | $$| $$ \\/  | $$| $$$$$$$$|  $$$$$$/| $$  | $$"
                  }
                </span>
                {"\n"}
                <span style={{ color: "#ff007f" }}>
                  {
                    " \\______/  \\______/  \\_______/ \\_______/|__/     \\__/|__/   \\___/  |__/  |__/|__/     |__/|________/ \\______/ |__/  |__/"
                  }
                </span>
              </pre>

              <div>Type 'help' to bring up all commands.</div>
              <div>Right-click to start typing</div>
            </>
          }
          className="main-terminal mt-2"
          errorMessage="Command does not exist. Type 'help' to get a list of all commands."
          themes={{
            "my-custom-theme": {
              themeBGColor: "#111",
              themeToolbarColor: "#DBDBDB",
              themeColor: "#FFFEFC",
              themePromptColor: "#00ff00",
            },
          }}
          theme="my-custom-theme"
        />
      </div>
    </div>
  );
};

const TerminalWindow = WindowWrapper(TerminalBox, "terminal");

export default TerminalWindow;
