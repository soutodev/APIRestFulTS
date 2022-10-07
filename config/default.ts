const dbUser = process.env.USER_DATABASE;
const dbPassword = process.env.PASSWORD_DATABASE;

export default {
    port: 3000,
    dbUri: `mongodb+srv://${dbUser}:${dbPassword}@cluster0.dkfwvpt.mongodb.net/?retryWrites=true&w=majority`,
    env: "development",
};