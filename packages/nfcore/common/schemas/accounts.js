NFCore.Schemas.Accounts = new SimpleSchema({
  name: {
    type: String
  },
  role: {
    type: String,
    allowedValues: ['Add', 'Sub', 'Multi']
  }
});
