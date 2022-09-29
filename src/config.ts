const configValues = {
  type: ["one", "two", "three", "four"],
  layout: ["collapsed", "main", "expanded"],
  position: [
    "top-left",
    "top-right",
    "bottom-right",
    "bottom-left",
    "middle-left",
    "middle-right",
  ],
};

type ConfigValues = typeof configValues;
type ConfigKeys = keyof ConfigValues;

type Config = Record<keyof ConfigValues, ConfigValues[keyof ConfigValues][0]>;

function getDefaultConfig() {
  const config: Config = {
    type: "one",
    layout: "main",
    position: "bottom-right",
  };

  return config;
}

function getConfigKeys(config: Config): (keyof Config)[] {
  const configKeys = Object.keys(config) as Array<keyof typeof config>;

  return configKeys;
}

export function getConfig() {
  const config = getDefaultConfig();
  const script = document.getElementById("we-are-mahsa-amini");

  if (script) {
    const userConfig = script.getAttribute("src")?.split("?");

    if (userConfig && userConfig[1]) {
      const params = userConfig[1].split("&");

      for (const param of params) {
        const option = param.split("=");
        const configKeys = getConfigKeys(config);

        if (
          configKeys.includes(option[0] as ConfigKeys) &&
          configValues[option[0] as ConfigKeys].includes(option[1])
        ) {
          config[option[0] as ConfigKeys] = option[1];
        }
      }
    }
  }

  return config;
}
