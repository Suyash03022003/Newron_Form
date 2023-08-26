import { addDoc, collection, Timestamp } from "firebase/firestore/lite";
import { firestore } from "firebaseConfig";

export const sendContactForm = async ({ name, email, phone, line1, line2, pin, state, city }) => {
    try {
        const ref = collection(firestore, "contact");
        await addDoc(ref, {
            email,
            name,
            phone,
            line1,
            line2,
            pin,
            state,
            city,
            sentAt: Timestamp.now().toDate(),
        });
        return 0;
    } catch (err) {
        console.log(err)
        return -1;
    }
};
