import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

// SCHEMEA FOR SOFTWARE REQUEST FORM.
export interface RequestData {
  service_type: string;
  requirements: string;
  budget: string | "";
  email: string;
}

// SENDS A NEW REQUEST TO S3.
export const createRequest = async (data: RequestData): Promise<string> => {
  try {
    const docRef = await addDoc(collection(db, "Requests"), {
      ...data,
      createdAt: serverTimestamp()
    });
    return docRef.id;
  } catch (error) {
    console.error("Error creating request: ", error);
    throw error;
  }
};
