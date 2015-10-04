Factory.define("questions", Questions, {
  owner: Factory.get('accounts'),
  content: function() {
    return Fake.sentence(4);
  }
});

describe("Create question", function() {
  beforeEach(function() {
    return Questions.remove({});
  });
  it('should only has 1 question', function(done) {
    Factory.create('questions');
    expect(Questions.find().count()).toEqual(1);
    return done();
  });
});
