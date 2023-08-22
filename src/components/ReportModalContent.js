import { useState } from "react";
import { Keyboard, View, Text, StyleSheet, Button, Alert } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import stylesReport from "../styles/styleReport";

export default function ReportModalContent({id,delito}){
    const [email, setEmail] = useState("");
    const [focus, setFocus] = useState(false);

    const handleSubmit = async () => {
        const response = await fetch("exp://192.168.100.137:19000/reports/shared_reports", {
          headers: {
            
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify({
            todo_id: id,
            user_id: 1, //hard coded value (user 1)
            email: email, // hard coded value (user 2)
          }),
        });
        const data = await response.json();
        console.log(data);
        Keyboard.dismiss();
        setEmail("");
        setFocus(false);
        Alert.alert(
          "Congratulations 🎉",
          `You successfully shared ${delito} with ${email}`,
          [{ text: "Okay" }]
        );
      };

      return(
        <View style={stylesReport.contentContainer}>
            <Text style={[stylesReport.title, { marginBottom: 20 }]}>Share your task</Text>
            <Text style={[stylesReport.title, { marginBottom: 20 }]}>"{delito}"</Text>
            <Text style={stylesReport.description}>
                Enter the email of the user you want to share your task with. Share a
                task with someone and stay in sinc with your goals everyday.
            </Text>
            <TextInput
                value={email}
                onChangeText={(text) => setEmail(text.toLowerCase())}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                keyboardType="email-address"
                style={[
                stylesReport.input,
                focus && { borderWidth: 3, borderColor: "black" },
                ]}
                placeholder="Enter your contact email"
            />
            <Button
                onPress={handleSubmit}
                title="Share"
                disabled={email.length === 0}
            />
        </View>
      )

}