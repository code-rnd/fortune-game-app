export const addUsersUtil = (users, user) => {

    if (!users || !user) {
        return [];
    }

    const idGen = [...users][users.length - 1].id + 1;
    const newUser = {id: idGen, ...user};
    const newUsers = [...users, newUser];

    return newUsers;
}

export const updateUsersUtil = (users, user) => {
    if (!users || !user) {
        return [];
    }

    const idUser = user.id;
    let indexUser = null;

    [...users].map((item, index) => {
        if (item.id === idUser) {
            indexUser = index
        }
    })

    const newUser = {...users[indexUser], ...user};
    users[indexUser] = newUser;

    return users;
}

export const getNewRecordTimeUtil = (user, newUser) => {
    if (!user || !newUser) {
        return {};
    }

    if (user.recordTime === undefined) {
        return {...user, ...newUser};
    }

    if (user.recordTime <= newUser.recordTime) {
        return user;
    }

    if (user.recordTime > newUser.recordTime) {
        return {...user, ...newUser};
    }
}

// сортирую в порядке возрастания
// массив объектов, по заданному ключу
export const getSortedUsersUtil = (users, key = 'recordTime') => {
    if(!users) {
        return []
    };

    return users.sort(function (a,b) {
        return a[key] - b[key]
    });
}