
import Enzyme from 'enzyme';
import Adapter  from 'enzyme-adapter-react-16';
// import register from 'ignore-styles';
// register(['.css', '.sass', '.scss']);
Enzyme.configure({ adapter: new Adapter () });