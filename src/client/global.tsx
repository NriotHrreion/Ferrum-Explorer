import { PluginMetadata } from "./types";

export const version = "1.7.0";
export const hostname = "http://"+ window.location.hostname;
export const apiUrl = hostname +":3301";
export const editorDefaultValue = "HelloWorld.\nWelcome to use ferrum!\n\nGithub Repo: https://github.com/NriotHrreion/ferrum";
export const pluginStorageKey = "ferrum.plugin";
export type pluginStorageType = PluginMetadata[];
