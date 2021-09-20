import React, { Component } from "react";
import { userData } from "../../data/userData.js";
import { UserProfileCard, ProfilePicture, Username } from "./UserProfile.styled.js";
export default class UserProfile extends Component {
  render() {
    return (
        <UserProfileCard>
          <ProfilePicture imageUrl={userData.profilePicture} />
          <Username>{userData.userName}</Username>
        </UserProfileCard>
    );
  }
}
