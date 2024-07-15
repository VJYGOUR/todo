import { ID } from "appwrite";
import { databases } from "./config";
const collections = [
  {
    databasesID: import.meta.env.VITE_DATABASE_ID,
    collectionsID: import.meta.env.VITE_COLLECTION_ID_NOTES,
    name: "notes",
  },
];
const db = {};
collections.forEach((curr) => {
  db[curr.name] = {
    list: () => databases.listDocuments(curr.databasesID, curr.collectionsID),
    create: (payload, id = ID.unique()) =>
      databases.createDocument(
        curr.databasesID,
        curr.collectionsID,
        id,
        payload
      ),
    update: (id, payload) =>
      databases.updateDocument(
        curr.databasesID,
        curr.collectionsID,
        id,
        payload
      ),
    delete: (id) =>
      databases.deleteDocument(curr.databasesID, curr.collectionsID, id),
  };
});
export { db };
