import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, List, Row, Typography } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import Tread from "../../components/Tread";

import { MainContext } from "../../providers/MainContext";
import "./styles.css"
import { toast } from 'react-toastify';


function Mapping() {
  const { Title } = Typography;
  const navigate = useNavigate();
  const { mappedFields, setMappedFields, setTreadStage, filename } = React.useContext(MainContext);

  async function request() {
    navigate(`/processing/${filename}`)
  }

  React.useEffect(() => {
    if (mappedFields.length) {
      toast.success("O Upload da planilha foi um sucesso!", {

        position: "bottom-right",
        icon: '👍',
        style: { top: "-20px", backgroundColor: "#58dd6e", color: "#FFF" },
        progressStyle: {
          backgroundColor: "#3e9b4d"
        }
      });
      setTreadStage(1);
    } else {
      setTreadStage(0);
      navigate('/')
    }

  }, [setTreadStage, mappedFields, navigate]);

  return (<>
    <Tread></Tread>
    <Col span={16} offset={4}>
      <Row>
        <Col span={1}>
          <Button
            className="buttonReturn"
            shape="circle"
            icon={<LeftOutlined />}
            onClick={() => {
              setMappedFields([])
              return navigate("/");
            }}
          />
        </Col>
        <Col span={6} offset={8}>
          <Title level={3} style={{ fontFamily: "'Montserrat', sans- serif" }}>Colunas Mapeadas</Title>
        </Col>
        <Col span={1} offset={6}>
          <Button className="buttonConfirm" onClick={request}>Confirmar</Button>
        </Col>
      </Row>

      <List
        size="small"
        bordered
        dataSource={mappedFields}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </Col>
  </>
  );
}

export default Mapping;
