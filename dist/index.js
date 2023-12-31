"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongodb_1 = require("mongodb");
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
require("dotenv").config(".env");
const app = (0, express_1.default)();
const port = 8080; // Default port to listen on.
let db;
// Middleware.
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: "http://localhost:3000",
}));
app.use(body_parser_1.default.urlencoded({ extended: false }));
// ====================================================================
// Routes
// ====================================================================
// TODO: Implement a route handler that returns a list of all posts, ordered by date created.
app.get("/posts", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("TODO: GET /posts");
}));
// TODO: Implement a route handler that creates a new post.
app.post("/posts", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("TODO: POST /posts");
}));
// TODO: Implement a route handler that gets a post associated with a given postID.
app.get("/posts/:postID", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("TODO: GET /posts/{postID}");
}));
// TODO: Implement a route handler that updates the post associated with a given postID.
app.patch("/posts/:postID", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("TODO: PATCH /posts/{postID}");
}));
// TODO: Implement a route handler that deletes the post associated with a given postID.
app.delete("/posts/:postID", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("TODO: DELETE /posts/{postID}");
}));
// TODO: Implement a route handler that gets all the comments associated with a given postID.
app.get("/posts/:postID/comments", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("TODO: GET /posts/{postID}/comments");
}));
// TODO: Implement a route handler that gets adds a comment to the post with the given postID.
app.post("/posts/:postID/comments", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("TODO: POST /posts/{postID}/comments");
}));
// TODO: Implement a route handler that gets a comment associated with the given commentID.
app.get("/posts/:postID/comments/:commentID", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("TODO: GET /posts/{postID}/comments/{commentID}");
}));
// TODO: Implement a route handler that updates a comment associated with the given commentID.
app.patch("/posts/:postID/comments/:commentID", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("TODO: PATCH /posts/{postID}/comments");
}));
// TODO: Implement a route handler that deletes a comment associated with the given commentID.
app.delete("/posts/:postID/comments/:commentID", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("TODO: DELETE /posts/{postID}/comments");
}));
// TODO: add more endpoints here!
// Start the Express server.
function start() {
    const client = new mongodb_1.MongoClient(process.env.ATLAS_URI);
    client
        .connect()
        .then(() => {
        console.log("Connected successfully to server");
        db = client.db("database");
        app.listen(port, () => {
            console.log(`server started at http://localhost:${port}`);
        });
    })
        .catch((err) => {
        console.log("error connecting to mongoDB!", err);
    });
}
start();
//# sourceMappingURL=index.js.map