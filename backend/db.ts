interface User {
  name: string;
  password: string;
}

let users: User[] | undefined = [];

async function getUsers(): Promise<User[]> {
  return users!;
}

async function removeUsers(): Promise<void> {
  if (users!.length === 0) {
    return;
  }
  const removed = users!.pop(); // remove
  return;
}

async function addUser(user: User): Promise<User> {
  users!.push(user);
  return user;
}

export default { getUsers, removeUsers, addUser };
