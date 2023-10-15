export default {
  isDev: (): boolean => {
    return process.env.APP_DEV ? (process.env.APP_DEV.trim() == "true") : false;
  }
}