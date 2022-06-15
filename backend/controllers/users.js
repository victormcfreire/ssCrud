
let users = [];
export const getUsers = (req, res) => {

    res.send(users);
}

export const createUser = (req, res) => {
    const user = req.body;

    users.push({ ...user});
};

export const getUser = (req, res) => {
    res.send(req.params.id)
};

export const deleteUser = (req, res) => {

    users = users.filter((user) => user.id !== req.params.id);
};

export const updateUser = (req, res) => {
    const user = users.find((user) => user.id === req.params.id);

    user.username = req.body.username;
    user.name = req.body.name;
    user.password = req.body.password;

};