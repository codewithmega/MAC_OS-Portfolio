import { ReactTerminal } from "react-terminal";
import { techStack } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import { Check } from "lucide-react";
import React from "react";

const TerminalBox = () => {
  // Define commands here
  const commands = {
    whoami: () => (
      <>
        <div>Hi, I'm Timothy also know was CodeWithMEGA, a 19-year-old software developer from  Nigeria.</div>
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
          <span>Hi There 👋, you seem interested! Here are the available commands in the terminal. Please note that they are case-sensitive</span>
        </div>
        <div>
          <pre>{String.raw`
          whoami        Displays information about me.
          skills        Lists my technical skills.
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
      style={{ backgroundColor: "#272B36", overflowY: "auto" }}
    >
      <div
        id="window-header flex flex-row"
        className="border-b border-gray-300 flex flex-row window-header p-0 mb-0 w-full fixed top-0 left-0"
      >
        <p>Controls</p>
        <h2 className="window-title">Terminal</h2>
      </div>

      <div
        style={{ display: "block", height: "100%", backgroundColor: "#272B36" }}
        className="block w-full mt-25"
      >
        <ReactTerminal
          showControlBar={false}
          prompt="CodeWithMEGA:~$"
          commands={commands}
          enableInput={true}
          welcomeMessage={<>
            <pre style={{ fontSize: "10px", lineHeight: "10px" }}>{String.raw`
  /$$$$$$                  /$$           /$$      /$$ /$$   /$$     /$$       /$$      /$$ /$$$$$$$$  /$$$$$$   /$$$$$$ 
 /$$__  $$                | $$          | $$  /$ | $$|__/  | $$    | $$      | $$$    /$$$| $$_____/ /$$__  $$ /$$__  $$
| $$  \__/  /$$$$$$   /$$$$$$$  /$$$$$$ | $$ /$$$| $$ /$$ /$$$$$$  | $$$$$$$ | $$$$  /$$$$| $$      | $$  \__/| $$  \ $$
| $$       /$$__  $$ /$$__  $$ /$$__  $$| $$/$$ $$ $$| $$|_  $$_/  | $$__  $$| $$ $$/$$ $$| $$$$$   | $$ /$$$$| $$$$$$$$
| $$      | $$  \ $$| $$  | $$| $$$$$$$$| $$$$_  $$$$| $$  | $$    | $$  \ $$| $$  $$$| $$| $$__/   | $$|_  $$| $$__  $$
| $$    $$| $$  | $$| $$  | $$| $$_____/| $$$/ \  $$$| $$  | $$ /$$| $$  | $$| $$\  $ | $$| $$      | $$  \ $$| $$  | $$
|  $$$$$$/|  $$$$$$/|  $$$$$$$|  $$$$$$$| $$/   \  $$| $$  |  $$$$/| $$  | $$| $$ \/  | $$| $$$$$$$$|  $$$$$$/| $$  | $$
 \______/  \______/  \_______/ \_______/|__/     \__/|__/   \___/  |__/  |__/|__/     |__/|________/ \______/ |__/  |__/
                                                                                                                         
                                                                                                                         
                                                                                                                         
`}</pre>
<div>Type 'help' to bring up all commands.</div></>

          }
          className="main-terminal mt-2"
          themes={{
            "my-custom-theme": {
              themeBGColor: "#272B36",
              themeToolbarColor: "#DBDBDB",
              themeColor: "#FFFEFC",
              themePromptColor: "#a917a8",
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
