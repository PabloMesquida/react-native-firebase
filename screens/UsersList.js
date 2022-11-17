import React, { useState, useEffect } from "react";
import { ScrollView, Button } from "react-native";
import { ListItem, Avatar } from "@rneui/themed";
import firebase from "../database/firebase.js";

const UsersList = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    firebase.db.collection("users").onSnapshot((querySnapshot) => {
      const users = [];
      querySnapshot.docs.forEach((doc) => {
        const { name, email, phone } = doc.data();
        users.push({ id: doc.id, name, email, phone });
      });
      setUsers(users);
    });
  }, []);

  return (
    <ScrollView>
      <Button
        title="Create User"
        onPress={() => {
          props.navigation.navigate("CreateUserScreen");
        }}
      />
      {users.map((user) => {
        return (
          <ListItem
            key={user.id}
            bottomDivider
            onPress={() =>
              props.navigation.navigate("UserDetailScreen", { userId: user.id })
            }
          >
            <ListItem.Chevron />
            <Avatar
              size={32}
              rounded
              source={{
                uri: "https://randomuser.me/api/portraits/men/35.jpg",
              }}
            />
            <ListItem.Content>
              <ListItem.Title>{user.name}</ListItem.Title>
              <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        );
      })}
    </ScrollView>
  );
};

export default UsersList;
