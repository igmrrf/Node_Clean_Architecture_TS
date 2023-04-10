const MockDataGenerator = (name: string) => `import SPEC_MOCK_DATA from "spec/MOCK_DATA";

const MOCK_DATA = {
  userPayload: SPEC_MOCK_DATA.userPayload,
  ${name.toLowerCase()}Payload: {
    _id: "1234",
    key: "Value",
    anotherKey: "Another Value",
  },
};

export default MOCK_DATA;`;

export default MockDataGenerator;
