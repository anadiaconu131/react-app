export const buildArticlesData = (articles) => articles.map((item) => ({
  ...item,
  subtitle: item.createdAt,
}));

export const buildUserData = (user) => ({
  id: user.id,
  title: user.name,
  thumbnail: user.avatar,
  subtitle: user.email,
  description: user.biography,
});

export const buildUsersData = (users) => users.map((user) => (buildUserData(user)));
