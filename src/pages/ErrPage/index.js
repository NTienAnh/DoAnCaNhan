import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';
import Header from '../../common/Header'
export default () => (
    <>
        <Header />
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button
                type="primary"
            ><Link to='/'>Back to home</Link>
            </Button>}
        />
    </>

);