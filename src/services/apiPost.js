import { Client, Databases, ID, Query, Storage } from "appwrite";
import conf from "../conf/conf";

export class PostService{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, id, content, postImage, favouritePost, userId}){
        try {
            const postData = {
                title,
                content,
                postImage,
                userId,
                favouritePost,
            };

            const data = await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                id,
                postData
            );

            return data;
        } catch (error) {
            console.error("Appwrite Service :: createPost :: error", error);
            throw error;
        }
    }

    async updatePost(id, {title, content, postImage, favouritePost}){
        try {

            const updateData = {
                title,
                content,
                postImage,
                favouritePost,
            };

            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                id,
                updateData
            );
        } catch (error) {
            console.error("Appwrite service :: updatePost :: error", error);
            throw error;
        }
    }

    async deletePost(id) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                id
            );
            return true;
        } catch (error) {
            console.error("Appwrite service :: deletePost :: error", error);
            return false;
        }
    }

    async getPost(id) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                id
            );
        } catch (error) {
            console.error("Appwrite service :: getPost :: error", error);
            return false;
        }
    }

    async getPosts(queries = []) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            );
        } catch (error) {
            console.error("Appwrite service :: getPosts :: error", error);
            throw error; 
        }
    }
    

    async favouritePosts(queries = [Query.equal("favouritePost", true)]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            );
        } catch (error) {
            console.error("Appwrite service :: favouritePosts :: error", error);
            throw error;
        }
    }


    // file service

    async uploadFile(file) {
        try {
            const fileId = ID.unique();
            return await this.bucket.createFile(conf.appwriteBucketId, fileId, file);
        } catch (error) {
            console.error("Appwrite service :: uploadFile :: error", error);
            throw error; 
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
            return true;
        } catch (error) {
            console.error("Appwrite service :: deleteFile :: error", error);
            return false;
        }
    }

    getFilePreview(fileId) {
        try {
            return this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
        } catch (error) {
            console.error("Appwrite service :: getFilePreview :: error", error);
            throw error;
        }
    }

}

const postService = new PostService();
export default postService;