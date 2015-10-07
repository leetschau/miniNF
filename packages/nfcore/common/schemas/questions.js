NFCore.Schemas.Questions = new SimpleSchema({
  owner: {
    type: String
  },
  content: {
    type: String
  },
  type: {
    type: String,
    allowedValues: ['Add', 'Sub', 'Multi']
  }
});
