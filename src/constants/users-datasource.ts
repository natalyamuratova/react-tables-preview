import {User} from "../models/user";

export const user: User ={
        id: 1,
        fio: 'Иванов Иван Иванович',
        position: 'Менеджер',
        company: 'МедХимСбыт',
        phone: '+7 980 645 87 54',
        email: 'ivanov@gmail.com',
    };

export const getUsers = () => {
    const usersList = [];
    for (let i = 0; i < 300; i++) {
        usersList.push({
            ...user,
            id: i + 1,
            fio: `${i} ${user.fio}`,
        })
    }
    return usersList;
};
