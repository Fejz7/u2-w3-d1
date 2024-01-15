class User {
    
    constructor(_firstName, _lastName, _age, _location) {
      this.firstName = _firstName
      this.lastName = _lastName
      this.age = _age
      this.location = _location
    }
    isSameAge(otherUser) {
        if (this.age > otherUser.age) {
          return true;
        } else {
          return false;
        }
      }
}

const marioBros = new User ('mario', 'bros', 30, 'regno dei funghi')








const luigiBros = new User ('luigi', 'bros', 20, 'regno dei funghi')






if (marioBros.isSameAge(luigiBros)) {
    console.log(`${marioBros.firstName} is older than ${luigiBros.firstName}`);
  } else {
    console.log(`${marioBros.firstName} is younger than ${luigiBros.firstName}`);
  }