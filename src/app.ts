import { getConfig } from "./config";

const app = () => {
  const config = getConfig();
  console.log({ config });
};

app();
