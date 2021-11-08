// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: process.env.firebase_api_key,
	authDomain: process.env.firebase_auth_domain,
	databaseURL: process.env.firebase_database_url,
	projectId: process.env.firebase_project_id,
	storageBucket: process.env.firebase_storage_bucket,
	messagingSenderId: process.env.firebase_messaging_sender_id,
	appId: process.env.firebase_app_id
};

export default firebaseConfig;