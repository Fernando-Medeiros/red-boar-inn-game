export const SecretHeader = () => {
  const { VUE_APP_API_TOKEN: SECRET } = process.env;

  return { secret: SECRET };
};
