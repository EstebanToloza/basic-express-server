const users = [];
let counter = 1;

const getUsers = (req, res) => {
    return res.json(users)
}

const getUserById = (req, res) => {
    const { params } = req;

    const user = users.find((user) => {
        return user.id == params.id
    })

    if ( user ) {
        return res.json(user)
    } else {
        return res.sendStatus(404)
    };

}

const addUser = (req, res) => {
    const {body} = req;
    const {name} = body;
  
    if (body && name) {
      const data = {
        id: counter,
        name: name,
      };
      counter = counter + 1;
      users.push(data);
  
      return res.sendStatus(200);
      
    } else {
      return res.sendStatus(400);
    }
}

module.exports= {
    getUsers,
    getUserById,
    addUser
}