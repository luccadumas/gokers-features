module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '38f8419a80cefb0a97adc038ace858eb'),
  },
});
