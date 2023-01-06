import { Injectable } from '@nestjs/common';
import axios from 'axios';

type RandomUser = {
  image: string;
  name: string;
  email: string;
  username: string;
  age: number;
};
type RandomUserResponse = {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: number;
    coordinates: {
      latitude: string;
      longitude: string;
    };
    timezone: {
      offset: string;
      description: string;
    };
  };
  email: string;
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  dob: {
    date: string;
    age: number;
  };
  registered: {
    date: string;
    age: number;
  };
  phone: string;
  cell: string;
  id: {
    name: string;
    value: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
};
type Result = {
  results: RandomUserResponse[];
};

@Injectable()
export class RandomUserService {
  randomUsers: RandomUser[] = [];
  async getRandomUser() {
    const { data } = await axios.get<Result>(
      'https://randomuser.me/api/?results=10&nat=br&inc=name,email,login,dob,picture',
    );
    const randomUser = data.results.map((user) => {
      return {
        image: user.picture.large,
        name: `${user.name.first} ${user.name.last}`,
        email: user.email,
        username: user.login.username,
        age: user.dob.age,
      };
    });
    this.randomUsers = randomUser;
  }

  listUsers(start: number, limit: number) {
    return this.randomUsers.slice(start - 1, start * limit);
  }

  searchUser(searchTerm: string) {
    return this.randomUsers.filter((user) => {
      return (
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.username.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  }
}
