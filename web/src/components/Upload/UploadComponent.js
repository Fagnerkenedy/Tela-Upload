import React from "react";
import { toast } from 'react-toastify';
import { Row, Col, Space, message } from "antd";

import { Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { MainContext } from "../../providers/MainContext";
import { useNavigate } from "react-router-dom";
import "./styles.css"

const UploadComponent = () => {
  let navigate = useNavigate();
  const { setTreadStage, setMappedFields, setFilename } = React.useContext(MainContext);

  async function customRequest(param) {

    let response;
    let json;

    const fd = new FormData();
    fd.append("file", param.file);

    try {
      response = await fetch(process.env.REACT_APP_LINK_API + "/upload", {
        method: "POST",
        body: fd,
      });

      json = await response.json();

      if (!response.ok) {
        throw new Error(json.message);
      }

      param.onSuccess();
      message.success("Arquivo adicionado com sucesso");
      setMappedFields([...json.matchedColumns]);
      setFilename(json.filename)
      setTreadStage(1);
      return navigate("/mapping");

    } catch (error) {
      toast.error(error.message, {

        position: "bottom-right",
        icon: '👎',
        style: { top: "-20px", backgroundColor: "#ffc72c", color: "#FFF" },
        progressStyle: {
          backgroundColor: "#ea7e02"
        }
      });
      setMappedFields([]);
      param.onError();
    }

  }

  return (
    <Row>
      <Col span={18} offset={3}>
        <Space direction="vertical" style={{ width: "100%" }} size="large">
          <Upload
            name="file"
            customRequest={customRequest}
            listType="text"
            maxCount={1}
            style={{ margin: "none" }}
          >
            <Button icon={<UploadOutlined style={{ top: "-13px ", position: "relative" }} />} style={{ top: "26px" }} className="buttonUpload">Carregar Arquivo</Button>
          </Upload>
        </Space>
      </Col>
    </Row>
  );
};

export default UploadComponent;
