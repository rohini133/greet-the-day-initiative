
import { ref, get, child, getDatabase } from "firebase/database";
import { db as firestoreDb } from "@/firebase";
import { getDatabase as getRtdb } from "firebase/database";
import { app } from "@/firebase";
import { NewsItem } from "@/types/aiUpdates";

// Initialize the Realtime Database (different from Firestore)
const rtdb = getRtdb(app);

/**
 * Fetches AI news updates from Firebase Realtime Database
 */
export const fetchNewsFromFirebase = async (): Promise<NewsItem[]> => {
  try {
    console.log("Fetching news from Firebase RTDB path: summaries/latest");
    const dbRef = ref(rtdb);
    const snapshot = await get(child(dbRef, 'summaries/latest'));
    
    if (!snapshot.exists()) {
      console.log("No summary data available in Firebase");
      return [];
    }
    
    // Get the latest summary data
    const summaryData = snapshot.val();
    console.log("Retrieved summary data:", summaryData);
    
    // Create a single news item from the summary
    const newsItem: NewsItem = {
      title: "AI Daily Update",
      date: new Date(summaryData.created_at).toLocaleDateString(),
      summary: summaryData.summary,
    };
    
    return [newsItem]; // Return as array for compatibility with existing components
  } catch (error) {
    console.error("Error fetching summary from Firebase:", error);
    throw new Error(`Failed to fetch summary from Firebase: ${error instanceof Error ? error.message : String(error)}`);
  }
};
