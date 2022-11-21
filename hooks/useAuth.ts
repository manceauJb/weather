import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import firebaseApp from "../services/firebase";
import { getAuth } from "firebase/auth";
import { getUserFromCookie, removeUserCookie, setUserCookie } from "../auth/userCookie";
import { User } from "../auth/userInterface";

const auth = getAuth(firebaseApp);

const useAuth = () => {
	const [user, setUser] = useState<User | null>(null);
	const router = useRouter();

	const logout = async () => auth
		.signOut()
		.then(() => router.push("/"))
		.catch((e) => {
			console.error(e);
		});

	useEffect(() => {
		const cancelAuthListener = () => auth
			.onIdTokenChanged(async (userToken) => {
				if (userToken) {
					const { uid, email } = userToken;
					const token = await userToken.getIdToken(true);

					const u = { uid, email, token };
					setUserCookie(u);
					setUser(u);
				} else {
					removeUserCookie();
					setUser(null);
				}
			});

		setUser(getUserFromCookie());
		return () => {
			cancelAuthListener();
		};
	}, []);

	return { user, logout };
};

export { useAuth };
