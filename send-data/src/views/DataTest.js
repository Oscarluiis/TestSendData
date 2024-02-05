import React, { useState } from "react";
import "../firebaseConfig";
import { getFirestore, addDoc, collection } from "firebase/firestore";

export const DataTest = () => {
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue3, setInputValue3] = useState("");

  const db = getFirestore();

  const saveDataToFirestore = async () => {
    const docRef = await addDoc(collection(db, "myCollectionCopeco"), {
      field1: inputValue1,
      field2: inputValue2,
      field3: inputValue3,
    });
    alert("Document written to Database");
  };

  return (
    <>
      <h1>Probando Enviar</h1>
      <input
        type="text"
        value={inputValue1}
        onChange={(e) => setInputValue1(e.target.value)}
      />
      <input
        type="text"
        value={inputValue2}
        onChange={(e) => setInputValue2(e.target.value)}
      />

      <h3>Choose an Option:</h3>

      <label>
        <input type="radio" name="option" value="option1" onChange={(e) => setInputValue3(e.target.value)}/> Option 1
      </label>

      <label>
        <input type="radio" name="option" value="option2" onChange={(e) => setInputValue3(e.target.value)}/> Option 2
      </label>

      <label>
        <input type="radio" name="option" value="option3" onChange={(e) => setInputValue3(e.target.value)}/> Option 3
      </label>
      <button onClick={saveDataToFirestore}>Save to Firestore</button>
    </>
  );
};
