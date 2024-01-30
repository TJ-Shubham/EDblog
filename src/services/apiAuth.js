import { Account, Client, ID } from "appwrite";
import conf from "../conf/conf";


export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}){

        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                return this.login({email, password})
            }else{
                return userAccount;
            }
        } catch (error) {
            console.log("Appwrite serive :: createAccount :: error", error);
        }
    }

    async login({email, password}){
        const {data, error} = await this.account.createEmailSession(email, password);

        if (error) throw new Error(error.message);

        return data;
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout(){
        try {
            this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error);
        }
    }
}

const authService = new AuthService();
export default authService;