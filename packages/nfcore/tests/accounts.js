Factory.define("accounts", Accounts, {
  name: function() {
    var fakename = Fake.user({fields: ['name']}).name;
    return fakename;
  }
});

describe("Create account", function() {
  beforeEach(function() {
    return Accounts.remove({});
  });
  it('should only has 1 account', function(done) {
    Factory.create('accounts');
    expect(Accounts.find().count()).toEqual(1);
    return done();
  });
});

