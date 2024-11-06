import { Client, ID, Databases, Storage, Query } from "appwrite";
import conf from "../conf/conf";

export class Service{
    client = new Client
    databases;
    storage;

    constructor() {
        this.client
          .setEndpoint(conf.appwriteUrl)
          .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    async createPost({title, slug, content, freaturedVideo, status, userId}) {
        try {
            return await this.databases.createDocument(
                 appwriteDatabaseId,
                 appwriteCollectoinId,
                 slug,
                    {
                        title,
                        content,
                        freaturedVideo,
                        status,
                        userId,
                    }
            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error);
        }
    }

    async updatePost (slug, {title, content, freaturedVideo, status}) {
        try {
            return await this.databases.updateDocument(
              appwriteDatabaseId,
              appwriteCollectoinId,
              slug,
              {
                title,
                content,
                freaturedVideo,
                status,
              }
            );

        } catch (error) {
            console.log("Appwrite service :: updatePost :: error", error);
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
              appwriteDatabaseId,
              appwriteCollectoinId,
              slug
            )
            return true;

        } catch (error) {
            console.log("Appwrite service :: deletePost :: error", error);
            return false;
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
              appwriteDatabaseId,
              appwriteCollectoinId,
              slug
            );
        } catch (error) {
            console.log("Appwrite service :: getPost :: error", error);
        }
        return false;
    }

    async uploadFile(file) {
        try {
            return await this.databases.storage.createFile(
                conf.appwriteStorageId,
                ID.unique(),
                file
            )

        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error", error);
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            await this.databases.storage.deleteFile(
                conf.appwriteStorageId,
                fileId
            )
            return true;
            
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error", error);
            return false;
        }
    }
}

const service = new Service()
export default service
