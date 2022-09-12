"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const authMiddleWare_1 = require("./middlewares/authMiddleWare");
const app = (0, express_1.default)();
dotenv_1.default.config();
const port = process.env.PORT || 8000;
const logger = require("./winstonConfig");
const newRelic = require("newrelic");
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
const productRoutes = require("./routes/productRoutes");
mongoose_1.default
    .connect("mongodb://127.0.0.1:27017/node_setup")
    .then(() => {
    console.log("Mongo DB Connected");
})
    .catch((err) => {
    console.log(err);
});
app.use((0, morgan_1.default)(":method :url :status :res[content-length] - :response-time ms"));
app.get("/", (req, res) => {
    res.status(200).send({
        message: "HomePage",
    });
});
app.use("/product", productRoutes);
app.use((err, req, res, next) => {
    return res
        .status(500)
        .send({ "error ": err.message || "Internal Server Error" });
});
app.listen(port, () => {
    console.log(`Server listening on ${port}`);
    let token = (0, authMiddleWare_1.generateAuthToken)();
    console.log(`Auth token for the server is ${token}`);
    logger.info(`Server started and running on Port : ${port}`);
});
