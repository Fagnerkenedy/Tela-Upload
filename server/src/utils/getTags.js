
const got = require('got');
require("dotenv").config({ path: "../../.env" });
const { connect } = require("../db/connection");

async function getToken() {
    console.log(process.env.ZOHO_MYSQL_PASSWORD);
    const connection = await connect();
    const [rows] = await connection.query("select * from oauthtokens where useridentifier ='" + process.env.ZOHO_USER_IDENTIFIER + "'");

    if (rows.length <= 0) {
        console.log("token não encontrado na base de dados")
        return null;
    }

    const tokenIsExpired = rows[0].expirytime <= new Date().getTime() - 120000;
    const refresh_token = rows[0].refreshtoken;
    const client_id = process.env.ZOHO_CLIENT_ID;
    const client_secret = process.env.ZOHO_CLIENT_SECRET;

    if (tokenIsExpired) {
        //generate a  new Token
        console.log("gerando novo token")
        const url = "https://accounts.zoho.com/oauth/v2/token?refresh_token=" + refresh_token + "&client_id=" + client_id + "&client_secret=" + client_secret + "&grant_type=refresh_token";

        let response = await got(url, {
            method: "POST",
        });

        const json = await JSON.parse(response.body);

        const newAccessToken = json.access_token;
        //hora atual + 1 hora
        const newExpiryTime = new Date().getTime() + 3600000;

        await connection.query("UPDATE oauthtokens SET accesstoken='" + newAccessToken + "', expirytime= '" + newExpiryTime + "' where useridentifier = 'zohokroton@gmail.com'");

        return newAccessToken;
    }
    else {
        return rows[0].accesstoken;
    }

}

async function getTags() {

    const token = await getToken();

    if (token == null) return;

    let url = 'http://www.zohoapis.com/crm/v2/settings/tags'

    let headers = {
        Authorization: "Zoho-oauthtoken " + token
    }

    let parameters = {
        'module': 'Sales_Orders',
        'my_tags': 'false',
    }

    let requestDetails = {
        method: "GET",
        headers: headers,
        searchParams: parameters,
        throwHttpErrors: false
    }

    let response = await got(url, requestDetails)
    const json = await JSON.parse(response.body);

    return json;
}

module.exports = { getTags };

