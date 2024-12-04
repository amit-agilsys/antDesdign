import { LinkOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import {
  Button,
  ColorPicker,
  Divider,
  Form,
  Input,
  InputNumber,
  Select,
  TimePicker,
} from "antd";
import MultiSelect from "./MultiSelect";
import OpenDrawerButton from "./OpenDrawerButton";
const format = "HH:mm";

function MainContainer() {
  return (
    <main className="mt-3 ms-4">
      <div className="shadow card">
        <div className="row p-3">
          <p className="fs-5">
            <LinkOutlined /> Personal info
          </p>
          <div className="col-6 my-2">
            <Form.Item
              className="m-0 text-uppercase"
              label="First Name"
              rules={[
                {
                  required: false,
                },
              ]}
            ></Form.Item>
            <Input />
          </div>
          <div className="col-6 my-2">
            <Form.Item
              className="m-0 text-uppercase"
              label="Last Name"
              rules={[
                {
                  required: false,
                },
              ]}
            ></Form.Item>
            <Input />
          </div>
          <div className="col-6 my-2">
            <Form.Item
              className="m-0 text-uppercase"
              label="Email"
              rules={[
                {
                  type: "email",
                },
              ]}
            ></Form.Item>
            <Input />
          </div>
          <div className="col-6 my-2">
            <label htmlFor="" className="mb-2 text-uppercase">
              Role
            </label>
            <MultiSelect />
          </div>
          <div className="col-6 my-2">
            <Form.Item
              className="m-0 text-uppercase"
              label="Address"
              rules={[
                {
                  type: "text",
                },
              ]}
            ></Form.Item>
            <Input />
          </div>
          <div className="col-6 my-2">
            <Form.Item
              className="m-0 text-uppercase"
              label="City"
              rules={[
                {
                  type: "text",
                },
              ]}
            ></Form.Item>
            <Input />
          </div>
          <div className="col-6 my-2">
            <Form.Item
              className="m-0 text-uppercase"
              label="State"
              rules={[
                {
                  type: "text",
                },
              ]}
            ></Form.Item>
            <Input />
          </div>
          <div className="col-6 my-2">
            <Form.Item
              className="m-0 text-uppercase"
              label="Zip Code"
              rules={[
                {
                  type: "number",
                },
              ]}
            ></Form.Item>
            <InputNumber className="w-50" />
          </div>
          <div className="col-6 my-2">
            <Form.Item
              label="Job Profile"
              className="m-0 text-uppercase"
            ></Form.Item>
            <Select className="w-100">
              <Select.Option key="fabricator" value="fabricator">
                Fabricator
              </Select.Option>
              <Select.Option key="installer" value="installer">
                Installer
              </Select.Option>
              <Select.Option key="qualityChecker" value="qualityChecker">
                Quality Checker
              </Select.Option>
            </Select>
          </div>
          <div className="col-6 my-2">
            <div className="col-12">
              <label htmlFor="" className="mb-2 text-uppercase">
                Select Color
              </label>
              <div className="col-12">
                <ColorPicker defaultValue="#1677ff" showText />
              </div>
            </div>
          </div>
          <Divider className="my-3" />

          <div className="col-3 my-2">
            <div className="col-12">
              <label htmlFor="" className="mb-2 text-uppercase">
                Working Start Time
              </label>
              <div className="col-12">
                <TimePicker
                  className="w-100"
                  placeholder="Working start time"
                  defaultValue={dayjs("12:08", format)}
                  format={format}
                />
              </div>
            </div>
          </div>
          <div className="col-3 my-2">
            <div className="col-12">
              <label htmlFor="" className="mb-2 text-uppercase">
                Working Start Time
              </label>
              <div className="col-12">
                <TimePicker
                  className="w-100"
                  placeholder="Working start time"
                  defaultValue={dayjs("12:08", format)}
                  format={format}
                />
              </div>
            </div>
          </div>
          <div className="col-3 my-2">
            <div className="col-12">
              <label htmlFor="" className="mb-2 text-uppercase">
                Lunch Start Time
              </label>
              <div className="col-12">
                <TimePicker
                  className="w-100"
                  placeholder="Lunch End Time"
                  defaultValue={dayjs("12:08", format)}
                  format={format}
                />
              </div>
            </div>
          </div>
          <div className="col-3 my-2">
            <div className="col-12">
              <label htmlFor="" className="mb-2 text-uppercase">
                Lunch End Time
              </label>
              <div className="col-12">
                <TimePicker
                  className="w-100"
                  placeholder="Lunch end time"
                  defaultValue={dayjs("12:08", format)}
                  format={format}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end p-3">
          <Button type="primary">Submit</Button>
          <OpenDrawerButton>Open Sidebar</OpenDrawerButton>
        </div>
      </div>
    </main>
  );
}
export default MainContainer;
