// middleware functions
// @desc Logs request to console
const logger = (req, res, next) => {
  console.log(
    `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`
  );
  next(); // called to know when to move onto the next section
};

module.exports = logger;
