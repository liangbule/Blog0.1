import { Col, Row } from "antd";
export default function index() {
  return (
    <>
      <Row
        style={{
          height: 56,
        }}
        justify="space-between"
        align="middle"
      >
        <Col span={2}>
          <span>凉不乐</span>
        </Col>
        <Col
          span={10}
          style={{
            display: "flex",
            height: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            textAlign: "center",
          }}
        >
            <a style={{
                minWidth:80,
                height:'100%',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'aqua'
            }}><span>首页</span></a>
            <a style={{
                minWidth:80,
                height:'100%',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'aqua'
            }}><span>留言</span></a>
            <a style={{
                minWidth:80,
                height:'100%',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'aqua'
            }}><span>友邻</span></a>
            <a style={{
                minWidth:80,
                height:'100%',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'aqua'
            }}><span>圈子</span></a>
            <a style={{
                minWidth:80,
                height:'100%',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'aqua'
            }}><span>归档</span></a>
        </Col>
        <Col span={4}>col-3</Col>
      </Row>
    </>
  );
}
