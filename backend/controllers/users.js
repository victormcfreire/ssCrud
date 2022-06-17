let users = [];

export const getUsers = (req, res) => {
    res.send(users);
}

export const createUser = (req, res) => {
    const user = req.body;

    users.push({ ...user });
};

export const getUser = (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id == id);
    
    res.send(foundUser);
};

export const deleteUser = (req, res) => {
    const { id } = req.params

    users = users.filter((user) => user.id != req.params.id);
};

export const updateUser = (req, res) => {
    const { id } = req.params;
    
    const user = users.find((user) => user.id == req.params.id);
    res.send(user);

    const { name, username, password } = req.body;
    
    if(name) user.name = name;
    if(username) user.username = username;
    if(password) user.password = password;
};