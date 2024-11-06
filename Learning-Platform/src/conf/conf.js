const conf = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteCollectoinId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwriteStorageId: String(import.meta.env.VITE_APPWRITE_STORAGE_ID),
};

export default conf;