let browser = "brave"

switch (browser)
{
  // these cases are grouped together
    case "chrome":
    case "edge":
    case "brave":
    case "opera":
        console.log("chromium project");
        break;
    case "firefox":
        console.log("mozilla project");
        break;
    case "safari":
        console.log("apple project");
        break;
    default:
        console.log("unknown ");
}