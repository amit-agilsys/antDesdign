import "./userData.css";
import { Table, Space, Select, Input, Button, Tag, Row, Col, Form } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
} from "@ant-design/icons";
const { Search } = Input;

const columns = [
  {
    title: "NAME",
    dataIndex: "name",
    sorter: true,
  },
  {
    title: "EMAIL",
    dataIndex: "email",
    sorter: true,
  },
  {
    title: "ROLE",
    dataIndex: "role",
    sorter: true,
  },
  {
    title: "CREATED ON",
    dataIndex: "createdOn",
    sorter: true,
  },
  {
    title: "STATUS",
    dataIndex: "status",
    sorter: true,

    render: (_, { status }) => (
      <>
        {status === "Active" ? (
          <Tag color="green" key={status}>
            {status.toUpperCase()}
          </Tag>
        ) : (
          <Tag color="volcano" key={status}>
            {status.toUpperCase()}
          </Tag>
        )}
      </>
    ),
  },
  {
    title: "OPTION",
    key: "option",
    render: (_, record) => (
      <Space size="middle">
        <EditOutlined />
        <DeleteOutlined />
      </Space>
    ),
  },
];
const data = [
  {
    key: "2",
    name: "Alice Smith",
    email: "alice.smith@example.com",
    role: "Fabricator",
    createdOn: "15/03/2023",
    status: "Inactive",
  },
  {
    key: "3",
    name: "John Doe",
    email: "johndoe456@gmail.com",
    role: "Admin",
    createdOn: "25/12/2021",
    status: "Active",
  },
  {
    key: "4",
    name: "Emily Johnson",
    email: "em.johnson@example.com",
    role: "CSR",
    createdOn: "20/07/2022",
    status: "Active",
  },
  {
    key: "5",
    name: "Michael Brown",
    email: "michael.b@example.com",
    role: "Fabricator",
    createdOn: "05/10/2023",
    status: "Inactive",
  },
  {
    key: "6",
    name: "John Smith",
    email: "jsmith123@example.com",
    role: "Admin",
    createdOn: "11/09/2022",
    status: "Active",
  },
  {
    key: "7",
    name: "Sophia Lee",
    email: "sophia.lee@example.com",
    role: "CSR",
    createdOn: "20/07/2022",
    status: "Inactive",
  },
  {
    key: "8",
    name: "David Taylor",
    email: "davidtaylor789@example.com",
    role: "Fabricator",
    createdOn: "15/03/2023",
    status: "Active",
  },
  {
    key: "9",
    name: "Emma Garcia",
    email: "emma.garcia@example.com",
    role: "Admin",
    createdOn: "10/11/2022",
    status: "Active",
  },
  {
    key: "10",
    name: "John Doe",
    email: "johndoe789@gmail.com",
    role: "CSR",
    createdOn: "25/12/2021",
    status: "Inactive",
  },
  {
    key: "11",
    name: "Olivia Martinez",
    email: "olivia.martinez@example.com",
    role: "Admin",
    createdOn: "08/06/2023",
    status: "Active",
  },
  {
    key: "12",
    name: "Liam Wilson",
    email: "liam.w@example.com",
    role: "Fabricator",
    createdOn: "15/03/2023",
    status: "Inactive",
  },
  {
    key: "13",
    name: "Sophia Brown",
    email: "sophia.b@example.com",
    role: "CSR",
    createdOn: "20/07/2022",
    status: "Active",
  },
  {
    key: "14",
    name: "Noah Johnson",
    email: "noah.johnson@example.com",
    role: "Admin",
    createdOn: "25/12/2021",
    status: "Active",
  },
  {
    key: "15",
    name: "Ava Martinez",
    email: "ava.martinez@example.com",
    role: "Fabricator",
    createdOn: "05/10/2023",
    status: "Inactive",
  },
  {
    key: "16",
    name: "Ethan Smith",
    email: "ethan.smith@example.com",
    role: "Admin",
    createdOn: "11/09/2022",
    status: "Active",
  },
  {
    key: "17",
    name: "Isabella Lee",
    email: "isabella.lee@example.com",
    role: "CSR",
    createdOn: "20/07/2022",
    status: "Inactive",
  },
  {
    key: "18",
    name: "Mason Taylor",
    email: "mason.taylor@example.com",
    role: "Fabricator",
    createdOn: "15/03/2023",
    status: "Active",
  },
  {
    key: "19",
    name: "Mia Garcia",
    email: "mia.garcia@example.com",
    role: "Admin",
    createdOn: "10/11/2022",
    status: "Active",
  },
  {
    key: "20",
    name: "James Wilson",
    email: "james.w@example.com",
    role: "CSR",
    createdOn: "25/12/2021",
    status: "Inactive",
  },
  {
    key: "21",
    name: "Charlotte Johnson",
    email: "charlotte.j@example.com",
    role: "Admin",
    createdOn: "08/06/2023",
    status: "Active",
  },
  {
    key: "22",
    name: "William Brown",
    email: "william.b@example.com",
    role: "Fabricator",
    createdOn: "15/03/2023",
    status: "Inactive",
  },
  {
    key: "23",
    name: "Amelia Smith",
    email: "amelia.smith@example.com",
    role: "CSR",
    createdOn: "20/07/2022",
    status: "Active",
  },
  {
    key: "24",
    name: "Benjamin Lee",
    email: "benjamin.lee@example.com",
    role: "Admin",
    createdOn: "25/12/2021",
    status: "Active",
  },
  {
    key: "25",
    name: "Evelyn Taylor",
    email: "evelyn.taylor@example.com",
    role: "Fabricator",
    createdOn: "05/10/2023",
    status: "Inactive",
  },
  {
    key: "26",
    name: "Alexander Garcia",
    email: "alexander.garcia@example.com",
    role: "Admin",
    createdOn: "11/09/2022",
    status: "Active",
  },
  {
    key: "27",
    name: "Samantha Wilson",
    email: "samantha.w@example.com",
    role: "CSR",
    createdOn: "20/07/2022",
    status: "Inactive",
  },
  {
    key: "28",
    name: "Daniel Brown",
    email: "daniel.b@example.com",
    role: "Fabricator",
    createdOn: "15/03/2023",
    status: "Active",
  },
  {
    key: "29",
    name: "Avery Martinez",
    email: "avery.martinez@example.com",
    role: "Admin",
    createdOn: "10/11/2022",
    status: "Active",
  },
  {
    key: "30",
    name: "Lily Wilson",
    email: "lily.w@example.com",
    role: "CSR",
    createdOn: "25/12/2021",
    status: "Inactive",
  },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
};
const UserList = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="cm-grid-bg p-3 ms-5">
      <div className="border p-3 mt-3">
        <Form layout="vertical">
          <Row className="align-items-center" gutter={16}>
            <Col className="gutter-row" span={4}>
              <div>
                <Form.Item label="FIRST NAME">
                  <Input placeholder="FIRST NAME" />
                </Form.Item>
              </div>
            </Col>
            <Col className="gutter-row" span={4}>
              <div>
                <Form.Item label="LAST NAME">
                  <Input placeholder="LAST NAME" />
                </Form.Item>
              </div>
            </Col>
            <Col className="gutter-row" span={4}>
              <div>
                <Form.Item label="EMAIL ADDRESS">
                  <Input placeholder="EMAIL ADDRESS" />
                </Form.Item>
              </div>
            </Col>
            <Col className="gutter-row" span={4}>
              <div>
                <Form.Item label="STATUS">
                  <Select
                    defaultValue="All"
                    style={{
                      width: "100%",
                    }}
                    onChange={handleChange}
                    options={[
                      {
                        value: "aLL",
                        label: "All",
                      },
                      {
                        value: "jack",
                        label: "Jack",
                      },
                      {
                        value: "lucy",
                        label: "Lucy",
                      },
                      {
                        value: "Yiminghe",
                        label: "yiminghe",
                      },
                    ]}
                  />
                </Form.Item>
              </div>
            </Col>

            <Col className="gutter-row" span={4}>
              <div className="">
                <Space>
                  <Button
                    className="cm-btn-color"
                    type="primary"
                    icon={<SearchOutlined />}
                  >
                    Search
                  </Button>
                  <Button
                    className="cm-btn-color-2"
                    type="primary"
                    icon={<DeleteOutlined />}
                  >
                    Clear
                  </Button>
                </Space>
              </div>
            </Col>
          </Row>
        </Form>
      </div>

      <Table
        rowSelection={{
          type: "checkbox",
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};
export default UserList;
