module.exports = {
  auth0: {
    secret: process.env.AUTH0_CLIENT_SECRET,
    audience: process.env.AUTH0_CLIENT_ID,
  },
};
