import { TestHelper } from '../../utils/test-case';


const <%= camelize(name) %> = () => {
};


//////////////// Tests //////////////////////

describe('<%= camelize(name) %>', () => {
  const test = new TestHelper();

  test.expect(true).toEqual(true);

  test.execute(<%= camelize(name) %>);
});
