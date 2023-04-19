export const SecretHeader = () => {
  const { VUE_APP_API_HASH_SECRET_KEY: SECRET } = process.env;

  return { secret: SECRET };
};
