Factory.define("accounts", Accounts, {
  name: function() {
    var fakename = Fake.user().name;
    return fakename;
  },
  role: function() {
    return Fake.fromArray(['Add', 'Sub', 'Multi']);
  }
});

Factory.define("questions", Questions, {
  owner: Factory.get('accounts'),
  content: function() {
    return Fake.sentence(4);
  },
  type: function() {
    return Fake.fromArray(['Add', 'Sub', 'Multi']);
  }
});

describe("Ask Questions", function() {
  beforeEach(function() {
    Questions.remove({});
    return Accounts.remove({});
  });
  it('should only has 1 account', function(done) {
    Meteor.call('addUser', {name: 'McNulty', role: 'Add'});
    expect(Accounts.find().count()).toEqual(1);
    expect(Accounts.findOne().name).toEqual('McNulty');
    return done();
  });
  //it('should only has 1 question', function(done) {
    //Factory.create('questions');
    //expect(Questions.find().count()).toEqual(1);
    //return done();
  //});
  it('should be the same: role and type', function(done) {
    Meteor.call("addUser", {name: 'McNulty', role: 'Add'});
    var userId = Accounts.findOne()._id;
    var question = {
      owner: userId,
      content: "3 + 5",
      type: "Add"
    };
    Meteor.call("askQuestion", userId, question);
    var qNo = Questions.find().count();
    expect(qNo).toEqual(1);
    return done();
  });
  it('should get an error when role and type dismatch', function(done) {
    Meteor.call("addUser", {name: 'Burrel', role: 'Add'});
    var userId = Accounts.findOne()._id;
    var question = {
      owner: userId,
      content: "3 - 5",
      type: "Sub"
    };
    expect(function() {
      return Meteor.call("askQuestion", userId, question);
    }).toThrow();
    return done();
  });
});
