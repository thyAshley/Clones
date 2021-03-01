export function seedDatabase(firebase: any) {
  const users = [
    {
      userId: "gGBMj21Xd5Qkcy7ENxGSuOptw8k2",
      username: "test",
      fullName: "tester",
      emailAddress: "test@gmail.com",
      following: ["2"],
      followers: ["2", "3", "4"],
      dateCreated: Date.now(),
    },
    {
      userId: "2",
      username: "john",
      fullName: "John",
      emailAddress: "john@test.com",
      following: [],
      followers: ["gGBMj21Xd5Qkcy7ENxGSuOptw8k2"],
      dateCreated: Date.now(),
    },
    {
      userId: "3",
      username: "James",
      fullName: "James test",
      emailAddress: "james@test.com",
      following: [],
      followers: ["gGBMj21Xd5Qkcy7ENxGSuOptw8k2"],
      dateCreated: Date.now(),
    },
    {
      userId: "4",
      username: "jane",
      fullName: "Jane",
      emailAddress: "jane@test.com",
      following: [],
      followers: ["gGBMj21Xd5Qkcy7ENxGSuOptw8k2"],
      dateCreated: Date.now(),
    },
  ];

  // eslint-disable-next-line prefer-const
  for (let k = 0; k < users.length; k++) {
    firebase.firestore().collection("users").add(users[k]);
  }

  // eslint-disable-next-line prefer-const
  for (let i = 1; i <= 5; ++i) {
    firebase
      .firestore()
      .collection("photos")
      .add({
        photoId: i,
        userId: "2",
        imageSrc: `/images/users/raphael/${i}.jpg`,
        caption: "Saint George and the Dragon",
        likes: [],
        comments: [
          {
            displayName: "dali",
            comment: "Love this place, looks like my animal farm!",
          },
          {
            displayName: "orwell",
            comment: "Would you mind if I used this picture?",
          },
        ],
        userLatitude: "40.7128°",
        userLongitude: "74.0060°",
        dateCreated: Date.now(),
      });
  }
}
