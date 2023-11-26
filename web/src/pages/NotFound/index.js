import { Result, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

function NotFound() {
    const navigate = useNavigate();
    return <Result
        status="404"
        title="Ops!"
        subTitle="Desculpe, mas houve um erro ou a Página que você está procurando não existe."
        extra={<Button type="primary" onClick={() => navigate("/")}>Voltar à Página inicial.</Button>}
    />


}

export default NotFound;